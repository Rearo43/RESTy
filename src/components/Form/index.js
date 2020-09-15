import React from 'react';

export default function Form() {
    return (
      <form className="Form">
        <label>URL</label>
        <input type="text"></input>
        <button type="submit">GO!</button>
        <div class="radioButtons">
          <button type="radio" value="get">GET</button>
          <button type="radio" value="post">POST</button>
          <button type="radio" value="put">PUT</button>
          <button type="radio" value="delete">DELETE</button>
        </div>
      </form>
    )
  }
  // export default function Form() {
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
