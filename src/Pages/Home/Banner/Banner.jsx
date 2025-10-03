

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';

import banner4 from '../../../assets/banner4.jpg';
import banner5 from '../../../assets/banner5.jpg';
import banner6 from '../../../assets/banner6.jpg';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="Banner 1" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="Banner 2" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} alt="Banner 3" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="Banner 4" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} alt="Banner 5" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="Banner 6" className="w-full h-[550px] object-cover rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
