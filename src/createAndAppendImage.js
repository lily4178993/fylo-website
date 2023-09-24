/**
 * Create and append an image element to a specified target element.
 *
 * @param {string} src - The image source URL.
 * @param {string} alt - The alt text for the image.
 * @param {string} targetSelector - The CSS selector for the target element to append the image to.
 * @param {string} [className=''] - Optional class name to add to the image element.
 */
function createAndAppendImage(src, alt, targetSelector, className = '') {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  imgElement.alt = alt;

  if (className) {
    imgElement.classList.add(className);
  }

  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    targetElement.appendChild(imgElement);
  } else {
    console.error(`Target element "${targetSelector}" not found.`);
  }
}

export default createAndAppendImage;
