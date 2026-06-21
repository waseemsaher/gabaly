import { lazy, Suspense } from "react";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold components to improve initial load time and reduce bundle size
const Story = lazy(() => import("./components/Story"));
const Achievements = lazy(() => import("./components/Achievements"));
const Founder = lazy(() => import("./components/Founder"));
const La7Gym = lazy(() => import("./components/La7Gym"));
const Coaching = lazy(() => import("./components/Coaching"));
// const Gallery = lazy(() => import("./components/Gallery"));
const Reviews = lazy(() => import("./components/Reviews"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5F4F0] text-[#0A0A0A] antialiased">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-screen bg-[#F5F4F0]" />}>
            <Story />
            <Achievements />
            <Founder />
            <La7Gym />
            <Coaching />
            {/* <Gallery /> */}
            <Reviews />
            <Social />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}
