import About from "../components/About/About.jsx";
import Chatbot from "../components/Chatbot/Chatbot.jsx";
import Companies from "../components/Companies/Companies.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Functions from "../components/Functions/Functions.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Plans from "../components/Plans/Plans.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <About />
      <Functions />
      <Plans />
      <Footer />
      <Chatbot />
    </>
  );
};
export default HomePage;
