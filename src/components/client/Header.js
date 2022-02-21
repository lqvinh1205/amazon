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
                        <a href="/#/signin">
                            <p>Hello, Sign in</p>
                            <p>Acount & Lists</p>
                        </a>
                    </div>
                    <div class="returns">
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>
                    <div class="cart">
                    <a href="/#/carts">
                            <div class="cart-number">
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
};
export default Header;