import axios from "axios";
import toastr from "toastr";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import ProductsPage from ".";
import { get, update } from "../../../api/products";
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/client/Footer";
import { reRender } from "../../../utils";

const ProductEditPage = {
    async render(id) {
    // const result = news.find((post) => post.id === id);
        const { data } = await get(id);
        return /* html */`
            <div class="d-flex items-center">
                <nav class="bg-gray-800">
                    ${Navbar.render()}
                </nav>
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
                        <h1 class="text-3xl font-bold text-gray-900 cols-1">
                        Edit Product
                        </h1>
                        <a href="/#/admin/products">
                            <button type="submit" class="inline-flex col-2z justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Return
                            </button>                        
                        </a>
                    </div>
                </header>

                <main>
                    <div class="mx-auto max-w-3xl mb-5">
                        <div class="md:grid md:gap-6">
                            <div class="mt-5">
                                <h1 class="text-4xl text-center font-semibold drop-shadow-2xl">Fill content</h1>   
                                <form method="POST" id="form-edit-product">
                                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                            Name product
                                            </label>
                                            <div class="mt-1">
                                            <input type="text" id="nameProduct" value="${data.nameProduct}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                            </div>
                                        
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            
                                            <div class="mt-1">
                                                <label for="about" class="block text-sm font-medium text-gray-700">
                                                Price
                                                </label>
                                                <input type="text" id="priceProduct" value="${data.priceProduct}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                            </div>
                                            <div class="mt-1">
                                                <label for="about" class="block text-sm font-medium text-gray-700">
                                                Quantity
                                                </label>
                                                <input type="text" id="quantityProduct"  name="quantityProduct" value="${data.quantityProduct}" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                            </div>
                                        
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                            Description
                                            </label>
                                            <div class="mt-1">
                                                <textarea id="descProduct" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">${data.descProduct}</textarea>
                                            </div>
                                        </div>
                            
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                            Photo
                                            </label>
                                            <div class="mt-1 flex items-center">
                                            <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img id="imgPreview" src=${data.img}>
                                            </span>
                                            <input id="imgProduct" type="file" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            </div>
                                        </div>
                            
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                            Cover photo
                                            </label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="px-4 bg-gray-50 py-3 text-right sm:px-6">
                                        <button id="btnAdd" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                        </div>
                                    </div>
                                </form>
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
    afterRender(id) {
        const formEdit = document.getElementById("form-edit-product");
        const imgPreview = document.getElementById("imgPreview");
        const imgProduct = document.getElementById("imgProduct");

        let imgLink = "";
        const CLAUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dzroyn2i4/image/upload";
        const CLAUDINARY_PRESET = "flmjc7yd";

        // preview image
        imgProduct.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // when submit if file not null =>
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const confirm = window.confirm("Bạn có muốn thay đổi");
            if (confirm) {
                const file = imgProduct.files[0];
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLAUDINARY_PRESET);

                    // call API upload img to claudinary
                    const { data } = await axios.post(CLAUDINARY_API_URL, formData, {
                        headers: {
                            "Content-Type": "aplication/form-data",
                        },
                    });
                    imgLink = data.url;
                }
                update({
                    nameProduct: document.getElementById("nameProduct").value,
                    priceProduct: document.getElementById("priceProduct").value,
                    quantityProduct: document.getElementById("quantityProduct").value,
                    descProduct: document.getElementById("descProduct").value,
                    img: imgLink || imgPreview.src,
                    id,
                }, id).then(() => {
                    document.location.href = "/#/products";
                    toastr.success("Update thành công");
                    reRender(ProductsPage, "app");
                });
            }
        });

        $().ready(() => {
            $("#form-edit-product").validate({
                rules: {
                    // simple rule, converted to {required:true}
                    // nameProduct: "required",
                    // priceProduct: "required",
                    quantityProduct: {
                        required: true,
                        minlength: 5,
                    },
                    // descProduct: "required",
                    // compound rule

                },
                messages: {
                    // nameProduct: "Nhập tên sản phẩm",
                    // priceProduct: "Mời nhập giá",
                    quantityProduct: {
                        required: "Mời nhập số lượng",
                        minlength: "Mời nhập số lượng",
                    },
                    // descProduct: "Mời nhập mô tả",
                },

            });
        });
    },
};

export default ProductEditPage;