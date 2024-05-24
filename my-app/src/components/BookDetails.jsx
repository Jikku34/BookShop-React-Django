/**
 * React component for displaying details of a book and allowing deletion.
 * 
 * This component fetches details of a book by its ID from a Django backend API
 * using Axios. It displays the book's name and price and provides a button to
 * delete the book. Error handling is implemented to handle network errors and
 * display appropriate error messages to the user.
 * 
 *  The JSX element representing the BookDetails component.
 */
import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams(); // Get the book ID from the URL parameters
    const navigate = useNavigate(); // Hook for navigating to different pages
    const [book, setBook] = useState(null); // State to store the book details
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(''); // State to store error messages

    /**
     * Fetches details of the book by its ID from the Django backend API.
     * Sets the book state upon successful fetch and updates loading state.
     * Handles errors and updates error state if any.
     */
    const getEntityById = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/book/${id}`);
            setBook(response.data);
            setLoading(false);
        } catch (error) {
            if (error.response) {
                setError(`Error Status Code: ${error.response.status} - ${error.response.data}`);
            } else {
                setError(`There was a problem with the axios request: ${error.message}`);
            }
            setLoading(false);
        }
    };

    /**
     * Deletes the book from the Django backend API by its ID.
     * Navigates to the home page upon successful deletion.
     * Handles errors and updates error state if any.
     */
    const deleteEntityById = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/book_delete/${id}`);
            navigate('/'); // Navigate to the home page after successful deletion
        } catch (error) {
            if (error.response) {
                setError(`Error Status Code: ${error.response.status} - ${error.response.data}`);
            } else {
                setError(`There was a problem with the axios request: ${error.message}`);
            }
        }
    };

    /**
     * Deletes the book upon confirmation from the user.
     */
    const deleteBook = async () => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            await deleteEntityById();
        }
    };

    /**
     * Fetches the book details when the component mounts.
     */
    useEffect(() => {
        getEntityById();
    }, []); // Empty dependency array ensures the effect runs only once

    /**
     * Renders the component JSX based on loading, error, and book states.
     */
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Book Not Found</div>;
    }

    return (
        <div>
            <button onClick={deleteBook} className='btn btn-danger'>
                Delete book
            </button>
            <h2>Book Name: {book.book_name}</h2>
            <h2>Book Price: {book.book_price}</h2>
        </div>
    );
};

export default BookDetails;
