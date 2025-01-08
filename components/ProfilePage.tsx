import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const navigation = useNavigation();
console.log(navigation);

const ProfilePage = () => {
  const handleContinue = () => {
    Alert.alert('Continue', 'Proceed with email signup!');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Continue with Google!');
  };

  const handleAppleLogin = () => {
    Alert.alert('Apple Login', 'Continue with Apple!');
  };

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="mb-8 text-center text-2xl font-bold">GYM FIT</Text>

      <Text className="mb-2 text-center text-lg font-semibold">Create an account</Text>
      <Text className="mb-6 text-center text-gray-500">
        Enter your email to sign up for this app
      </Text>

      <TextInput
        className="mb-4 w-full rounded-md border px-4 py-2"
        placeholder="email@domain.com"
        keyboardType="email-address"
      />

      <TouchableOpacity className="mb-4 w-full rounded-md bg-black py-3" onPress={handleContinue}>
        <Text className="text-center text-white">Continue</Text>
      </TouchableOpacity>

      <View className="mb-4 flex-row items-center">
        <View className="h-px flex-1 bg-gray-300" />
        <Text className="mx-4 text-gray-500">or</Text>
        <View className="h-px flex-1 bg-gray-300" />
      </View>

      <TouchableOpacity
        className="mb-4 w-full flex-row items-center justify-center rounded-md border border-gray-300 py-3"
        onPress={handleGoogleLogin}>
        <Text className="text-center text-gray-700">Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mb-6 w-full flex-row items-center justify-center rounded-md border border-gray-300 py-3"
        onPress={handleAppleLogin}>
        <Text className="text-center text-gray-700">Continue with Apple</Text>
      </TouchableOpacity>

      <Text className="text-center text-xs text-gray-500">
        By clicking continue, you agree to our{' '}
        <Text className="font-semibold underline">Terms of Service</Text> and{' '}
        <Text className="font-semibold underline">Privacy Policy</Text>.
      </Text>
    </View>
  );
};

export default ProfilePage;
