import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, PhoneIcon, VideoCameraIcon } from 'react-native-heroicons/outline';

const ChattingPage = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between border-b border-gray-300 p-4">
        <TouchableOpacity>
          <ArrowLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-1 flex-row items-center space-x-2">
          <Image
            source={{ uri: 'assets/users/lexDeBoer.jpg' }}
            className="h-10 w-10 rounded-full"
          />
          <View>
            <Text className="font-bold text-black">Lex De Boer</Text>
            <Text className="text-sm text-gray-500">Active 11m ago</Text>
          </View>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <PhoneIcon size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <VideoCameraIcon size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-2">
        <View className="mb-4 flex-row items-center space-x-2">
          <View className="max-w-[80%] rounded-lg bg-gray-200 p-3">
            <Text className="text-black">Het is hier super druk in Leuven.</Text>
          </View>
        </View>

        <Text className="mb-4 text-center text-xs text-gray-500">Nov 30, 2023, 9:41 AM</Text>

        <View className="mb-4 flex items-end">
          <View className="max-w-[80%] rounded-lg bg-black p-3">
            <Text className="text-white">Kwartiertje ben ik er. Goed?</Text>
          </View>
          <View className="mt-2 max-w-[80%] rounded-lg bg-black p-3">
            <Text className="text-white">Of zit je nog in Leuven</Text>
          </View>
        </View>

        <View className="mb-4 flex-row items-center space-x-2">
          <View className="max-w-[80%] rounded-lg bg-gray-200 p-3">
            <Text className="text-black">Is goed. Ben sinds gisteren avond terug thuis.</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-2">
          <View className="max-w-[80%] rounded-lg bg-gray-200 p-3">
            <Text className="text-black">Wat trainen we vandaag?</Text>
          </View>
        </View>
      </ScrollView>

      <View className="flex-row items-center border-t border-gray-300 px-4 py-3">
        <TextInput
          placeholder="Message..."
          className="flex-1 rounded-full bg-gray-100 p-3 text-black"
        />
        <TouchableOpacity className="ml-4">
          <Text className="text-lg text-gray-500">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChattingPage;
