import React from 'react'
import { Link } from 'react-router-dom';
import SearchBooksResults from "../Templates/SearchBooksResults";
import {search} from "../BooksAPI";
import SearchInput from "../atoms/SearchInput";
import PropTypes from "prop-types";

class BooksSearch extends React.Component {
    state = {
        books: []
    }
    static propTypes = {
        usedBooks: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired
    };
    searchBooks = query => {
        query
        ? search(query).then(books => this.setState(() => ({
            books: books
        })))
        : this.setState(() => ({
            books: []
        }))
    };

    render() {
        const { onBookChangeShelf, usedBooks } = this.props
        const { books } = this.state
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <SearchInput searchBooks={this.searchBooks} />
                    </div>
                </div>
                <SearchBooksResults books={books} usedBooks={usedBooks} onBookChangeShelf={onBookChangeShelf} />
            </div>
        )
    }
}

export default BooksSearch
