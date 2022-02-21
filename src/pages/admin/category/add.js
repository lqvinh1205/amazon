import axios from "axios";
import { add } from "../../../api/posts";
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/client/Footer";

const NewAddPage = {
    render() {
        return /* html */ `
            <div class="d-flex items-center">
                <nav class="bg-gray-800">
                    ${Navbar.render()}
                </nav>
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
                        <h1 class="text-3xl font-bold text-gray-900 cols-1">
                        Add New
                        </h1>
                        <a href="/#/admin/news">
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
                                <form method="POST" id="form-add-post">
                                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                            Title
                                            </label>
                                            <div class="mt-1">
                                            <input type="text" id="title-post" placeholder="title"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                            </div>
                                        
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                            Content
                                            </label>
                                            <div class="mt-1">
                                            <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                                            </div>
                                        </div>
                            
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                            Photo
                                            </label>
                                            <div class="mt-1 flex items-center">
                                            <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img id="imgPost" src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg">
                                            </span>
                                            <input id="input-imgPost" type="file" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
    afterRender() {
        const formAdd = document.getElementById("form-add-post");

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy ra giá trị ô input ảnh
            const file = document.getElementById("input-imgPost").files[0];
            // tạo đối tượng formData
            const formData = new FormData();
            // thêm 2 trường dữ liệu vào formData
            formData.append("file", file);
            formData.append("upload_preset", "flmjc7yd");

            // call Api để đẩy ảnh lên cloudinary
            const { data } = await axios({
                url: "https://api.cloudinary.com/v1_1/dzroyn2i4/image/upload",
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-endcode",
                },
                data: formData,
            });
            const post = {
                title: document.getElementById("title-post").value,
                // sau khi thêm xong thì gán vào biến và lưu vào db
                desc: document.getElementById("desc-post").value,
                img: data.url,
            };
            add(post);
        });
    },
};
export default NewAddPage;