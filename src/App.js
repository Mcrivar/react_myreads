import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookList from "./components/BookList";
import Search from "./components/Search";

class BooksApp extends React.Component {
    state = {
        books: [],
        bookSearch: []
    };

    getBookshelf = book => {
        const currentBook = this.state.books.find(b => b.id === book);
        if (currentBook) return currentBook.shelf;
        return "none";
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    changeBookshelf = (event, book) => {
        BooksAPI.update(book, event).then(() => {
            book.shelf = event;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
        });
    };

    searchBooks = (event) => {
        let query = event.target.value;
        if (query) {
            BooksAPI.search(query, 20).then(bookSearch => {
                this.setState({ bookSearch });
            });
        }
    };

    updateQuery = (query) => {
        this.setState({ query: query.trim()
        });
    };

    render() {
        const { books, bookSearch } = this.state;
        const currentlyReading = books.filter(
            book => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");

        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() =>
                        <BookList
                            books={books}
                            currentlyReading={currentlyReading}
                            wantToRead={wantToRead}
                            read={read}
                            getBookshelf={this.getBookshelf}
                            changeBookshelf={this.changeBookshelf}
                        />}
                />
                <Route
                    exact
                    path="/search"
                    render={() =>
                        <Search
                            books={bookSearch}
                            getBookshelf={this.getBookshelf}
                            changeBookshelf={this.changeBookshelf}
                            searchBooks={this.searchBooks}
                        />}
                />
            </div>
        );
    }
}

export default BooksApp;