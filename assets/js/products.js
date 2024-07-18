const API_URL = "https://r3x9h4-3000.csb.app/products";
let thisPage = 1;
const limit = 6;
const rowJs = document.querySelector(".row-js");
const listPage = document.querySelector(".listPage");
let data = [];


// Fetch the product data from the API
const getApi = async (url) => {
  try {
    let response = await axios.get(url);
    data = response.data;
    showProduct(data);
    loadItem();
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
};

// Display products on the page
const showProduct = (data) => {
  let HTML = "";
  data.forEach((value) => {
    HTML += `<div class="col-12 col-sm-4 col-md-4 item">
                            <div class="cart-category-products">
                                <a href="./detail.html?id=${value.id}">
                                    <img src="${value.image}" alt="">
                                    <p class="title-category">${value.title}</p>
                                    
                                    <p class="price-category">${value.price} VND</p>
                                </a>
                            </div>
                         </div>`;
  });
  rowJs.innerHTML = HTML;
  loadItem();
};

// Load items for the current page
const loadItem = () => {
  const items = document.querySelectorAll(".item");
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage;
  items.forEach((item, key) => {
    if (key >= beginGet && key < endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPagination(items.length);
};

// Create pagination elements
const listPagination = (totalItems) => {
  const count = Math.ceil(totalItems / limit);
  listPage.innerHTML = "";

  if (thisPage !== 1) {
    let prev = document.createElement("li");
    prev.innerText = "<<";
    prev.onclick = () => changePage(thisPage - 1);
    listPage.appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i === thisPage) {
      newPage.classList.add("active");
    }
    newPage.onclick = () => changePage(i);
    listPage.appendChild(newPage);
  }

  if (thisPage !== count) {
    let next = document.createElement("li");
    next.innerText = ">>";
    next.onclick = () => changePage(thisPage + 1);
    listPage.appendChild(next);
  }
};

// Change the current page
const changePage = (i) => {
  thisPage = i;
  loadItem();
};

// Filter products by search term
const filterBySearchTerm = (data, searchTerm) => {
  return data.filter((item) => {
    const oldTitle = item.title.toLowerCase();
    return oldTitle.includes(searchTerm);
  });
};

// Filter products by selected categories
const filterByCategory = (filteredData, categories) => {
  if (categories.length === 0) {
    return filteredData;
  }

  return filteredData.filter((item) => {
    const categoryTitle = item.category.toLowerCase().trim();
    return categories.includes(categoryTitle);
  });
};

// Filter products based on search term and selected categories
const filterProducts = () => {
  let textSearch = document.querySelector(".form-control").value;
  let searchTerm = textSearch.toLowerCase().trim();

  const categories = [];
  if (document.querySelector("#option_1").checked) categories.push("vợt");
  if (document.querySelector("#option_2").checked) categories.push("giày");
  if (document.querySelector("#option_3").checked) categories.push("quần");
  if (document.querySelector("#option_4").checked) categories.push("váy");
  if (document.querySelector("#option_5").checked) categories.push("áo");
  if (document.querySelector("#option_6").checked) categories.push("túi");
  if (document.querySelector("#option_7").checked) categories.push("balo");
  if (document.querySelector("#option_8").checked) categories.push("phụ");

  console.log("Search Term:", searchTerm);
  console.log("Selected Categories:", categories);

  let filteredData = data;

  filteredData = filterBySearchTerm(filteredData, searchTerm);
  console.log("After Search Term Filter:", filteredData);

  filteredData = filterByCategory(filteredData, categories);
  console.log("After Category Filter:", filteredData);

  showProduct(filteredData);
  loadItem(); // Ensure that pagination is updated for filtered data
};

// Add event listeners for search input and checkboxes
let clearTime;
let inputSearch = document.querySelector(".form-control");
inputSearch.addEventListener("input", () => {
  clearTimeout(clearTime);
  clearTime = setTimeout(() => {
    filterProducts();
  }, 1000);
});

let inputCheckBox = document.querySelectorAll(".form-check-input");
inputCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    filterProducts();
  });
});

// Fetch data from the API on page load

getApi(API_URL);