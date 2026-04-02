import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../../content/portfolio';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, href: profile.githubUrl, label: 'GitHub' },
    { icon: <LinkedInIcon />, href: profile.linkedInUrl, label: 'LinkedIn' },
  ].filter((item) => item.href);

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: { xs: 3, md: 8 },
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and
        MUI.
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        {socialLinks.map(({ icon, href, label }) => (
          <IconButton
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
