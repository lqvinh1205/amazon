// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const ButtonSell = {
    render() {
        return /* html */`<div class="sell">
                <div class="topsell">
                    <div class="topsell-title">
                        <h2>Top Sellers in Toys for you</h2>
                    </div>
                    <div class="swiper bottom-sell1">
                        <div class="swiper-wrapper slile-topsell">
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SY400_.jpg" alt=""/>
                                </div>
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SY400_.jpg" alt=""/>
                                </div>
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/51DpOA3FvOL._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/51hpQIc1eZL._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71qA45tWZ5L._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71vtHn4juSL._AC_SY400_.jpg" alt=""/>
                                </div>
                        </div>
                        <div class="swiper-button-next swiper-button-next3"></div>
                        <div class="swiper-button-prev swiper-button-prev3"></div>
                        <div class="swiper-scrollbar swiper-scrollbar3"></div>
                    </div>
                </div>

                <div class="topsell">
                    <div class="topsell-title">
                        <h2>Top Sellers in Books for you</h2>
                    </div>
                    <div class="swiper bottom-sell2">
                        <div class="swiper-wrapper slile-topsell">
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71Cf4vcWoeL._AC_SY400_.jpg" alt=""/>
                                </div>
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/61tDaOb9cpS._AC_SY400_.jpg" alt=""/>
                                </div>
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81JIED2rQDS._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81hLVEyIfUL._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71o0fRnLUFL._AC_SY400_.jpg" alt=""/>
                                </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/91-N3hxpLIL._AC_SY200_.jpg" alt=""/>
                                        </div>

                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71BqsimM+XL._AC_SY400_.jpg" alt=""/>
                                </div>
                        </div>
                        <div class="swiper-button-next swiper-button-next4"></div>
                        <div class="swiper-button-prev swiper-button-prev4"></div>
                        <div class="swiper-scrollbar swiper-scrollbar4"></div>
                            
                    </div>
                </div>  
            </div>`;
    },
    afterRender() {
        // eslint-disable-next-line no-unused-vars
        const swiper3 = new Swiper(".bottom-sell1", {
            slidesPerView: 6,
            navigation: {
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar3",
                draggable: true,
            },

        });
        // eslint-disable-next-line no-unused-vars
        const swiper4 = new Swiper(".bottom-sell2", {
            slidesPerView: 6,
            navigation: {
                nextEl: ".swiper-button-next4",
                prevEl: ".swiper-button-prev4",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar4",
                draggable: true,
            },

        });
    },
};
export default ButtonSell;