//This code will make the Return button navigate back to the previous page when clicked.
document.addEventListener('DOMContentLoaded', () => {
    // Find the return button by its ID to implement the code
    const returnButton = document.querySelector('#returnButton');
    
    // This checks if button exists before adding the listener
    if (returnButton) {
        returnButton.addEventListener('click', () => {
            // Uses the users history to go back to previous page
            window.history.back();
        });
    }
});

//Coding excercises(2022), says this is how you make a gallery lightbox in JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const galleryLinks = document.querySelectorAll(".img");

  let currentIndex = 0;

  // Creates the lightbox overlay
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Gallery Image">
    <div class="caption"></div>
    <div class="nav">
      <span class="prev">&#10094;</span>
      <span class="next">&#10095;</span>
    </div>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".caption");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");
  const closeBtn = lightbox.querySelector(".close");

  // Shows the image in lightbox
  function showImage(index) {
    const link = galleryLinks[index];
    img.src = link.getAttribute("href");
    caption.textContent = link.getAttribute("data-title") || "";
    currentIndex = index;
    lightbox.style.display = "flex";
  }

  // Closes lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Navigation functions
  function showNext() {
    currentIndex = (currentIndex + 1) % galleryLinks.length;
    showImage(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
    showImage(currentIndex);
  }

  // The event listeners
  galleryLinks.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      showImage(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Closes when clicking the outside of image
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard support enabled with arrow keys as well as escape
  document.addEventListener("keydown", e => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    }
  });
});

