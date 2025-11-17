"use dom";
import { fetchBookData } from "@/api/freeApi";
import React, { useEffect, useState } from "react";
import BookCardSCN from "./BookCardSCN";
import "./../../app/global.css";
import { Text, View } from "react-native";

function Books() {
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
  console.log("api call in book")
  
  return (
 
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {bookData.length > 0 ? (
          bookData.map((book: any, index: number) => (
            <div className="flex flex-col justify-center items-center gap-4 bg-slate-800 m-4 p-2">
              <BookCardSCN key={index} {...book} />
            </div>
            ))
        ) : (
            <p>no data</p>
        )}
    </div>
  
  );
}

export default Books