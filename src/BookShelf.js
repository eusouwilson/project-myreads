
import React from 'react'
import Book from './Book'
const shelf = [
  {
    "id": "currentlyReading",
    "title": "Currently Reading"
  },
  {
   "id": "wantToRead",
   "title": "Want To Read"
 },
 {
   "id": "read",
   "title": "Read"
 }
]
const BookShelf = ({books, distinc, updateBookInfo}) => {

    return (
      <div className="bookshelf">
      {shelf.filter((x)=>x.id === distinc).map((shelf) => 
        <h2 className="bookshelf-title"  key={shelf.id} >{shelf.title}</h2>)}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              book.shelf === distinc &&(
                <Book key={book.id} book={book} updateBookInfo={updateBookInfo}/>
              )))
            }
            </ol>
          </div>
        </div>

    )
  }

export default BookShelf