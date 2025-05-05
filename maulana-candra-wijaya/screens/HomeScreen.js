import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏝️ Tourism App</Text>
      <Button title="View Destinations" onPress={() => navigation.navigate('Destinations')} />
      <Button title="About Us" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'bottom' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 40 }
});
