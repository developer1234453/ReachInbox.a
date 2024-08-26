import React from 'react';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto">
        <Link to="/" className="text-xl">ReachInbox</Link>
        <Link to="/login" className="ml-4">Login</Link>
        <Link to="/onebox" className="ml-4">OneBox</Link>
      </nav>
    </header>
  );
};

export default Header;
