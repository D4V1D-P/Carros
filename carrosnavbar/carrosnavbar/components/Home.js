import { SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.container}>
      <ImageBackground source={require("../assets/gif.gif")} style={estilo.backgroundImage}>
        <Text style={estilo.titulo}>Carros</Text>
        <Text style={estilo.subtitulo}>Elétricos e Esportivos</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    color: '#FF5733', 
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    color: '#ffffff', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
});
