import React from 'react'
import  avatar1 from '../images/images (25).jpeg'
import avatar2 from '../images/images (26).jpeg'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'

const Testimonials = () => {
  return (
    <>
        <section id="testimonials" class="testimonials">
            <h1>What Our Students Say</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
            <div class="row">
                <div class="testimonials-col">
                    <img src={avatar1} alt='ava' />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Assumenda pariatur consectetur expedita vitae reiciendis minus
                             nesciunt dolores repellendus, 
                            at quibusdam id tenetur a. Labore, suscipit magnam. 
                            Quia commodi esse veritatis.</p>
                        <h3>Ridwan Hamzat</h3>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                    </div>
                </div>
                <div class="testimonials-col">
                    <img src={avatar2} alt='ava' />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Assumenda pariatur consectetur expedita vitae reiciendis minus
                             nesciunt dolores repellendus, 
                            at quibusdam id tenetur a. Labore, suscipit magnam. 
                            Quia commodi esse veritatis.</p>
                        <h3>Mustapha Shu'aib</h3>
                        <FaStar className='star' />
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStarHalfAlt className='star'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials