import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Caremap</Text>
        <TouchableOpacity style={styles.profileIcon}>
          {/* Adicione um ícone de perfil aqui */}
          <Image source={{ uri: 'link_para_o_icone_de_perfil' }} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Procure por um doutor, medicamento..."
        placeholderTextColor="#999"
      />

      {/* Service Options */}
      <View style={styles.services}>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={{ uri: 'src\assets\icone1.png' }} style={styles.serviceIcon} />
          <Text>Doutor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={{ uri: 'link_para_imagem_doencas' }} style={styles.serviceIcon} />
          <Text>Doenças</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={{ uri: 'link_para_imagem_hospitais' }} style={styles.serviceIcon} />
          <Text>Hospitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={{ uri: 'src/assets/maps.webp' }} style={styles.serviceIcon} />
          <Text>Emergência</Text>
        </TouchableOpacity>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapText}>Encontre hospitais perto de você!</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Ver</Text>
        </TouchableOpacity>
        <Image source={{ uri: '' }} style={styles.mapImage} />
      </View>

      {/* Top Specialists */}
      <View style={styles.specialistsContainer}>
        <Text style={styles.specialistsTitle}>Top especialistas</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>ver mais</Text>
        </TouchableOpacity>

        {/* Specialists Cards */}
        <View style={styles.specialistsList}>
          {[
            { name: 'Dra. Mariana Carvalho', specialty: 'Geneticista', distance: '10km', image: 'link_para_imagem_dra_mariana' },
            { name: 'Dr. Matheus Castro', specialty: 'Geneticista', distance: '10km', image: 'link_para_imagem_dr_matheus' },
            { name: 'Dr. Caio Graco', specialty: 'Geneticista', distance: '10km', image: 'link_para_imagem_dr_caio' },
          ].map((specialist, index) => (
            <View key={index} style={styles.specialistCard}>
              <Image source={{ uri: specialist.image }} style={styles.specialistImage} />
              <Text>{specialist.name}</Text>
              <Text>{specialist.specialty}</Text>
              <Text>{specialist.distance}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b8065',
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    marginVertical: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  mapContainer: {
    backgroundColor: '#e0f1eb',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  mapText: {
    fontSize: 18,
    marginBottom: 8,
  },
  mapButton: {
    backgroundColor: '#3b8065',
    padding: 10,
    borderRadius: 20,
  },
  mapButtonText: {
    color: '#fff',
  },
  mapImage: {
    width: '100%',
    height: 150,
    marginTop: 16,
    borderRadius: 8,
  },
  specialistsContainer: {
    marginVertical: 16,
  },
  specialistsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: '#3b8065',
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  specialistsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialistCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    width: '30%',
  },
  specialistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
});

export default HomeScreen;