// js/Search.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  // If the search form or input isn't present on the page, safely exit.
  if (!form || !input) {
    return;
  }

});

// (OpenAI, 2025), says this is how you add a search function with javascript

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  // Check that the form and input exist
  if (!form || !searchInput) {
    console.warn("Search form or input not found in the page.");
    return;
  }

  // When user submits the form (presses Enter)
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page from refreshing
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      alert("Please type something to search.");
      return;
    }

    // Find all the links in the page
    const links = document.querySelectorAll("a");
    let found = false;

    links.forEach((link) => {
      const text = link.textContent.toLowerCase();
      if (text.includes(query)) {
        found = true;
        // ✅ Automatically open the matching page
        window.location.href = link.href;
      }
    });

    // If nothing matches
    if (!found) {
      alert("No matching pages found for: " + query , ". Please try again with 'Pastries', 'Big Bites',etc.");
    }
  });
});



