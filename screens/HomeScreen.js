// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
  },
});
