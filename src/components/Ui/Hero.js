import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import heroImg from '../../assets/img/gym-02.png';
import dumpleIcon from '../../assets/img/dumble.png';
import '../../styles/hero.css';
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/* hero content */}
          <div className="hero__content">
            <h2 className="section__title">
              Exercise in the key to a
              <span className="highlights"> Healthy</span> lifestyle
            </h2>
            <p>
              Fugiat eu amet eiusmod deserunt mollit laborum. Ipsum cillum
              pariatur nulla proident elit nostrud ipsum sunt non ad id irure.
             
              Labore enim nulla quis laboris do ad aliqua minim sit dolor ea
              aliqua deserunt ex.
            </p>

            <div className="hero__btns">
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <BsFillPlayFill />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* hero img */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate">
                <h5>Heart Rate</h5>
                <span>
                  <FaHeartbeat />
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div className="gym__location">
                <span>
                  <HiLocationMarker />
                </span>
                <h5>
                  Find a new
                  <br /> gym near you
                </h5>
              </div>
              <div className="dumble__icon">
                <img src={dumpleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
