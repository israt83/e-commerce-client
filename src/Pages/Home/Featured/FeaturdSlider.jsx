import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const FeaturdSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Pagination, Autoplay, Keyboard]}
        // className="w-full"
      >
      
         <SwiperSlide >
        <div className="md:flex py-20 justify-center items-center  bg-slate-500 bg-opacity-50">
           <div className="h-full" >
                <img className="w-[400px] h-[400px]  py-20 px-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMb43U1ARqCSeYJS5z3h1eTNTm9M37jCzM4Q&s" alt="" />
            </div>
         
            <div className="px-10 md:px-0">
                <p className="my-2">Watch LIVE as our product expert shares crative <br /> holiday gifting ideas,plus chance to win a luxurious giveaway.
                   <br />  Mark Your calendars for 10/30 at 1pm.</p>
                <button className="btn btn-outline bottom-0 border-b-4"><span className="uppercase text-white">tune in</span></button>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="md:flex  py-20   justify-center items-center bg-slate-500 bg-opacity-50">
           <div className="h-full">
                <img className="w-[400px] h-[400px]  px-10 py-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMb43U1ARqCSeYJS5z3h1eTNTm9M37jCzM4Q&s" alt="" />
            </div>
           
            <div className="px-10 md:px-0">
                <p className="my-2">Watch LIVE as our product expert shares crative <br /> holiday gifting ideas,plus chance to win a luxurious giveaway.
                   <br />  Mark Your calendars for 10/30 at 1pm.</p>
                <button className="btn btn-outline bottom-0 border-b-4"><span className="uppercase text-white">tune in</span></button>
            </div>
           </div>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
};

export default FeaturdSlider;
