import {SafeAreaView, View, StyleSheet, Text,FlatList, Image} from 'react-native';
 
export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}> Carros Esportivos </Text>
      <FlatList
      data={Carros}
      keyExtractor={(item)=>{item.uid.toString();}}
      renderItem={({item}) => (
      <View style = {estilo.card}>
      <Text style = {estilo.tituloCarro}>{item.titulo}</Text>
      <Image style={estilo.foto} source={item.foto}/>
      <Text style = {estilo.descricaoCarro}>{item.descricao}></Text>
      </View>
  )}
      />
    </SafeAreaView>
  );
}

const Carros = [
{
  uid: 1,
  titulo: "BMW i4",
  descricao: "Sedan esportivo elétrico com desempenho incrível e autonomia de até 590 km",
  foto: require('../assets/CarrosEsportivos/BMW-i4.jpg'),
},
{
  uid: 2,
  titulo: "Ford Mustang Mach-E",
  descricao: "SUV elétrico com design arrojado e até 491 km de autonomia.",
  foto: require('../assets/CarrosEsportivos/Ford-Mustang-Mach-E.jpg'),
},
{
  uid: 3,
  titulo: "Porsche Taycan",
  descricao: "Superesportivo elétrico com desempenho de alto nível e até 450 km de autonomia.",
  foto: require('../assets/CarrosEsportivos/Porsche-Taycan.jpg'),
},
]


const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#lelele',
    padding: 8,
    marginTop:35,
  },
  titulo: {
    fontSize:28,
    color: 'Black',
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity:0.8,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    padding: 16,
    marginHorizontal: 10,
  },
  foto:{
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  tituloCarro:{
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Roboto-Medium',
  },
  descricaoCarro: {
    fontSize:16,
    color: '#333',
    textAlign: 'justify',
    marginTop: 8,
    lineHeight: 22,
    fontFamily: 'Roboto-Regular',
  }
})
