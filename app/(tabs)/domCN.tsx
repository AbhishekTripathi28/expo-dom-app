import { View, Text, ScrollView } from "react-native";
import React from "react";
import Books from "@/components/dom-components/Books";

const domCN = () => {
  return (
    <View className="flex-1 ">
      <Books />
    </View>
  );
};

export default domCN;
