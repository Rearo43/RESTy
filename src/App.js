
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Form/form.scss'
import './components/Header/header.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}


function Header() {
  return (
  <header>
    <h1>ReSTy</h1>
    <h3>Paste your URL below.</h3>
  </header>
  )
}

function Form() {
  return (
    <form className="Form">
      <label>URL</label>
      <input type="text"></input>
      <button type="submit">GO!</button>
      {"\n"}
      <div class="radioButtons">
        <button type="radio" value="get">GET</button>
        <button type="radio" value="post">POST</button>
        <button type="radio" value="put">PUT</button>
        <button type="radio" value="delete">DELETE</button>
      </div>
    </form>
  )
}
// function Form() {
//   return (
//     <form className="Form">
//       <label>URL</label>
//       <input type="text"></input>
//       <button type="submit">GO!</button>
//       {"\n"}
//       <input type="radio" value="get"></input>
//       <label>GET</label>
//       <input type="radio" value="post"></input>
//       <label>POST</label>
//       <input type="radio" value="put"></input>
//       <label>PUT</label>
//       <input type="radio" value="delete"></input>
//       <label>DELETE</label>
//     </form>
//   )
// }

export default App;
