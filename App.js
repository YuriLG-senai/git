import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInputComponent, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput style={styles.input}
        placeholder='Nome da tarefa' />
      <text style={styles.label}>Tarefa descrição</text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descricao da tarefa'
        multiline />

      <view style={styles.buttonContainer}>
        <Button title='salvar'
        style={styles.buttonGreen}
        color='darkgreen'
        onPress={
          () => {
            alert('BUNDA')}
          }/>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16

  },
  label: {
    fontsize: 16,
    fontweight: 'bold',
    marginBottom: '8'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontsize: 16,
    margimBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttomContainer: {
    margimTop: 16
  },
  buttomGreen:{
    backgroundColor:'darkgreen'
  },
});


