
import './App.css';
import Header from './components/Header';
import {useState} from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Courses from './components/Courses';
import Campuses from './components/Campuses';
import Navbar from './components/Navbar';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Call from './components/Call';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Header toggle={toggle} />
      <Courses/>
      <Campuses/>
      <Facilities/>
      <Testimonials/>
      <Call/>
      <Footer/>
    </div>
  );
}

export default App;
