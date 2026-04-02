import { Box, Typography, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface SectionWrapperProps extends BoxProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

// Reusable wrapper that adds fade-in animation, section id, and consistent spacing
const SectionWrapper = ({ id, title, subtitle, children, ...rest }: SectionWrapperProps) => {
  const { ref, inView } = useInView();

  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, ...rest.sx }}
      {...rest}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Section heading */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
            {id.toUpperCase()}
          </Typography>
          <Typography variant="h3" fontWeight={700} sx={{ mt: 1 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {children}
      </motion.div>
    </Box>
  );
};

export default SectionWrapper;
