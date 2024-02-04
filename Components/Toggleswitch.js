import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const toggleSwitch = () => {
  const [isPresent, setIsPresent] = useState(false);

  const toggleSwitch = () => {
    setIsPresent(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{isPresent ? 'Present' : 'Absent'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isPresent ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isPresent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
});

export default toggleSwitch;