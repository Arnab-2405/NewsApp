import React from 'react'
import Spin from './Spinner.gif'

const Spinner =()=>{
  
    return (
      <>
        <div className='text-center'>
            <img src={Spin} alt="Loading Wheel" />
        </div>
      </>
    )
  }

export default Spinner
