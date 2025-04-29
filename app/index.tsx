// app/index.tsx
import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";

const GITHUB_URL = "https://github.com/Chauhan-yuvraj/expo-template-redux-nativewind";

export default function Index() {
  return (
    <View className="flex-1 bg-white px-6 justify-center items-center">
      <Text className="text-3xl font-extrabold text-center mb-2">
      expo-template-redux-nativewind
      </Text>
      <Text className="text-lg text-center text-gray-700 mb-6">
        A template for Expo projects with Redux Toolkit, NativeWind, TypeScript & Expo Router.
      </Text>

      <Pressable
        className="w-full bg-blue-600 rounded-lg py-3 mb-4"
        onPress={() => router.push("./home")}
      >
        <Text className="text-white text-center text-base font-semibold">
          Explore
        </Text>
      </Pressable>

      <Pressable
        className="w-full border border-gray-300 rounded-lg py-3"
        onPress={() => Linking.openURL(GITHUB_URL)}
      >
        <Text className="text-gray-800 text-center text-base">
          View on GitHub
        </Text>
      </Pressable>

      <Text className="mt-8 text-xs text-gray-500">
        v{Constants.manifest.version}
      </Text>
    </View>
  );
}
