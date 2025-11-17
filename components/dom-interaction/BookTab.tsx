"use dom"
import React, { useEffect } from 'react'
import BookCardSCN from '../dom-components/BookCardSCN'

function BookTab({bookData}:any) {

  
    console.log("book data", bookData)
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <p className="text-2xl font-bold underline m-4">Books - Science Category</p>
      {bookData?.length > 0 ? (
          bookData?.map((book: any, index: number) => (
            <div className="flex flex-col justify-center items-center gap-4 bg-slate-800 m-4 p-2">
              <BookCardSCN key={index} {...book} />
            </div>
            ))
        ) : (
            <p>no data</p>
        )}
    </div>
  )
}

export default BookTab