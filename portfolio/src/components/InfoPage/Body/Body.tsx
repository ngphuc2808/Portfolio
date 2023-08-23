import { Fragment } from 'react';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Body = () => {
  return (
    <Fragment>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Fragment>
  );
};

export default Body;
