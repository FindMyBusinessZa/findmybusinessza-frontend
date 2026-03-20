// Mapping of provinces → towns → categories
const data = {
  "Gauteng": {
    "Johannesburg": ["Restaurants", "Shops", "Services"],
    "Pretoria": ["Restaurants", "Shops", "Services"],
    "Soweto": ["Restaurants", "Shops"]
  },
  "Western Cape": {
    "Cape Town": ["Restaurants", "Shops", "Services"],
    "Stellenbosch": ["Restaurants", "Shops"],
    "Paarl": ["Shops", "Services"]
  },
  "KwaZulu-Natal": {
    "Durban": ["Restaurants", "Shops", "Services"],
    "Pietermaritzburg": ["Shops", "Services"],
    "Richards Bay": ["Restaurants", "Services"]
  },
  "Eastern Cape": {
    "Port Elizabeth": ["Restaurants", "Shops"],
    "East London": ["Shops", "Services"],
    "Mthatha": ["Restaurants", "Services"]
  },
  "Free State": {
    "Bloemfontein": ["Restaurants", "Shops"],
    "Welkom": ["Shops", "Services"],
    "Kroonstad": ["Restaurants", "Services"]
  },
  "Limpopo": {
    "Polokwane": ["Restaurants", "Shops"],
    "Tzaneen": ["Shops", "Services"],
    "Thohoyandou": ["Restaurants", "Services"]
  },
  "Mpumalanga": {
    "Nelspruit": ["Restaurants", "Shops"],
    "Secunda": ["Shops", "Services"],
    "Bethal": ["Restaurants", "Services"]
  },
  "North West": {
    "Rustenburg": ["Restaurants", "Shops"],
    "Mahikeng": ["Shops", "Services"],
    "Klerksdorp": ["Restaurants", "Services"]
  },
  "Northern Cape": {
    "Kimberley": ["Restaurants", "Shops"],
    "Upington": ["Shops", "Services"],
    "Springbok": ["Restaurants", "Services"]
  }
};

const provinceSelect = document.getElementById("province");
const townSelect = document.getElementById("town");
const categorySelect = document.getElementById("category");

provinceSelect.addEventListener("change", () => {
  const towns = data[provinceSelect.value] ? Object.keys(data[provinceSelect.value]) : [];

  // Clear previous towns and categories
  townSelect.innerHTML = '<option value="">Select a town</option>';
  categorySelect.innerHTML = '<option value="">Select a category</option>';

  towns.forEach(town => {
    const option = document.createElement("option");
    option.value = town;
    option.textContent = town;
    townSelect.appendChild(option);
  });
});

townSelect.addEventListener("change", () => {
  const selectedProvince = provinceSelect.value;
  const selectedTown = townSelect.value;
  const categories = data[selectedProvince] && data[selectedProvince][selectedTown] ? data[selectedProvince][selectedTown] : [];

  // Clear previous categories
  categorySelect.innerHTML = '<option value="">Select a category</option>';

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
});

// Placeholder search function
document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const province = provinceSelect.value;
  const town = townSelect.value;
  const category = categorySelect.value;

  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = `<p>Searching for <strong>${category || "all categories"}</strong> in <strong>${town || "all towns"} (${province || "all provinces"})</strong>...</p>`;
});