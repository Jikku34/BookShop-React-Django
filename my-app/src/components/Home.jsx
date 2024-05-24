/**
 * React component for displaying a list of books as product cards.
 * 
 * This component fetches a list of books from a Django backend API using Axios
 * when it mounts. Each book is displayed as a product card containing the book's
 * image, name, description, price, and a link to view the book details.
 * 
 *  The JSX element representing the Home component.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const Home = () => {
    // State variable to store the list of books fetched from the backend
    const [books, setBooks] = useState([]);

    /**
     * Fetches a list of books from the Django backend API using Axios.
     * Updates the books state with the fetched data.
     * Handles errors and logs error messages to the console.
     */
    const getAllEntities = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/allbook');
            setBooks(response.data);
        } catch (error) {
            if (error.response) {
                console.error(`Error Status Code: ${error.response.status}`);
                console.error(error.response.data);
            } else {
                console.error('There was a problem with the axios request:', error.message);
            }
        }
    };

    // Fetches all entities when the component mounts
    useEffect(() => {
        getAllEntities();
    }, []);

    // Render function
    return (
        <div className='row'>
            {/* Map through the list of books and render a product card for each book */}
            {books.map((book) => (
                <div className="card product-card col-2" key={book.book_id}>
                    {/* Display the book image */}
                    <img src={`http://127.0.0.1:8000/${book.book_image}`} className="card-img-top" alt={book.book_name} />
                    <div className="card-body">
                        {/* Display the book name */}
                        <h5 className="card-title">{book.book_name}</h5>
                        {/* Display the book description */}
                        <p className="card-text">{book.book_description}</p>
                        {/* Display the book price */}
                        <div className="product-price">${book.book_price}</div>
                        {/* Link to view the book details */}
                        <Link className="btn btn-primary" to={`/book/${book.book_id}`}>View Book</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
