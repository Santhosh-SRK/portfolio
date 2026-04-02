import { Box, Typography, Button, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { profile } from '../../content/portfolio';

const profilePhoto = '/portfolio/profile-photo.png';

const easeOut = [0, 0, 0.2, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: easeOut },
});

const Hero = () => {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top left, rgba(108,99,255,0.16), transparent 36%), radial-gradient(circle at bottom right, rgba(255,101,132,0.14), transparent 30%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          gap: { xs: 5, md: 8 },
          maxWidth: 1120,
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
              FRONTEND PORTFOLIO
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.8rem', md: '4.2rem' }, lineHeight: 1.08, my: 1.5 }}
            >
              {profile.name}
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight={500}
              sx={{ mb: 2, fontSize: { xs: '1.2rem', md: '1.55rem' } }}
            >
              {profile.role}
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.4)}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, maxWidth: 640 }}>
              {profile.summary}
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.5)}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 640 }}>
              {profile.currentLearning}
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.6)}>
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                onClick={scrollToProjects}
                endIcon={<ArrowDownwardIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  '&:hover': { opacity: 0.9 },
                }}
              >
                View Selected Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href={profile.resumePath}
                download
              >
                Download CV
              </Button>
              <Button
                variant="text"
                size="large"
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </Button>
            </Stack>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: -12,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                opacity: 0.24,
                filter: 'blur(22px)',
              },
            }}
          >
            <Avatar
              src={profilePhoto}
              alt={profile.name}
              sx={{
                width: { xs: 180, md: 260 },
                height: { xs: 180, md: 260 },
                border: '4px solid',
                borderColor: 'primary.main',
                backgroundColor: 'background.paper',
                objectFit: 'cover',
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
