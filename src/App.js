import React from 'react'
import './App.css'
import BooksSearch from "./Pages/BooksSearch";
import MyBooks from "./Pages/MyBooks";
import { Route } from 'react-router-dom';
import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    isAppLoaded: false,
    books: []
  };

  fetchBooks = () => {
    getAll().then((books) => {
        this.setState(() => ({
            isAppLoaded: true,
            books: books
        }))
    })
  };

    changeShelf = (book, shelf) => {
        update(book, shelf).then(() =>{
            const changedBook = {...book, shelf }
            this.setState((state) => ({
                books: state.books.filter(b => b.id !== changedBook.id).concat(changedBook)
            }))
        })
    }

  componentDidMount() {
      this.fetchBooks()
  };

  render() {
      const {books, isAppLoaded} = this.state
    return (
      <div className="app">
          {isAppLoaded &&
              <div>
                  <Route
                      exact
                      path='/'
                      render={() =>
                          <MyBooks
                              books={books}
                              onBookChangeShelf={(book, shelf) => this.changeShelf(book, shelf)}
                          />
                      }
                  />
                  <Route
                      path='/search'
                      render={() =>
                          <BooksSearch
                              usedBooks={books}
                              onBookChangeShelf={(book, shelf) => this.changeShelf(book, shelf)}
                          />
                      }
                  />
              </div>
          }
      </div>
    )
  }
}

export default BooksApp
