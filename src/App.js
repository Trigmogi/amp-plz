import logo from './logo.svg';
import './App.css';
import { Analytics, AmazonPersonalizeProvider, AWSKinesisProvider } from '@aws-amplify/analytics';
import awsconfig from './aws-exports';


Analytics.addPluggable(new AWSKinesisProvider());

Analytics.configure({
  AWSKinesis: {
    region: 'us-east-1'
  }
});

function App() {
  Analytics.record({
    data: {
        eventType: 'PageView',
        userId: 'me',
        "safasf": 'gdsgd',
        timestamp: new Date()
    },
    streamName: 'work-dev' 
}, 'AWSKinesis')

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
