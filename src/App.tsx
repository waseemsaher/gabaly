import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Achievements from "./components/Achievements";
import Founder from "./components/Founder";
import La7Gym from "./components/La7Gym";
import Coaching from "./components/Coaching";
// import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5F4F0] text-[#0A0A0A] antialiased">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Achievements />
          <Founder />
          <La7Gym />
          <Coaching />
          {/* <Gallery /> */}
          <Reviews />
          <Social />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
