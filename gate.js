//thay-anh
const load = document.getElementById("load");
const loadi = document.getElementById("tong-load");
//const recapccc = document.querySelector(".rcapc");
  const lood = document.getElementById("loadi");



const divWrapper = document.getElementById("wrapper");

const AnHien = document.querySelector(".an-hien");
const body = document.querySelector("body");

AnHien.addEventListener("click", function() {
  divWrapper.classList.toggle("hidden");
  if (divWrapper.classList.contains("hidden")) {
    // Khi ẩn
    AnHien.textContent = "Kirakishou";
    divWrapper.style.backgroundColor = "transparent";
      loadi.style.display = "none";
      AnHien.style.color = "black";
  } else {
    // Khi hiện
    AnHien.textContent = "©2024, Kirakishou";
      AnHien.style.color = "white";
    divWrapper.style.backgroundColor = "";
      lood.style.display = "none";
      loadi.style.display = "none";
   //   recapccc.style.display = "none"; 
  }
});


let isHidden = true;

/*window.addEventListener("resize", function() {
  updateBackground();
});*/

AnHien.addEventListener("click", function() {
  if (isHidden) {
    // Show background image based on screen width
      window.addEventListener("resize", function() {
  updateBackground();
});
    updateBackground();
    // Hide loading elements
    load.style.display = "none";
    loadi.style.display = "none";
    lood.style.display = "none";
    isHidden = false;
  } else {
          body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
          load.style.display = "block";
      loadi.style.display = "block";
      lood.style.display = "none";
    isHidden = true;
  }
});


