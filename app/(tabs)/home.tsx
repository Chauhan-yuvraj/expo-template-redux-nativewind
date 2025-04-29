// app/home.tsx
import React from 'react';
import { View, Text, ScrollView, Pressable, Linking } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Links to resources that users might find helpful
const RESOURCES = [
  {
    title: "Redux Toolkit Docs",
    description: "Learn how to manage state with Redux Toolkit",
    url: "https://redux-toolkit.js.org/",
    icon: "book"
  },
  {
    title: "NativeWind Documentation",
    description: "Discover Tailwind CSS styling for React Native",
    url: "https://www.nativewind.dev/",
    icon: "style"
  },
  {
    title: "Expo Router Guide",
    description: "Understand file-based routing in your app",
    url: "https://docs.expo.dev/router/introduction/",
    icon: "map"
  },
  {
    title: "TypeScript Handbook",
    description: "Get started with TypeScript in React Native",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    icon: "code"
  }
];

// Next steps for getting started
const NEXT_STEPS = [
  {
    title: "Explore Project Structure",
    description: "Take a look at the folder organization to understand how files are arranged",
    icon: "folder"
  },
  {
    title: "Set Up Redux Store",
    description: "Check the store configuration in the /store directory and create your slices",
    icon: "storage"
  },
  {
    title: "Create Components",
    description: "Start building reusable components in the /components folder",
    icon: "widgets"
  },
  {
    title: "Design Your Routes",
    description: "Use Expo Router by adding new files in the /app directory",
    icon: "route"
  }
];

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-6 pt-12 pb-6 bg-blue-600">
        <Pressable 
          className="mb-4" 
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text className="text-3xl font-bold text-white">Welcome to Your New Project</Text>
        <Text className="text-lg text-blue-100 mt-2">
          You've successfully set up your Expo app with Redux, NativeWind, and TypeScript
        </Text>
      </View>

      {/* Next Steps Section */}
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold text-gray-800 mb-2">Next Steps</Text>
        <Text className="text-gray-600 mb-6">
          Here's how to get started with your new template:
        </Text>

        {NEXT_STEPS.map((step, index) => (
          <View key={index} className="flex-row mb-6 items-start">
            <View className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <MaterialIcons name={step.icon} size={24} color="#2563eb" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{step.title}</Text>
              <Text className="text-gray-600">{step.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Code Example */}
      <View className="px-6 py-2">
        <Text className="text-xl font-bold text-gray-800 mb-4">Quick Redux Example</Text>
        <View className="bg-gray-900 p-4 rounded-lg">
          <Text className="font-mono text-sm text-green-400">
            {`// Creating a slice\nimport { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => {\n      state.value += 1;\n    },\n  },\n});`}
          </Text>
        </View>
      </View>

      {/* Resources Section */}
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Helpful Resources</Text>
        
        {RESOURCES.map((resource, index) => (
          <Pressable 
            key={index} 
            className="flex-row mb-4 p-4 border border-gray-200 rounded-lg items-center"
            onPress={() => Linking.openURL(resource.url)}
          >
            <View className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <MaterialIcons name={resource.icon} size={24} color="#2563eb" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{resource.title}</Text>
              <Text className="text-gray-600">{resource.description}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
          </Pressable>
        ))}
      </View>

      {/* Custom Component Example */}
      <View className="px-6 py-2 mb-8">
        <Text className="text-xl font-bold text-gray-800 mb-4">NativeWind Example</Text>
        <View className="bg-gray-900 p-4 rounded-lg">
          <Text className="font-mono text-sm text-green-400">
            {`// Custom button component\nimport { Text, Pressable } from 'react-native';\n\nexport default function Button({ title, onPress }) {\n  return (\n    <Pressable\n      className="bg-blue-600 py-3 px-6 rounded-lg"\n      onPress={onPress}\n    >\n      <Text className="text-white font-bold text-center">\n        {title}\n      </Text>\n    </Pressable>\n  );\n}`}
          </Text>
        </View>
      </View>

      {/* Support and Feedback */}
      <View className="px-6 py-8 bg-gray-50">
        <Text className="text-xl font-bold text-gray-800 mb-4">Support & Feedback</Text>
        <Text className="text-gray-600 mb-4">
          Found a bug or have a suggestion? We'd love to hear from you!
        </Text>
        
        <Pressable
          className="bg-gray-800 py-3 rounded-lg flex-row justify-center items-center mb-4"
          onPress={() => Linking.openURL('https://github.com/Chauhan-yuvraj/expo-template-redux-nativewind/issues')}
        >
          <FontAwesome name="github" size={20} color="white" className="mr-2" />
          <Text className="text-white font-semibold ml-2">Report an Issue</Text>
        </Pressable>
        
        <Pressable
          className="border border-gray-300 py-3 rounded-lg flex-row justify-center items-center"
          onPress={() => Linking.openURL('https://github.com/Chauhan-yuvraj/expo-template-redux-nativewind/stargazers')}
        >
          <MaterialIcons name="star" size={20} color="#374151" className="mr-2" />
          <Text className="text-gray-800 font-semibold ml-2">Star on GitHub</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
