import React from 'react'
import { Tabs } from 'expo-router'
import { Text } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "👋 Hey! What's up?",
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>, // Custom emoji icon
        }}
      />
    </Tabs>
  )
}
