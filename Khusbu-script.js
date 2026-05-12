 // header 
 document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menutoggle");
  const xicon = document.getElementById("xicon");

  // Initially hide close icon
  xicon.style.display = "none";

  // Open Menu
  menuToggle.addEventListener("click", function () {
    menu.classList.add("show");
    menuToggle.style.display = "none";
    xicon.style.display = "block";
  });

  // Close Menu
  xicon.addEventListener("click", function () {
    menu.classList.remove("show");
    menuToggle.style.display = "block";
    xicon.style.display = "none";
  });

});

// header end
  // form
 document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const captchaCode = document.getElementById("captchaCode");
  const captchaInput = document.getElementById("captchaInput");
  const refreshBtn = document.getElementById("refreshCaptcha");

  // STOP if elements not found
  if (!captchaCode) {
    console.log("Captcha element not found");
    return;
  }

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    captchaCode.textContent = captcha;
  }

  refreshBtn.addEventListener("click", function () {
    generateCaptcha();
    captchaInput.value = "";
    formMessage.textContent = "";
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (captchaInput.value.toUpperCase() !== captchaCode.textContent) {
      formMessage.style.color = "red";
      formMessage.textContent = "Incorrect Captcha!";
      generateCaptcha();
      captchaInput.value = "";
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.style.color = "lightgreen";
        formMessage.textContent = "Message Sent Successfully!";
        form.reset();
        generateCaptcha();
      } else {
        formMessage.style.color = "tomato";
        formMessage.textContent = "Something went wrong!";
      }

    } catch (error) {
      formMessage.style.color = "tomato";
      formMessage.textContent = "Network Error!";
    }

  });

  generateCaptcha(); // VERY IMPORTANT

});

  // form end

  
  // text animation
const words = ["veloper", "signer"]; // De already fixed
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");
const speed = 120;
const delay = 1200;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      setTimeout(() => isDeleting = true, delay);
    }
  } else {
    typingElement.textContent = currentWord.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

 // typinh end





  