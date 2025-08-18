document.addEventListener('DOMContentLoaded', function () {
  const promotionCards = document.querySelectorAll('.card');

  promotionCards.forEach(card => {
    const imageContainer = card.querySelector('.card-image-slider');
    if (!imageContainer) return;

    const imageTrack = imageContainer.querySelector('.image-track');
    const images = imageTrack.querySelectorAll('img');
    const prevButton = imageContainer.querySelector('.prev-btn');
    const nextButton = imageContainer.querySelector('.next-btn');

    let currentIndex = 0;

    function updateImagePosition() {
      const offset = -currentIndex * 100;
      imageTrack.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImagePosition();
      } else {
        currentIndex = 0;
        updateImagePosition();
      }
    });

    prevButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
        updateImagePosition();
      } else {
        currentIndex = images.length - 1;
        updateImagePosition();
      }
    });
  });
});