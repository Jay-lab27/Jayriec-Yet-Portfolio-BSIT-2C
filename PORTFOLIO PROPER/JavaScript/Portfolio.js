//Navigation animation
const navLinks = document.querySelectorAll("nav ul li a");

//active class animation based scroll position
const setActiveLink = () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100; //Adjust navbar height

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); //Remove active class from all links
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active"); //Add active class to the matching link
        }
      });
    }
  });
};

window.addEventListener("load", setActiveLink);
window.addEventListener("scroll", setActiveLink);


//hide and display burger
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});








//animation for text in home
window.onload = function() {
  const introText = document.getElementById("intro-text");
  const texts = [
    "Bachelor of Science in Information Technology Student",
    "In Camarines Norte State College"
  ]; // Array to cycle the text
  let currentIndex = 0;
  let typingSpeed = 200; 
  let pauseBetweenTexts = 2000; 
  
  function typeText(text) {
    let index = 0;
    introText.innerHTML = ""; // remove the text before starting to type new text
    

    function typeLetter() {
      if (index < text.length) {
        introText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, typingSpeed); 
      } else {
      
        setTimeout(function() {
          currentIndex = (currentIndex + 1) % texts.length; 
          typeText(texts[currentIndex]); 
        }, pauseBetweenTexts); 
      }
    }
    
    typeLetter(); 
  }


  setTimeout(function() {
    typeText(texts[currentIndex]); 
  }, 1000); 
};



