import React from 'react'
import backImg from '../assests/backry.jpeg'

import Menu from './Menu.jsx'
import Contactus from './Contactus.jsx'
import Aboutus from './Aboutus.jsx'

const Home = () => {
  return (
    <>
      <div className='px-3 bg-dark text-light py-4 mt-5' id='home'>
        <div className='row'>
          <div className='col-md-8'>
            <p>
              Indulge in a symphony of flavors at our artisanal bakery. Welcome
              to
              <br />
              a world where the aroma of freshly baked wonders captivates your
              <br />
              senses. Our master bakers craft each creation with passion, using
              <br />
              only the finest ingredients to ensure every bite is pure delight.
              <br />
              <br />
              From flaky croissants to decadent cakes, experience the epitome of
              <br />
              taste and craftsmanship. Whether it's a special occasion or a
              <br />
              craving for the extraordinary, our bakery offers a haven for your
              <br />
              palate. Elevate your moments with the magic of our oven-fresh
              <br />
              delights. Your journey to exceptional taste begins here.
              <br />
            </p>
          </div>
          <div className='col-md-4'>
            <img src={backImg} alt='' className='img-fluid rounded-circle' />
          </div>
        </div>
      </div>
      <Menu />
      <Aboutus />
      <Contactus />
    </>
  )
}

export default Home
