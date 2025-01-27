import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Card, PaperProvider, Portal, Text, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="titleLarge">My Training</Text>
        <Text variant="bodyMedium">
          Content talking about the app the funcionalities and the new ones
        </Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
