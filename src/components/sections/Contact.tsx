import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import SectionWrapper from '../ui/SectionWrapper';
import { profile } from '../../content/portfolio';

const Contact = () => {
  const contactItems = [
    { icon: <EmailIcon />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: <LocationOnIcon />, label: profile.location },
    { icon: <GitHubIcon />, label: profile.githubUrl, href: profile.githubUrl || undefined },
    { icon: <LinkedInIcon />, label: profile.linkedInUrl, href: profile.linkedInUrl || undefined },
  ].filter((item) => item.label);

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="This portfolio is intentionally simple so a hiring team can quickly review my frontend work and profile."
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
            Available for frontend opportunities
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            If you are hiring for React, Angular, or TypeScript work, I would be happy to share
            more details, walk through projects, or discuss how I can contribute. This site is
            meant to give a quick sense of my coding style and frontend focus.
          </Typography>

          <Stack spacing={2.5}>
            {contactItems.map((item) => (
              <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                {item.href ? (
                  <Typography
                    component="a"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      wordBreak: 'break-word',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <Typography color="text.secondary">{item.label}</Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.default',
            }}
          >
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
              Recruiter-friendly version
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Clean sections, selected projects, concise experience, and one Storybook example to
              show component documentation familiarity.
            </Typography>

            <Stack spacing={1.5}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<DownloadIcon />}
                href={profile.resumePath}
                download
                sx={{
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  '&:hover': { opacity: 0.9 },
                }}
              >
                Download CV
              </Button>
              <Button
                fullWidth
                variant="outlined"
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live portfolio
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Contact;
