import React from 'react'
import './About.css';
import aboutImg from '../../images/about-img.jpg';



const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />

          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Booknova</h2>
            <p className="fs-17">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quaerat velit dolor ab saepe ullam provident illo natus adipisci. Facere vel reprehenderit sed illum at harum quos adipisci iste.</p>
            <p className="fs-17">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo quia voluptatem repudiandae vero laborum ea esse explicabo rem a est hic nihil fuga, qui dicta natus molestias sint consectetur eligendi.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About