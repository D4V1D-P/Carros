import {SafeAreaView, View, StyleSheet, Text,FlatList, Image} from 'react-native';
 
export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}> Carros Eletricos </Text>
      <FlatList
      data={Carros}
      keyExtractor={(item)=>{item.uid.toString()}}
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
  titulo: "Mercedes-Benz EQS",
  descricao: "Sedan de luxo elétrico com alto desempenho e tecnologias avançadas..",
  foto: require('../assets/CarrosEletricos/Mercedes-Benz-EQS.jpg'),
},
{
  uid: 2,
  titulo: "Rivian R1T",
  descricao: " Picape elétrica robusta, ideal para aventura e desempenho off-road..",
  foto: require('../assets/CarrosEletricos/Rivian-R1T.jpg'),
},
{
  uid: 3,
  titulo: "Volvo XC40 Recharge",
  descricao: "SUV elétrico compacto, com design elegante e boa autonomia.",
  foto: require('../assets/CarrosEletricos/Volvo-XC40-Recharge.jpg'),
},
]

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    paddingTop: 50
  },
  titulo:{
    fontSize:28,
    color: '#de346',
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
  },
  card: {
    backgroundColor: '#F5FFFA',
    borderRadius: 12,
    shadowColor: '#000',
    textShadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
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
  tituloCarro: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Roboto-Medium',
  },
  descricaoCarro: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginTop: 8,
    lineHeight: 22,
    fontFamily: 'Roboto-Regular',
  }
})
