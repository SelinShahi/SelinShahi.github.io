
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const noResults = document.getElementById("noResults");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const filter = searchInput.value.trim().toLowerCase();
        const items = document.querySelectorAll(".item");

        let visibleCount = 0;

        items.forEach(function (item) {

            const text = item.innerText.toLowerCase();

            if (text.includes(filter)) {
                item.style.display = "";
                visibleCount++;
            } else {
                item.style.display = "none";
            }

        });

        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

});


const toggles = document.querySelectorAll(".chapter-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
  });
});




document.querySelectorAll(".chapter-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const totalChapters = 10; // کل فصل‌هایی که برنامه داری
  const completedChapters = document.querySelectorAll(".chapter-card.completed").length;

  const percentage = Math.round((completedChapters / totalChapters) * 100);

  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text");

  progressBar.style.width = percentage + "%";
  progressText.textContent = percentage + "% Completed";

});
