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