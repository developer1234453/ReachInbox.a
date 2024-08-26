import React from 'react';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl">Welcome to ReachInbox</h1>
        <p className="mt-4">This is the home page.</p>
      </main>
    </div>
  );
};

export default HomePage;
