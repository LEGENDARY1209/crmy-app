import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleSave = () => {
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      {/* Título da página acima da imagem de perfil */}
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Imagem de perfil */}
      <Image
        style={styles.profileImage}
        source={require('@/assets/images/image 18.png')} // Imagem local
      />

      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#ff0000" // Cor do placeholder
        value={name}
        onChangeText={setName}
        keyboardType="default"
      />

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ff0000" // Cor do placeholder
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Nome de Usuário */}
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="#ff0000" // Cor do placeholder
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
      />

      {/* Campo de Data de Nascimento */}
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#e90000" // Cor do placeholder
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric"
      />

      {/* Campo de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ee0000" // Cor do placeholder
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          {/* Você pode adicionar um ícone aqui */}
        </TouchableOpacity>
      </View>

      {/* Botão de Registrar */}
      <TouchableOpacity style={styles.RegistroButton} onPress={handleSave}>
        <Text style={styles.loginButtonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10, 
    borderRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    top: -35,
  },
  title: {
    fontSize: 22,
    fontWeight: 'medium',
    marginBottom: 20,
    textAlign: 'center',
    top: -25,
  },
  input: {
    width: '100%',
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 18,
    paddingLeft: 15, // Espaço adicional à esquerda
    color: '#000000', // Cor do texto dentro da caixa de texto
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 20,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    top: 10, // Alinha o ícone verticalmente
  },
  RegistroButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
