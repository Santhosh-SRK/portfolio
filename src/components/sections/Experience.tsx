import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { experiences } from '../../content/portfolio';

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Practical frontend work across product delivery, reusable components, and UI quality."
    >
      <Box sx={{ maxWidth: 840, mx: 'auto', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 16, md: 24 },
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #6C63FF, #FF6584)',
            opacity: 0.3,
          }}
        />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 3, md: 4 },
                mb: 5,
                pl: { xs: 5, md: 7 },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 9, md: 17 },
                  top: 6,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: experience.current ? 'primary.main' : 'background.paper',
                  border: '3px solid',
                  borderColor: 'primary.main',
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: experience.current ? 'primary.main' : 'divider',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      {experience.role}
                    </Typography>
                    <Typography variant="body2" color="primary" fontWeight={600}>
                      {experience.company}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                    {experience.current ? (
                      <Chip label="Current" size="small" color="primary" sx={{ fontWeight: 600 }} />
                    ) : null}
                    <Typography variant="caption" color="text.secondary">
                      {experience.duration}
                    </Typography>
                  </Box>
                </Box>

                <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 0 }}>
                  {experience.description.map((point) => (
                    <Box component="li" key={point} sx={{ mb: 0.75 }}>
                      <Typography variant="body2" color="text.secondary">
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Experience;
