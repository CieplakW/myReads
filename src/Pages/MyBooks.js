import React from 'react'
import BookShelf from "../Templates/BookShelf";
import { Link } from 'react-router-dom';

class MyBooksList extends React.Component {

    render() {
        const { onBookChangeShelf } = this.props
        const booksOnShelf = [
            {id: 'read', books: []},
            {id: 'wantToRead', books: []},
            {id: 'currentlyReading', books: []}
        ]
        this.props.books.forEach(book => booksOnShelf.find(shelf => shelf.id === book.shelf && shelf.books.push(book)))

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {booksOnShelf.map(({id, books}) =>
                            <BookShelf title={id} books={books} onBookChangeShelf={(book, shelf) => onBookChangeShelf(book, shelf)}/>
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MyBooksList
