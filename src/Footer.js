import React from 'react';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
        <div className="container-fluid sticky-bottom bg-dark w-100">
  <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
    <p className="col-md-4 mb-0 text-muted">© 2022 Krivan Books Pvt. Ltd.</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
    <img src="/images.png" width={30} height={30} alt="Krivan" />Krivan Books
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Features</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
  </footer>
</div>
    )
}

export default Footer;