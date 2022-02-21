// eslint-disable-next-line import/no-unresolved
import { A11y, Navigation, Scrollbar } from "swiper";
// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const TopSell = {
    render() {
        return /* html */`
            <div class="sell">
                <div class="topsell">
                    <div class="topsell-title">
                        <h2>Top Sellers in Toys for you</h2>
                    </div>
                    <div class="swiper swiper-topsell1">
                        <div class="swiper-wrapper slile-topsell">
                        
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/71tjzN4QkCL._AC_SY400_.jpg" alt=""/>
                            </div>
                        
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/412qaOLVNDL._AC_SY400_.jpg" alt=""/>
                            </div>
                    
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/91aGPT5QLxL._AC_SY400_.jpg" alt=""/>
                            </div>
                
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/81tsciVr8AL._AC_SY400_.jpg" alt=""/>
                            </div>
                        
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/71ZzKSXSrJL._AC_SY400_.jpg" alt=""/>
                            </div>
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/81LcVsRKnjS._AC_SY400_.jpg" alt=""/>
                            </div>
                        
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/81+okm4IpfL._AC_SY400_.jpg" alt=""/>
                            </div>
                    
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/81ibBXUPyzL._AC_SY400_.jpg" alt=""/>
                            </div>
                
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/71CC-fB+tPL._AC_SY400_.jpg" alt=""/>
                            </div>
                        
                            <div class="swiper-slide topsell-img">
                                <img src="https://m.media-amazon.com/images/I/61lI1InKYyS._AC_SY400_.jpg" alt=""/>
                            </div>
                           

                        </div>
                        
                        <div class="swiper-button-next swiper-button-next1"></div>
                        <div class="swiper-button-prev swiper-button-prev1"></div>
                        <div class="swiper-scrollbar swiper-scrollbar1"></div>
                        
                    </div>
                </div>


                <div class="topsell">
                    <div class="topsell-title">
                        <h2>Top Sellers in Books for you</h2>
                    </div>
                    <div class="swiper swiper-topsell2">
                        <div class="swiper-wrapper slile-topsell">
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/91UvdebBM-L._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/71slsnNNChL._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY400_.jpg" alt=""/>
                                        </div>
                    
                                <div class="swiper-slide topsell-img">
                                    <img src="https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY400_.jpg" alt=""/>
                                </div>
                    
                        </div>
                        <div class="swiper-button-next swiper-button-next2"></div>
                        <div class="swiper-button-prev swiper-button-prev2"></div>
                        <div class="swiper-scrollbar swiper-scrollbar2"></div>
                    </div>
                </div>
            </div>`;
    },
    afterRender() {
        // eslint-disable-next-line no-unused-vars
        const swiper1 = new Swiper(".swiper-topsell1", {
            slidesPerView: 6,
            module: [Navigation, Scrollbar, A11y],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar1",
                draggable: true,
            },

        });
        // eslint-disable-next-line no-unused-vars
        const swiper2 = new Swiper(".swiper-topsell2", {
            slidesPerView: 6,
            module: [Navigation, Scrollbar, A11y],
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar2",
                draggable: true,
            },

        });
    },
};
export default TopSell;