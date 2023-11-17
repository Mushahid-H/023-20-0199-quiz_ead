import React from 'react'

const Contactus = () => {
  return (
    <div className='row px-5 mt-3' id='contact'>
      <div className='col-md-6 '>
        <div class='mb-3'>
          <input
            type='text'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Full Name'
          />
        </div>
        <div class='mb-3'>
          <input
            type='text'
            class='form-control'
            id='exampleInputPassword1'
            placeholder='Address'
          />
        </div>
      </div>
      <div className='col-md-6 px-5'>
        <div class='mb-3'>
          <input
            type='text'
            class='form-control'
            id='exampleInputPassword1'
            placeholder='Phone'
          />
        </div>

        <div class='mb-3'>
          <input
            type='Email'
            class='form-control'
            id='exampleInputPassword1'
            placeholder='Email'
          />
        </div>
      </div>
      {/* <form> */}
      <div className='row'>
        <div className='col'>
          <textarea
            name='Desritpion'
            id=''
            cols='30'
            rows='10'
            className='w-100 p-3'
            placeholder='Description'
          ></textarea>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <button type='submit ' className='btn btn-primary float-end'>
            Submit
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  )
}

export default Contactus
