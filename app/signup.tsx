import CommonTextInput from '@/components/form/CommonTextInput';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { Button, SegmentedButtons, Text } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';

type FormData = {
  name: string;
  email: string;
  address: string;
  zipCode: string;
  country: string;
  number: string;
  password: string;
  confirmPassword: string;
  sex: string;
};

export default function SignUp() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [gender, setGender] = useState<string>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <View style={styles.container}>
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="sex"
        control={control}
        rules={{ required: 'Gender is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.dropDownStyle}>
            <>
              {error && <Text style={styles.errorText}>{error.message}</Text>}
              <Dropdown
                label="Gender"
                options={genderOptions}
                value={gender}
                onSelect={setGender}
              />
            </>
          </View>
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Enter a valid email address',
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="address"
        control={control}
        rules={{ required: 'Address is required' }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="zipCode"
        control={control}
        rules={{ required: 'Zip Code is required' }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Zip Code"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="number"
        control={control}
        rules={{ required: 'Telephone number is required' }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Telephone Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Password"
              onBlur={onBlur}
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: 'Confirm Password is required',
          validate: (value) =>
            value === watch('password') || 'Passwords do not match',
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <CommonTextInput
              label="Confirm Password"
              onBlur={onBlur}
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  dropDownStyle: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
