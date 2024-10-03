// pages/index.js
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import FeaturedTemplates from './components/FeatureTemplates';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <FeaturedTemplates />
      <Testimonials />


    </div>
  );
}
