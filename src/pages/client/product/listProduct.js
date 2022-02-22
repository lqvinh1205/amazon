import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import ListProducts from "../../../components/client/ListPro";
import Sidebar from "../../../components/client/Sidebar";
import { searchLike, searchValue, sortValue } from "../../../api/search";
import ProductsTemplate from "../../../components/client/productTemplate";
import { reRender } from "../../../utils";

// import "../../style.css";

const ListProductsPage = {
    async render() {
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main class="container-main">
                    <div class="detail-product">
                        <div class="detail-product-title">
                            <h2>List Products</h2>
                        </div>
                        
                        <div class="list-products">
                            <div class="sidebar">
                                ${await Sidebar.render()}
                            </div>    
                           
                            <div id="list-product-content" class="list-product-content">
                                ${await ListProducts.render()}
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender() {
        const btnSearchValue = document.querySelector("#btn-searchValue");
        btnSearchValue.addEventListener("click", async () => {
            const valueSearch = document.querySelector("#value_search").value;
            const { data } = await searchLike("products", `nameProduct_like=${valueSearch}`);
            document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
        });

        const sortPrice = document.getElementById("sortPrice");
        sortPrice.addEventListener("change", async () => {
            console.log(+sortPrice.value);
            if (+sortPrice.value === 1) {
                const { data } = await sortValue("products", "priceProduct");
                document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
            } else if (+sortPrice.value === 2) {
                const { data } = await sortValue("products", "priceProduct", "desc");
                document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
            } else {
                reRender(ListProductsPage, "app");
            }
        });

        const btnCate = document.querySelectorAll(".btnCate");
        btnCate.forEach((btn) => {
            const { cate } = btn.dataset;
            btn.addEventListener("click", async () => {
                console.log(cate);
                const { data } = await searchValue("products", `category=${cate}`);
                document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
            });
        });
    },
};
export default ListProductsPage;