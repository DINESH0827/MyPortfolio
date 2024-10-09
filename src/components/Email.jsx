import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_fz27ems', 'template_jw0tpau', form.current, 'EuPNuu0p0GXP8125Z')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Error sending message. Please try again.');
      });
      
    e.target.reset(); // Reset the form after submission
  };

  return (
    <>
    <Header />
    <div className='flex justify-center kl-primary py-20'>
    <section className="w-4/5 md:w-fit grid justify-items-center" id="contact">
      <span className="section-subtitle mb-2">Contact Me</span>
      <h2 className="section-title mb-5">Get In Touch</h2>

      <div className="contact__container bd-grid">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__inputs grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="user_name" // Name of the input field
              placeholder="Name" 
              className="contact__input p-2 border border-gray-300 rounded" 
              required
            />
            <input 
              type="email" 
              name="user_email" // Name of the input field
              placeholder="Email" 
              className="contact__input p-2 border border-gray-300 rounded" 
              required
            />
          </div>

          <input 
            type="text" 
            name="project" // Name of the input field
            placeholder="Project" 
            className="contact__input p-2 border border-gray-300 rounded w-full mt-4" 
            required
          />

          <textarea 
            name="message" // Name of the input field
            placeholder="Message" 
            className="contact__input p-2 border border-gray-300 rounded w-full mt-4" 
            rows="10" 
            required
          />

          <input 
            type="submit" 
            value="Send Message" 
            className="button contact__button mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 " 
          />
        </form>
      </div>
    </section>
    </div>
    <Footer />  
    </>
  );
}

export default Email;