var slides = document.querySelectorAll(".invisible");
var slides_a = document.querySelectorAll(".invisible1");
var slides_b = document.querySelectorAll(".invisible2");
var i = 0;
var n = 0;
var p = 0;
var slide_imgs = 6; // Numero de fotos a apresentar no slideshow editar comentário

function init() {
  slides[0].classList.remove("invisible");
  slides_a[0].classList.remove("invisible1");
  slides_b[0].classList.remove("invisible2");
  for (j = 0; j < 6; j++) {
    slides[j].addEventListener("animationend", function() {
      if (slides[i].classList.contains("fade-out-slide")) {
        slides[i].classList.add("invisible");

        if (++i == slide_imgs) i = 0;

        if (i == 0) {
          slides[3].classList.remove("fade-out-slide");
        } else {
          slides[i - 1].classList.remove("fade-out-slide");
        }

        slides[i].classList.add("fade-in-slide");
        slides[i].classList.remove("invisible");
      }
      if (slides_a[n].classList.contains("fade-out-slide")) {
        slides_a[n].classList.add("invisible1");

        if (++n == slide_imgs) n = 0;

        if (n == 0) {
          slides_a[3].classList.remove("fade-out-slide");
        } else {
          slides_a[n - 1].classList.remove("fade-out-slide");
        }

        slides_a[n].classList.add("fade-in-slide");
        slides_a[n].classList.remove("invisible1");
      }

      if (slides_b[p].classList.contains("fade-out-slide")) {
        slides_b[p].classList.add("invisible2");

        if (++p == slide_imgs) p = 0;

        if (p == 0) {
          slides_b[3].classList.remove("fade-out-slide");
        } else {
          slides_b[p - 1].classList.remove("fade-out-slide");
        }

        slides_b[p].classList.add("fade-in-slide");
        slides_b[p].classList.remove("invisible2");
      }      
    });
  }
}

var slideshowstart = setInterval(slideshow, 6500);

function slideshow() {
  slides[i].classList.add("fade-out-slide");
  slides_a[n].classList.add("fade-out-slide");
  slides_b[p].classList.add("fade-out-slide");
}

function myStopFunction() {
  clearInterval(slideshowstart); 
}

init();


setInterval(myStopFunction, 86000);

