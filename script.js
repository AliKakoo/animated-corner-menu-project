const $ = document;

const toggleBtn = $.querySelector("#toggle-btn");

const menuItem = $.querySelectorAll(".menu a");

let isMenuActive = false;

toggleBtn.addEventListener("click", () => {
  if (!isMenuActive) {
    console.log("the menu is active");

    toggleBtn.classList.add('active');
    
    isMenuActive = true;
} else {
    console.log("the menu is not active");
    toggleBtn.classList.remove("active");
    
    isMenuActive = false;
  }
});
