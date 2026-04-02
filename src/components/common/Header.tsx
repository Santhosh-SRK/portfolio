import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItemButton, ListItemText, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useMobile } from '../../hooks/useMobile';
import { profile } from '../../content/portfolio';

const NAV_LINKS = ['About', 'Projects', 'Experience', 'Contact'];

// Smooth scroll to a section by id
const scrollTo = (id: string) => {
  const el = document.getElementById(id.toLowerCase());
  el?.scrollIntoView({ behavior: 'smooth' });
};

interface HeaderProps {
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header = ({ themeMode, onToggleTheme }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMobile();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(13,13,26,0.85)',
          borderBottom: '1px solid rgba(108,99,255,0.15)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ color: 'primary.main', cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {profile.shortName}<span style={{ color: '#FF6584' }}>.</span>
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link}
                  onClick={() => scrollTo(link)}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  {link}
                </Button>
              ))}
              <IconButton onClick={onToggleTheme} size="small" sx={{ ml: 1 }}>
                {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={onToggleTheme} size="small">
                {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, p: 2, backgroundColor: 'background.paper' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link}
              onClick={() => { scrollTo(link); setDrawerOpen(false); }}
            >
              <ListItemText primary={link} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
