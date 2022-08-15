import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav =()=>{
        if(window.scrollY>= 10){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);
  return (
    <>
        <nav className={scrollNav? 'scroll' : ''}>
            <p className='logo'><span>U</span>NILORIN</p>
            <FaBars className='menu-bar' onClick={toggle} />
            <div className="nav-links">
                <ul>
                    <li><Link to="home" smooth={true} duration={500} >HOME</Link></li>
                    <li><Link to="courses" smooth={true} duration={500}>COURSES</Link></li>
                    <li><Link to="campuses" smooth={true} duration={500}>CAMPUS</Link></li>
                    <li><Link to="testimonials" smooth={true} duration={500}>TESTIMONIAL</Link></li>
                    <li><Link to ="contact" smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
            </div>
            </nav>
    </>
  )
}

export default Navbar