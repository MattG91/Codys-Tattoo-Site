const current = document.querySelector("#selected");

const galleryPreview = document.querySelectorAll(".gallery-preview img");

const opacity = 0.5;

 

// Set opacity of first image

galleryPreview[0].style.opacity = opacity;

 

galleryPreview.forEach(img => img.addEventListener("click", imgActivate));

 

function imgActivate(e) {

  // Reset opacity on all thumbs

  galleryPreview.forEach(img => (img.style.opacity = 1));



  // Change current image to source of clicked image

  current.src = e.target.src;

 

  // Add fadeIn class

  current.classList.add("fade-in");

 

  // Remove fadeIn class after animation time elapsed

  setTimeout(() => current.classList.remove("fade-in"), 500);

 

  // Change opacity to variable value

  e.target.style.opacity = opacity;

}
