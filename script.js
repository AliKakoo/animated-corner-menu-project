const $ = document;

const toggleBtn = $.querySelector("#toggle-btn");

const menuItem = $.querySelectorAll(".menu a");

let isMenuActive = false;

toggleBtn.addEventListener("click", () => {
  if (!isMenuActive) {
    console.log("منو باز شد");

    menuItem[0].style.transform = "translate(150px, 0)";
    menuItem[1].style.transform = "translate(150px, 90px)";
    menuItem[2].style.transform = "translate(90px, 150px)";
    menuItem[3].style.transform = "translate(0, 150px)";

    toggleBtn.classList.add('active');
    
    isMenuActive = true;
} else {
    console.log("منو بسته شد");
    toggleBtn.classList.remove("active");
    menuItem.forEach(menuItem => menuItem.style.transform = "translate(0,0)")
    
    isMenuActive = false;
  }
});
