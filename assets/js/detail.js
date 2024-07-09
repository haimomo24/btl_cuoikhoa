const API_URL = "https://r3x9h4-3000.csb.app/products";

// Truy cập phần tử 
let imgDetail = document.querySelector(".show-cart-js");

// Get ID sản phẩm 
let params = new URLSearchParams(document.location.search);
let idDetail = params.get('id');

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
            imgDetail.innerHTML = "<p>Error loading product details. Please try again later.</p>";
        }
    };
    getApi(API_URL);
}

const showDetail = (data) => {
    console.log(data);
    let detail = data.find(item => item.id == idDetail);

    if (!detail) {
        imgDetail.innerHTML = "<p>Product details not available.</p>";
        return;
    }

    imgDetail.innerHTML = `
        <div class="col-12 col-md-6 col-sm-6">
            <div class="image-detail">
                <img src="${detail.image}" alt="${detail.title}">
            </div>
        </div>
        <div class="col-12 col-md-6 col-sm-6">
            <div class="detail-option">
                <div class="show-detail" data-id="${detail.id}">
                    <h2>${detail.title}</h2>
                    <h3>${detail.price}</h3>
                    <button>mua ngay</button>
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
    `;
    console.log(detail);
};