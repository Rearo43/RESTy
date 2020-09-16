import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/index';
import Form from '../src/components/Form/index';
import Response from '../src/components/Response/index';
import Footer from '../src/components/Footer/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Response />
      <Footer />
    </div>
  );
}

export default App;
