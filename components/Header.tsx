import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { HeartIcon, ClockIcon, ClipboardDocumentIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className="bg-white p-4">
      <TextInput className="mb-4 rounded-full border px-4 py-2" placeholder="Search" />

      <View className="mb-4 flex-row justify-between">
        <HeartIcon size={24} color="black" />
        <ClockIcon size={24} color="black" />
        <ClipboardDocumentIcon size={24} color="black" />
      </View>

      <Image
        source={require('assets/GYMFIT.png')}
        className="h-36 w-full rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
};

export default Header;
