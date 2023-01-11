import '../../styles/testimonials.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import Avatar01 from '../../assets/img/avatar01.png';
import Avatar02 from '../../assets/img/avatar02.png';
const Testimonials = () => {
  return (
    <section>
      <div className="container sliders">
        <h2 className="section__title">Testimonials</h2>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__img-01">
                <img src={Avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Eu labore id veniam dolor magna do tempor laborum fugiat
                consequat reprehenderit. Consequat do ut nulla culpa proident
                laborum et sunt consectetur do eiusmod officia voluptate.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__item">
              <div className="slider__img-02">
                <img src={Avatar02} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Eu labore id veniam dolor magna do tempor laborum fugiat
                consequat reprehenderit. Consequat do ut nulla culpa proident
                laborum et sunt consectetur do eiusmod officia voluptate. Esse
                ipsum eu non voluptate aute. Irure minim adipisicing voluptate
                sit ipsum.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
