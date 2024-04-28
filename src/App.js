import React from 'react';
import "./App.css";
import Header1 from './components/header/Header1';
import Home1 from './components/home/Home1';

const App = () =>
{
  return(
    <>
    <Header1 />
    <main className='main'>
      <Home1/>
    </main>
    </>
  )
}


export default App;
