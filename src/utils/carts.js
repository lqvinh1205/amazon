import toastr from "toastr";
// import instance from "instance";
import { getLocalStorage, setLocalStorage } from ".";

let cart = [];
if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
}
// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newProduct, callback) => {
    // const carts = get;
    const exitItem = cart.find((item) => item.id === newProduct.id);
    if (!exitItem) {
        cart.push(newProduct);
    } else {
        exitItem.quantity += newProduct.quantity;
    }
    setLocalStorage("cart", cart);
    callback();
};
export const increaseQuatity = (id, callback) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === +id).quantity++;
    setLocalStorage("cart", cart);
    callback();
};

export const removeProduct = (id, callback) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm?");
    if (confirm) {
        // eslint-disable-next-line eqeqeq
        cart = cart.filter((item) => item.id !== +id);
        toastr.success("Đã xóa thành công");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const decreaseQuantity = (id, callback) => {
    const currentProduct = cart.find((item) => item.id === +id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm?");
        console.log(id);
        if (confirm) {
            // eslint-disable-next-line eqeqeq
            cart = cart.filter((item) => item.id !== +id);
            toastr.success("Xóa sản phẩm thành công");
        }
        // eslint-disable-next-line no-plusplus
        currentProduct.quantity++;
    }
    setLocalStorage("cart", cart);
    callback();
};