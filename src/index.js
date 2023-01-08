import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './index.css';

const header = ReactDOM.createRoot(document.getElementById('CodeTexoHeader'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('CodeTexoMain'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('CodeTexoFooter'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);