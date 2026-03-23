// -------------------- LOCATION DATA (EXPANDED TOWNS) --------------------
const locationData = {
  "Gauteng": ["Johannesburg","Pretoria","Soweto","Midrand","Randburg","Benoni","Boksburg","Alberton","Centurion"],
  "Western Cape": ["Cape Town","Stellenbosch","Paarl","George","Knysna","Worcester","Somerset West","Hermanus"],
  "KwaZulu-Natal": ["Durban","Pietermaritzburg","Richards Bay","Newcastle","Empangeni","Ladysmith","Umlazi"],
  "Eastern Cape": ["Port Elizabeth","East London","Mthatha","Grahamstown","Queenstown","Uitenhage","Butterworth"],
  "Free State": ["Bloemfontein","Welkom","Kroonstad","Sasolburg","Parys","Harrismith","Bethlehem"],
  "Limpopo": ["Polokwane","Tzaneen","Thohoyandou","Mokopane","Musina","Lebowakgomo","Giyani"],
  "Mpumalanga": ["Nelspruit","Secunda","Witbank","Bethal","Middelburg","Standerton","Ermelo"],
  "North West": ["Rustenburg","Mahikeng","Klerksdorp","Potchefstroom","Lichtenburg","Vryburg","Brits"],
  "Northern Cape": ["Kimberley","Upington","Springbok","De Aar","Kuruman","Colesberg","Postmasburg"]
};

// -------------------- CATEGORY DATA --------------------
const categoryData = {
  "Agriculture": ["Animal products","Field crops","Greenhouse crops","Horticulture & production"],
  "Education": ["Accredited Training and development","Early Childhood Development (ECD)","General Education and Training (GET)","Further Education and Training (FET)","Higher Education and Training (HET)"],
  "Entertainment": ["Equipment rental","Event planning","Live performance","Photography & media"],
  "Food and Beverage": ["Bakeries","Beverage dealers","Catering","Fast food"],
  "Health": ["General practitioners","Medical equipment","Mental health","Nursing homes","Pharmacy","Biotech","Diagnostics","Veterinarian"],
  "Manufacturing": ["Automotive","Chemicals","Textiles","Construction equipment","Food production","Furniture","Engineering"],
  "Property": ["Apartment rental","Commercial leasing","House leasing","Student accommodation","Property sales"],
  "Retail": ["Clothing","Convenience store","Electronics","Energy","Equipment","General stores","Supermarket","Warehousing"],
  "Services": ["Arts","Beauty","Courier","Childcare","Cleaning","Electrician","Funeral services","Gardening","Internet cafe","Laundry","Marketing","Mechanics","Pet services","Plumbing","Coaching","Security","Waste management"],
  "Technology": ["Cloud computing","Cyber security","Data protection","IT support","IT consulting","Networking","Software development"],
  "Tourism": ["Hotels","Guesthouse","Shuttle","Tour guide"],
  "Transport and Construction": ["Transport","Construction"]
};

// -------------------- ELEMENTS --------------------
const provinceSelect = document.getElementById("province");
const townSelect = document.getElementById("town");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");

// -------------------- POPULATE PROVINCES --------------------
Object.keys(locationData).forEach(province => {
  const option = document.createElement("option");
  option.value = province;
  option.textContent = province;
  provinceSelect.appendChild(option);
});

// -------------------- PROVINCE → TOWNS --------------------
provinceSelect.addEventListener("change", () => {
  const towns = locationData[provinceSelect.value] || [];

  townSelect.innerHTML = '<option value="">Select a town</option>';

  towns.forEach(town => {
    const option = document.createElement("option");
    option.value = town;
    option.textContent = town;
    townSelect.appendChild(option);
  });
});

// -------------------- POPULATE CATEGORIES --------------------
Object.keys(categoryData).forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

// -------------------- CATEGORY → SUBCATEGORY --------------------
categorySelect.addEventListener("change", () => {
  const subs = categoryData[categorySelect.value] || [];

  subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';

  subs.forEach(sub => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
});

// -------------------- SEARCH --------------------
document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const province = provinceSelect.value;
  const town = townSelect.value;
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;

  document.getElementById("results").innerHTML =
    `<p>Searching for <strong>${subcategory || category}</strong> in <strong>${town || "all towns"} (${province || "all provinces"})</strong></p>`;
});