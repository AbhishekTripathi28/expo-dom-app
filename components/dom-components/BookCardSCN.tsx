"use dom";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, router } from "expo-router";
import "./../../app/global.css";

function BookCardSCN({ volumeInfo, index }: any) {
  const {
    authors,
    averageRating,
    description,
    imageLinks,
    publishedDate,
    publisher,
    ratingsCount,
    title,
    subtitle,
  } = volumeInfo;
  // console.log("volume info",volumeInfo)
 
  return (
    <Card key={index} className="bg-slate-200">
      <CardHeader>
        <CardAction>
          <Link href={imageLinks.thumbnail}>
          <img src={imageLinks.thumbnail} alt={title} className="w-32 h-48"
          />
          </Link>
        </CardAction>
        <CardTitle >{title}</CardTitle>
        <CardDescription>
          {" "}
          Authors: {authors ? authors.join(", ") : "N/A"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p onClick={() => router.push({
            pathname:"/bookDetail/[BookDetail]",
            params:{BookDetail: title, data:JSON.stringify(volumeInfo)}
          })}>{description}</p>
      </CardContent>
      <CardFooter>
        <p>⭐{ratingsCount}/5</p>
      </CardFooter>
    </Card>
  );
}

export default BookCardSCN;
