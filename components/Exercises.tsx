import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const exercises = [
  { name: 'Bench Press', category: 'Chest', image: require('../assets/benchPress.jpg') },
  {
    name: 'Incline Bench Press',
    category: 'Chest',
    image: require('assets/inclineBenchPress.jpg'),
  },
  { name: 'Hammer Curl', category: 'Arms', image: require('assets/hammerCurls.jpg') },
  { name: 'Leg Extension', category: 'Legs', image: require('assets/legExtension.jpg') },
];

const Exercises = () => {
  return (
    <View className="bg-white p-4">
      <Text className="mb-2 text-lg font-bold">Exercises</Text>
      <ScrollView horizontal>
        {exercises.map((exercise, index) => (
          <View key={index} className="mr-4">
            <Image source={exercise.image} className="h-24 w-24 rounded-lg" />
            <Text className="mt-2 text-sm">{exercise.name}</Text>
            <Text className="text-xs text-gray-500">{exercise.category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercises;
