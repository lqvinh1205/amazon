import toastr from "toastr";
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/client/Footer";
import "toastr/build/toastr.min.css";
import { getAll, remove } from "../../../api/products";
import { reRender } from "../../../utils";

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="d-flex items-center">
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
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name Product
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col-2" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    
                                </th>
                                <th scope="col-2" class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-green-700">
                                    <a href="/#/admin/products/add"><button class="w-full h-full text-white">Add</button></a>
                                </th>
                            
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data.map((product, index) => /* html */`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                ${index + 1}
                                            </div>
                                        </td>
                                        <td class="py-4 whitespace-nowrap">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900 overflow-hidden max-w-xs">
                                                ${product.nameProduct}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-full w-full" src="${product.img}" alt="">
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${product.priceProduct}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${product.quantityProduct}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="/#/admin/products/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button data-id=${product.id} class="btn btn-remove text-red-600 hover:text-indigo-900">Delete</button>
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
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn-remove");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc muốn xóa ?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công !");
                    }).then(() => {
                        window.location.href = "/#/admin/products";
                        reRender(ProductsPage, "app");
                    });
                }
            });
        });
    },
};
export default ProductsPage;