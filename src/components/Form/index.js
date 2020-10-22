import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Form(props) {
  const [req, setReq] = useState({});

  useEffect(() => {
    const method = props.request.method || 'get';
    const url = props.request.url;
    const res = props.request.data;

    setReq({ method, url, res });
  }, [props, setReq]);

  const onURL = (event) => {
    let url = event.target.value;

    setReq({ ...req, url });
  };

  const onMethod = (method) => {
    setReq({ ...req, method });
  };

  const onRes = (event) => {
    try {
      let data = JSON.parse(event.target.value);

      setReq({ ...req, data });
    } catch (error) {
      console.log(error);
    }
  };

  const onGoClick = async (event) => {
    event.preventDefault();

    props.onForm(req);
  };

  return (
    <>
      <NavLink to='/history'>History</NavLink>

      <form className='Form' onSubmit={onGoClick}>
        <label>URL</label>
        <input type='text' onChange={onURL}></input>

        <button>GO!</button>

        <div className='radioButtons'>
          <button type='radio' value='get' onChange={() => onMethod('get')}>
            GET
          </button>
          <button type='radio' value='post' onChange={() => onMethod('post')}>
            POST
          </button>
          <button type='radio' value='put' onChange={() => onMethod('put')}>
            PUT
          </button>
          <button
            type='radio'
            value='delete'
            onChange={() => onMethod('delete')}
          >
            DELETE
          </button>
        </div>

        <textarea onChange={onRes} />
      </form>
    </>
  );
}

export default Form;
