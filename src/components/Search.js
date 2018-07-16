import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";

class Search extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        getBookshelf: PropTypes.func.isRequired,
        changeBookshelf: PropTypes.func.isRequired,
        searchBooks: PropTypes.func.isRequired
    };

    render() {
        const { getBookshelf, changeBookshelf, searchBooks, books } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search hvr-pop" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={searchBooks}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book =>
                            <li key={book.id + book.title}>
                                <Book
                                    book={book}
                                    getBookshelf={getBookshelf}
                                    changeBookshelf={changeBookshelf}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
