const API_URL = "https://r3x9h4-3000.csb.app/products";

// Truy cập phần tử
let imgDetail = document.querySelector(".show-cart-js");
 


// Get ID sản phẩm
let params = new URLSearchParams(document.location.search);
let idDetail = params.get("id");


if (!idDetail) {
  console.error("Product ID not found in the URL");
  imgDetail.innerHTML = "<p>Product not found. Please check the URL.</p>";
} else {
  const getApi = async (url) => {
    try {
      let response = await axios.get(url);
      showDetail(response.data);
    } catch (error) {
      console.error("Error fetching data from API", error);
      imgDetail.innerHTML =
        "<p>Error loading product details. Please try again later.</p>";
    }
  };
  getApi(API_URL);
}




const showDetail = (data) => {
  console.log(data);
  let detail = data.find((item) => item.id == idDetail);

  if (!detail) {
    imgDetail.innerHTML = "<p>Product details not available.</p>";
    return;
  }

  imgDetail.innerHTML = `
        <div class="col-12 col-md-6 col-sm-6">
            <div class="image-detail">
                <img class="product-image" src="${detail.image}" alt="${detail.title}">
            </div>
        </div>
        <div class="col-12 col-md-6 col-sm-6">
            <div class="detail-option">
                <div class="show-detail" data-id="${detail.id}">
                    <h2 class="product-title">${detail.title}</h2>
                    <div class="span-detail"></div>
                    <span>Số lượng : </span>
                     <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                    <h3 class="product-price">${detail.price} VND</h3>
                    <button class="add-to-cart"> <i class="fa-solid fa-cart-shopping"></i>Mua ngay</button>
                </div>
                <div class="pro-discount uu_dai">
                    <legend>
                        <img width="32px;" height="32px;" alt="Khuyến mãi" src="https://cdn.shopvnb.com/themes/images/code_dis.gif"/> ƯU ĐÃI
                    </legend>
                    <div class="product-promotions-list-content">
                        <p>✔ Tặng 2 Quấn cán vợt Cầu Lông: <a href="https://shopvnb.com/quan-can-vot-cau-long-vnb.html">VNB 001</a>, <a href="https://shopvnb.com/quan-can-vot-cau-long-vs1.html">VS002</a> hoặc <a href="https://shopvnb.com/quan-can-joto.html">Joto 001</a></p>
                        <p>✔ Sản phẩm cam kết chính hãng</p>
                        <p>✔ Một số sản phẩm sẽ được tặng bao đơn hoặc bao nhung bảo vệ vợt</p>
                        <p>✔ Thanh toán sau khi kiểm tra và nhận hàng (Giao khung vợt)</p>
                        <p>✔ Bảo hành chính hãng theo nhà sản xuất (Trừ hàng nội địa, xách tay)</p>
                        <p><span style="font-family:verdana,geneva,sans-serif"><strong>🎁Ưu đãi thêm khi mua sản phẩm tại <a href="https://shopvnb.com/cua-hang-vnb-premium.html">VNB Premium</a></strong></span></p>
                        <p><span style="font-family:verdana,geneva,sans-serif">✅ <a href="https://shopvnb.com/son-logo-mat-vot-mien-phi-tai-shop-vnb-premium.html">Sơn logo mặt vợt</a> miễn phí</span></p>
                        <p><span style="font-family:verdana,geneva,sans-serif">✅ <a href="https://shopvnb.com/bao-hanh-luoi-dan-trong-72h-tai-vnb-premium.html">Bảo hành lưới đan</a> trong 72 giờ</span></p>
                        <p><span style="font-family:verdana,geneva,sans-serif">✅ <a href="https://shopvnb.com/thay-gen-vot-cau-long-mien-phi-tai-vnb-premium.html">Thay gen vợt</a> miễn phí trọn đời</span></p>
                        <p><span style="font-family:verdana,geneva,sans-serif">✅ <a href="https://shopvnb.com/tich-luy-diem-thanh-vien-tai-vnb-premium.html">Tích luỹ điểm thành viên</a> Premium</span></p>
                        <p><span style="font-family:verdana,geneva,sans-serif">✅ <a href="https://shopvnb.com/vnb-premium-tang-voucher-giam-gia-cho-lan-mua-hang-tiep-theo.html">Voucher giảm giá</a> cho lần mua hàng tiếp theo</span></p>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-12 col-md-12 col-sm-12">
         <h3>Mô tả sản phẩm </h3>
            <div class="product_detail_title">
            <p>${detail.title2}</p>
            <img class="img-show-detail col-12 col-md-12 col-sm-12" src="${detail.image2}">
            <p>${detail.title3}</p>
            <div class="row d-flex justify-content-center">
            <h3>Đánh giá & nhận xét ${detail.title} </h3>
           
            </div>
            
         </div>
         <section ">
  <div class="container my-5 py-5 text-body">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
                height="65" />
              <div class="w-100">
                <h5>Đánh giá của bạn </h5>
                <ul data-mdb-rating-init class="rating mb-3" data-mdb-toggle="rating">
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Bad"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Poor"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="OK"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Good"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Excellent"></i>
                  </li>
                </ul>
                <div data-mdb-input-init class="form-outline">
                  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                  <label class="form-label" for="textAreaExample"></label>
                </div>
                <div class="d-flex justify-content-between mt-3">
                 
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn">
                    Gửi <i class="fas fa-long-arrow-alt-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    `;
  console.log(detail);
};




document.addEventListener("DOMContentLoaded", () => {
  // Event delegation for "Add to Cart" button
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      addToCartClicked(event.target);
      document.querySelector(".cart-moder-over").style.transform =
        "translateX(0)";
    }

    if (event.target.classList.contains("remove-btn")) {
      removeCartItem(event.target);
    }
  });
 

  const addToCartClicked = (button) => {
    let parentCart = button.closest(".show-detail");
    let price = parentCart.querySelector(".product-price").innerText;
    let title = parentCart.querySelector(".product-title").innerText;
    let imageSrc = parentCart
      .closest(".row")
      .querySelector(".product-image").src;
    let productId = parentCart.getAttribute("data-id");
    addToCartItem(productId, price, title, imageSrc);
  };

  const addToCartItem = (productId, price, title, imageSrc) => {
    let productRows = document.querySelector(".products-overlay");
    let existingProduct = productRows.querySelector(
      `.product-row[data-id="${productId}"]`
    );

    if (existingProduct) {
      alert("Sản phẩm này đã có trong giỏ hàng.");
      return;
    }
    
    let divEL = document.createElement("div");
    divEL.classList.add("product-row");
    divEL.setAttribute("data-id", productId);

    let cartHTML = `
        <section class="vh-100" style="background-color: #fdccbc;">
          <div class="container h-100">
            <div class="close-cart">
              <i class="fa-regular fa-rectangle-xmark"></i>
            </div>
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <p><span class="h2">Shopping Cart </span><span class="h4">(1 item in your cart)</span></p>
                <div class="card mb-4 product-item" data-id="${productId}">
                  <div class="card-body p-4">
                    <div class="row align-items-center">
                      <div class="col-md-2">
                        <img src="${imageSrc}" class="img-fluid" alt="Generic placeholder image">
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Name</p>
                          <p class="lead fw-normal mb-0">${title}</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Color</p>
                          <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" style="color:#E95221;"></i> pink rose</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Quantity</p>
                          <p class="lead fw-normal mb-0">1</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Price</p>
                          <p class="lead fw-normal mb-0">${price}</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        <div>
                          <p class="small text-muted mb-4 pb-2">Total</p>
                          <p class="lead fw-normal mb-0">${price}</p>
                        </div>
                      </div>
                      <div class="col-md-2 d-flex justify-content-center">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-5">
                  <div class="card-body p-4">
                    <div class="float-end">
                      <p class="mb-0 me-5 d-flex align-items-center">
                        <span class="small text-muted me-2">Order total:</span> 
                        <span class="lead fw-normal">${price}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                <div>
                          <button type="button" class="btn btn-light btn-lg remove-btn me-2">
                            xóa
                          </button>
                        </div>
                  <button type="button" class="btn btn-primary btn-lg">
                    Mua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    divEL.innerHTML = cartHTML;
    productRows.appendChild(divEL);

    divEL.querySelector(".close-cart").addEventListener("click", () => {
      divEL.remove();
    });
  };

  const removeCartItem = (button) => {
    let productRow = button.closest(".product-row");
    productRow.remove();
    updateCartTotal();
  };

  const updateCartTotal = () => {
    let cartItems = document.querySelectorAll(".product-row");
    let total = 0;
    cartItems.forEach((item) => {
      let priceElement = item.querySelector(".lead.fw-normal.mb-0");
      let price = parseFloat(priceElement.innerText.replace("$", ""));
      total += price;
    });
    document.querySelector(
      ".float-end .lead.fw-normal"
    ).innerText = `$${total.toFixed(2)}`;
  };
});



let buttonCart = document.querySelector(".cart-shopping")

 let openCart = document.querySelector(".cart-moder-over")
 console.log(openCart)
 buttonCart.addEventListener("click",()=>{
  console.log(openCart)
   openCart.style.transform = " translateX(0%)";
  
 })