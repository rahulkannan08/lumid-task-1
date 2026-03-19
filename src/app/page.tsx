import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections';

const Services = dynamic(() =>
  import('@/components/sections/Services').then((m) => m)
);
const Projects = dynamic(() =>
  import('@/components/sections/Projects').then((m) => m)
);
const About = dynamic(() =>
  import('@/components/sections/About').then((m) => m)
);
const Differentiators = dynamic(() =>
  import('@/components/sections/Differentiators').then((m) => m)
);
const Testimonials = dynamic(() =>
  import('@/components/sections/Testimonials').then((m) => m)
);
const HowItWorks = dynamic(() =>
  import('@/components/sections/HowItWorks').then((m) => m)
);
const Gallery = dynamic(() =>
  import('@/components/sections/Gallery').then((m) => m)
);
const Blogs = dynamic(() =>
  import('@/components/sections/Blogs').then((m) => m)
);
const FAQ = dynamic(() =>
  import('@/components/sections/FAQ').then((m) => m)
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Differentiators />
      <Testimonials />
      <HowItWorks />
      <Gallery />
      <Blogs />
      <FAQ />
    </main>
  );
}
