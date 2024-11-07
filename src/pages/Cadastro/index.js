import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_URL } from '../../../config.js';
import * as Font from 'expo-font';
import Splash from '../Splash';
import { TextInputMask } from 'react-native-masked-text';


const fetchFonts = () => {
    return Font.loadAsync({
        'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    });
};

export default function Cadastro() {  
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    useEffect(() => {
        fetchFonts().then(() => setFontsLoaded(true));
    }, []);

    const navigation = useNavigation();

    const [cor, setCor] = useState('rgba(0,0,0,0)');
    const [mensagemErro, setMensagemErro] = useState('');

    const [nomeFocus, setNomeFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [foneFocus, setFoneFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [cpfFocus, setCpfFocus] = useState(false);
    const [dataNascFocus, setDataNascFocus] = useState(false);

    const customStyle = [
        nomeFocus ? styles.focusedInput : styles.input,
        emailFocus ? styles.focusedInput : styles.input,
        foneFocus ? styles.focusedInput : styles.input,
        cpfFocus ? styles.focusedInput : styles.input,
        dataNascFocus ? styles.focusedInput : styles.input,
        passFocus ? styles.focusedInput : styles.input
    ];

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');

    const inserir = () => {
        if (!nome || !email || !telefone || !senha || !cpf || !dataNasc) {
            setMensagemErro("Preencha todos os campos!");
            setCor('red');
        } else {
            setMensagemErro('');
            setCor('rgba(0,0,0,0)');

            fetch(`${API_URL}/registro/cliente`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telefoneCliente: telefone,
                    senhaCliente: senha,
                    cpfCliente: cpf,
                    dataNascCliente: dataNasc,
                    nomeUsuario: nome,
                    emailUsuario: email,
                    senhaUsuario: senha,
                    senhaUsuario_confirmation: senha
                })
            }).then(response => response.json())
            .then(data => {
                if (data.message) {
                    navigation.navigate('Home');
                } else if (data.error) {
                    setMensagemErro(data.error);
                    setCor('red');
                }
            }).catch(error => {
                setMensagemErro("Erro na conexão com o servidor.");
                setCor('red');
            });
        }
    };

    if (!fontsLoaded) {
        return <Splash />;
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={styles.scrollView}>
                <View style={styles.containerlogin}>
                    <Text style={styles.title}>É novo por aqui?</Text>
                    <Text style={styles.text}>Faça o cadastro para iniciar</Text>
                    <TextInput 
                        placeholder="Nome de usuário" 
                        style={customStyle[0]} 
                        value={nome} 
                        onChangeText={setNome} 
                        onFocus={() => setNomeFocus(true)} 
                        onBlur={() => setNomeFocus(false)} 
                    />
                    <TextInput 
                        placeholder="E-mail"
                        style={customStyle[1]} 
                        value={email} 
                        onChangeText={setEmail} 
                        onFocus={() => setEmailFocus(true)} 
                        onBlur={() => setEmailFocus(false)} 
                    />
                    <TextInputMask
                        placeholder="CPF"
                        type={'cpf'}
                        value={cpf}
                        onChangeText={setCpf}
                        style={customStyle[3]}
                        onFocus={() => setCpfFocus(true)} 
                        onBlur={() => setCpfFocus(false)} 
                    />
                    <TextInputMask
                        placeholder="Telefone"
                        type={'custom'}
                        options={{
                            mask: '(99) 99999-9999'
                        }}
                        value={telefone}
                        onChangeText={setTelefone}
                        style={customStyle[2]}
                        onFocus={() => setFoneFocus(true)} 
                        onBlur={() => setFoneFocus(false)} 
                    />
                    <TextInput 
                        placeholder="Data de Nascimento" 
                        style={customStyle[4]} 
                        value={dataNasc} 
                        onChangeText={setDataNasc} 
                        onFocus={() => setDataNascFocus(true)} 
                        onBlur={() => setDataNascFocus(false)}
                        keyboardType="numeric" 
                    />
                    <TextInput 
                        placeholder="Senha" 
                        secureTextEntry={true} 
                        style={customStyle[5]} 
                        value={senha} 
                        onChangeText={setSenha} 
                        onFocus={() => setPassFocus(true)} 
                        onBlur={() => setPassFocus(false)}
                    />
                    <Text style={{ color: cor, paddingBottom: 15 }}>{mensagemErro}</Text>
                    <Pressable style={styles.button} onPress={inserir}>
                        <Text style={styles.btnText}>Cadastrar</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Já tenho uma conta</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}
