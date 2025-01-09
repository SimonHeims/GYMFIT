import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const exercises = [
  {
    id: 1,
    image: require('assets/benchPress.jpg'),
    category: 'Chest',
    name: 'Bench Press',
    sets: '3×10',
  },
  {
    id: 2,
    image: require('assets/inclineBenchPress.jpg'),
    category: 'Chest',
    name: 'Incline Bench Press',
    sets: '3×10',
  },
];

const SessionPage = () => {
  return (
    <View className="flex-1 bg-white px-4 py-6">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold">Session</Text>
      </View>

      <View className="mb-6">
        {exercises.map((exercise) => (
          <View
            key={exercise.id}
            className="mb-4 flex-row items-center border-b border-gray-200 pb-4">
            <Image source={exercise.image} className="h-16 w-16 rounded-md" resizeMode="cover" />
            <View className="flex-1 px-4">
              <Text className="text-sm font-bold text-gray-700">{exercise.category}</Text>
              <Text className="text-base font-medium">{exercise.name}</Text>
            </View>
            <Text className="text-base font-medium">{exercise.sets}</Text>
          </View>
        ))}
      </View>

      <View className="mb-6 border-t border-gray-200 pt-4">
        <View className="mb-2 flex-row justify-between">
          <Text className="text-base text-gray-500">Subtotal</Text>
          <Text className="text-base font-medium">{exercises.length}</Text>
        </View>
        <View className="mb-2 flex-row justify-between">
          <Text className="text-base text-gray-500">Total Sets</Text>
          <Text className="text-base font-medium">
            {exercises.reduce(
              (total, exercise) => total + parseInt(exercise.sets.split('×')[0], 10),
              0
            )}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-base font-medium">Estimated Time (Including rest)</Text>
          <Text className="text-base font-medium">40 minutes</Text>
        </View>
      </View>

      <TouchableOpacity className="w-full rounded-md bg-black py-4">
        <Text className="text-center font-semibold text-white">Plan Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SessionPage;
