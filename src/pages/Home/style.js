import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    containerModal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: '100%',
    },
    label: {
        fontSize: 20,
        padding: 15,
        letterSpacing: 2,
        color: 'black',
        fontWeight: 'bold'
    },
    imgMovie: {
        width: 160,
        height: 240,
        margin: 10,
        fitContent: 'cover',
    },
    movieName: {
        fontSize: 20,
        padding: 10,
    },
    description: {
        fontSize: 16,
        padding: 30,
        textAlign: 'justify',
    },
});