import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes/StackNav.routes';


export default function App() {

  return (
    
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </>
    
  );
}
