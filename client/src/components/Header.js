import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>PROYECT</h1>
      <nav>
        <ul>
          <li>
            <Link to="/films">ALL FILMS</Link>
            <Link to="/actors">ALL ACTORS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
