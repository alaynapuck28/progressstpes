const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;

const next = document.getElementById("next").addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
});
const prev = document.getElementById("prev").addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, index) => {
    console.log(index);
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive == 1) {
    document.getElementById("prev").disabled = true;
  } else if (currentActive == circles.length) {
    console.log(circles.length);
    document.getElementById("next").disabled = true;
  } else {
    document.getElementById("prev").disabled = false;
    document.getElementById("next").disabled = false;
  }
}
//click on prev move blue line back
//if at end disable next
//if at beginning prev disabled
//1 is always highlighted

//if circle length is same as active diasable next
//if circle active =1 then disable prev
//if click next add active class
