import '../../styles/start.css';
import TrainerImg from '../../assets/img/trainer.png';
const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={TrainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights"> change</span>?
              <p>
                Est ullamco fugiat qui exercitation Lorem duis. Laborum amet
                minim non minim aliqua ullamco velit irure. Non quis Lorem enim
                nostrud. Culpa eiusmod adipisicing consectetur est aliquip ex
                ea. Incididunt magna cillum irure incididunt occaecat elit
                laborum ut esse excepteur adipisicing officia ut. Dolor aute
                occaecat cupidatat nisi laborum cillum non. Anim duis in
                proident in sit commodo pariatur commodo excepteur excepteur
                cillum magna.
              </p>
              <button className="register__btn">Get Started</button>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
