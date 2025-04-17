const shareMenu = document.querySelector(".share");
const shareBtn = document.querySelector(".share-img");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
});
