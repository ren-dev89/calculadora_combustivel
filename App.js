import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ModalResult from './src/Components/ModalResult';

const App = () => {
  const [priceAlcool, setPriceAlcool] = useState(0);
  const [priceGas, setPriceGas] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const imgLogo = require('./src/Assets/img/logo.png');

  const showResults = () => {
    if (priceAlcool === 0 || priceGas === 0) {
      alert('Preencha todos os valores!');
      return;
    }

    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.app}>
        <Image style={styles.logo} source={imgLogo} />
        <Text style={styles.title}>Qual a melhor opção?</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={priceAlcool}
            onChangeText={value => setPriceAlcool(value)}
          />

          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={priceGas}
            onChangeText={value => setPriceGas(value)}
          />

          <TouchableOpacity style={styles.button} onPress={showResults}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" visible={showModal}>
          <ModalResult
            priceAlcool={priceAlcool}
            priceAlcoolHandler={setPriceAlcool}
            priceGas={priceGas}
            priceGasHandler={setPriceGas}
            modalHandler={setShowModal}
            parentStyles={styles}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212022',
    justifyContent: 'center',
  },

  app: {
    marginLeft: 15,
    marginRight: 15,
  },

  form: {
    marginTop: 45,
  },

  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },

  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },

  label: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#FF502F',
    borderRadius: 5,
    padding: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
