import '../../styles/pricing.css';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
const Pricing = () => {
  return (
    <section>
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Consectetur proident officia eu ad aliqua consectetur aliquip.
            <br />
            Exercitation sint ex esse nostrud irure eiusmod commodo eu anim.
          </p>
        </div>
        {/* pricing wrapper */}
        <div className="pricing__wrapper">
          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing">
                $50<span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />} Unlimited access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />}
                    Customer support
                  </span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Personal trainer</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Standard options</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} 5classes per week</span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div className="pricing__item pricing__item-02">
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing">
                $70<span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />} Unlimited access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />}
                    Customer support
                  </span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Personal trainer</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Standard options</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} 5classes per week</span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing">
                $100<span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />} Unlimited access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    {<AiTwotoneCheckCircle />}
                    Customer support
                  </span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Personal trainer</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} Standard options</span>
                </li>
                <li>
                  <span>{<AiTwotoneCheckCircle />} 5classes per week</span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
