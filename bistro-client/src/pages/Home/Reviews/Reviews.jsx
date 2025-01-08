import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import commaIcon from "../../../assets/icon/semicomma.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews.length);
  return (
    <div className="py-32">
      <SectionTitle
        subheading={"What Our Client Sayy"}
        heading={"Testimonials"}
      ></SectionTitle>

      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center px-4 md:px-12 ">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                />

                <img className="w-14 mx-auto my-5" src={commaIcon} alt="" />

                <p className="w-11/12 md:w-9/12 mx-auto mb-2">
                  {" "}
                  {review.details}{" "}
                </p>
                <h2 className="text-orange-400 text-2xl">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Reviews;
