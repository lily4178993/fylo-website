import ScrollReveal from 'scrollreveal';

/**
 * Configuration for ScrollReveal animations.
 *
 * @type {Object}
 * @property {string} origin - The origin from which the animation starts ('top' in this case).
 * @property {string} distance - The distance for revealing elements ('85px' in this case).
 * @property {number} duration - The duration of the animation (2500 milliseconds in this case).
 * @property {boolean} reset - Whether to reset the animation when elements are out of view (true in this case).
 */
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  reset: true,
});

export default sr;
