import logo from './logo.svg';
import './App.css';
import { Analytics, AmazonPersonalizeProvider, AWSKinesisProvider } from '@aws-amplify/analytics';
import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);


Analytics.autoTrack('pageView', {
  enable: true,
  type: 'SPA'
});

Analytics.autoTrack('event', {
  enable: true
});


Analytics.addPluggable(new AWSKinesisProvider());

// Analytics.configure({
//   AmazonPersonalize: {
//     trackingId: 'fdsfsf', // TODO: Set to Personalize Tracking ID, e.g.: 'efd7edf5-7ddc-4732-b4b3-0374c6b721e9
//     region: 'us-east-1'
//   },
//   AWSKinesis: {
//     region: 'us-east-1'
//   }
// });

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
    streamName: 'ampplzKinesis-dev' 
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
