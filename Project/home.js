const partnerLogos = document.querySelectorAll('.logos img');

gsap.from(partnerLogos, {
  opacity: 0,
  y: 100,
  scale: 0.8,
  duration: 1.9,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".partners",
    start: "top 60%",   
    end: "bottom 40%",       
    toggleActions: "play none play reverse", 
  }
});


gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".dev-section",
      start: "top 50%",
      toggleActions: "play none none reverse",
    }
  });

  tl.to(".dev-graphic img", {
    x: 0,
    opacity: 1,
    duration: 1.2,       
    ease: "power4.out",
  });



const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".launch",       
    start: "top 50%",         
    toggleActions: "play none none reverse",
  }
});

t2.fromTo(".left-image img",
  { x: -250, opacity: 0 ,duration:1.8},     
  { x: 0, opacity: 1, duration: 1.8, ease: "power4.out" } 
);

