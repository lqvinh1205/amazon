import { getAll } from "../../api/categories";

const Sidebar = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            <div class="sidebar-wrapper">
                <div class="sidebar-title">
                    <h4>Search</h4>
                </div>
                <div class="siderbar-content">
                    <div class="search-sidebar">
                        <input id="value_search" type="search" />
                        <button id="btn-searchValue"><i class="fab fa-sistrix"></i></button>
                    </div>
                </div>
                <div class="sidebar-title">
                    <h4>Sort</h4>
                </div>
                <div class="siderbar-content">
                    <div class="search-sidebar">
                        <select id="sortPrice">
                            <option value="0" selected>Tất cả</option>
                            <option value="1">Tăng dần</option>
                            <option value="2">Giảm dần</option>
                        </select>
                    </div>
                </div>
                <div class="sidebar-title">
                    <h4>Category</h4>
                </div>
                <div class="siderbar-content">
                    <ul>
                        ${data.map((cate) => `
                            <li class="btnCate" data-cate="${cate.id}"><a>${cate.nameCategory}</a></li>
                        `).join("")}
                    </ul>
                </div>

            </div>
            <div></div>
            <div></div>
            <div></div>
        `;
    },
};
export default Sidebar;