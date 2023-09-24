import './main.scss';
import mailValidation from './emailChecker';
import sr from './scrollReveal';
import createAndAppendImage from './createAndAppendImage';
import { arrowIcon, bgCurveImage, emailIcon, heroImage, logoImage, phoneIcon, quoteIcon, teamImage, testimonialImage } from './images';

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
// Create and append images to specific elements
createAndAppendImage(logoImage, "Fylo's logo", '#headerLogo', 'logo');
createAndAppendImage(logoImage, "Fylo's logo", '#FooterLogo', 'logo');
createAndAppendImage(
  heroImage,
  'Illustration of two persons filling a folder',
  '#heroImg',
  null
);
createAndAppendImage(bgCurveImage, 'grey curve', '#bgCurve', 'bg-curve');
createAndAppendImage(quoteIcon, 'Quote', '#quote', 'quoteSymbol');
createAndAppendImage(
  arrowIcon,
  'See how it works',
  '#seeHowArrow',
  null
);
createAndAppendImage(
  testimonialImage,
  'avatar',
  '#testimonialImg',
  'author-avatar'
);
createAndAppendImage(
  teamImage,
  'Illustration of three persons having a coversation',
  '#teamImg',
  null
);
createAndAppendImage(emailIcon, 'Email', '#emailIcon', 'address-icon');
createAndAppendImage(phoneIcon, 'Phone', '#phoneIcon', 'address-icon');

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
// Apply ScrollReveal animations to specific elements with delays.
sr.reveal('.section-content', { delay: 300 });
sr.reveal('.section-img', { delay: 400 });
sr.reveal('.card-container', { delay: 400 }); 
sr.reveal('.footer', { delay: 300 }); 

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const email1 = document.getElementById('email1');
const email2 = document.getElementById('email2');

form1.addEventListener('submit', (event) => {
  mailValidation(email1);
  event.preventDefault();
});

form2.addEventListener('submit', (event) => {
  mailValidation(email2);
  event.preventDefault();
});