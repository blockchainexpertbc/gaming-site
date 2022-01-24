import React from "react";
import PropTypes from "prop-types";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SectionTitle from "../../../components/title";
import SingleTestimonial from "../../../components/testimonial";
import { StaticImage } from "gatsby-plugin-image";

const TestimonialArea = ({ data }) => {
    return (
        <section className="testimonial-section bg-secondary-90 pt-16 pb-24  md:pt-28 md:pb-28 relative">
            <span className=" absolute w-2/6 h-2 right-0 top-24 xs:block sm:hidden md:block md:top-48 bg-primary"></span>
            <div className="container px-4">
                <div className="section-title mb-15">
                    {data?.section_title && (
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    )}
                </div>
                <div className="py-9 px-10 lg:py-16 lg:px-24 bg-secondary-100 rounded-4xl">
                    <Swiper
                        layout={{
                            nav: "testimonial-navigation",
                            dots: "testimonial-dots-style",
                        }}
                        navigation={{
                            nextEl: ".testimonial-slider-button-next",
                            prevEl: ".testimonial-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {data?.items &&
                            data?.items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <SingleTestimonial
                                        image={item?.images[0].src}
                                        alt={item?.images[0].alt}
                                        description={item?.description}
                                        name={item?.name}
                                        designation={item?.designation}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                <div className="z-10 transform pt-12">
                    <div className="testimonial-slider-button-prev swipper-arrow text-white left-1/2 ml-8 absolute top-2/4 transform w-68 h-55 flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover">
                        <StaticImage
                            src="../../../data/images/icons/navigation-arrow1.webp"
                            alt=""
                        />
                    </div>
                    <div className="testimonial-slider-button-next swipper-arrow text-white right-1/2 absolute top-2/4 transform w-68 h-55 flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover">
                        <StaticImage
                            src="../../../data/images/icons/navigation-arrow2.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default TestimonialArea;
