import React, { useState } from "react";
import Video from "@components/shared/video";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AboutUsInto from "../../../components/about-into";

const AboutUsOurStudioArea = ({ data }) => {
    // Video Modal Popup
    let video_arr, video_id, video_channel;
    if (data?.link) {
        video_arr = data?.link.split("=", -1);
        video_id = video_arr[1];
        video_channel = data?.link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-us-our-studio-section pb-16">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-4 items-center">
                    <div className="col-span-2">
                        <div className="pr-6 relative">
                            <GatsbyImage
                                className="md:h-auto"
                                image={getImage(data?.images[0]?.src)}
                                alt={data?.images[0]?.alt}
                            />
                            <div className="gaming_video_paly_icon absolute right-10 bottom-0 transform ">
                                <span
                                    className="video_popup bg-primary w-28 h-28 leading-112 text-center rounded-full inline-block"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => setOpen(true)}
                                    onKeyPress={(e) => console.log(e)}
                                >
                                    <i className="icofont-ui-play"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <AboutUsInto aboutusInto={data} />
                    </div>
                    <Video
                        channel={video_channel}
                        videoId={video_id}
                        isOpen={isOpen}
                        setOpen={setOpen}
                    />
                </div>
            </div>
        </section>
    );
};
AboutUsOurStudioArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        link: PropTypes.string,
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};
export default AboutUsOurStudioArea;
