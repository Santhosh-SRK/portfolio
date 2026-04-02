import { Grid } from '@mui/material';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../content/portfolio';

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <SectionWrapper
      id="projects"
      title="Selected Work"
      subtitle="A small set of representative frontend projects, kept focused for recruiters and hiring teams."
    >
      <Grid container spacing={3}>
        {featuredProjects.map((project, index) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Projects;
