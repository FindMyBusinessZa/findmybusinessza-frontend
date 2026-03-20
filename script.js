document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const category = document.getElementById("category").value;

  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = `<p>Searching for <strong>${category}</strong> in <strong>${location}</strong>...</p>`;

  // Placeholder for future dynamic search functionality
});