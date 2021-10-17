// typing animation script
var typed = new Typed("#typing",{
    strings: ["Mom", "Army Veteran", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// form submit
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);