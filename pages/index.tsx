import React from 'react';
import Home from '../components/Home';

class Index extends React.Component {
  componentDidMount() {
    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker.register('/service-worker.js')
    //     .then(() => {
    //       console.log('Registered');
    //     }).catch((err) => {
    //       console.log('error', err);
    //     });
    // }
  }

  render() {
    return <Home />;
  }
}

export default Index;
