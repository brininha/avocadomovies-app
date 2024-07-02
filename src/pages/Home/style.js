import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    containerModal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 35px)',
    },
    label: {
        fontSize: '1.2rem',
        padding: '15px',
        letterSpacing: 2,
        color: 'black',
        fontWeight: 'bold'
    },
    imgMovie: {
        width: '50vw',
        height: 'calc(50vw/2*3)',
        fitContent: 'cover',
    },
    movieName: {
        fontSize: '1.2rem',
        padding: 10,
    },
    description: {
        fontSize: '1rem',
        padding: 30,
        textAlign: 'justify',
    },
});