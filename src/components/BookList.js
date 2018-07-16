import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const BookList = (props) => {
    BookList.PropTypes = {
        getBookshelf: PropTypes.func.isRequired,
        changeBookshelf: PropTypes.func.isRequired,
        currentlyReading: PropTypes.array.isRequired,
        wantToRead: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired
    };

    return (
        <div className="list-books">
            <div className="list-books-header">
                <div className="list-books-title">
                    <h1>Udacity MyReads App</h1>
                </div>
                <div className="open-search hvr-pop">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf
                        books={props.currentlyReading}
                        shelfTitle="Currently Reading"
                        getBookshelf={props.getBookshelf}
                        changeBookshelf={props.changeBookshelf}
                    />
                    <Bookshelf
                        books={props.wantToRead}
                        shelfTitle="Want To Read"
                        getBookshelf={props.getBookshelf}
                        changeBookshelf={props.changeBookshelf}
                    />
                    <Bookshelf
                        books={props.read}
                        shelfTitle="Read"
                        getBookshelf={props.getBookshelf}
                        changeBookshelf={props.changeBookshelf}
                    />
                </div>
            </div>
        </div>
    );
}

export default BookList;
