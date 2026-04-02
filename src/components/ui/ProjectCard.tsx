import { Card, CardMedia, CardContent, CardActions, Typography, Box, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio.types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const hasActions = Boolean(project.githubUrl || project.liveUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(108,99,255,0.2)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="caption"
            color="primary"
            sx={{ display: 'inline-block', mb: 1, fontWeight: 700, letterSpacing: 0.6 }}
          >
            {project.category}
          </Typography>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>

          {/* Tech stack chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'rgba(108,99,255,0.12)',
                  color: 'primary.main',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                }}
              />
            ))}
          </Box>
        </CardContent>

        {hasActions ? (
          <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
            {project.githubUrl ? (
              <Button
                size="small"
                startIcon={<GitHubIcon />}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                Code
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button
                size="small"
                startIcon={<OpenInNewIcon />}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
              >
                Live Demo
              </Button>
            ) : null}
          </CardActions>
        ) : null}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
