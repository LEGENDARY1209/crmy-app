import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Importando o ícone

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Login bem-sucedido', 'Bem-vindo!');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Seta no lado esquerdo */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Voltar')}>
          <Icon name="arrow-left" size={30} color="#1e1e1e" />
        </TouchableOpacity>
      </View>

      {/* CareMap no topo */}
      <View style={styles.careMapContainer}>
        <Text style={styles.careText}>Care</Text>
        <Text style={styles.mapText}>map</Text>
      </View>

      {/* Imagem acima do título */}
      <Image source={require('@/assets/images/image 18.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>Registro</Text>


      {/* Campo de e-mail */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

         {/* Campo de e-mail */}
         <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

         {/* Campo de e-mail */}
         <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

  

      {/* Botão de Login com borda */}
      <TouchableOpacity style={styles.RegistroButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Registrar</Text>
      </TouchableOpacity>

    

    
    
      </View>
    );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: '9%',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    margin: 10,
  },
  arrowContainer: {
    position: 'absolute',
    left: 20, // Distância do lado esquerdo da tela
    top: 33, // Distância do topo
    zIndex: 1, // Para garantir que o ícone fique acima de outros componentes
  },
  careMapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  careText: {
    color: '#226752',
    fontSize: 19,
    fontWeight: 'bold',
    top: -41, // Mover o texto mais para cima
  },
  mapText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '300',
    top: -41, // Mover o texto mais para cima
  },
  image: {
    top: -18,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    top: -33,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    top: 7,
    padding: 8,
    paddingLeft: 17,
    marginLeft: 10,
    borderRadius: 20,
    marginBottom: 27,
    backgroundColor: '#e2e2e2',
  },
  forgotPassword: {
    color: '#aeaeae', // Cor do texto de "Esqueceu a senha"
    textAlign: 'right',
    marginBottom: 20,
  },
  continueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'flex-start', // Mudar para flex-start para alinhar à esquerda
    paddingLeft: 8, // Adicionado para mover todo o conteúdo mais para a direita
  },
  line: {
    width: '30%', // Definindo uma largura fixa para a linha
    height: 1,
    backgroundColor: '#a0a0a0',
    marginHorizontal: 5, // Espaço entre as linhas e o texto
  },
  continueWith: {
    fontSize: 16,
    color: '#a0a0a0',
    textAlign: 'center',
    marginHorizontal: 10, // Espaço extra para o texto
  },
  socialIconsContainer: {
    flexDirection: 'row', // Alinhamento horizontal dos ícones
    justifyContent: 'center', // Centraliza os ícones
    marginTop: 55, // Aumenta o espaço acima dos ícones para movê-los para baixo
    paddingLeft: 33, // Move os ícones ligeiramente para a direita
  },
  socialButton: {
    alignItems: 'center',
    marginHorizontal: 13, // Espaço entre os ícones
  },
  RegistroButton: {
    backgroundColor: '#226752',
    padding: 6,
    top: 13,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 12,
    width: '85%',
    marginLeft: 33,
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;