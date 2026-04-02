import { Grid, Box, Typography } from '@mui/material';
import SectionWrapper from '../ui/SectionWrapper';
import SkillBar from '../ui/SkillBar';
import { profile, skills } from '../../content/portfolio';

const SKILL_CATEGORIES = ['Frontend', 'Backend', 'Tools'] as const;

const About = () => {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="A clean snapshot of the skills and mindset I bring to frontend teams."
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {profile.summary}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {profile.focus}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {profile.currentLearning}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 2,
              mt: 4,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            {profile.highlights.map((item) => (
              <Box
                key={item.label}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.default',
                }}
              >
                <Typography variant="h6" color="primary" fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          {SKILL_CATEGORIES.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            if (!categorySkills.length) {
              return null;
            }

            return (
              <Box key={category} sx={{ mb: 4 }}>
                <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }} color="primary">
                  {category}
                </Typography>
                {categorySkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
