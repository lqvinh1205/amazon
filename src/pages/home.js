import Banner from "../components/client/Banner";
import Category from "../components/client/Categories";
import Footer from "../components/client/Footer";
import Header from "../components/client/Header";
import SigninFooter from "../components/client/SigninFooter";

import "../css/footer.css";
import "../css/banner.css";
import "../css/header.css";
import "../css/category.css";
import "../css/detailPro.css";
import "../css/sidebar.css";
import "../css/sidebarCart.css";
import TopSell from "../components/client/Topsell";
import "../css/topsell.css";
import Active from "../components/client/Active";
import ButtonSell from "../components/client/ButtonSell";

// import "../../style.css";

const HomePage = {
    render() {
        return /* html */`
            <div>
                <header id="header">
                    ${Header.render()}
                    ${Banner.render()}
                </header>
                <main class="container-main">
                    ${Category.render()}
                    ${TopSell.render()}
                    ${Active.render()}
                    ${ButtonSell.render()}
                </main>
                    
                <footer>
                    ${SigninFooter.render()}
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
        Banner.afterRender();
        TopSell.afterRender();
        ButtonSell.afterRender();
    },
};
export default HomePage;