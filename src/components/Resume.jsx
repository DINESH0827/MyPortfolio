import ResumeImg from '../assets/ResumeImg.png'
import Header from './Header';
import Footer from './Footer';


export default function Resume() {
    return(
        <>
    <Header />
     <section className='flex md:flex-row flex-col kl-secondary px-5 py-20 '> 
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img  className='h-[400px] w-full' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-[#56169E] mb-5 w-[170px] font-bold'>RESUME</h1>
            <p className='pb-5'>You can view my Resume <a className='btn' href='#'>DOWNLOAD</a></p>
        </div>
           
        </div>
    </section>
    <Footer />
    </>
    )
}
