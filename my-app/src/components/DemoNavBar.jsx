
import './Navbar.css';
import { Link } from 'react-router-dom';

const DemoNavbar = () => {
  return (
    <nav className="premium-navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#premiumNavbarNav" aria-controls="premiumNavbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="premiumNavbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/add'}>Add</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
    
        </div>
      </div>
    </nav>
  );
}

export default DemoNavbar;
