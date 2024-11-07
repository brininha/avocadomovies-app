import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_URL } from '../../../config.js';
import * as Font from 'expo-font';
import Splash from '../Splash';

const fetchFonts = () => {
    return Font.loadAsync({
        'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    });
};

export default function Login() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFonts()
            .then(() => {
                setFontsLoaded(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            })
            .catch((err) => console.error("Erro ao carregar fontes", err));
    }, []);

    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [cor, setCor] = useState('rgba(0,0,0,0)');
    const [mensagemErro, setMensagemErro] = useState('');

    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const customStyle = [userFocus ? styles.focusedInput : styles.input, passFocus ? styles.focusedInput : styles.input];

    async function logar() {
        if (!user || !pass) {
            setMensagemErro("Preencha todos os campos!");
            setCor('red');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: user, password: pass }),
            });

            const data = await response.json();

            if (response.ok) {
                setCor('white');
                setMensagemErro('');
                navigation.navigate('Home');
            } else {
                setMensagemErro("Usuário e/ou senha incorreto(s)");
                setCor('red');
            }
        } catch (error) {
            setMensagemErro("Erro ao tentar acessar o servidor");
            setCor('red');
        }
    };

    if (isLoading || !fontsLoaded) {
        return <Splash />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerlogin}>
                <Text style={styles.title}>Já é de casa?</Text>
                <Text style={styles.text}>Faça o login para continuar</Text>
                <TextInput 
                    placeholder="Nome de usuário" 
                    style={customStyle[0]} 
                    value={user} 
                    onChangeText={setUser} 
                    onFocus={() => setUserFocus(true)} 
                    onBlur={() => setUserFocus(false)} 
                />
                <TextInput 
                    placeholder="Senha" 
                    secureTextEntry={true} 
                    style={customStyle[1]} 
                    value={pass} 
                    onChangeText={setPass} 
                    onFocus={() => setPassFocus(true)} 
                    onBlur={() => setPassFocus(false)} 
                />
                <Text style={{ color: cor, paddingBottom: 15 }}>{mensagemErro}</Text>
                <Pressable style={styles.button} onPress={logar}>
                    <Text style={styles.btnText}>Entrar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.link}>Ainda não tenho uma conta</Text>
                </Pressable>
            </View>
        </View>
    );
}