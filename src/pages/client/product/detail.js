import toastr from "toastr";
import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import TopSell from "../../../components/client/Topsell";
import { get } from "../../../api/products";
import { addToCart } from "../../../utils/carts";

// import "../../style.css";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main class="container-main">
                    <div class="detail-product">
                        <div class="detail-product-title">
                            <h2>Chi tiết sản phẩm</h2>
                        </div>
                        <div class="detail-product-img">
                            <img src="${data.img}" alt=""/>
                        </div>
                        <div class="detail-product-content">
                            <h3 class="name-product">${data.nameProduct}</h3>
                            <span class="status-product">Status: Còn hàng</span>
                            <span class="price-product">Price: ${data.priceProduct} $</span>
                            <div class="desc-product">
                                <span>Description: </span>
                                <div>
                                    ${data.descProduct}
                                </div>
                            </div>
                            <div class="group-input">
                                <button class="btn-group-item-dec">-</button>
                                <input id="quantity-product" value="1"/>
                                <button class="btn-group-item-inc">+</button>
                            </div>
                            <button class="btn-order btn-addToCart">Add to cart</button>
                            <div class="share">
                                <span>
                                    Share: 
                                    <i class="fab fa-facebook"></i>
                                    <i class="fab fa-facebook-messenger"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    ${TopSell.render()}
                </main>

                <footer class="mt-4">
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender(id) {
        TopSell.afterRender();
        const btnAddToCart = document.querySelector(".btn-addToCart");
        const quantityPro = document.querySelector("#quantity-product");
        btnAddToCart.addEventListener("click", async () => {
            if (localStorage.getItem("user")) {
                const { data } = await get(id);
                // console.log(data);
                const userId = JSON.parse(localStorage.getItem("user")).id;
                console.log(userId);
                addToCart({ ...data, quantity: +quantityPro.value || 1 }, () => {
                    toastr.success("Đã thêm");
                });
            } else {
                toastr.error("Đăng nhập để thêm sản phẩm vào giỏ");
            }
        });
    },
};
export default DetailProduct;