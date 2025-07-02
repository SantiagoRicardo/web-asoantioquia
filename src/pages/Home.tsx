import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { NewsSection } from '../components/NewsSection';
import { ContactForm } from '../components/ContactForm';
import { RecyclersSection } from '../components/RecyclersSection';
import { LocationsSection } from '../components/LocationsSection';
import { PartnersSection } from '../components/PartnersSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <NewsSection />
      <RecyclersSection />
      <ContactForm />
      <LocationsSection />
    </>
  );
}