//Componentes y no clases, funciones flecha en lugar de las tradicionales 
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ScrollViewBase} from 'react-native';
import TextComponent from './components/TextComponent';

//Constantes 
//Retornar el componente, por que todas las funciones deben retornar un valor
const App = () => { 
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>Mi Biografía</Text>
        <Image style={styles.image} source={require('./assets/images/mario 1.jpg')}/>
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#40A2D8'
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0B60B0'
    },

    image:{
      width: 100,
      height: 100
    },

})

export default App;