import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="h-screen flex justify-center items-center">
      <Text className="text-4xl font-bold">Welcome to the Application</Text>
      <Pressable
        className="mt-5 border rounded-lg px-5 py-3"
        onPress={() => router.push("./home")}
      >
        <Text className="text-xl"> Explore </Text>
      </Pressable>
    </View>
  );
}
