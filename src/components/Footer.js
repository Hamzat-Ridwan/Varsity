import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <section class="footer">
            <h4>About Us</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsa fugiat corrupti ut,
                molestias atque quas 
            </p>
            <p class="last">Made with <FaHeart color='red' className='love'/> By Ridwan Hamzat</p>
        </section>
    </>
  )
}

export default Footer