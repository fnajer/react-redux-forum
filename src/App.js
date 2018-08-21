import React, { Component, Fragment } from 'react';

import Noty from './components/Noty';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Channels from './components/Channels';
import AppRouter from './components/AppRouter';
import CreateThreadButton from './components/CreateThread/CreateThreadButton';
import CreateThread from './components/CreateThread';
import CreateReply from './components/CreateReply';

class App extends Component {
  render() {
    const isNotAuthPath = this.props.history.location.pathname !== '/register' && this.props.history.location.pathname !== '/login';
    return (
      <Fragment>
        <Noty />
        <Navbar />
        <CreateThread />
        <CreateReply />
        <div className="my-4">
          <div className="container">
            <div className="row justify-content-center">
              {
                 isNotAuthPath &&
                <div className="col-md-4">
                  <CreateThreadButton />
                  <Filters />
                  <Channels />
                </div>
              }
              <div className="col-md-8">
                <AppRouter />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
