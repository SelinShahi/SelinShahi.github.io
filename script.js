
console.log("JS LOADED");
/* =====================
   MOBILE SIDE MENU
===================== */

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sideMenu.classList.add("active");
      overlay.classList.add("active");
    });
  }

  function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

});


/* =====================
   SEARCH
===================== */

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {

    const filter = searchInput.value.trim().toLowerCase();
    const items = document.querySelectorAll(".item");

    let visibleCount = 0;

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = "";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
  });

});


/* =====================
   BOOK CHAPTER TOGGLE
===================== */

document.querySelectorAll(".chapter-toggle").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});


/* =====================
   PROGRESS BAR
===================== */

document.addEventListener("DOMContentLoaded", () => {

  const totalChapters = 10;
  const completedChapters =
    document.querySelectorAll(".chapter-card.completed").length;

  const percentage = Math.round((completedChapters / totalChapters) * 100);

  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text");

  if (progressBar) progressBar.style.width = percentage + "%";
  if (progressText) progressText.textContent = percentage + "% Completed";

});
