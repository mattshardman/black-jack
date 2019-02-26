import React from 'react';
import BlackJackTable from '../components/BlackJackTable';

class Index extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => {
          console.log('Registered');
        }).catch((err) => {
          console.log('error', err);
        });
    }
  }

  render() {
    return <BlackJackTable />;
  }
}

export default Index;
