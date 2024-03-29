import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import TickerTape from "../components/TickerTape";
import Testimonial from "../components/Testimonial";
import Card from "../components/Card";
import { cardData } from "../utils/cardData";
import { presentationData } from "../utils/presentationData";

const HomePage = () => {
  return (
    <div>
      <TickerTape />
      <Hero />
      <Card cardData={cardData} />
      <Presentation presentationData={presentationData} />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
