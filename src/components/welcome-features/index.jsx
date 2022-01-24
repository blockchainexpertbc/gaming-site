import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const WelcomeFeatures = ({ title, description, iconImage, bgShapImage }) => {
    const image1 = getImage(iconImage);
    const image2 = getImage(bgShapImage);
    return (
        <div className="py-15 px-12 relative mt-10">
            <div className="content relative z-10">
                <GatsbyImage className="mb-10" image={image1} alt={title} />
                <h3 className="font-bold text-white mb-4">{title}</h3>
                <p className="text-white leading-7">{description}</p>
            </div>
            <div className="absolute inset-0 z-0">
                <GatsbyImage image={image2} alt={title} />
            </div>
        </div>
    );
};
WelcomeFeatures.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    iconImage: PropTypes.object,
    bgShapImage: PropTypes.object,
};
export default WelcomeFeatures;
