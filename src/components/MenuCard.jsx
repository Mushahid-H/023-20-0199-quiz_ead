import React from 'react'

const MenuCard = ({ itemImg, name, price }) => {
  return (
    <div className='col-md-3'>
      <div class='card'>
        <img
          src={itemImg}
          class='card-img-top'
          alt='...'
          width={100}
          height={200}
        />
        <div class='card-body'>
          <h5 class='card-title'>{name}</h5>
          <p class='card-text'>Rs. {price}/=</p>
          <a href='/' class='btn btn-primary'>
            Order Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
