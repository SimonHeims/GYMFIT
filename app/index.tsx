import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '~/components/Header';
import Categories from '~/components/Categories';
import Exercises from '~/components/Exercises';
import UtilityBar from '~/components/UtilityBar';
import ProfilePage from '~/components/ProfilePage';

const Stack = createStackNavigator();

const HomeScreen = () => (
  <SafeAreaView className="flex-1 bg-gray-100">
    <ScrollView>
      <Header />
      <Categories />
      <Exercises />
    </ScrollView>
    <UtilityBar />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
