import React from 'react'
// import PropTypes from 'prop-types'
import loading from '../loading.gif'

const Spinner=()=> {

    return (
      <div className='text-center' style={{height:"100%"}}>
        <img  className="my-3" src={loading} alt="loading" />
      </div>
    )
  
}

export  default Spinner;