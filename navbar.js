document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const moreDropdown = document.querySelector('.more-dropdown-content');
    const Dropdown = document.querySelector('.more-dropdown');
    const bodyWidth = document.body.clientWidth;
    console.log(`${bodyWidth}`);
  
    let maxVisibleItems = calculateMaxVisibleItems(); // Initial calculation
  
    function calculateMaxVisibleItems() {
      // Calculate the maximum visible items based on the window width
      
      
      let visibleItems = 6;
      if (bodyWidth <= 856 && bodyWidth>805) {
        visibleItems = 5;
      } 
      if (bodyWidth <= 805 && bodyWidth>702) {
        visibleItems = 4;
      } 
      if (bodyWidth <= 702 && bodyWidth>595) {
        visibleItems = 3;
      } 
      if (bodyWidth <= 595 && bodyWidth>500) {
        visibleItems = 2;
      } 

      return visibleItems;
    }

    
   

  
    function updateNavbar() {
      if (bodyWidth > 856) {
        Dropdown.style.display = 'none';
      } 
      else {
        Dropdown.style.display = 'inline-flex';
      }
  
      const navbarItems = navbar.querySelectorAll('a');
      const hiddenItems = [];
  
      navbarItems.forEach((item, index) => {
        if (index >= maxVisibleItems) {
          hiddenItems.push(item.cloneNode(true));
          item.style.display = 'none';
        } 
        else {
          item.style.display = 'inline-flex';
        }
      });
  
      moreDropdown.innerHTML = ''; // Clear items in the "More" dropdown
      hiddenItems.forEach((hiddenItem) => {
      moreDropdown.appendChild(hiddenItem);
      });
    }

    window.addEventListener("resize", function () 
    {
      updateNavbar();
    });

    updateNavbar();
  });
  