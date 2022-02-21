import Navigo from "navigo";
import AdminDashboard from "./pages/admin/dashboard";
import NewsPage from "./pages/admin/news";
import NewAddPage from "./pages/admin/news/add";
import NewEditPage from "./pages/admin/news/edit";
import ProductsPage from "./pages/admin/products";
import ProductAddPage from "./pages/admin/products/add";
import ProductEditPage from "./pages/admin/products/edit";
import CartsPage from "./pages/client/product/carts";
import DetailProduct from "./pages/client/product/detail";
import ListProductsPage from "./pages/client/product/listProduct";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a", hash: true });
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userID = JSON.parse(localStorage.getItem("user")).id;
            if (userID === 1) {
                // neu id = 1 thi goi ham done de cho phep vao admin
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/signin";
        }
    },
});

// Render HTML: select vao #app va check neu ton tai afterRender thi cho thuc hien
const printf = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on({
    "/": () => printf(HomePage),
    "/signin": () => printf(Signin),
    "/signup": () => printf(Signup),
    "/carts": () => printf(CartsPage),
    "/products": () => printf(ListProductsPage),
    "/products/:id": ({ data }) => printf(DetailProduct, data.id),
    "/admin": () => printf(AdminDashboard),
    "/admin/news": () => printf(NewsPage),
    "/admin/news/add": () => printf(NewAddPage),
    "/admin/news/:id/edit": ({ data }) => printf(NewEditPage, data.id),
    "/admin/categories": () => printf(NewsPage),
    "/admin/categories/add": () => printf(NewAddPage),
    "/admin/categories/:id/edit": ({ data }) => printf(NewEditPage, data.id),
    "/admin/products": () => printf(ProductsPage),
    "/admin/products/add": () => printf(ProductAddPage),
    "/admin/products/:id/edit": ({ data }) => printf(ProductEditPage, data.id),
});

router.resolve();