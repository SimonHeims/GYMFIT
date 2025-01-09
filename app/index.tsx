import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '~/components/Header';
import Categories from '~/components/Categories';
import Exercises from '~/components/Exercises';
import UtilityBar from '~/components/UtilityBar';
import ProfilePage from '~/components/ProfilePage';
import SessionPage from '~/components/SessionPage';
import ActivityPage from '~/components/ActivityPage';
import ChattingPage from '~/components/ChattingPage';

const Stack = createStackNavigator();

const HomeScreen = () => (
  <SafeAreaView className="flex-1 bg-gray-100">
    <Header />
    <Categories />
    <Exercises />
    <UtilityBar />
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Chatting" component={ChattingPage} />
        <Stack.Screen name="Session" component={SessionPage} />
        <Stack.Screen name="Activity" component={ActivityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
