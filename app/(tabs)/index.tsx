import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const { login } = useAuth();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    const success = login(email, password);
    if (success) {
      Alert.alert('Success', `Logged in as ${email}`);
      router.push('/(tabs)/explore'); // Navigate to a logged-in area
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleSignUp = () => {
    // router.push('/auth/SignUpScreen'); // Navigate to Sign-up screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        label={t('loginPage.email')}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Button mode="contained" onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Button>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>{t('loginPage.notAccount')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
