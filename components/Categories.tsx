import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const categories = [
  { name: 'Chest', image: require('../assets/Chest.jpg') },
  { name: 'Back', image: require('../assets/Back.webp') },
  { name: 'Legs', image: require('../assets/Legs.jpg') },
  { name: 'Arms', image: require('../assets/Arms.jpg') },
  { name: 'Abs', image: require('../assets/Abs.webp') },
];

const Categories = () => {
  return (
    <View className="bg-white p-4">
      <Text className="mb-2 text-lg font-bold">Categories</Text>
      <ScrollView horizontal>
        {categories.map((category, index) => (
          <View key={index} className="mr-4 items-center">
            <Image source={category.image} className="h-20 w-20 rounded-full" resizeMode="cover" />
            <Text className="mt-2 text-sm">{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
