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
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
    },
});