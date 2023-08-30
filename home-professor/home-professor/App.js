import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.squareWithCircle}>
        <View style={[styles.square, { width: screenWidth * 0.1, height: screenWidth * 0.1 }]}>
          <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.linesContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
      <Text style={styles.title}>Bem-vindo (a)</Text>
      <Text style={styles.subtitle}>Gerenciador de saídas S-gate</Text>
      <View style={styles.checklistContainer}>
        <View style={styles.checklist}>
          <Text style={styles.checklistTextLeft}>12:00</Text>
        </View>
        
        <View style={styles.checklist}>
          <Text style={styles.checklistTextLeft}>12:15</Text>
        </View>
         <View style={styles.checklist}>
          <Text style={styles.checklistTextLeft}>12:40</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#EEEEEE',
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#393E46',
    zIndex: -1,
  },
  linesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  line: {
    width: 0.065 * Dimensions.get('window').width,
    height: 2,
    backgroundColor: '#00ADB5',
    top: 25,
    left: 16,
    marginBottom: 5,
  },
  squareWithCircle: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  square: {
    backgroundColor: '#222831',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 0.04 * Dimensions.get('window').width,
    height: 0.04 * Dimensions.get('window').width,
    backgroundColor: '#00ADB5',
    borderRadius: 0.025 * Dimensions.get('window').width,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },
  checklistContainer: {
    marginTop: 30,
    alignItems: 'left',
  },
  checklist: {
    flexDirection: 'row',
    alignItems: 'none',
    marginBottom: 50,
  },
  checklistTextLeft: {
    fontSize: 16,
    color: '#333',
    marginRight: 250,
    textAlign: 'left', // Alinhar à esquerda
  },
});

export default App;
