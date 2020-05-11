import React from 'react'
import BookShelf from "../Templates/BookShelf";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MyBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired
    };
    render() {
        const { onBookChangeShelf, books } = this.props
        const booksOnShelf = [
            {id: 'currentlyReading', books: []},
            {id: 'wantToRead', books: []},
            {id: 'read', books: []}
        ]
        books.forEach(book => booksOnShelf.find(shelf => shelf.id === book.shelf && shelf.books.push(book)))

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {booksOnShelf.map(({id, books}) =>
                            <BookShelf key={id} title={id} books={books} onBookChangeShelf={(book, shelf) => onBookChangeShelf(book, shelf)}/>
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

export default MyBooks
