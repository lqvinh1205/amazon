import toastr from "toastr";
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/client/Footer";
import "toastr/build/toastr.min.css";
import { getAll, update } from "../../../api/cart";
import DetailCart from "../../../components/client/detailCart";

const OrderManager = {
    async render() {
        const { data } = await getAll();

        return /* html */`
        <div id="wrapper" class="d-flex items-center">
            <nav class="bg-gray-800">
                ${Navbar.render()}
            </nav>
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                    </h1>
                </div>
            </header>

            <main>
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
                                            <div class="flex items-center">
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
                                            <div class="flex-shrink-0">
                                                <div class="flex-shrink-0">
                                                    <div class="search-sidebar">
                                                        <select class="status" data-id="${order.id}">
                                                            <option value="0" ${order.status === "0" ? "selected" : ""}>Chờ xác nhận</option>
                                                            <option value="1" ${order.status === "1" ? "selected" : ""}>Đã xác nhận</option>
                                                            <option value="2" ${order.status === "2" ? "selected" : ""}>Hoàn thành</option>
                                                            <option value="3" ${order.status === "3" ? "selected" : ""}>Hủy</option>
                                                        </select>
                                                    </div>
                                                </div>
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
            </main>

            <footer id="footer">
                ${Footer.render()}
            </footer>
        </div>
        <div id="wrapperModal">
            <div id="modalDetail"></div>
            <button id="icon-close">x</button>
        </div>

        `;
    },
    afterRender() {
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
export default OrderManager;