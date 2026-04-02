import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import ProjectCard from '../ProjectCard';
import { projects } from '../../../content/portfolio';

const meta: Meta<typeof ProjectCard> = {
  title: 'UI/ProjectCard',
  component: ProjectCard,
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, maxWidth: 380 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: { project: projects[0], index: 0 },
};
