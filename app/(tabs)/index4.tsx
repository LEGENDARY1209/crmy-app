import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Texto Registro */}
      <Text style={styles.registerText}>Registro</Text>

      {/* Imagem do perfil */}
      <Image
        style={styles.profileImage}
        source={require('@/assets/images/image 18.png')} // Imagem local
      />

      {/* Nome do usuário */}
      <Text style={styles.userName}>Maria Viana</Text>

      {/* Username do usuário */}
      <Text style={styles.userHandle}>@mariaviana</Text>

      {/* Botão de editar perfil */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Editar perfil</Text>
      </TouchableOpacity>

      {/* Linha divisória */}
      <Image
        source={require('C:/Users/DEV_2ano_2024/Documents/projetos/crmy-app/assets/images/Line 3.png')} // Caminho da imagem da linha
        style={styles.divider}
      />

      {/* Seção de opções */}
      <View style={styles.optionsContainer}>
        {/* Opção Formulário */}
        <TouchableOpacity style={styles.formContainer}>
          <Image
            style={styles.formImage}
            source={require('C:/Users/DEV_2ano_2024/Documents/projetos/crmy-app/assets/images/Rectangle 32.png')} // Imagem local do formulário
          />
          <Text style={styles.optionText}>Formulário</Text>
        </TouchableOpacity>

        {/* Opção Política de Privacidade */}
        <TouchableOpacity style={styles.policyContainer}>
          <Image
            style={styles.policyImage}
            source={require('C:/Users/DEV_2ano_2024/Documents/projetos/crmy-app/assets/images/Rectangle 32.png')} // Imagem local para Política de Privacidade
          />
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.formContainer}>
          <Image
            style={styles.formImage}
            source={require('C:/Users/DEV_2ano_2024/Documents/projetos/crmy-app/assets/images/Rectangle 32.png')} // Imagem local do formulário
          />
          <Text style={styles.optionText}>Sair </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  registerText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20, // Ajuste para criar espaço acima da imagem do perfil
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 90,
  },
  userName: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 2,
    top: -80,
  },
  userHandle: {
    fontSize: 17.5,
    color: 'gray',
    marginBottom: 10,
    top: -80,
  },
  editProfileButton: {
    backgroundColor: '#226752',
    opacity: 0.7,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
    top: -75,
    marginBottom: 40,
    alignItems: 'center',
  },
  editProfileText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 16,
  },
  divider: {
    width: '90%',
    height: 1,
    marginBottom: 30,
    top: -55,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  formContainer: {
    flexDirection: 'row',
    marginLeft: 32,
    alignItems: 'center',
    marginBottom: 22,
    top: -28,
  },
  formImage: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  policyContainer: {
    marginLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
    top: -30,
  },
  policyImage: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 0,
    alignSelf: 'center', // Centraliza o texto verticalmente
  },
  logoutButton: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserProfileScreen;
