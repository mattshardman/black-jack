import React from 'react';
import { register, unregister } from 'next-offline/runtime'

import Home from '../components/Home';

function Index() {
    React.useEffect(() => {
      register()

      return () => unregister()
    }, []);
    
    return <Home />;
}

export default Index;
