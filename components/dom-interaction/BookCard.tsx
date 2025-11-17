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

function BookCard( {item:{
    authors,
    averageRating,
    description,
    imageLinks,
    publishedDate,
    publisher,
    ratingsCount,
    title,
    subtitle,
  }} : any) {
  // const {
  //   authors,
  //   averageRating,
  //   description,
  //   imageLinks,
  //   publishedDate,
  //   publisher,
  //   ratingsCount,
  //   title,
  //   subtitle,
  // } = item;
  console.log("item card component==> ",authors)
 
  return (
  
  
    <Card className="bg-slate-200">
      <CardHeader>
        <CardAction>
          {/* <Link href={item.imageLinks.thumbnail}>
          <img src={item.imageLinks.thumbnail} alt={item.title} className="w-32 h-48"
          />
          </Link> */}
        </CardAction>
        <CardTitle >{title}</CardTitle>
        <CardDescription>
          {" "}
          Authors: {authors ? authors.join(", ") : "N/A"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p>⭐{ratingsCount}/5</p>
      </CardFooter>
    </Card>
          
  );
}

export default BookCard;
