import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const BookDetailLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="[BookDetail]" options={{ title: 'Book Detail', headerShown:false }} />
    </Stack>
  )
}

export default BookDetailLayout