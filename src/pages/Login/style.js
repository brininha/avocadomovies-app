import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    containerA: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    containerB: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252627',
        width: '100%',
    },
    containerhead: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252627',
        borderBottomRightRadius: 50,
        width: '100%',
    },
    containerlogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        width: '100%'
    },
    title: {
        fontSize: 32,
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
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%'
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
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%'
    },
    button: {
        backgroundColor: '#252627',
        padding: 15,
        borderRadius: 30,
        width: '80%',
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
