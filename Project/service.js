const questions = document.querySelectorAll(".help-question");
questions.forEach((ans) => {
  ans.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== ans) {
        item.classList.remove("active");
        item.nextElementSibling.classList.remove("show");
      }
    });

    ans.classList.toggle("active");
    ans.nextElementSibling.classList.toggle("show");
  });
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
    duration: 1.9,       
    ease: "power4.out",
  });

