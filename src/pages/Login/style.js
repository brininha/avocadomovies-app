import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
    },
    containerA: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100vh'
    },
    containerB: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252627',
        height: '100vh',
    },
    containerhead: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252627',
        borderBottomRightRadius: 50,
        width: '100vw',
        height: '100vh'
    },
    containerlogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        width: '100vw',
        height: '100vh',
    },
    title: {
        fontSize: '2rem',
        color: 'black',
        padding: 10
    },
    input: {
        margin: 15,
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        color: 'rgba(0,0,0,0.8)',
        borderWidth: 0.1,
        borderColor: 'rgba(0,0,0,0.3)',
        fontSize: '1rem',
        width: '80vw',
        boxShadow: '3px 3px 3px rgba(0,0,0,0.1)'
    },
    focusedInput: {
        margin: 15,
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        color: 'rgba(0,0,0,0.8)',
        borderWidth: 1,
        borderColor: 'black',
        outlineStyle: 'none',
        fontSize: '1rem',
        width: '80vw',
        boxShadow: '3px 3px 3px rgba(0,0,0,0.1)'
    },
    button: {
        backgroundColor: '#252627',
        padding: 15,
        borderRadius: 30,
        width: '80vw',
        textAlign: 'center'
    },
    img: {
        width: 200,
        height: 200
    },
    containermodal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        backgroundColor: 'rgba(53, 163, 2, 0.8)',
        padding: 10,
        color: 'white',
        borderRadius: 10,
    },
});