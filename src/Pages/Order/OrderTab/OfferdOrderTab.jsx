import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import OfferdProductCard from "../../../Components/ProductCard/OfferdProductCard";

const OfferdOrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            
          <div className="w-full">
            <div className="px-24 grid md:grid-cols-3 gap-10 ">
            {items.map((item) => (
              <OfferdProductCard key={item.id} item={item}></OfferdProductCard>
            ))}
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferdOrderTab;