let currentImage = 1;
let isPlaying = true;
let interval = setInterval(nextImage, 4000);

function showImage(index) {
  const img = document.getElementById('bannerImage');
  img.src = 'images/banner' + index + '.jpg';
}

function nextImage() {
  currentImage = currentImage === 3 ? 1 : currentImage + 1;
  showImage(currentImage);
}

function prevImage() {
  currentImage = currentImage === 1 ? 3 : currentImage - 1;
  showImage(currentImage);
}

function togglePlay() {
  const btn = document.getElementById('playPauseBtn');
  if (isPlaying) {
    clearInterval(interval);
    btn.textContent = '▶';
  } else {
    interval = setInterval(nextImage, 4000);
    btn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}
