import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';
import img1 from "../assets/images/ARTNoSpace.png";
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <div className='footer-container'>
            <section className= 'footer-subscription'>
                <p className='footer-subscription-heading'> 
                Join the ART newsletter to receive updates on our projects
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time. 
                </p>
            <div className='input-areas'>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/augment.reality.together/">Instagram</a>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img 
                    src={img1} 
                    width = "200"
                    height = "200"
                    alt = "Bottom Logo"
                    />
            </Link>
          </div>
          <small class='website-rights'>ART © 2021</small>
          <div class='social-icons'>
            <SocialIcon
              class='social-icon-link facebook'
              url='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            />
            <SocialIcon
              class='social-icon-link instagram'
              url='https://www.instagram.com/augment.reality.together/'
              target='_blank'
              aria-label='Instagram'
            />
            <SocialIcon
              class='social-icon-link youtube'
              url='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            />
            <SocialIcon
              class='social-icon-link twitter'
              url='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
            />
            <SocialIcon
              class='social-icon-link LinkedIn'
              url='https://www.linkedin.com/company/augment-reality-together'
              target='_blank'
              aria-label='LinkedIn'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;