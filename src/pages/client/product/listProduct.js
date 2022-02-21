import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import ListProducts from "../../../components/client/ListPro";
import Sidebar from "../../../components/client/Sidebar";

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
                           
                            <div class="list-product-content">
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
};
export default ListProductsPage;