import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './components/InfoPage/Header';
import Body from './components/InfoPage/Body';
import Footer from './components/InfoPage/Footer';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </>
  );
};

export default App;
