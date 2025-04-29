// app/index.tsx
import React from "react";
import { View, Text, Pressable, Linking, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const GITHUB_URL = "https://github.com/Chauhan-yuvraj/expo-template-redux-nativewind";

// Mock developer information - replace with your actual info
const DEVELOPER = {
  name: "Yuvraj Chauhan",
  github: "https://github.com/Chauhan-yuvraj",
  twitter: "https://twitter.com/your-twitter",
  website: "https://yourwebsite.com",
};

// Features list
const FEATURES = [
  {
    title: "Redux Toolkit",
    description: "State management made simple with the official Redux toolset",
    icon: "layers",
  },
  {
    title: "NativeWind",
    description: "Use Tailwind CSS for styling your React Native app",
    icon: "style",
  },
  {
    title: "TypeScript",
    description: "Built-in type safety for robust application development",
    icon: "code",
  },
  {
    title: "Expo Router",
    description: "File-based routing with nested navigation support",
    icon: "route",
  },
];

export default function Index() {
  const version = Constants.expoConfig?.version || "1.0.0";

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex items-center justify-center pt-16 pb-8 bg-blue-600">
        <View className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
          {/* You can replace this with your logo */}
          <MaterialIcons name="speed" size={40} color="#2563eb" />
        </View>
        <Text className="text-3xl font-extrabold text-white text-center mb-2">
          expo-template-redux-nativewind
        </Text>
        <Text className="text-lg text-center text-blue-100 mb-6 px-6">
          A powerful starter template for modern React Native development
        </Text>
      </View>

      {/* Features Section */}
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Features</Text>
        
        {FEATURES.map((feature, index) => (
          <View key={index} className="flex-row mb-6 items-start">
            <View className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <MaterialIcons name={feature.icon} size={24} color="#2563eb" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{feature.title}</Text>
              <Text className="text-gray-600">{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* CTA Buttons */}
      <View className="px-6 pb-8">
        <Pressable
          className="w-full bg-blue-600 rounded-lg py-4 mb-4 flex-row justify-center items-center"
          onPress={() => router.push("./home")}
        >
          <MaterialIcons name="explore" size={20} color="white" className="mr-2" />
          <Text className="text-white text-center text-base font-semibold ml-2">
            Explore Template
          </Text>
        </Pressable>

        <Pressable
          className="w-full border border-gray-300 rounded-lg py-4 mb-4 flex-row justify-center items-center"
          onPress={() => Linking.openURL(GITHUB_URL)}
        >
          <FontAwesome name="github" size={20} color="#1f2937" className="mr-2" />
          <Text className="text-gray-800 text-center text-base font-semibold ml-2">
            View on GitHub
          </Text>
        </Pressable>
      </View>

      {/* Developer Info */}
      <View className="px-6 py-8 bg-gray-50">
        <Text className="text-xl font-bold text-gray-800 mb-4">Developer</Text>
        <View className="flex-row items-center mb-4">
          <View className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
            <Text className="text-white font-bold text-xl">{DEVELOPER.name.charAt(0)}</Text>
          </View>
          <View>
            <Text className="text-lg font-semibold text-gray-800">{DEVELOPER.name}</Text>
            <Text className="text-sm text-gray-500">Template Creator</Text>
          </View>
        </View>

        <View className="flex-row justify-around mt-2">
          <Pressable onPress={() => Linking.openURL(DEVELOPER.github)}>
            <FontAwesome name="github" size={24} color="#374151" />
          </Pressable>
          <Pressable onPress={() => Linking.openURL(DEVELOPER.twitter)}>
            <FontAwesome name="twitter" size={24} color="#374151" />
          </Pressable>
          <Pressable onPress={() => Linking.openURL(DEVELOPER.website)}>
            <MaterialIcons name="public" size={24} color="#374151" />
          </Pressable>
        </View>
      </View>

      {/* Getting Started */}
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Getting Started</Text>
        <View className="bg-gray-100 p-4 rounded-lg">
          <Text className="font-mono text-sm text-gray-800">
            npx create-expo-app -t expo-template-redux-nativewind
          </Text>
        </View>
      </View>

      <View className="px-6 pb-12 items-center">
        <Text className="text-xs text-gray-500">
          Version {version}
        </Text>
      </View>
    </ScrollView>
  );
}
