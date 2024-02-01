import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BurgerHome from '../images/burge home.png';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div
          className="home-text"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="dotted-text-container">
            <p className="dotted-text">
              Savor the Flavor: Where Every Bite is a <br />Burger Bliss!
            </p>
          </div>
          <h1>BURGER KA SAKIN</h1>
          <h1>WEEK</h1>
        </div>
        <div
          className="image"
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
        >
          <img
            src={BurgerHome}
            alt="burger"
            className="burger-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
