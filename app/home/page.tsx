// pages/index.js
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FeaturedTemplates from '../components/FeaturedTemplates';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <FeaturedTemplates />
    </div>
  );
}
