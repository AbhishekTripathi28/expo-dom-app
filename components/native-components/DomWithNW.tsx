"use dom";
import "@/app/global.css";
import React from "react";
import { Text, View } from "react-native";

function DomWithNW() {
  return (
    <View  className="flex-1 h-screen w-screen items-center justify-center bg-red-800 ">
        <Text className="text-5xl text-slate-200 p-10 border-2 rounded-full border-slate-400 m-5" >this is text of NW</Text>
    <div className="flex p-10 items-center justify-center bg-slate-800 rounded-full">
      <h1 className="text-4xl font-bold text-white">
         this is DOM with TW!
      </h1>
    </div>
    </View>
  );
}

export default DomWithNW;
