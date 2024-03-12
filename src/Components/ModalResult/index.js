import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalResult = ({
  priceAlcool,
  priceAlcoolHandler,
  priceGas,
  priceGasHandler,
  modalHandler,
  parentStyles,
}) => {
  const [numericPriceAlcool, setNumericPriceAlcool] = useState(0);
  const [numericPriceGas, setNumericPriceGas] = useState(0);

  const imgLogo = require('../../Assets/img/gas.png');

  useEffect(() => {
    setNumericPriceAlcool(parseFloat(priceAlcool));
    setNumericPriceGas(parseFloat(priceGas));
  }, [priceAlcool, priceGas]);

  const getResultText = () => {
    let result = 'Compensa usar ';
    result +=
      numericPriceAlcool / numericPriceGas < 0.7 ? 'Álcool' : 'Gasolina';

    return result;
  };

  const returnToMainScreen = () => {
    priceAlcoolHandler(0);
    priceGasHandler(0);
    modalHandler(false);
  };

  return (
    <View style={parentStyles.container}>
      <View style={parentStyles.app}>
        <Image style={parentStyles.logo} source={imgLogo} />
        <Text style={styles.title}>{getResultText()}</Text>
        <View style={styles.info}>
          <Text style={styles.subtitle}>Com os preços:</Text>
          <Text
            style={styles.infoText}>{`Álcool: R$ ${numericPriceAlcool.toFixed(
            2,
          )}`}</Text>
          <Text
            style={styles.infoText}>{`Gasolina: R$ ${numericPriceGas.toFixed(
            2,
          )}`}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={returnToMainScreen}>
          <Text style={styles.buttonText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    color: '#3CC865',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },

  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF502F',
    borderRadius: 5,
    padding: 5,
    marginLeft: 35,
    marginRight: 35,
  },

  buttonText: {
    color: '#FF502F',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalResult;
