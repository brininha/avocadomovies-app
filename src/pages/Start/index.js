import { Text, View, Image, Pressable } from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/logo.png")} style={styles.img}/>
            <Pressable style={({pressed}) => [
                styles.button,
                pressed && styles.pressedButton,
            ]} onPress={() => navigation.navigate('Login')}>
                <Image source={require("../../../assets/images/btn-start.png")} style={styles.btn}/>
            </Pressable>
        </View>
    );
}