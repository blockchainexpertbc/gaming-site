import React from "react";
import PropTypes from "prop-types";
import LiveStreaming from "../../../components/live-streaming";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import { StaticImage } from "gatsby-plugin-image";

const WatchLiveStremingArea = ({ data }) => {
    return (
        <section className="watch-live-section py-16 md:py-28">
            <div className="container">
                <div className="relative">
                    <Swiper
                        className="relative"
                        layout={{
                            nav: "watch-live-navigation",
                            dots: "watch-live-dots-style",
                        }}
                        navigation={{
                            nextEl: ".watch-live-slider-button-next",
                            prevEl: ".watch-live-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {data?.items &&
                            data?.items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <LiveStreaming
                                        title={
                                            item?.liveStreaming?.headings[0]
                                                .content
                                        }
                                        image={
                                            item?.liveStreaming?.images[0].src
                                        }
                                        video_link={item?.liveStreaming?.link}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className="absolute w-full z-10 top-1/2 transform -translate-y-1/2">
                        <div
                            className="watch-live-slider-button-prev swipper-arrow text-white absolute top-2/4 
                    transform -translate-x-2/4 w-14 h-10 lg:w-68 lg:h-55 flex items-center justify-center  
                    bg-arrow-shape hover:bg-arrow-hover-shape transition-all left-auto -right-8 bg-cover"
                        >
                            <StaticImage
                                src="../../../data/images/icons/navigation-arrow1.webp"
                                alt=""
                            />
                        </div>
                        <div
                            className="watch-live-slider-button-next swipper-arrow text-white absolute top-2/4 
                    transform -translate-x-2/4 w-14 h-10 lg:w-68 lg:h-55 flex items-center justify-center 
                    bg-arrow-shape hover:bg-arrow-hover-shape transition-all left-8 bg-cover"
                        >
                            <StaticImage
                                src="../../../data/images/icons/navigation-arrow2.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
WatchLiveStremingArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default WatchLiveStremingArea;
