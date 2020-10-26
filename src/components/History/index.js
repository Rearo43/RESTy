import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './history.scss';

function History(props) {
  const APICalls = props.calls || {};

  const [req, setReq] = useState({});

  useEffect(() => {
    const method = 'get';
    const url = props.key;
    const res = props.data;

    setReq({ method, url, res });
  }, [props, setReq]);

  const onGoClick = async (event) => {
    event.preventDefault();

    props.onForm(req);
  };

  return (
    <>
      <section className='nav'>
        <NavLink
          to='/'
          style={{
            textDecoration: 'none',
            color: 'aliceblue',
            fontFamily: 'Solway, serif',
          }}
        >
          Home
        </NavLink>
      </section>
      <section className='history'>
        {Object.keys(APICalls).map((key) => (
          <section key={key} className='card'>
            <div>{props.calls[key].method}</div>
            <div onSubmit={onGoClick}>{props.calls[key].url}</div>
          </section>
        ))}
      </section>
    </>
  );
}

export default History;
