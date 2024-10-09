import Pizza from '../assets/pizza.png';
import Birthday from '../assets/birthday.png';
import Website from '../assets/website.png';
import Calculator from '../assets/calculator.png';
import Header from './Header';
import Footer from './Footer';

export default function Project() {
    return (
        <>
        <Header />
        
        
        <section className='kl-primary flex justify-center'>
<div className=" w-1/2 flex-col text-white">
            <center>
                <div className=" flex-col cb-primary px-10 mt-10" style={{marginLeft:"120px"}} >
                    <h1 className="text-4xl  border-secondary mb-5 font-bold " >PROJECT</h1>
                    <p >These are some of my best Projects.  I have built these with React.JS and Tailwind. Check them out!</p>
                </div>
            </center>
                

      <div className="carousel kl-primary py-5" >
       <div id="slide1" className="carousel-item relative w-full flex justify-center py-10">

        
      <div className="flex justify-center  items-center text-black "> 
                <div className="card bg-base-100 max-w-sm shadow-md "> 
                    <figure className="px-10 pt-10">
                        <a href="https://pizza-zeta-one.vercel.app/"> 
                        <img
                        src={Pizza}
                        alt="PIZZA"
                        className="rounded" /></a>
                       
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PIZZA!</h2>
                        <p>This is my first Bootstrap project. </p>
                        <div className="card-actions">
                            <button className="btn btn-primary max-w-sm"><a href="https://pizza-zeta-one.vercel.app/">DETAILS</a></button>
                        </div>
                    </div>
                </div>
            </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>



    <div id="slide2" className="carousel-item relative w-full flex justify-center py-10 ">



    <div className="flex justify-center  items-center text-black "> 
                <div className="card bg-base-100 max-w-sm shadow-md "> 
                    <figure className="px-10 pt-10">
                        <a href="https://birthday-ten-virid.vercel.app/">
                        <img
                        src={Birthday}
                        alt="BIRTHDAY"
                        className="rounded" />
                        </a>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BIRTHDAY!</h2>
                        <p>This is my FIRST project in HTML abd CSS.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary max-w-sm"><a href="https://birthday-ten-virid.vercel.app/">DETAILS</a></button>
                        </div>
                    </div>
                </div>
    </div>



        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full flex justify-center  py-10">



          <div className="flex justify-center  items-center text-black "> 
                <div className="card bg-base-100 max-w-sm shadow-md "> 
                    <figure className="px-10 pt-10">
                    <a href="https://web-media.vercel.app/">
                        <img
                        src={Website}
                        alt="WEBSITE"
                        className="rounded" />
                        </a>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">WEBSITE!</h2>
                        <p>This was a normal html project, after this project i am became like a web-developer</p>
                        <div className="card-actions">
                            <button className="btn btn-primary max-w-sm"> <a href="https://web-media.vercel.app/"> DETAILS</a></button>
                        </div>
                    </div>
                </div>
            </div>




          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
      </div>
  <div id="slide4" className="carousel-item relative w-full flex justify-center py-10 ">




    <div className="flex justify-center  items-center text-black "> 
                <div className="card bg-base-100 max-w-sm shadow-md "> 
                    <figure className="px-10 pt-10">
                        <a href="https://glittering-pegasus-9a5174.netlify.app">
                        <img
                        src={Calculator}
                        alt="CALCULATOR"
                        className="rounded" />
                        </a>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CALCULATOR!</h2>
                        <p>This is my one of the pure java-script project </p>
                        <div className="card-actions">
                            <button className="btn btn-primary max-w-sm"><a href="https://glittering-pegasus-9a5174.netlify.app">DETAILS</a></button>
                        </div>
                    </div>
                </div>
            </div>



    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>

            
          
        </section>
        <Footer />
        </>
    )
}
