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
  } else {
    return (
      <>
        <h3>
          <small>
            <small>
              <em>Test URL: https://pokeapi.co/api/v2/pokemon</em>
            </small>
          </small>
        </h3>
        <small>
          <small>
            <small>
              <h5>
                If you've already tried your URL and this message persists,
                <br></br>
                please check the validity of your URL.
              </h5>
            </small>
          </small>
        </small>
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

/// HOW TO USE IFRAME EXAMPLE:

// const Component = React.createClass({
//   iframe: function () {
//     return {
//       __html: this.props.iframe,
//     };
//   },

//   render: function () {
//     return (
//       <div>
//         <div dangerouslySetInnerHTML={this.iframe()} />
//       </div>
//     );
//   },
// });

// const iframe =
//   '<iframe src="https://www.example.com/show?data..." width="540" height="450"></iframe>';
