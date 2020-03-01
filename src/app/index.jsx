import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes'
import Header from '../components/Header';
import '../styles/app.scss'
import { UserProvider } from '../context/userContext';

const App = () => (
  <>
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  </>
);

export default App;
