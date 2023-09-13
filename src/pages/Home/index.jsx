import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          duration={2000}
          source={require('../../assets/android.png')}
          style={{height: '60%'}}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        style={styles.containerForm}
        delay={600}
        animation="fadeInUp">
        <Text style={styles.title}>Faça login para continuar no aplicativo</Text>
        <Text style={styles.text}>Clique no botão para fazer login</Text>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Realizar Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar Formulário</Text>
          </TouchableOpacity> */}
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#38a69d',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 30,
    marginBottom: 15,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center'
  },
  containerButtons: {
    position: 'absolute',
    bottom: '15%',
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: '60%',
    padding: 25,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    color: '#38a69d',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Home;
