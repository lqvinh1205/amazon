/* eslint-disable no-nested-ternary */
import { getAllDetails } from "../../api/cart";

const DetailCart = {
    async render(id) {
        const { data } = await getAllDetails(id);
        const convertData = data[0].products;
        return /* html */`<main class="container-main">
        <div class="detail-carts">
            <div class="detail-product-title text-center">
                <h2>Chi tiết đơn hàng</h2>
            </div>
            <div class="list-carts list-carts-details">
                <div class="w-full">
                    <div class="sidebar-cart1 sidebar-cart1-details">
                        <span>Giao tới: ${data[0].nameUser}</span>
                        <a href="/#/">Thay đổi</a>
                    </div>
                    <div class="sidebar-cart1 sidebar-cart1-details">
                        <span>Điện thoại: ${data[0].numberPhone}</span>
                    </div>
                    <div class="sidebar-cart1 sidebar-cart1-details">
                        <span>Địa chỉ: ${data[0].addressUser}</span>
                    </div>
                    <div class="sidebar-cart1 sidebar-cart1-details text-green-600">
                        <span>Tình trạng: ${(data[0].status === 0 ? "Chờ xác nhận" : (data[0].status) === 1 ? "Đã xác nhận" : (data[0].status) === 2 ? "Hoàn thành" : "Hủy")}</span>
                    </div>
                    <div class="sidebar-cart1 sidebar-cart1-details">
                        <span>Tổng tiền: ${data[0].total} $</span>
                    </div>
                </div>
                <div class="list-carts-content w-full list-carts-content-details">
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
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200  overflow-auto">
                                        
                                        ${convertData.map((product) => /* html */`
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-left font-medium text-gray-900 max-w-xl overflow-hidden">
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
            </div>
        </div>
    </main>`;
    },

};
export default DetailCart;