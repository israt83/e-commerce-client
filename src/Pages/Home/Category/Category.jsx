// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

// const Category = () => {
//     return (
//      <section>
//         <SectionTitle
//         subHeading={'From 11.00am to 10.00pm'}
//         heading={"order online"}
//         >

//         </SectionTitle>
//            <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper mb-12 "
//       >
//         <SwiperSlide>
//             <img src="https://static.vecteezy.com/system/resources/previews/002/123/416/non_2x/realistic-cosmetic-advertisement-editable-banner-vector.jpg" alt="" />
//             <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>perfume</h3>
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="https://img.freepik.com/premium-photo/shampoo-bottle-product-photography-standing-white-cylinder_1059430-79454.jpg" alt="" />
//             <h3 className=' text-4xl uppercase text-center -mt-16 text-white'> shampoo</h3>
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="https://dr.rashel.in/cdn/shop/products/VitaminCFaceCream-01.jpg?v=1661240517" alt=''/>

//             <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>     face cream</h3>
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTFcLzUxNDk1LTcxSWU4c2wyVXdMLXg3b2UzMy5qcGVnIiwiZWRpdHMiOltdfQ==" alt="" />
//             <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>serum</h3>
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='h-' src="https://www.priceattack.com.au/cdn/shop/files/KMSStylingGel-568032.png?v=1716294132&width=1445" alt="" />
//             <h3 className=' text-4xl uppercase text-center -mt-16 text-white'>hair gel</h3>
//         </SwiperSlide>

//       </Swiper>
//      </section>
//     );
// };

// export default Category;

import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";
import { useRef } from "react";

import { BsChatQuote } from "react-icons/bs";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Category = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"order online"}
      ></SectionTitle>
  

      <div className=" container max-w-xs md:max-w-xl mx-auto lg:max-w-2xl xl:max-w-5xl overflow-hidden  py-2">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={3} // Adjusted to show more slides
          spaceBetween={-30} // Reduce the space between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide flex justify-center items-center">
            <div className="   md:h-80 md:w-80 lg:h-96 xl:w-96 flex flex-col  bg-[#F9F7F7] rounded-lg shadow-lg">
              <div className="flex py-2 flex-col items-center justify-center gap-2 ">
              <img src="https://static.vecteezy.com/system/resources/previews/002/123/416/non_2x/realistic-cosmetic-advertisement-editable-banner-vector.jpg" alt="" />
              <h3 className='text-base lg:text-4xl uppercase text-center -mt-16 text-white'>perfume</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center items-center">
            <div className="   md:h-80 md:w-80 lg:h-96 xl:w-96 flex flex-col  bg-[#F9F7F7] rounded-lg shadow-lg">
              <div className="flex py-2 flex-col items-center justify-center gap-2 ">
              <img src="https://img.freepik.com/premium-photo/shampoo-bottle-product-photography-standing-white-cylinder_1059430-79454.jpg" alt="" />
              <h3 className='text-base lg:text-4xl uppercase text-center -mt-16 text-white'> shampoo</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center items-center">
            <div className="   md:h-80 md:w-80 lg:h-96 xl:w-96 flex flex-col  bg-[#F9F7F7] rounded-lg shadow-lg">
              <div className="flex py-2 flex-col items-center justify-center gap-2 ">
              <img src="https://media.allure.com/photos/67111ba2e5125bc806c964d0/1:1/w_2000,h_2000,c_limit/Best%20Face%20Moisturizers%20for%20Dry%20Sensitive%20Skin%20102024.jpg" alt=''/> 
              <h3 className='text-base lg:text-4xl uppercase text-center -mt-16 text-white'>     face cream</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center items-center">
            <div className="   md:h-80 md:w-80 lg:h-96 xl:w-96 flex flex-col  bg-[#F9F7F7] rounded-lg shadow-lg">
              <div className="flex py-2 flex-col items-center justify-center gap-2 ">
              <img src="https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTFcLzUxNDk1LTcxSWU4c2wyVXdMLXg3b2UzMy5qcGVnIiwiZWRpdHMiOltdfQ==" alt="" />
              <h3 className='text-base lg:text-4xl uppercase text-center -mt-16 text-white'>serum</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center items-center">
            <div className="   md:h-80 md:w-80 lg:h-96 xl:w-96 flex flex-col  bg-[#F9F7F7] rounded-lg shadow-lg">
              <div className="flex py-2 flex-col items-center justify-center gap-2 ">
              <img className='h-' src="https://www.priceattack.com.au/cdn/shop/files/KMSStylingGel-568032.png?v=1716294132&width=1445" alt="" />
              <h3 className='text-base lg:text-4xl uppercase text-center -mt-16 text-white'>hair gel</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center gap-6 mt-4">
          <button ref={prevRef} className="">
            <FaArrowAltCircleLeft className="text-[#D99904] text-xl" />
          </button>
          <button ref={nextRef} className="">
            <FaArrowAltCircleRight className="text-[#D99904] text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
