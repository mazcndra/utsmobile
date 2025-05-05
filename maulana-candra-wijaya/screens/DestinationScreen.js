import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DestinationCard from './DestinationCard'


export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container}>
      <DestinationCard name="Bali" description="Pulau Dewata dengan pantai eksotis." />
      <DestinationCard name="Banyuwangi" description="Kota budaya dengan santetnya." />
      <DestinationCard name="Jember" description="Pantai dan Gunung Gumitir." />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 }
});
