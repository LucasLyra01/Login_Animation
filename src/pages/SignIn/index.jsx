import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerInit} animation="fadeInRightBig">
        <Text style={styles.textInit}>Bem Vindo</Text>
      </Animatable.View>
      <Animatable.View
        style={styles.containerForm}
        duration={1000}
        animation="fadeInUp">
        <Animatable.View duration={1000} animation="fadeInUp" >
          <Text style={styles.title}>E-mail</Text>
          <TextInput placeholder="Digite seu E-mail ..." style={styles.input} />
          <Text style={styles.title}>Senha</Text>
          <TextInput placeholder="Digite sua senha..." style={styles.input} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.button.textButton}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerInit: {
    paddingStart: '5%',
    paddingEnd: '5%',
    padding: 60,
  },
  textInit: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    color: '#a1a1a1',
  },
  input: {
    borderBottomWidth: 0.2,
    borderColor: '#a1a1a1'
  },
  button: {
    marginTop: 50,
    paddingVertical: 5,
    alignSelf: 'center',
    backgroundColor: '#38a69d',
    width: '60%',
    borderRadius: 5,
    textButton: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
    },
  },
});

export default SignIn;
