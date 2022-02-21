import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import ListProducts from "../../../components/client/ListPro";
import Sidebar from "../../../components/client/Sidebar";
import { searchLike } from "../../../api/search";
import ProductsTemplate from "../../../components/client/productTemplate";

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
                                ${Sidebar.render()}
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
    },
};
export default ListProductsPage;