//Image caroussel control logic
let next = document.querySelector(".next");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n >= 5) {
    slideIndex = 5;
    starWrapper.style.display = "none";

    desc.style.display = "none";
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//Manage drop images
var columns = document.querySelectorAll(".card");
var draggingClass = "dragging";
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
  col.addEventListener("dragstart", handleDragStart, false);
  col.addEventListener("dragenter", handleDragEnter, false);
  col.addEventListener("dragover", handleDragOver, false);
  col.addEventListener("dragleave", handleDragLeave, false);
  col.addEventListener("drop", handleDrop, false);
  col.addEventListener("dragend", handleDragEnd, false);
});

function handleDragStart(evt) {
  dragSource = this;
  evt.target.classList.add(draggingClass);
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(evt) {
  evt.dataTransfer.dropEffect = "move";
  evt.preventDefault();
}

function handleDragEnter(evt) {
  this.classList.add("over");
}

function handleDragLeave(evt) {
  this.classList.remove("over");
}

function handleDrop(evt) {
  evt.stopPropagation();

  if (dragSource !== this) {
    dragSource.innerHTML = this.innerHTML;
    this.innerHTML = evt.dataTransfer.getData("text/html");
  }

  evt.preventDefault();
}

function handleDragEnd(evt) {
  Array.prototype.forEach.call(columns, function (col) {
    ["over", "dragging"].forEach(function (className) {
      col.classList.remove(className);
    });
  });
}
