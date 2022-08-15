import React from 'react'
import structure from "../images/structure.jpeg"
import admin from "../images/images (24).jpeg"
import walkway  from "../images/images (15).jpeg"

const Campuses = () => {
  return (
    <>
        <section id="campuses" class="campus">
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
            <div class="row">
                <div class="campus-col">
                    {/* <img src="../images/images (16).jpeg" alt='structure'/> */}
                    <img src={structure} alt='structure'/>
                    <div class="layer">
                        <h3>STRUCTURE</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={admin} alt='admin' />
                    <div class="layer">
                        <h3>ADMINISTRATION</h3>
                    </div>
                </div>
                <div class="campus-col">
                    <img src={walkway} alt='serenity' />
                    <div class="layer">
                        <h3>SERENITY</h3>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Campuses