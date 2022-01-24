import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Video from "@components/shared/video";
const MatchItem = ({
    title,
    registeredTeams,
    date,
    slug,
    video_link,
    teamImage1,
    teamImage2,
}) => {
    // Video Modal Popup
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <div className="flex flex-col lg:flex-row lg:justify-between mb-8 items-center last:mb-0 border-4 border-secondary-90 bg-secondary-100 border-opacity-100 rounded-4xl px-6 py-8 lg:py-16 lg:px-8">
                <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0 upcoming_gaming_list">
                    <div className="upcoming_gaming_text text-white">
                        <p>{date}</p>
                        <h3 className="font-bold lg:text-35base mb-3 uppercase">
                            <Link
                                to={`/match/${slug}`}
                                className="hover:text-primary"
                            >
                                {title}
                            </Link>
                        </h3>
                        <span className="text-primary">
                            {registeredTeams} Teams Registered
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:w-52 justify-center mb-6 lg:mb-0 text-center upcoming_play_video">
                    <span
                        className="video_popup w-28 h-28 bg-primary rounded-full flex items-center justify-center mx-auto"
                        role="button"
                        tabIndex="0"
                        onClick={() => setOpen(true)}
                        onKeyPress={(e) => console.log(e)}
                    >
                        <StaticImage
                            src="../../data/images/icons/play-btn2.webp"
                            alt=""
                        />
                    </span>{" "}
                    <span className="text-secondary block mt-4 lg:mt-8">
                        Youtube Stream
                    </span>
                </div>
                <div className="flex-1 flex justify-center items-center lg:justify-between lg:max-w-sm upcoming_gaming_thumb">
                    <Link to="/" className="mx-1.5">
                        <GatsbyImage
                            className="md:h-auto"
                            image={getImage(teamImage1) || getImage(teamImage2)}
                            alt=""
                        />
                    </Link>
                    <div className="mx-1.5">
                        <StaticImage
                            src="../../data/images/team-logo/game-vs1.webp"
                            alt=""
                        />
                    </div>
                    <Link to="/" className="mx-1.5">
                        <GatsbyImage
                            className="md:h-auto"
                            image={getImage(teamImage2) || getImage(teamImage1)}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            <Video
                channel={video_channel}
                videoId={video_id}
                isOpen={isOpen}
                setOpen={setOpen}
            />
        </Fragment>
    );
};
MatchItem.propTypes = {
    title: PropTypes.string,
    registeredTeams: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    video_link: PropTypes.string,
    teamImage1: PropTypes.object,
    teamImage2: PropTypes.object,
};
export default MatchItem;
