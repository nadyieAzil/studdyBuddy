import Navbar from '../components/navbar';
import Welcome from './welcome';
import About from './about';
import Features from './features';
import Contact from './contact';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <section id="welcome"><Welcome /></section>
      <section id="about"><About /></section>
      <section id="features"><Features /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default LandingPage;