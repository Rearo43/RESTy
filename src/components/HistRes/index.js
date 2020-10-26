import React from 'react';
import RJSON from 'react-json-view';
import loading from '../Loading/loading.gif';

function splitRes(props) {
  if (props.results) {
    return (
      <>
        <h3>Headers</h3>
        <RJSON src={props.headers} />

        <h3>Results</h3>
        <RJSON src={props.results} />
      </>
    );
  }
}

const Results = (props) => {
  return (
    <section>
      {props.loading ? (
        <div>
          <img src={loading} alt='Trying to Load Data.' />
        </div>
      ) : (
        splitRes(props)
      )}
    </section>
  );
};

export default Results;
