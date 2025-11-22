import About from "../components/About/about";
import Chatbot from "../components/Chatbot/Chatbot";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer";
import Functions from "../components/Functions/Functions";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Plans from "../components/Plans/Plans";

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
