import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    containerlogin: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingTop: 60,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 32,
        color: 'black',
        padding: 10,
        width: '80%',
        fontFamily: 'Poppins-Bold'
    },
    text: {
        fontSize: 16,
        padding: 10,
        width: '80%',
        fontFamily: 'Poppins'
    },
    input: {
        margin: 15,
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        color: 'rgba(0,0,0,0.8)',
        fontSize: 16,
        elevation: 5,
        width: '80%',
        boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins'
    },
    focusedInput: {
        margin: 15,
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        color: 'rgba(0,0,0,0.8)',
        outlineStyle: 'none',
        fontSize: 16,
        elevation: 5,
        width: '80%',
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1
    },
    button: {
        backgroundColor: '#252627',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 30,
        width: '80%',
    },
    btnText: {
        color: 'white', 
        fontSize: 16,
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    link: {
        fontSize: 16,
        padding: 10,
        width: '80%',
        fontFamily: 'Poppins',
        color: 'royalblue'
    }
});
