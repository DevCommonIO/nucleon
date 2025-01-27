// components/CommonTextInput.tsx
import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface CommonTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle | undefined;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  onBlur: () => void;
  mode?: 'flat' | 'outlined' | undefined;
}

const CommonTextInput: React.FC<CommonTextInputProps> = ({
  label,
  value,
  onChangeText,
  style,
  secureTextEntry = false,
  keyboardType = 'default',
  onBlur,
  mode = 'outlined',
}) => {
  const { colors } = useTheme(); // Access theme for dynamic styling

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
      onBlur={onBlur}
      mode={mode} // Add mode if needed
      theme={{ colors: { primary: colors.primary } }} // Use theme colors
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    height: 50,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default CommonTextInput;
