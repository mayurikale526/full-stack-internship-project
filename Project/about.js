const partnerLogos = document.querySelectorAll('.logos img');
const cards = document.querySelectorAll(".card h3");

const targetValues = [15, 22, 28, 98];

gsap.registerPlugin(ScrollTrigger);



gsap.to(".image", {
    backgroundPosition: "50%  0%", 
    scrollTrigger: {
      trigger: ".image",
      start: "top bottom",   
      end: "bottom top",     
      scrub: true,           
    }
});

gsap.to(".get-started", {
    backgroundPosition: "50%  0%", 
    scrollTrigger: {
      trigger: ".get-started",
      start: "top bottom",   
      end: "bottom top",     
      scrub: true,           
    }
});


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

cards.forEach((card, i) => {
  let counter = { val: 0 };

  gsap.to(counter, {
    val: targetValues[i],
    duration: 1.8, 
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".who-we-are",
      start: "top 50%", 
      toggleActions: "play none none reverse",
    },
    onUpdate: () => {
      let value = Math.floor(counter.val);
      card.textContent = targetValues[i] === 15 || targetValues[i] === 98 ? `${value}%` : value;
    },
  });
});
