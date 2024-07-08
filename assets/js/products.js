const API_URL = "https://r3x9h4-3000.csb.app/products";
let thisPage = 1;
const limit = 6;
const rowJs = document.querySelector(".row-js");
const listPage = document.querySelector(".listPage");

const getApi = async (url) => {
  let response = await axios.get(url);
  showProduct(response.data);
  loadItem();
};

const showProduct = (data) => {
  let HTML = "";
  data.forEach((value) => {
    HTML += `<div class="col-12 col-sm-4 col-md-4 item">
                            <div class="cart-category-products">
                                <a href="./detail.html?id=${value.id}">
                                    
                                        <img src="${value.image}" alt="">
                                        <p class="title-category">${value.title}<p>
                                        <p class="price-category">${value.price}</p>
                                        
                                            
                                        
                                    
                                </a>
                            </div>
                         </div>`;
  });
  rowJs.innerHTML = HTML;
  loadItem();
};

const loadItem = () => {
  const items = document.querySelectorAll(".item");
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  items.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPagination(items.length);
};

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

const changePage = (i) => {
  thisPage = i;
  loadItem();
};

// Lọc sản phẩm theo từ khóa
const filterBySearchTerm = (data, searchTerm) => {
  return data.filter((item) => {
    const oldTitle = item.title.toLowerCase();
    return oldTitle.includes(searchTerm);
  });
};
// Loc san pham theo category (checkbox)
const filterByCategory = (
  filteredData,
  votCheckbox,
  giayCheckBox,
  quanCheckBox,
  vayCheckBox,
  aoCheckBox,
  tuiCheckBox,
  baloCheckBox,
  phuCheckBox
) => {
  console.log(votCheckbox);
  // Nguoi dung khong chon category nao -> tra ve array nhan duoc
  if (
    !votCheckbox &&
    !giayCheckBox &&
    !quanCheckBox &&
    !vayCheckBox &&
    !aoCheckBox &&
    !tuiCheckBox &&
    !baloCheckBox &&
    !phuCheckBox
  ) {
    return filteredData;
  }

  const resultCheckbox = filteredData.filter((item) => {
    // console.log(item);
    const categoryTitle = item.category.toLowerCase();
    console.log(categoryTitle);

    return (
      (votCheckbox && categoryTitle === "Vợt cầu lông") ||
      (giayCheckBox && categoryTitle === "Giày") ||
      (quanCheckBox && categoryTitle === "Quần cầu lông") ||
      (vayCheckBox && categoryTitle === "váy cầu lông") ||
      (aoCheckBox && categoryTitle === "Áo cầu lông") ||
      (tuiCheckBox && categoryTitle === "Túi xách cầu") ||
      (baloCheckBox && categoryTitle === "Balo cầu lông") ||
      (phuCheckBox && categoryTitle === "Phụ kiện cầu lông")
    ); //return cua ham filter
  });

  return resultCheckbox;
};

//  Hàm tổng hợp để lọc sản phẩm
const filterProducts = () => {
  // Lay gia tri nguoi dung khi nhap vao input
  let textSearch = document.querySelector(".form-control").value;
  let searchTerm = textSearch.toLowerCase().trim(); // Covert Chua In hoa -> Thuong, bo khoang trang

  // Truy cap phan tu, check xem nguoi dung click vao checkbox nao ?
  const votCheckbox = document.querySelector("#option_1").checked;
  const giayCheckBox = document.querySelector("#option_2").checked;
  const quanCheckBox = document.querySelector("#option_3").checked;
  const vayCheckBox = document.querySelector("#option_4").checked;
  const aoCheckBox = document.querySelector("#option_5").checked;
  const tuiCheckBox = document.querySelector("#option_6").checked;
  const baloCheckBox = document.querySelector("#option_7").checked;
  const phuCheckBox = document.querySelector("#option_8").checked;

  let filteredData = data;

  // Lọc sản phẩm theo từ khóa
  filteredData = filterBySearchTerm(data, searchTerm);

  // Loc san pham theo category (checkbox)
  // console.log(filterByCategory(filteredData, namCheckbox, nuCheckBox));
  filteredData = filterByCategory(
    filteredData,
    votCheckbox,
    giayCheckBox,
    quanCheckBox,
    vayCheckBox,
    aoCheckBox,
    tuiCheckBox,
    baloCheckBox,
    phuCheckBox
  );

  // Hiển thị sản phẩm đã lọc
  renderProducts(filteredData);
};

let clearTime;
// Lắng nghe sự kiện nhập liệu trên ô tìm kiếm
let inputSearch = document.querySelector(".form-control");
inputSearch.addEventListener("input", () => {
  clearTimeout(clearTime);

  // Neu sau 3s khong nhap nua thi moi goi vao filterProducts();
  clearTime = setTimeout(() => {
    filterProducts();
  }, 1000); //1000ms -> 1s
});

// Lắng nghe sự kiện người dùng click checkbox
let inputCheckBox = document.querySelectorAll(".form-check-input");
inputCheckBox.forEach((checkbox, index) => {
  checkbox.addEventListener("click", () => {
    filterProducts();
  });
});

getApi(API_URL);
