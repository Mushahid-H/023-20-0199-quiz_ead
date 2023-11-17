import React from 'react'
import MenuCard from './MenuCard'
import item1 from '../assests/cake.jpeg'
import item2 from '../assests/pastry.jpeg'
import item3 from '../assests/backedGood.jpg'
import item4 from '../assests/bread.jpeg'
import item5 from '../assests/chocoCake.jpeg'
import item6 from '../assests/cookie.jpeg'
const Menu = () => {
  return (
    <div className='bg-dark p-5 text-light' id='menu'>
      <div className='row row-col-md-3 g-3'>
        <h3>Our Offerings</h3>
        <MenuCard itemImg={item1} name={'cake'} price='90' />
        <MenuCard itemImg={item2} name={'Puff pastery'} price='100' />
        <MenuCard itemImg={item3} name={'Backed Good'} price='140' />
        <MenuCard itemImg={item4} name={'Bread'} price='50' />
        <MenuCard itemImg={item5} name={'Chocolate Cake'} price='500' />
        <MenuCard itemImg={item6} name={'Cookie'} price='200' />
      </div>
    </div>
  )
}

export default Menu
