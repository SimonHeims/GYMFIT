import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const activityData = [
  {
    id: '1',
    user: 'Sascha Schrooten',
    time: '1d',
    action: 'Started following you',
    profileImage: require('assets/users/saschaSchrooten.jpg'),
    isNew: true,
  },
  {
    id: '2',
    user: 'Lex De Boer',
    time: '2d',
    action: 'Liked your workout',
    profileImage: require('assets/users/lexDeBoer.jpg'),
    isNew: true,
  },
  {
    id: '3',
    user: 'Sascha Schrooten',
    time: '2d',
    action: 'Commends your progress',
    comment: 'Congrats on the PR!!! 🎉',
    profileImage: require('assets/users/saschaSchrooten.jpg'),
    isNew: false,
  },
  {
    id: '4',
    user: 'Lex De Boer',
    time: '3d',
    action: 'Saved your workout',
    profileImage: require('assets/users/lexDeBoer.jpg'),
    isNew: false,
    workoutImage: require('assets/benchPress.jpg'),
  },
  {
    id: '5',
    user: 'Daniele Sorce',
    time: '4d',
    action: 'Commented on your session',
    comment: 'Is this better on bench or smith machine?',
    profileImage: require('assets/users/danieleSorce.jpg'),
    isNew: false,
  },
  {
    id: '6',
    user: 'Daniele Sorce',
    time: '5d',
    action: 'Liked your workout',
    comment: 'Just how many sets do you…',
    profileImage: require('assets/users/danieleSorce.jpg'),
    isNew: false,
  },
];

const ActivityPage = () => {
  const [activeTab, setActiveTab] = useState('Notifications');

  const renderItem = ({ item }) => (
    <View className="flex-row items-center border-b border-gray-200 py-4">
      <Image source={item.profileImage} className="h-12 w-12 rounded-full" resizeMode="cover" />
      <View className="ml-4 flex-1">
        <Text className="text-sm font-bold text-gray-800">{item.user}</Text>
        <Text className="text-sm text-gray-500">
          {item.action} {item.comment && <Text className="text-gray-700">{item.comment}</Text>}
        </Text>
        <Text className="text-xs text-gray-400">{item.time}</Text>
      </View>
      {item.workoutImage && (
        <Image source={item.workoutImage} className="h-10 w-10 rounded-md" resizeMode="cover" />
      )}
      {item.isNew && <View className="ml-2 h-2 w-2 rounded-full bg-red-500" />}
      <TouchableOpacity className="ml-4 rounded-md bg-black px-3 py-1">
        <Text className="text-xs text-white">Visit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-gray-200 px-4 py-4">
        <Text className="text-lg font-bold">Activity</Text>
      </View>

      <View className="flex-row justify-around py-4">
        {['Notifications', 'Groups', 'Plans'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`py-2 ${activeTab === tab ? 'border-b-2 border-black' : 'border-b'}`}>
            <Text
              className={`text-sm ${activeTab === tab ? 'font-bold text-black' : 'text-gray-500'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={activityData.filter((item) => (activeTab === 'Notifications' ? true : false))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="px-4"
      />
    </View>
  );
};

export default ActivityPage;
