import React from 'react'
import "./home1.css";
import Social1 from './Social1';

const Home1 = () => {
  return (
    <section className="homw section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social1/>
                <div className="home__img"></div>
                <Data/>
            </div>
        </div>
    </section>
  )
}

export default Home1