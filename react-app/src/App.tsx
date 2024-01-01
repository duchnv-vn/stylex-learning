import React from 'react';
import inject from '@stylexjs/dev-runtime';
import Home from './pages/Home/Home';

function App() {
  if (process.env.NODE_ENV === 'development') {
    inject({
      classNamePrefix: 'x',
      dev: true,
      test: false,
      useRemForFontSize: false,
      styleResolution: 'application-order',
    });
  }

  return (
    <div className='App'>
      <Home
        homeStyles={{ backgroundColor: 'blue', marginTop: 32 }}
        titleStyles={{ cursor: 'pointer', textAlign: 'center' }}
      />
    </div>
  );
}

export default App;
