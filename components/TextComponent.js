import{Text,StyleSheet, View} from 'react-native';

const TextComponent = () => {
    return(
        <View>
            <Text style={styles.text}>Nombre: El pepe</Text>
            <Text style={styles.text}>Edad: 18</Text>
            <Text style={styles.text}>Nacimiento: 31/01/2005</Text>
            <Text style={styles.text}>Sobre mi: Soy pepe de 18 años y no se que hacer con mi vida</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9',
        }
    })

export default TextComponent;