import React from 'react'
import '../index.css'
import Rectangle9 from '../images/Rectangle 9.png'
import Rectangle5 from '../images/Rectangle 5.png'
import Rectangle8 from '../images/Rectangle 8.png'
import Rectangle4 from '../images/Rectangle 4.png'

const Menu = () => {
  return (
    <section class="menu" id="menu">
    <div class="menu-img-container">
      <div
        class="divider-img"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <img src={Rectangle9} alt="" class="menu-image1" />
      </div>
      <div
        class="divider2-img"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <img src={Rectangle5} alt="" class="menu-image2" />
        <img src={Rectangle8} alt="" class="menu-image2" />
      </div>
    </div>
    <div class="btn-buynow-container">
      <button class="btn-buynow">BUY NOW</button>
    </div>
    <div class="menu-text-container">
      <h1 class="choose-eat" data-aos="zoom-in">CHOOSE & EAT</h1>
    </div>
    <div class="paragraph-menu-container">
      <p class="paragraph-menu">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        augue ut lectus arcu bibendum at varius vel pharetra.
      </p>
    </div>
    <div
      class="white"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <div class="white-container">
        <div class="item-container">
          <div class="title-text-container">
            <div class="title-white-container">
              <h3 class="title-text-white">EVENT</h3>
            </div>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor incididunt ut labore et dolore <br />
              magna aliqua. Eu augue ut lectus arcu bibendum at varius
              <br />
              vel pharetra. Arcu cursus vitae congue mauris rhoncus. <br />
              Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
              <br />
              facilisi cras.
            </p>
            <div class="ellipse-container">
              <div class="ellipse-active"></div>
              <div class="ellipse"></div>
              <div class="ellipse"></div>
            </div>
          </div>

          <img src={Rectangle4} alt="" class="img-white" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Menu