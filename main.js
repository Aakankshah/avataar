document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 3;
  const totalImages = document.querySelectorAll(".carousel-item").length;

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  function updateCarousel() {
    const galleryItems = document.querySelectorAll(".carousel-item");
  
    
    const chosenImage = galleryItems[currentIndex];
    const altText = chosenImage.alt;
  
    // Update navigation title with image alt text
    const navTitle = document.querySelector(".title");
    navTitle.textContent = altText;
    navTitle.style.color = "#292929";
  
    // Change color of previous and next buttons to black
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
   
    prevBtn.style.backgroundColor = "#292929";
    prevBtn.style.borderRadius = "14px";
    nextBtn.style.backgroundColor = "#292929";
    nextBtn.style.borderRadius = "14px";

  
    
  
    galleryItems.forEach((item, index) => {
      if(index==currentIndex)
      {
      const newHeight = "350px";
      const newWidth = "490px";
      item.style.opacity = 1;
      item.style.height = newHeight;
      item.style.width = newWidth;
      item.style.display = "flex"
      item.style.left = "50%";


      }
      else{
        item.style.display="none";
    
      }
      
    });
  }
  
  
});
