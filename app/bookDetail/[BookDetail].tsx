import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import BookCard from '@/components/dom-interaction/BookCard';

const BookDetail = () => {
  const { data } = useLocalSearchParams();
  const strData = Array.isArray(data) ? data[0] : data;
  const item = typeof strData === 'string' ? JSON.parse(strData) : null;
  console.log("item in BookDetail page==>",item)
  return (
    <View style={{flex:1}} >
      <BookCard item={item} />
    </View>
  )
}

export default BookDetail