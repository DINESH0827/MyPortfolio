import ProImg from '../assets/Css.png'
import Header from './Header';
import Footer from './Footer';


export default function About() {
    return(
    <>
    <Header />
     <section className='flex md:flex-row flex-col kl-secondary px-5 py-20' > 
        <div className='py-10 md:w-1/2 '>
            <img src={ProImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4 border-[#56169E] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi ,  My name is SIVASAKTHI V. I'm a Full Stack Developer. I bulit beautiful Wesite with REact.JS and Tailwind </p>
        <p className='pb-5'>I am proficient in Fronted skills like React.JS , Tailwind css many more. </p>
        </div>
           
        </div>
    </section>
    <Footer />
    </>
    )
}
