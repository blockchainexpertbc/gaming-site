import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
const OurTeamCard = ({ image, name, designation }) => {
    return (
        <div className="our-team-card relative group mt-12 m-auto max-w-sm">
            <GatsbyImage className="w-full" image={getImage(image)} alt="" />
            <div className="our-team-info py-7 text-center transition-all -bottom-10 absolute w-full z-10">
                <h3 className="uppercase font-bold mb-3">
                    <Link to="/">{name}</Link>
                </h3>
                <h5 className="text-primary group-hover:text-white">
                    {designation}
                </h5>
            </div>
        </div>
    );
};
OurTeamCard.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
    designation: PropTypes.string,
};
export default OurTeamCard;
