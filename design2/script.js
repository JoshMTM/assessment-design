//Stars selection and click
const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    // starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherStar.classList.remove("active");
      }
    });
    plusSlides(1);
  });
});

//Image caroussel control logic
let next = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");

let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener("click", () => {
  plusSlides(1);
  console.log("is this being clicked?");
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName(".mySlides");
  console.log("hello", slides.length);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
