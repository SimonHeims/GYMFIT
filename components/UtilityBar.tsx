import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const UtilityBar = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 w-full flex-row items-center justify-around border-t bg-white py-4">
      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Home')}>
        <HomeIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Activity')}>
        <BellIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Chatting')}>
        <ChatBubbleOvalLeftEllipsisIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Session')}>
        <UserIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Session</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Profile')}>
        <CogIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UtilityBar;
