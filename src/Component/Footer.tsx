import React from 'react'
import logo from '../image/second-logo.png'
import dark_logo from '../image/thrid logo.png'

function Footer() {
  return (
    <div>
<div className="text-center mt-24 text-xl text-zinc-300 font-serif">
    Leading the charge for Industries!
</div>
<div className="flex gap-5 mb-10 mt-8 -ml-5 overflow-x-hidden">

    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
    <img className='w-40 h-16 rounded-lg' src={dark_logo} alt="logo" />
</div>

    </div>
  )
}

export default Footer