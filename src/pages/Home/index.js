import { Text, View, Image, Modal, FlatList, ScrollView, Pressable, ActivityIndicator } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function Home() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Tentando conexão com o banco de dados
    const getMovies = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/filme');
            const json = await response.json();
            setData(json)
        } catch (error) {
            console.error(error);
        } finally {
          setLoading(false);
        }
    }

    // Inicializa a busca por filmes após a renderização
    useEffect(() => {
        getMovies();
    }, []);

    // Constante de navegação entre telas
    const navigation = useNavigation();

    // Para a tela Splash aparecer
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count == 0) {
            const navigateToSplash = () => {
                navigation.navigate('Splash');
            }
            navigateToSplash();
            setTimeout(() => {navigation.navigate('Home')}, 2000);
            setCount(1);
        }
    })

    const [visible, setVisible] = useState(false);
    const [movie, setMovie] = useState(0);

    function loadMovie(id) {
        setMovie(data.find(item => item.idFilme === id));
        console.log(movie.nomeFilme);
        setVisible(true);
    }

    const renderComingMovies = ({item}) => {
        const url = `../../../assets/${item.capaFilme}`;
        if (item.statusFilme == 1 || item.statusFilme == 2) {
            return (
                <Pressable onPress={() => loadMovie(item.idFilme)}>
                    <Image source={{uri: url}} style={styles.imgMovie}/>
                </Pressable>
            )
        }
    }

    const renderMovies = ({item}) => {
        const url = `../../../assets/${item.capaFilme}`;
        if (item.statusFilme == 0) {
            return (
                <Pressable onPress={() => loadMovie(item.idFilme)}>
                    <Image source={{uri: url}} style={styles.imgMovie}/>
                </Pressable>
            )
        }
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: '100vw'}}><Text style={styles.label}>Em breve</Text></View>
                <View style={{width: '100vw'}}>
                    {isLoading? <ActivityIndicator/> : (
                    <FlatList
                        data = {data}
                        pagingEnabled
                        keyExtractor = {({idFilme}, index) => idFilme}
                        renderItem={renderComingMovies}
                        horizontal
                    />
                    )}
                </View>
                <View style={{width: '100vw'}}><Text style={styles.label}>Em cartaz</Text></View>
                <FlatList
                    data = {data}
                    keyExtractor = {({idFilme}, index) => idFilme}
                    renderItem = {renderMovies}
                    numColumns = {2}
                />

                <Modal visible={visible} animationType="fade">    
                    <ScrollView>
                        <Pressable onPress={() => setVisible(false)}>
                            <Image source={require("../../../assets/images/seta.png")} style={{width: 30, height: 30, margin: 5}}/>
                        </Pressable>

                        <View style={styles.containerModal}>
                            <Image source={{uri: `../../../assets/${movie.capaFilme}`}} style={styles.imgMovie}/>
                            <Text style={styles.movieName}>{movie.nomeFilme}</Text>
                            <Text style={styles.description}>{movie.descFilme}</Text>
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        </ScrollView>
    );
}