import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from '~/components/Header';
import Categories from '~/components/Categories';
import Exercises from '~/components/Exercises';
import UtilityBar from '~/components/UtilityBar';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
        <Header />
        <Categories />
        <Exercises />
        <UtilityBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
