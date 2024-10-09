import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (

      <header className="flex justify-between  right-0 left-0 px-5 py-3 kl-primary" >
            
            <a className='' href=""><img src={logo} width="50px" height="50px" alt="Logo" /></a>
            <nav className="hidden md:block ">
                <ul className="menu menu-horizontal px-1 flex text-white">

                    <li><Link to="/" className="hover:underline">HOME</Link></li>
                    <li><Link to="/about" className="hover:underline">ABOUT</Link></li>
                    <li><Link to="/project" className="hover:underline">PROJECTS</Link></li>
                    <li><Link to="/resume" className="hover:underline">RESUME</Link></li>
                    <li><Link to="/email" className="hover:underline">CONTACT US</Link></li>

                </ul>
            </nav>
              {toggleMenu && <nav className="block md:hidden md:fixed right-0 left-0 ">
                <ul className="  flex flex-col text-white  mobile-nav">
                <li><Link to="/" className="hover:underline">HOME</Link></li>
                <li><Link to="/about" className="hover:underline">ABOUT</Link></li>
                    <li><Link to="/project" className="hover:underline">Projects</Link></li>
                    <li><Link to="/resume" className="hover:underline">RESUME</Link></li>
                    <li><Link to="/email" className="hover:underline">CONTACT US</Link></li>

                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
      </header>
    )
}