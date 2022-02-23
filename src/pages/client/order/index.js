/* eslint-disable no-nested-ternary */
import toastr from "toastr";

import "toastr/build/toastr.min.css";
import { getAllDetailsForUser, update } from "../../../api/cart";
import DetailCart from "../../../components/client/detailCart";
import Footer from "../../../components/client/Footer";
import Header from "../../../components/client/Header";

// import "../../style.css";

const OrderManagerForUser = {
    async render() {
        const { data } = await getAllDetailsForUser(JSON.parse(localStorage.getItem("user")).id);
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main class="container-main">
                    <div class="detail-carts">
                        <div class="detail-product-title">
                            <h2>Đơn hàng đã đặt</h2>
                        </div>
                        
                        <div class="flex flex-col max-w-7xl mt-4 mx-auto mb-5">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Mã đơn hàng
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tên khách hàng
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Số điện thoại
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Địa chỉ
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tình trạng
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tổng tiền
                                </th>
                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>

                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data.map((order) => /* html */`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center text-sm font-bold">
                                                ${order.id}
                                            </div>
                                        </td>
                                        <td class="py-4 whitespace-nowrap">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900 overflow-hidden max-w-xs">
                                                ${order.nameUser}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 whitespace-nowrap">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900 overflow-hidden max-w-xs">
                                                ${order.numberPhone}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 whitespace-nowrap">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900 overflow-hidden max-w-xs">
                                                ${order.addressUser}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex-shrink-0 text-sm font-medium text-green-600">
                                                <span>${(order.status === 0 ? "Chờ xác nhận" : (order.status) === 1 ? "Đã xác nhận" : (order.status) === 2 ? "Hoàn thành" : "Hủy")}</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${order.total}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                           
                                            <button data-id=${order.id} class="btn btn-detail text-indigo-600 hover:text-indigo-900">Chi tiết</button>
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
                </main>

                <footer>
                    ${Footer.render()}
                </footer>
                <div id="wrapperModal">
                    <div id="modalDetail"></div>
                    <button id="icon-close">x</button>
                </div>
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
        const btns = document.querySelectorAll(".status");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("change", () => {
                update({
                    status: btn.value,
                }, id).then(() => {
                    toastr.success("Thay đổi trạng thái thành công");
                });
            });
        });
        const btnDetail = document.querySelectorAll(".btn-detail");
        btnDetail.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", async () => {
                document.getElementById("wrapperModal").style.display = "block";
                document.getElementById("modalDetail").innerHTML = await DetailCart.render(id);
                document.getElementById("wrapper").classList.add("filter");
            });
        });
        const iconClose = document.getElementById("icon-close");
        if (iconClose) {
            iconClose.addEventListener("click", () => {
                document.getElementById("wrapperModal").style.display = "none";
                document.getElementById("wrapper").classList.remove("filter");
            });
        }
    },
};
export default OrderManagerForUser;

// eslint-disable-next-line no-lone-blocks
{ /* <div class="sidebar-cart1">
<span>Giao tới</span>
<a href="/">Thay đổi</a>
</div>
<div class="sidebar-cart2">
<span>Lê Vinh</span>
<span>0359102999</span>
</div>
<div class="sidebar-cart3">
<span>Tk10, xã Hát Lót, Huyện Mai Sơn, Sơn La</span>
</div> */ }