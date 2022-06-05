import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri'; 
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ljakf5', 'template_u6278g9', form.current, 'Eo2M9Ow5TxNIVK9YE')

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>machinelab2021@gmail.com</h5>
            <a href="mailto:machinelab2021@gmail.com" target="_blank" rel="noreferrer">send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Landry Sawa Ingabire</h5>
            <a href="https://m.me/" target="_blank" rel="noreferrer">send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+256 776 050 007</h5>
            <a href="https://api.whatsapp.com/send?phone+256776050007" target="_blank" rel="noreferrer">send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text " name='name' placeholder='Your Full Name' required />
          <input type="email " name='email' placeholder='Enter your Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required ></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact