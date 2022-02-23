import toastr from "toastr";
// eslint-disable-next-line import/no-cycle
import HomePage from "../../pages/home";
import { reRender } from "../../utils";

const Header = {
    render() {
        return /* html */`<div class="header-wrapper">
                <div id="header" class="header">
                    <div class="logoHeader">
                        <a href="/">
                            <img src="https://i.pinimg.com/474x/fa/16/b8/fa16b892512b3df516211c68fc489134.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="deliver">
                        <div>
                        <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <p>Deliver to</p>
                            <p>Vietnam</p>
                        </div>
                    </div>
                    <div class="search">
                        <label>All <i class="fas fa-caret-down"></i></label>
                        <input type="search" />
                        <button><i class="fab fa-sistrix"></i></button>
                    </div>
                    <div class="flag">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png" alt=""/>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="signin">
                    ${localStorage.getItem("user") ? `
                        <a id="logout">
                            <p>Hello, <span id="name"></span></p>
                            <p>Log out here</p>
                        </a>
                        ` : `
                        <a href="/#/signin">
                            <p>Hello, Sign in</p>
                            <p>Acount & Lists</p>
                        </a>
                        
                    `}
                    </div>
                    <div class="returns">
                        <a href="/#/orders"><p>Returns</p>
                        <p>& Orders</p></a>
                    </div>
                    <div class="cart">
                    <a href="/#/carts">
                            <div id="countProduct" class="cart-number">
                                0
                            </div>
                            <i class="fal fa-shopping-cart"></i>
                            <p>Cart</p>
                            </a>
                    </div>
                </div>
                <div class="navbar">
                    <div class="menu">
                        <i class="fas fa-bars"></i>
                        <span>All</span>
                    </div>
                    <div class="navigation">
                        <ul>
                            <li>Today's Deals</li>
                            <li>Customer Service</li>
                            <li>Registry</li>
                            <li>Gifts Cards</li>
                            <li><a href="/#/products">Products</a></li>
                        </ul>
                    </div>
                    <div>
                        Shop Valentine's Day
                    </div>
                </div>
            </div>`;
    },
    afterRender() {
        if (localStorage.getItem("user")) {
            const userName = JSON.parse(localStorage.getItem("user")).username;
            document.getElementById("name").innerHTML = userName;
        }
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(HomePage, "app");
                toastr.success("Đăng xuất thành công");
            });
        }
        if (localStorage.getItem("cart")) {
            document.getElementById("countProduct").innerText = JSON.parse(localStorage.getItem("cart")).length;
        }
    },
};
export default Header;