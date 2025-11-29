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
  
  // slick slider
  $('.about-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false});


  $(document).ready(function() {
            $('.voice-carousel').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                infinite: true,
                autoplay: false,
                arrows: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            centerMode: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            centerPadding: '40px'
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            centerPadding: '0px'
                        }
                    }
                ]
            });
        });

  // hamburger menu
        document.getElementById("hamburger").addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("active");
});

});
