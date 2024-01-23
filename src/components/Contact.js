import React from 'react'
import '../index.css'
import HamburgerWhite from '../images/openmoji_hamburger-white.png'
import FacebookLine from '../images/mingcute_facebook-line.png'
import Instagram from '../images/mdi_instagram.png'
import Twitter from '../images/ri_twitter-line.png'

const Contact = () => {
  return (
    <section class="contact" id="contact">
        <div
          class="contacts"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="contact-container">
            <div class="contact-img-container">
              <img
                src={HamburgerWhite}
                alt=""
                class="contact-image"
              />
              <h3 class="contact-title">Burger ka sakin</h3>
            </div>
            <p class="contact-text-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum
              at varius vel pharetra. <br />
              Arcu cursus vitae congue mauris rhoncus. Rutrum tellus
              pellentesque <br />
              eu tincidunt tortor aliquam nulla facilisi cras.
            </p>
            <p class="location-p">
              Km.30 National Road, Tunasan, Muntinlupa,<br />
              1773 Metro Manila
            </p>
            <div class="contact-logo">
              <a href="https://www.facebook.com/rogel.gerodiaz30?mibextid=ZbWKwL"
                ><img
                  src={FacebookLine}
                  alt=""
                  class="img-logo-contact"
              /></a>
              <a href="https://www.instagram.com/wooojeeel/?funlid=vMJ4VBsFuQhWhXMt"
                ><img
                  src={Instagram}
                  alt=""
                  class="img-logo-contact"
              /></a>
              <a href="https://twitter.com/GerodiazRogel"
                ><img
                  src={Twitter}
                  alt=""
                  class="img-logo-contact"
              /></a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact