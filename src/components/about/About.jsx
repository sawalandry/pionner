import React from 'react'
import './about.css';
import Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>12+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aut, possimus adipisci nulla labore accusamus porro aliquam 
            maxime sit ea maiores impedit beatae eaque! Corporis aspernatur
            molestias non maxime facilis ut.
          </p>

          <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About