import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DestinationCard({ name, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#e0f7fa', padding: 15, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 }
});