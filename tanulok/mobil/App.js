/*
* File: App.js
* Author: Székely Balázs Csaba
* Copyright: 2024, Székely Balázs Csaba
* Group: SZOFT II/1/E
* Date: 2024-04-09
* Github: https://github.com/BlaiseD91
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getTanulok } from './services/tanulokService';

export default function App() {

  const [tanulok, setTanulok] = useState([]);

  useEffect(()=>{
    getTanulok().then((data) => {
      console.log(data)
      setTanulok(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tanulók</Text>
    
    <FlatList 
      data={tanulok}
      renderItem={ ({item}) => (
        <View style={styles.card}>       
            <Text style={styles.infoText}>Név: {item.name}</Text>
            <Text style={styles.infoText}>Város: {item.city}</Text>
            <Text style={styles.infoText}>Születési idő: {item.birth}</Text>
            <Text style={styles.infoText}>Csoportazonosító: {item.groupId}</Text>
          </View>
      )}
    />

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 16,
  },
});
