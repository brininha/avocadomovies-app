import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 5, // Reduz a margem superior do título
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#121212',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    buttontext: {
        color: 'white'
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
    messagegenero: {
        padding: 10,
        borderRadius: 10,
        fontSize: 25
    },
    buttontextcontato: {
        color: '#008ff5',
        padding: 10
    },
    list: {
        backgroundColor: '#ffbdcc',
        padding: 10,
        margin: 10,
    }
});