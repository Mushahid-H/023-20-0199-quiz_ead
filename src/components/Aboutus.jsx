import React from 'react'
import Staff from '../assests/staff.jpeg'
const Aboutus = () => {
  return (
    <div id='about' className='bg-secondary text-black'>
      <div className='row px-4 text-center p-5'>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <h3>About US</h3>
        </div>
        <div className='col-md-6'>
          <img
            src={Staff}
            alt=''
            width={150}
            height={150}
            className='rounded-circle'
          />
        </div>
      </div>
      <div className='row px-5'>
        <div className='col'>
          <p>
            At our bakery, baking isn't just a process; it's an art, a passion
            that's woven into every loaf, pastry, and confection we create.
            Established with a vision to redefine indulgence, we take pride in
            crafting experiences that transcend the ordinary. Our story began
            with a small kitchen and a big dream – to infuse the world with the
            warmth of freshly baked goods.
            <br />
            <br /> What sets us apart is our unwavering commitment to quality.
            We meticulously source the finest ingredients, from velvety
            chocolate to locally grown fruits, ensuring that every bite tells a
            tale of exceptional flavor. But it's not just about ingredients;
            it's about the hands that shape them. Our dedicated team of master
            bakers pours their heart into each recipe, combining time-honored
            techniques with innovative twists. <br /> <br /> From the moment you
            step into our bakery, you're enveloped in a symphony of scents and
            sights that awaken your senses. Every creation that graces our
            shelves is a result of countless hours of experimentation,
            dedication, and a genuine love for baking. But we're more than just
            bakers; we're a community brought together by a shared love for all
            things delicious. <br /> <br /> As we knead, roll, and bake, we're
            not just making pastries – we're crafting memories. From birthday
            celebrations marked by our custom cakes to lazy Sunday mornings made
            better with our artisanal bread, we're there for life's sweetest
            moments. Our journey is one of passion, flavor, and the joy that
            comes from spreading happiness, one delectable treat at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
