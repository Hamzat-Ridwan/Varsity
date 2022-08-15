import React from 'react'
import library from "../images/images (14).jpeg"
import stadium from '../images/images (21).jpeg'
import dam from '../images/images (23).jpeg'

const Facilities = () => {
  return (
    <>
        <section class="facilities">
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
            <div class="row">
                <div class="facilities-col">
                    <img src={library} alt='lb' />
                    <h3>World Class Library</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam ipsa odio unde veritatis debitis quas ratione dolor, </p>
                </div>
                <div class="facilities-col">
                    <img src={stadium} alt='stad' />
                    <h3>Stadium</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam ipsa odio unde veritatis debitis quas ratione dolor, </p>
                </div>
                <div class="facilities-col">
                    <img src={dam} alt="dam" />
                    <h3>Dam Bothy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam ipsa odio unde veritatis debitis quas ratione dolor, </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Facilities