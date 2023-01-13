import '../../styles/exercises.css';
import Lunges from '../../assets/img/lunges.png';
import Yoga from '../../assets/img/yoga-pose.png';
import Extended from '../../assets/img/extended.png';

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights"></span>Exercise
          </h2>
          <p>
            Aliquip fugiat velit mollit laborum ut veniam labore. <br />
            Consectetur elit eiusmod ipsum consequat laboris adipisicing commodo
            culpa in.
          </p>
        </div>
        {/* exercise list */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={Lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Sunt id incididunt ullamco mollit aute pariatur est enim
                adipisicing consequat.
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={Yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4>increased flexibility</h4>
              <p>
                Sunt id incididunt ullamco mollit aute pariatur est enim
                adipisicing consequat.
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={Extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Sunt id incididunt ullamco mollit aute pariatur est enim
                adipisicing consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
