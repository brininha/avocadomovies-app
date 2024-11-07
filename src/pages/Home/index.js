import { Text, View, Image, Modal, FlatList, Pressable, ActivityIndicator, SafeAreaView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_URL } from '../../../config';
import { ScrollView } from "react-native";

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [movie, setMovie] = useState(null);
    const navigation = useNavigation();

    // Array de imagens com 30 filmes
    const images = {
        1: require('../../../assets/images/filme1.jpg'),
        2: require('../../../assets/images/filme2.jpg'),
        3: require('../../../assets/images/filme3.jpg'),
        4: require('../../../assets/images/filme4.png'),
        5: require('../../../assets/images/filme5.jpg'),
        6: require('../../../assets/images/filme6.jpg'),
        7: require('../../../assets/images/filme7.jpg'),
        8: require('../../../assets/images/filme8.jpg'),
        9: require('../../../assets/images/filme9.jpeg'),
        10: require('../../../assets/images/filme10.jpg'),
        11: require('../../../assets/images/filme11.jpg'),
        12: require('../../../assets/images/filme12.jpg'),
        13: require('../../../assets/images/filme13.jpg'),
        14: require('../../../assets/images/filme14.png'),
        15: require('../../../assets/images/filme15.jpg'),
        16: require('../../../assets/images/filme16.jpg'),
        17: require('../../../assets/images/filme17.jpg'),
        18: require('../../../assets/images/filme18.png'),
        19: require('../../../assets/images/filme19.png'),
        20: require('../../../assets/images/filme20.jpg'),
        21: require('../../../assets/images/filme21.jpg'),
        23: require('../../../assets/images/filme22.jpg'),
        24: require('../../../assets/images/filme23.jpg'),
        25: require('../../../assets/images/filme24.jpg'),
    };

    const getMovies = async () => {
        try {
            const response = await fetch(`${API_URL}/filme`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const loadMovie = (id) => {
        const selectedMovie = data.find(item => item.idFilme === id);
        setMovie(selectedMovie);
        setVisible(true);
    };

    const renderMovies = ({ item }) => {
        return (
            <Pressable onPress={() => loadMovie(item.idFilme)}>
                <Image source={images[item.idFilme]} style={styles.imgMovie} />
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.label}>Filmes em cartaz</Text>
                <FlatList
                    data={data.filter(item => item.excluido == 0)}
                    keyExtractor={({ idFilme }) => idFilme.toString()}
                    renderItem={renderMovies}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center', width: '100%' }}
                />
                <Modal visible={visible} animationType="fade">
                    <View style={styles.containerModal}>
                        <Pressable onPress={() => setVisible(false)}>
                            <Image source={require("../../../assets/images/seta.png")} style={{ width: 30, height: 30, margin: 5 }} />
                        </Pressable>
                        {movie && (
                            <>
                                <Image source={images[movie.idFilme]} style={styles.imgMovie}/>
                                <Text style={styles.movieName}>{movie.nomeFilme}</Text>
                                <Text style={styles.description}>{movie.descFilme}</Text>
                            </>
                        )}
                    </View>
                </Modal>
        </SafeAreaView>
    );
}
