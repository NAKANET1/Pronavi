$(function(){
  $(".faq-list dd").hide();
  $(".faq-list dt").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("active")
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0
  };

  const imageElement = document.getElementById("strength-image");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const newImage = entry.target.dataset.img;
        imageElement.style.opacity = 0;
        setTimeout(() => {
          imageElement.src = newImage;
          imageElement.style.opacity = 1;
        }, 200);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".point-content").forEach((content) => {
    observer.observe(content);
  });
});
