import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HomeIcon, UserIcon, CogIcon, BellIcon } from 'react-native-heroicons/outline';

const UtilityBar = () => {
  return (
    <View className="absolute bottom-0 w-full flex-row items-center justify-around border-t bg-white py-4">
      <TouchableOpacity className="items-center">
        <HomeIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <BellIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <UserIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <CogIcon size={24} color="black" />
        <Text className="mt-1 text-xs">Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UtilityBar;
