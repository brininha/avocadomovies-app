import { Text, View, Image } from "react-native";
import styles from "./style.js";

export default function Splash() {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/splash2.gif")} style={styles.img}/>
        </View>
    );
}