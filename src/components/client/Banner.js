// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const Banner = {
    render() {
        return /* html */`
            <div class='swiper'>
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <img src="https://m.media-amazon.com/images/I/61NAdLjXLlL._SX3000_.jpg" alt=""/>
                    </div>

                    <div class="swiper-slide">
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
                    </div> 
                
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>`;
    },
    afterRender() {
        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper(".swiper", {
            // configure Swiper to use modules
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev1",
            },

            slidesPerView: 1,
            loop: true,
        });
    },
};
export default Banner;