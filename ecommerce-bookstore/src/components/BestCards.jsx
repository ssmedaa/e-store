import React from 'react'
import Book from "../components/ui/book";

function BestCards({books,id}) {
  return (
   <>
   {books.filter((book)=>
                book.rating===5 && book.id !=id
            )
            .map((book)=>(
                <Book book={book} key={book.id}></Book>
            ))
            .slice(0,4)
            }
   
   </>
  )
}

export default BestCards