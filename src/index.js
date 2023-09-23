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
import sr from './scrollReveal';

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