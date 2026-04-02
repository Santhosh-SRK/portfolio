import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Skill } from '../../types/portfolio.types';

interface SkillBarProps {
  skill: Skill;
  index: number; // For staggered animation delay
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Box sx={{ mb: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="body2" fontWeight={500}>
            {skill.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {skill.level}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={skill.level}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: 'rgba(108,99,255,0.15)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 3,
              background: 'linear-gradient(90deg, #6C63FF, #FF6584)',
            },
          }}
        />
      </Box>
    </motion.div>
  );
};

export default SkillBar;
