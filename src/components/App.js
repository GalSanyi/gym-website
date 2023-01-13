import Header from './Header/Header';
import Hero from './Ui/Hero';
import Exercises from './Ui/Exercises';
import Start from './Ui/Start';
import Pricing from './Ui/Pricing';
import Testimonials from './Ui/Testimonials';
import Footer from './Ui/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
export const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};
