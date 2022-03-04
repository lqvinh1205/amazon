import toastr from "toastr";
import $ from "jquery";
import emailjs, { init } from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import { getLocalStorage, reRender } from "../../../utils";
import { decreaseQuantity, increaseQuatity, removeProduct } from "../../../utils/carts";
import { add } from "../../../api/cart";

init("user_hilxnivyt8WPlg8YXbyQe");

// import "../../style.css";

const CartsPage = {
    render() {
        const data = getLocalStorage("cart") || [];
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
                                                                <input class="countPrice" data-price="${product.quantity * product.priceProduct}" hidden/>
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
                                <form id="form-order">
                                    <div class="sidebar-cart">
                                        <div class="sidebar-cart1">
                                            <span>Nhập thông tin</span>
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                                
                                                <div class="mt-1">
                                                    <label for="nameUser" class="block text-sm font-medium text-gray-700">
                                                    Tên
                                                    </label>
                                                    <input type="text" id="nameUser" name="nameUser" value="${JSON.parse(localStorage.getItem("user")).username}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                                </div>
                                                <div class="mt-1">
                                                    <label for="numberPhone" class="block text-sm font-medium text-gray-700">
                                                    Số điện thoại
                                                    </label>
                                                    <input type="text" id="numberPhone" name="numberPhone" placeholder="Số điện thoại"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                                </div>
                                        </div>
                                        <div class="mt-1">
                                            <label for="addressUser" class="block text-sm font-medium text-gray-700">
                                            Địa chỉ
                                            </label>
                                            <input type="text" id="addressUser" name="addressUser" placeholder="Địa chỉ"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                        </div>

                                        <div class="mt-1">
                                            <label for="emailUser" class="block text-sm font-medium text-gray-700">
                                            Email
                                            </label>
                                            <input type="text" id="emailUser" name="emailUser" value="${JSON.parse(localStorage.getItem("user")).email}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
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
                                                <span id="toltalPrice"> 999.999 đ</span>
                                                <span>(Đã bao gồm VAT nếu có)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-cart1">
                                        <button id="btn-order" type="submit" class="btn-order">Chọn mua</button>
                                    </div>
                                </form>
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
        const data = getLocalStorage("cart") || [];

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
                    removeProduct(id, () => {
                        reRender(CartsPage, "app");
                    });
                }
            });
        });
        const countPrice = document.querySelectorAll(".countPrice");
        let totalPrice = 0;
        countPrice.forEach((item) => {
            const { price } = item.dataset;
            totalPrice += parseFloat(price);
        });
        document.getElementById("toltalPrice").innerText = `${totalPrice} $`;
        // console.log(JSON.parse(localStorage.getItem("cart")));

        $().ready(() => {
            $("#form-order").validate({
                rules: {
                    nameUser: "required",
                    numberPhone: "required",
                    addressUser: "required",
                    emailUser: {
                        required: true,
                        email: true,
                    },
                },
                messages: {
                    nameUser: "Tên đang trống",
                    numberPhone: "Số điện thoại trống",
                    addressUser: "Địa chỉ trống",
                    emailUser: {
                        required: "Email đang trống",
                        email: "Sai định dạng",
                    },
                },

            });
        });
        const formOrder = document.getElementById("form-order");
        formOrder.addEventListener("submit", (e) => {
            e.preventDefault();

            const confirm = window.confirm("Xác nhận đặt hàng");
            console.log(confirm);
            if (confirm && localStorage.getItem("cart")) {
                // add cart
                add({
                    userId: JSON.parse(localStorage.getItem("user")).id,
                    nameUser: document.getElementById("nameUser").value,
                    numberPhone: document.getElementById("numberPhone").value,
                    addressUser: document.getElementById("addressUser").value,
                    emailUser: document.getElementById("emailUser").value,
                    total: totalPrice,
                    status: 0,
                    products: JSON.parse(localStorage.getItem("cart")),
                }).then(async () => {
                    toastr.success("Đặt hàng thành công");
                    // eslint-disable-next-line no-unused-vars
                    const response = await emailjs.send("service_6f1509l", "template_q60cbma", {
                        to_name: document.getElementById("nameUser").value,
                        message: `
                                    Bạn có 1 đơn hàng bao gồm:
                                    ${data.map((item) => `${item.nameProduct}`).join("")}
                                    `,
                        emai_user: document.getElementById("emailUser").value,
                        reply_to: "vinhlqph18160@fpt.edu.vn",
                    });

                    localStorage.removeItem("cart");
                    document.location.href = "/#/orders";
                });
            } else if (confirm && !localStorage.getItem("cart")) {
                toastr.error("Giỏ hàng trống");
            }
        });
    },
};
export default CartsPage;