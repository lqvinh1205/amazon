const ProductsTemplate = {
    async render(arrProduct) {
        return /* html */`<div class='active'>
                ${arrProduct.map((product) => /* html */`
                <div class='category-items'>
                    <a href="/#/products/${product.id}">
                        <h2 class='list-pro-title overflow-hidden'>${product.nameProduct}</h2>
                        <div class='category-img3'>
                            <img src='${product.img}' alt=''/>
                        </div>
                        <div class='price-pro'>${product.priceProduct} $</div>
                        <div class='details'>Show now</div>
                    </a>
                </div>`).join("")}
            </div>`;
    },

};
export default ProductsTemplate;