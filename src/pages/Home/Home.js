//* Style sheet
import './Home.css';

//components
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

//sections
import About from '../../components/About/About';

function Home() {
  return (
    <>
      <HeaderBar />
      <Banner />
      <section className="home-section" id="about">
        <About />
      </section>
      <section className="home-section" id="contact"></section>
      <section className="home-section" id="faqs"></section>
      <Footer />
    </>
  );
}

export default Home;
