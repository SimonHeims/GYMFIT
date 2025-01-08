import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HomeIcon, UserIcon, CogIcon, BellIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const UtilityBar = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 w-full flex-row items-center justify-around border-t bg-white py-4">
      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Home')}>
        <HomeIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Plans')}>
        <BellIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Profile')}>
        <UserIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Plans</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center" onPress={() => navigation.navigate('Settings')}>
        <CogIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UtilityBar;
