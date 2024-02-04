import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsOpen(!isOpen);
  };

  const rotateArrow = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotate: rotateArrow }] }}>
            <Text>▼</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View style={{ height: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 200] }) }}>
          <Text style={styles.content}>{content}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const Accrodian = () => {
  return (
    <View style={styles.container}>
      <AccordionItem title="Accordion Item 1" content="This is the content for item 1." />
      <AccordionItem title="Accordion Item 2" content="This is the content for item 2." />
      {/* Add more AccordionItem components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
});

export default Accrodian;
