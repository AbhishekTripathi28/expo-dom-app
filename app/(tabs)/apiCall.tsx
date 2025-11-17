import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchBookData } from "@/api/freeApi";

const ApiCall = () => {
  const [bookData, setBookData] = useState<any[]>([]);

  useEffect(() => {
    const getBookData = async () => {
      const data = await fetchBookData({
        page: 1,
        limit: 20,
        inc: "kind%252Cid%252Cetag%252CvolumeInfo",
        query: "science",
      });
      setBookData(data);
    };
    getBookData();
  }, []);
  console.log("api call in apiCall")

  return (
    <ScrollView>
      {bookData.length > 0 ? (
        bookData.map((book: any, index: number) => (
          <View
            key={index}
            className="mb-5 p-5  bg=[#ccc] border-red-300 border-2 rounded-2xl"
          >
            <Text className="text-2xl font-bold">{book.volumeInfo.title}</Text>
            <Text>
              Authors:{" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "N/A"}
            </Text>
            <Text>Published Date: {book.volumeInfo.publishedDate}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default ApiCall;
