import { fetchBookData } from "@/api/freeApi";
import BookTab from "@/components/dom-interaction/BookTab";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

const domInteraction = () => {
  const [bookData, setBookData] = useState<any[]>([]);

  useEffect(() => {
    const getBookData = async () => {
      const data = await fetchBookData({
        page: 1,
        limit: 20,
        inc: "kind%252Cid%252Cetag%252CvolumeInfo",
        query: "science",
      });
      console.log( "data in useEffect==>", data)
      setBookData(data);
    };
    getBookData();
  }, []);
  console.log("book data in dom interaction ==>", bookData);
  return (
    <View className="flex-1">
<BookTab
  key={bookData.length > 0 ? "loaded" : "loading"}
  bookData={bookData}
  dom={{ clone: true }}
/>

    </View>
  );
};

export default domInteraction;
