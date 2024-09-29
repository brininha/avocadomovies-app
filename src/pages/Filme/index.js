import { View, Text, TextInput, Pressable, Modal, FlatList, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import styles from "./style.js";
import { API_URL } from '../../../config';

export default function Filme() {

    const [nome, setNome] = useState('');
    const [capa, setCapa] = useState('');
    const [desc, setDesc] = useState('');
    const [genero, setGenero] = useState('');
    const [visible, setVisible] = useState(false);

    const inserir = () => {
        fetch(`${API_URL}/api/postFilme`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeFilme: nome,
                capaFilme: capa,
                descFilme: desc,
                idGenero: genero,
                statusFilme: 0,
            })
        })
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, "2000");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar novo filme</Text>
            <TextInput placeholder="Nome" style={styles.input} onChangeText={text => setNome(text)}/>
            <TextInput placeholder="Rota da imagem de capa" style={styles.input} onChangeText={text => setCapa(text)}/>
            <TextInput placeholder="Descrição" style={styles.input} onChangeText={text => setDesc(text)}/>
            <TextInput placeholder="Código do gênero" style={styles.input} onChangeText={text => setGenero(text)}/>
            <Pressable style={styles.button} onPress={() => inserir()}><Text style={styles.buttontext}>Enviar</Text></Pressable>
            
            <Modal visible={visible} animationType="fade" transparent="true">
                <View style={styles.containermodal}>
                    <Text style={styles.message}>Dados inseridos com sucesso!</Text>
                </View>
            </Modal>
        </View>
    );
};

