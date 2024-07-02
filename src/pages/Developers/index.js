import { View, Text, Image } from "react-native-web";
import styles from "./style.js";

export default function Developers() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Desenvolvedoras</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/sasa.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>Sabrina Cristan</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/momo.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>Monique Mota</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/lari.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>Larissa Matos</Text>
            </View>
        </View>
    );
};

