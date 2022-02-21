import toastr from "toastr";
import { get, update } from "../../../api/categories";
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/client/Footer";

const CateEditPage = {
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
                        Chỉnh sửa
                        </h1>
                        <a href="/#/admin/categories">
                            <button type="submit" class="inline-flex col-2z justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Quay lại 
                            </button>                        
                        </a>
                    </div>
                </header>

                <main>
                    <div class="mx-auto max-w-3xl mb-5">
                        <div class="md:grid md:gap-6">
                            <div class="mt-5">
                                <h1 class="text-4xl text-center font-semibold drop-shadow-2xl">Change content</h1>   
                                <form id="form-edit-cate" action="#" method="POST">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div>
                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                        Name category
                                        </label>
                                        <div class="mt-1">
                                        <input id="nameCate" type="text" placeholder="title" value="${data.nameCategory}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 p-2 rounded-md">
                                        </div>
                                        
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
    afterRender(id) {
        const formEdit = document.getElementById("form-edit-cate");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const cate = {
                nameCategory: document.getElementById("nameCate").value,
            };
            update(cate, id).then(() => {
                toastr.success("Update thành công");
            });
        });
    },
};
export default CateEditPage;