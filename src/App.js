import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import md5 from 'md5';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Response from './components/Response';
import History from './components/History';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {},
      loading: false,
      request: {},
    };
  }

  reqs = (request) => {
    this.setState({ request });
  };

  res = (headers, results) => {
    this.setState({ headers, results });
  };

  loadingQ = () => {
    this.setState({ loading: !this.state.loading });
  };

  addToHist(request) {
    let getRes = md5(JSON.stringify(request));

    const history = { ...this.state.history, [getRes]: request };

    this.setState({ history }, () => {
      localStorage.setItem(
        'API Call History.',
        JSON.stringify(this.state.history)
      );
    });
  }

  onForm = async (request) => {
    try {
      let res = await axios(request);

      this.loadingQ();
      this.reqs(request);
      this.loadingQ();
      this.addToHist(request);
      this.res(res.headers, res.data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <section className='App'>
          <Header />

          <section>
            <Switch>
              <Route exact path='/'>
                <Form onForm={this.onForm} request={this.state.request} />
                <Response
                  headers={this.state.headers}
                  loading={this.state.loading}
                  results={this.state.results}
                />
              </Route>
              <Route exact path='/history'>
                <History calls={this.state.history} />
              </Route>
            </Switch>
          </section>

          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
