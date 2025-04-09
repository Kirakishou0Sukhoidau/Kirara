//Slideshow
const mainImage = document.querySelector(".slideshow-main-image img");
const mainVideo = document.querySelector("#mainVideo");
const thumbnails = document.querySelectorAll(".slideshow-thumbnails img, .slideshow-thumbnails video"); // Include videos
let currentIndex = 0; // Current media index

// Function to change main media based on clicked thumbnail or button click
function changeMedia(mediaElement) {
  const isVideo = mediaElement.tagName.toLowerCase() === "video"; // Check for video element

  // Reset main image/video display
  mainImage.style.display = "none";
  mainVideo.style.display = "none";

  // Update current media index
  currentIndex = Array.prototype.indexOf.call(thumbnails, mediaElement);

  if (isVideo) {
    // Play video and display it
    mainVideo.src = mediaElement.src;
    mainVideo.play();
    mainVideo.style.display = "block";
  } else {
    // Show image
    mainImage.src = mediaElement.src;
    mainImage.style.display = "block";
  }
}

// Add click event listeners for thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => changeMedia(thumbnail));
});

// Add click event listeners for prev and next buttons (if they exist)
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

if (prevButton) {
  prevButton.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = thumbnails.length - 1;
    } else {
      currentIndex--;
    }
    changeMedia(thumbnails[currentIndex]);
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    changeMedia(thumbnails[currentIndex]);
  });
}




/*
const mainImage = document.querySelector(".slideshow-main-image img");
const thumbnails = document.querySelectorAll(".slideshow-thumbnails img");
let currentIndex = 0; // Current image index

// Function to change main image based on clicked thumbnail or button click
function changeImage(image) {
  mainImage.src = image.src;
  currentIndex = Array.prototype.indexOf.call(thumbnails, image);
}

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = thumbnails.length - 1; // Quay lại ảnh cuối cùng
  } else {
    currentIndex--;
  }
  mainImage.src = thumbnails[currentIndex].src;
}

function nextImage() {
  if (currentIndex < thumbnails.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Quay lại ảnh đầu tiên khi ở ảnh cuối cùng
  }
  mainImage.src = thumbnails[currentIndex].src;
}



// Add click event listeners for thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => changeImage(thumbnail));
});

// Add click event listeners for prev and next buttons (if they exist)
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

if (prevButton) {
  prevButton.addEventListener("click", prevImage);
}

if (nextButton) {
  nextButton.addEventListener("click", nextImage);
}
*/





//video
const viideo = document.querySelector('.video');
const muiTenCheo = document.querySelector('.mui-ten-cheo');
const anvi = document.querySelector('.ul-bq .p-bq');


viideo.addEventListener('change', () => {
  if (viideo.classList.contains('hidden') || viideo.style.display === 'none') {
    const videoItems = document.querySelectorAll('.vo');
    videoItems.forEach(videoItem => videoItem.pause());
  }
});

const videosssi = document.querySelectorAll('video');





for (const video of videosssi) {
  video.addEventListener('play', () => {
    for (const otherVideo of videosssi) {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    }
  });
}




muiTenCheo.addEventListener('click', () => {
  viideo.classList.toggle('hidden');
    anvi.classList.toggle('hidden');
});



//cat-video
const catVideo = document.getElementById("do-lot");
function startVideoAt11Seconds() {
  catVideo.seekTo(11);
}

// Bắt đầu phát video từ giây thứ 11
catVideo.currentTime = 11;

// Phát video
catVideo.play();






