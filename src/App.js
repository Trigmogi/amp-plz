import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import Analytics from '@aws-amplify/analytics';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);
Analytics.autoTrack('pageView', {
  enable: true,
  type: 'SPA'
});

Analytics.autoTrack('event', {
  enable: true
});


function App() {
  Analytics.record({ name: 'createDeal-start'});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
