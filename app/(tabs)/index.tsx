import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

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
      {/* Imagem acima do título */}
      <Image source={require('@/assets/images/image 18.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Campo de e-mail */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Botão Esqueceu a Senha */}
      <TouchableOpacity onPress={() => Alert.alert('Recuperação de senha', 'Função ainda não implementada.')}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Botão de Login com borda */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Continue com */}
      <Text style={styles.continueWith}>Ou continue com</Text>

      {/* Botões de Redes Sociais */}
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 100, // Borda de 30 pixels
    margin: 20, // Espaçamento
  },
  image: {
    width: 100,  // Tamanho da imagem
    height: 100, // Tamanho da imagem
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  forgotPassword: {
    color: '#007AFF',
    textAlign: 'right',
    marginBottom: 20,
  },
  continueWith: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  socialText: {
    fontSize: 14,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50', // Cor de fundo do botão
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4CAF50', // Cor da borda
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
