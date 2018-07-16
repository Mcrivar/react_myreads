import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf  = (props) =>{
    Bookshelf.PropTypes = {
        getBookshelf: PropTypes.func.isRequired,
        changeBookshelf: PropTypes.func.changeBookshelf,
        books: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired
    };

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                {props.shelfTitle}
            </h2>
            <hr className="bookshelf-break" />
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book =>
                        <li key={book.id + book.title}>
                            <Book
                                book={book}
                                getBookshelf={props.getBookshelf}
                                changeBookshelf={props.changeBookshelf}
                            />
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;
