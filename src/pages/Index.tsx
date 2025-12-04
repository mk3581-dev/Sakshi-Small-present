import FallingPetals from '@/components/FallingPetals';
import Sparkles from '@/components/Sparkles';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MemoriesSection from '@/components/MemoriesSection';
import LetterSection from '@/components/LetterSection';
import SakshiEffectSection from '@/components/SakshiEffectSection';
import FarewellSection from '@/components/FarewellSection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <Sparkles />
      <FallingPetals />
      
      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <MemoriesSection />
      <LetterSection />
      <SakshiEffectSection />
      <FarewellSection />
    </main>
  );
};

export default Index;
