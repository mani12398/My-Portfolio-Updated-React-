import React from 'react';
import "./App.css";
import Header1 from './components/header/Header1';
import Home1 from './components/home/Home1';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () =>
{
  return(
    <>
    <Header1 />
    <main className='main'>
      <Home1/>
      <About/>
      <Skills/>
    </main>
    </>
  )
}


export default App;
