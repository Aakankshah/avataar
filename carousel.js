document.addEventListener("DOMContentLoaded", function () {
  
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 3;
  const totalImages = document.querySelectorAll(".carousel-item").length;

  function startAutoPlay() {
    autoPlayInterval = setInterval(function () {
      currentIndex = (currentIndex + 1 + totalImages) % totalImages;
      updateCarousel();
    }, 5000);
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1+ totalImages) % totalImages;
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

  
    galleryItems.forEach((item, index) => {
      
      if(index==currentIndex)
        {
        const newHeight = "350px";
        const newWidth = "490px";
        item.style.opacity = 1;
        item.style.height = newHeight;
        item.style.width = newWidth;
        item.style.left = "50%";
        item.style.zIndex=3;
        item.style.transform = 'translateX(-50%)'
        }
        else if(index==(currentIndex-1+7)%7 || index==(currentIndex+1+7)%7)
        {
          item.style.height= "300px";
          item.style.opacity= .8;
          item.style.width= "430px";
          item.style.zIndex=2;
          item.style.transform = 'translateX(-50%)';
          if(index==(currentIndex-1+7)%7)
          {
            item.style.left= "20%";
          }
          else if(index==(currentIndex+1+7)%7)
          {
            item.style.left= "80%";
          }
        }
        else if(index==(currentIndex-2+7)%7 || index==(currentIndex+2+7)%7)
        {
          item.style.height= "250px";
          item.style.opacity= .6;
          item.style.width= "380px";
          item.style.zIndex=1;
          item.style.transform = 'translateX(-50%)';
          if(index==(currentIndex-2+7)%7)
          {
            item.style.left= "0%";
          }
          else if(index==(currentIndex+2+7)%7)
          {
            item.style.left= "100%";
          }
        }
        else if(index==(currentIndex-3+7)%7 || index==(currentIndex+3+7)%7)
        {
          item.style.height= "200px";
          item.style.opacity= .4;
          item.style.width= "330px";
          item.style.zIndex=0;
          item.style.transform = 'translateX(-50%)';
          if(index==(currentIndex-3+7)%7)
          {
            item.style.left= "-15%";
          }
          else if(index==(currentIndex+3+7)%7)
          {
            item.style.left= "115%";
          }

        }
     
    });
  }

  startAutoPlay();
  
  
});
