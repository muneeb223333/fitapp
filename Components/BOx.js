import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BOx = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={!passwordVisible}
      />
      <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
        <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  toggleButton: {
    padding: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default BOx;
