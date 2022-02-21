import toastr from "toastr";
import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import { getLocalStorage, reRender } from "../../../utils";
import { decreaseQuantity, increaseQuatity, removeProduct } from "../../../utils/carts";

// import "../../style.css";

const CartsPage = {
    render() {
        const data = getLocalStorage("cart");
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main class="container-main">
                    <div class="detail-carts">
                        <div class="detail-product-title">
                            <h2>Giỏ hàng</h2>
                        </div>
                        
                        <div class="list-carts">
                            
                            <div class="list-carts-content">
                                <div class="flex flex-col max-w-4xl mt-4 mx-auto mb-5">
                                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg table-cart">
                                                <table class="min-w-full divide-y divide-gray-200">
                                                    <thead class="bg-gray-50 font-bold">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                                Name Product
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                                Image
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                                Price
                                                            </th>
                                                            <th scope="col" class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                                Quantity
                                                            </th>
                                                            <th scope="col-2" class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white divide-y divide-gray-200">
                                                    
                                                    ${data.map((product) => /* html */`
                                                        <tr>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <div class="text-sm text-left font-medium text-gray-900 max-w-xs overflow-hidden">
                                                                    ${product.nameProduct}
                                                                </div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-center flex justify-center">
                                                                <div class="flex-shrink-0 h-10 w-10">
                                                                    <div class="flex-shrink-0 h-10 w-10">
                                                                        <img class="h-full w-full" src="${product.img}" alt="">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                                <div class="text-sm text-gray-900">${product.priceProduct} $</div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                                <div class="text-sm text-gray-900 flex justify-center">
                                                                    <div class="group-input-cart">
                                                                        <button data-id="${product.id}" id="btn-dec" class="btn btn-group-item-dec">-</button>
                                                                        <input id="quatity-pro" value="${product.quantity}"/>
                                                                        <button data-id="${product.id}" id="btn-inc" class="btn btn-group-item-inc">+</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                                <button data-id="${product.id}" class="btn btn-remove text-red-600 hover:text-indigo-900">Delete</button>
                                                            </td>
                                                        </tr>
                                                    `).join("")}
                                                    
                                                <!-- More people... -->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="sidebar-carts">
                                <div class="sidebar-cart">
                                    <div class="sidebar-cart1">
                                        <span>Giao tới</span>
                                        <a href="/">Thay đổi</a>
                                    </div>
                                    <div class="sidebar-cart2">
                                        <span>Lê Vinh</span>
                                        <span>0359102999</span>
                                    </div>
                                    <div class="sidebar-cart3">
                                        <span>Tk10, xã Hát Lót, Huyện Mai Sơn, Sơn La</span>
                                    </div>
                                </div>

                                <div class="voucher">
                                    <div class="voucher1">
                                        <span>Amazon sales</span>
                                    </div>
                                    <div class="voucher2">
                                        <span>Chọn hoặc nhập khuyến mãi</span>
                                    </div>
                                </div> 

                                <div class="toltal-cart">
                                    <div class="toltal-cart1">
                                        <span>Tạm tính</span>
                                        <span>0đ</span>
                                    </div>
                                    <div class="toltal-cart2">
                                        <span>Giảm giá</span>
                                        <span>0đ</span>
                                    </div>
                                    <hr />
                                    <div class="toltal-cart3">
                                        <div>Tổng cộng</div>
                                        <div>
                                            <span> 999.999 đ</span>
                                            <span>(Đã bao gồm VAT nếu có)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-cart1">
                                    <button class="btn-order">Chọn mua</button>
                                </div>
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
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-group-item-inc")) {
                    increaseQuatity(id, () => {
                        reRender(CartsPage, "app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-group-item-dec")) {
                    decreaseQuantity(id, () => {
                        reRender(CartsPage, "app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    console.log(id);
                    removeProduct(id, () => {
                        reRender(CartsPage, "app");
                        toastr.success("Đã xóa thành công");
                    });
                }
            });
        });
    },
};
export default CartsPage;