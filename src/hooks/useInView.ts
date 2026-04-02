import { useInView as useInViewLib } from 'react-intersection-observer';

// Simple wrapper around react-intersection-observer
// Usage: const { ref, inView } = useInView();
export const useInView = (threshold = 0.15) => {
  const { ref, inView } = useInViewLib({
    threshold,
    triggerOnce: true, // Animate only once when it enters viewport
  });

  return { ref, inView };
};
