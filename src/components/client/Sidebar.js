// import { searchLike } from "../../api/search";

const Sidebar = {
    render() {
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
                        <li><a>Climate Pledge Friendly</a></li>
                        <li><a>Audio & Video Accessories</a></li>
                        <li><a>Cable Security Devices</a></li>
                        <li><a>Computer Cable Adapters</a></li>
                        <li><a>Keyboards, Mice & Accessories</a></li>
                        <li><a>Monitor Accessories</a></li>
                        <li><a>Scanner Accessories</a></li>
                        <li><a>Uninterruptible Power Supply (UPS)</a></li>
                        <li><a>USB Hubs</a></li>
                        <li><a>Video Projector Accessories</a></li>
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