import React, { Component } from 'react';
import { MessagesList } from './containers/MessagesList';
import { Sidebar } from './containers/Sidebar';
import { NewMessage } from './containers/NewMessage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className={ 'App-container' }>
        <Sidebar />
        <section className={ 'App-holder' }>
          <MessagesList />
          <NewMessage />
        </section>
      </div>
    );
  }
}

export default App;
