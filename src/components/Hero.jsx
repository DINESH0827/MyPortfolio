import HeroImg from '../assets/image.png'

import {FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';


export default function Hero() {
    return (
    <>
    <Header />
 <section className='flex md:flex-row  flex-col px-5 py-20 kl-primary justify-center'>
        <div className='w-1/2 flex flex-col mt-5'>
            <h1 className='text-white text-6xl pt-10 font-hero-font'>Hi , <br /> I'm <span className='text-black'>SIVASAKTHI V</span>
                <p className='text-2xl'>I'm a Full Stack Developer</p>
            </h1>
        
            <div className='flex py-10 '>
                <a href="https://x.com/DEHT151" className='pr-5 hover:text-black'><FaTwitter className='text-white' size={40} /></a>
                <a href="https://www.facebook.com/profile.php?id=100054790338647"className='pr-5'><FaFacebookSquare className='text-white ' size={40} /></a>
                <a href="#"className='pr-5'><FaLinkedin className='text-white ' size={40} /></a>

            </div>
        </div>
        
        <img  src={HeroImg} alt="HeroImg"/>
    </section>
    <Footer />
    </> 
    )
}
