/**
 * Main entry point of the React application.
 * 
 * This component serves as the root component of the React application.
 * It imports necessary components such as DemoNavbar, Footer, Home, and BookDetails.
 * It sets up routing using React Router to navigate between different pages.
 * 
 * The JSX element representing the root component of the application.
 */

import 'bootstrap/dist/css/bootstrap.min.css';{/* Include Bootstrap CSS */}
import DemoNavbar from './components/DemoNavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';

/**
 * Main entry point of the React application.
 * 
 *  The JSX element representing the root component of the application.
 */
function App() {
  return (
    <>
      
      <DemoNavbar /> {/* Render the navigation bar component */}
    
        <Routes> {/* Define routes for different pages */}
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for viewing single book details */}
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      <Footer /> {/* Render the footer component */}
    </>
  );
}

export default App;

