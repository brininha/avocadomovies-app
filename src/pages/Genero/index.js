import { View, Text, TextInput, Pressable, Modal, FlatList, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import styles from "./style.js";
import { API_URL } from '../../../config';

export default function Genero() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Tentando conexão com o banco de dados
    const getGenero = async () => {
        try {
            const response = await fetch(`${API_URL}/genero`);
            const json = await response.json();
            setData(json)
        } catch (error) {
            console.error(error);
        } finally {
          setLoading(false);
        }
    }

    useEffect(() => {
        getGenero();
    }, []);

    const renderGenero = ({item}) => {
        return (
            <View style={styles.list}>
                <Text>{item.nomeGenero}</Text>
            </View>
        );
    }

    const [nome, setNome] = useState('');
    const [visible, setVisible] = useState(false);
    const [generoVisible, setGeneroVisible] = useState(false);

    const inserir = () => {
        fetch(`${API_URL}/api/postGenero`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeGenero: nome,
            })
        })
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, "2000");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar novo gênero</Text>
            <TextInput placeholder="Nome" style={styles.input} onChangeText={text => setNome(text)}/>
            <Pressable style={styles.button} onPress={() => inserir()}><Text style={styles.buttontext}>Enviar</Text></Pressable>

            <Pressable onPress={() => setGeneroVisible(true)}>
                <Text style={styles.buttontextcontato}>Visualizar gêneros</Text>
            </Pressable>
            
            <Modal visible={visible} animationType="fade" transparent="true">
                <View style={styles.containermodal}>
                    <Text style={styles.message}>Dados inseridos com sucesso!</Text>
                </View>
            </Modal>

            <Modal visible={generoVisible} animationType="fade">
                <Pressable onPress={() => setGeneroVisible(false)}>
                    <Image source={require("../../../assets/images/seta.png")} style={{width: 30, height: 30, margin: 5}}/>
                </Pressable>
                <View style={styles.containermodal}>
                    <Text style={styles.messagegenero}>Lista de gêneros:</Text>
                    {isLoading? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor = {({idGenero}, index) => idGenero}
                        renderItem={renderGenero}
                    />
                    )}
                </View>
            </Modal>
        </View>
    );
};

