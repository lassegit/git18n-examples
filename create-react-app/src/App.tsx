import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            id="frontpage.title"
            defaultMessage="Edit {code} and save to reload."
            values={{ code: <code>src/App.tsx</code> }}
          />
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <FormattedMessage defaultMessage="Learn React" id="frontpage.learn" />
        </a>
      </header>
    </div>
  );
}

export default App;
