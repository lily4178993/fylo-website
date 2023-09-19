import ScrollReveal from 'scrollreveal';
import './main.scss';
import logoImg from './images/logo.svg';
import heroImg from './images/illustration-1.svg';
import teamImg from './images/illustration-2.svg';
import bgCurveImg from './images/bg-curve-desktop.svg';
import testimonialImg from './images/avatar-testimonial.jpg';
import seeHowArrow from './images/icon-arrow.svg';
import quoteSymbol from './images/icon-quotes.svg';
import phoneIcon from './images/icon-phone.svg';
import mailIcon from './images/icon-email.svg';
import mailValidation from './emailChecker';

const appLogo = document.querySelectorAll('.logo');
for (let i = 0; i < appLogo.length; i++) {
  appLogo[i].src = logoImg;
}
document.getElementById('heroImg').src = heroImg;
document.getElementById('teamImg').src = teamImg;
document.getElementById('bgCurve').src = bgCurveImg;
document.getElementById('testimonialImg').src = testimonialImg;
document.getElementById('seeHowArrow').src = seeHowArrow;
document.getElementById('quoteSymbol').src = quoteSymbol;
document.getElementById('phoneIcon').src = phoneIcon;
document.getElementById('mailIcon').src = mailIcon;

// ScrollReveal Configuration
// Create a ScrollReveal instance with custom settings.
const sr = ScrollReveal({
  origin: 'top',         // Animation starts from the top of the viewport.
  distance: '85px',      // Distance for revealing elements.
  duration: 2500,        // Duration of the animation.
  reset: true,           // Reset the animation when elements are out of view.
});

// Apply ScrollReveal animations to specific elements with delays.
sr.reveal('.section-content', { delay: 300 });       // Reveal section content with a delay.
sr.reveal('.section-img', { delay: 400 });           // Reveal section images with a delay.
sr.reveal('.card-container', { delay: 400 });        // Reveal card containers with a delay.
sr.reveal('.footer, .attribution', { delay: 300 });  // Reveal footer and attribution with a delay.

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