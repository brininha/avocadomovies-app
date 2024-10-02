import { Text, View, TouchableOpacity, TextInput, Image, Modal, Pressable } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_URL } from '../../../config.js';

export default function Login() {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (count === 0) {
            const navigateToSplash = () => {
                navigation.navigate('Splash');
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 2000);
            };
            navigateToSplash();
        }
        setCount(1);
    }, []);

    const userName = "Fulano";
    const userPass = "123";
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const [cor, setCor] = useState('rgba(0,0,0,0)');

    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const customStyle = [userFocus ? styles.focusedInput : styles.input, passFocus ? styles.focusedInput : styles.input]

    function logar() {
        if (userName == user && userPass == pass) {
            const navigateToHome = () => {
                navigation.navigate('Home');
            };
            navigateToHome();
        } else {
            setCor('red');
        }
    };

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const inserir = () => {
        fetch(`${API_URL}/api/postCliente`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeCliente: nome,
                emailCliente: email,
                telefoneCliente: telefone,
                senhaCliente: senha,
            })
        });
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, "2000");
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerA}>
                <View style={styles.containerhead}>
                    <Image source={require("../../../assets/images/login.png")} style={styles.img}/>
                </View>
            </View>
            <View style={styles.containerB}>
                <View style={styles.containerlogin}>
                    <TextInput placeholder="Nome de usuário" style={customStyle[0]} value={user} onChangeText={setUser} onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)}/>
                    <TextInput placeholder="Senha" secureTextEntry={true} style={customStyle[1]} value={pass} onChangeText={setPass} onFocus={() => setPassFocus(true)} onBlur={() => setPassFocus(false)}/>
                    <Text style={{color: cor}}>Usuário e/ou senha incorreto(s)</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={()=>{logar()}}>
                        <Text style={{color: 'white', fontSize: 16}}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{color: '#008ff5', padding: 10}}>Fazer cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={modalVisible}>
                <Pressable onPress={() => setModalVisible(false)}>
                    <Image source={require("../../../assets/images/seta.png")} style={{width: 30, height: 30, margin: 5}}/>
                </Pressable>
                <View style={styles.container}>
                    <Text style={styles.title}>Faça o seu cadastro</Text>
                    <TextInput placeholder="Nome" style={styles.input} onChangeText={text => setNome(text)}/>
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={text => setEmail(text)}/>
                    <TextInput placeholder="Telefone" style={styles.input} onChangeText={text => setTelefone(text)}/>
                    <TextInput placeholder="Senha" style={styles.input} onChangeText={text => setSenha(text)}/>
                    <Pressable style={{backgroundColor: '#252627', padding: 15, borderRadius: 30, textAlign: 'center', margin:15}} onPress={() => inserir()}><Text style={{color: 'white', fontSize: 16}}>Enviar</Text></Pressable>
                </View>
            </Modal>

            <Modal visible={visible} animationType="fade" transparent="true">
                <View style={styles.containermodal}>
                    <Text style={styles.message}>Dados inseridos com sucesso!</Text>
                </View>
            </Modal>
        </View>
    );
}