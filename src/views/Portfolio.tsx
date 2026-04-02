import { Box } from '@mui/material';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Portfolio = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Box>
  );
};

export default Portfolio;
