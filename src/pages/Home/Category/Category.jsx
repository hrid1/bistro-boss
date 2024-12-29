import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/common/SectionTitle";
// import img6 from "../../../assets/home/slide6.jpg";

const Category = () => {
  return (
    <section>
      <div>
        <SectionTitle
          heading={"Order Online"}
          subheading={"From 11:00am to 10:00pm"}
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-center text-3xl uppercase -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-center text-3xl uppercase -mt-16 text-white">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-center text-3xl uppercase -mt-16 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-center text-3xl uppercase -mt-16 text-white">
            Desert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-center text-3xl uppercase -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
