import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
const PlayerCard = ({ image, name, slug, needLavel, socials }) => {
    return (
        <div className="player-card relative group">
            <div className="player-thum relative z-20">
                <GatsbyImage
                    className="w-full rounded-5xl"
                    image={getImage(image)}
                    alt=""
                />
                <span className="w-full h-full absolute left-0 top-0 bg-gray-900 rounded-5xl opacity-0 group-hover:opacity-70"></span>

                <div className="social-link absolute left-0 text-center bottom-0 group-hover:bottom-8 w-full space-x-2 opacity-0 group-hover:opacity-100 transition-all z-20">
                    {socials &&
                        socials?.map((item) => (
                            <li
                                key={item.id}
                                className="text-center inline-block"
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-10 flex items-center justify-center bg-social-shape hover:bg-social-hover-shape transition-all bg-cover"
                                >
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        ))}
                </div>
            </div>
            <div className="our-team-info py-5 xl:py-7 text-center transition-all mt-8 w-full z-10">
                <h3 className="uppercase font-bold mb-3">
                    <Link to={`/players/${slug}`}>{name}</Link>
                </h3>
                <h5 className="text-white">{needLavel}</h5>
            </div>
        </div>
    );
};
PlayerCard.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
    needLavel: PropTypes.string,
    socials: PropTypes.array,
    slug: PropTypes.string,
};
export default PlayerCard;
