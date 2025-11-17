import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
   <Tabs>
    <Tabs.Screen name="home" options={{ title: 'Home', headerShown:false }} />
    <Tabs.Screen name="apiCall" options={{ title: 'API Call', headerShown:false }} />
    <Tabs.Screen name="domCN" options={{ title: 'dom SCN', headerShown:false }} />
    <Tabs.Screen name="domInteraction" options={{ title: 'interaction', headerShown:false }} />
   </Tabs>
  )
}

export default TabsLayout