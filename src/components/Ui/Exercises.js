import '../../styles/exercises.css';
import Lunges from '../../assets/img/lunges.png';
import Yoga from '../../assets/img/yoga-pose.png';
import Extended from '../../assets/img/extended.png';

const Exercises = () => {
  return (
    <section>
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
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={Lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Sunt id incididunt ullamco mollit aute pariatur est enim
                adipisicing consequat. Fugiat consectetur veniam elit ullamco
                tempor aute culpa excepteur enim eiusmod laborum. Velit enim ut
                amet culpa et laboris. Nulla et dolore sint voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
