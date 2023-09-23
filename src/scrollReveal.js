import ScrollReveal from 'scrollreveal';

// ScrollReveal Configuration
// Create a ScrollReveal instance with custom settings.
const sr = ScrollReveal({
  origin: 'top', // Animation starts from the top of the viewport.
  distance: '85px', // Distance for revealing elements.
  duration: 2500, // Duration of the animation.
  reset: true, // Reset the animation when elements are out of view.
});

export default sr;
