import { View, Text, TextInput, Pressable, Modal, FlatList, Image, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import styles from "./style.js";
import { API_URL } from '../../../config';

export default function Contato() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Tentando conexão com o banco de dados
    const getContato = async () => {
        try {
            const response = await fetch(`${API_URL}/api/contato`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getContato();
    }, []);

    const renderContato = ({ item }) => {
        return (
            <View style={styles.list}>
                <Text>{item.nomeContato}</Text>
                <Text>{item.emailContato}</Text>
                <Text>{item.telefoneContato}</Text>
                <Text>{item.assuntoContato}</Text>
                <Text>{item.mensagemContato}</Text>
            </View>
        );
    }

    // Constantes para inserção no banco de dados
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [visible, setVisible] = useState(false);
    const [contatoVisible, setContatoVisible] = useState(false);

    // Operação de inserção
    const inserir = async () => {
        try {
            const response = await fetch(`${API_URL}/postContato`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nomeContato: nome,
                    emailContato: email,
                    telefoneContato: telefone,
                    assuntoContato: assunto,
                    mensagemContato: mensagem,
                })
            });
            if (response.ok) {
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                }, 2000);
            } else {
                console.error('Erro ao inserir contato');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entre em contato</Text>
            <TextInput placeholder="Nome" style={styles.input} onChangeText={text => setNome(text)} />
            <TextInput placeholder="E-mail" style={styles.input} onChangeText={text => setEmail(text)} />
            <TextInput placeholder="Telefone" style={styles.input} onChangeText={text => setTelefone(text)} />
            <TextInput placeholder="Assunto" style={styles.input} onChangeText={text => setAssunto(text)} />
            <TextInput placeholder="Mensagem" multiline={true} style={[styles.input, { height: 100 }]} onChangeText={text => setMensagem(text)} />
            <Pressable style={styles.button} onPress={() => inserir()}><Text style={styles.buttontext}>Enviar</Text></Pressable>

            <Pressable onPress={() => setContatoVisible(true)}>
                <Text style={styles.buttontextcontato}>Visualizar contatos</Text>
            </Pressable>

            <Modal visible={visible} animationType="fade" transparent={true}>
                <View style={styles.containermodal}>
                    <Text style={styles.message}>Dados inseridos com sucesso!</Text>
                </View>
            </Modal>

            <Modal visible={contatoVisible} animationType="fade">
                <Pressable onPress={() => setContatoVisible(false)}>
                    <Image source={require("../../../assets/images/seta.png")} style={{ width: 30, height: 30, margin: 5 }} />
                </Pressable>
                <View style={styles.containermodal}>
                    <Text style={styles.messagecontato}>Lista de contatos:</Text>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ idContato }) => idContato.toString()}
                            renderItem={renderContato}
                        />
                    )}
                </View>
            </Modal>
        </View>
    );
};
