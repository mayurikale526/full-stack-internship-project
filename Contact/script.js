const ques = document.querySelectorAll(".help-question");
    ques.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        faq.nextElementSibling.classList.toggle("show");
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".help-banner", {
    backgroundPosition: "50%  0%", 
    scrollTrigger: {
      trigger: ".help-banner",
      start: "top bottom",   
      end: "bottom top",     
      scrub: true,           
    }
  });