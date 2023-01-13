import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>FitBody</h2>
            </div>
            <p>
              Aliquip deserunt id sunt fugiat adipisicing aute aliquip est Lorem
              eu magna ut ea. Esse sunt aute id non id.
            </p>
          </div>
          <div footer__box>
            <h4 className="footer__title">Company</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Our program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>

              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div footer__box>
            <h4 className="footer__title">Quick</h4>

            <ul className="footer__links">
              <li>
                <a href="#About">About us</a>
              </li>
              <li>
                <a href="#Contact">Contact us</a>
              </li>
              <li>
                <a href="#Support">Support</a>
              </li>
            </ul>
          </div>

          <div footer__box>
            <h4 className="footer__title">Quick</h4>

            <ul className="footer__links">
              <li>
                <a href="#Support">About us</a>
              </li>
              <li>
                <a href="#Support">Contact us</a>
              </li>
              <li>
                <a href="#Support">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyrighting">
          Copyrighting - {year} developed by Alex all right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
