import React from "react";
import BooksList from "./BooksList";
import PropTypes from "prop-types";

class SearchBooksResults extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired,
        usedBooks: PropTypes.array.isRequired
    };
    render() {
        const {books, onBookChangeShelf, usedBooks} = this.props
        const searchedBooks = books && books.map(book => usedBooks.find(usedBook => usedBook.id === book.id) || book)
        return (
            <div className="search-books-results">
                {searchedBooks.length > 0 && <h3>Search returned {searchedBooks.length} books </h3>}
                <BooksList books={searchedBooks} onBookChangeShelf={onBookChangeShelf}/>
            </div>
        )
    }
}

export default SearchBooksResults
