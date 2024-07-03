// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const tales = [
    { id: '1', title: 'The Lion and the Mouse', content: 'Once upon a time, a lion...' },
    { id: '2', title: 'The Tortoise and the Hare', content: 'In a forest, a hare...' },
    { id: '3', title: 'The Boy Who Cried Wolf', content: 'There was a young boy...' },
  ];

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.title}>Tales for Kids</Text>
      {tales.map((tale) => (
        <TouchableOpacity key={tale.id} style={styles.taleButton} onPress={() => navigation.navigate('Tale', { tale })}>
          <Text style={styles.taleTitle}>{tale.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const TaleScreen = ({ route }) => {
  const { tale } = route.params;

  return (
    <SafeAreaView style={styles.taleContainer}>
      <Text style={styles.title}>{tale.title}</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.content}>{tale.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale" component={TaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F3F3F3',
  },
  taleContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F3F3F3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taleButton: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taleTitle: {
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});