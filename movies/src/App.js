import React from 'react';
import './App.css';
import Image from './components/image';
import Text from './components/text';
import BoldText from './components/boldText';

function App() {
  return (
    <div className="App">
      {React.createElement(
        'h1',
        {className: 'main-title'},
        'Hello World'
      )}
      <Image/>
      <Text/>
      <BoldText/>
    </div>

  );
}

export default App;
