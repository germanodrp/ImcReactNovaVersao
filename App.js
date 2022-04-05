import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [nome, setNome] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [info, setInfo] = useState()
  const [resultado, setResultado] = useState()

  const calculaIMC = () =>{
    let imc = peso / (altura * altura)
    if(imc < 18.5){
      setInfo('Menor que 18,5, seu quadro é de: Magreza 💪🏻😶')
    }
    else if (imc < 24.9){
     setInfo('Entre 18,5 e 24,9, seu quadro é: Normal 💪🏻😊')
    }
    else if (imc < 29.9){
     setInfo('Entre 25,0 e 29,9, você está com: Sobrepeso 💪🏻😐')
    }
    else if (imc < 39.9) {
     setInfo('Entre 30,0 e 39,9, tome cuidado, você está com: Obesidade 💪🏻😣')
    }
    else if (imc > 39.9) {
     setInfo('Maior que 40,0, você está com: Obesidade Grave 💪🏻🙆🏻‍♂️🤦🏻‍♂️🏃🏻‍♂️')
    }
    setResultado(imc)
  }


  const clear = () => {
      setNome("")
      setPeso('')
      setAltura('')
      setResultado(0.0)
      setInfo()
  }
  return (
    <View style={styles.viewContainer}>
    <Text style={styles.text}>Nome</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={nome => setNome(nome)}
     value={nome}
     placeholder='Exemplo: Germano'
     keyboardType={'string'}
   />
   <separator/>
   <Text style={styles.text}>Altura (m)</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={altura => setAltura(altura)}
     value={altura}
     placeholder='Exemplo: 1,75'
     keyboardType={'numeric'}
   />
   <Text style={styles.text}>Peso (kg)</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={peso => setPeso(peso)}
     value={peso}
     placeholder='Exemplo: 68,8'
     keyboardType={'numeric'}
   />
   <Separator />
   <Button
     onPress={calculaIMC}
     title='Calcula'
     color='green'
     accessibilityLabel='Clique aqui para calcular seu IMC'
   />
   <Separator/>
   <Button
     onPress={clear}
     title='Limpa'
     color='red'
     accessibilityLabel='Botão para limpar os valores'
   />
   <Separator />
   <Text style={styles.input}>
   {nome}, Seu IMC é: {resultado} {info}
   </Text>
 </View>
  );
}
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    margin: 15,
    borderRadius: 20
  }
});