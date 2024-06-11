import React, {useState, useEffect } from 'react';
import Phonebook from './Phonebook/Phonebook';


export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '90px',
      }}
    >
    {isLoading ? (
    <p> Loading... </p>
    ) : (
    <>
    <h1>AEM React homework template</h1>
    <Phonebook />
    </>
  )}
    </div>
  );
};
