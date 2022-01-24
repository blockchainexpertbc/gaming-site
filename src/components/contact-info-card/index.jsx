import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const ContactInfoCard = ({
    title,
    action_link,
    description,
    iconImage,
    bgShapImage,
}) => {
    const image1 = getImage(iconImage);
    const image2 = getImage(bgShapImage);
    return (
        <div className="py-15 px-12 relative mt-10">
            <div className="content relative z-10">
                <GatsbyImage className="mb-28" image={image1} alt={title} />
                <h3 className="font-bold text-white mb-4">{title}</h3>
                {description && (
                    <p className="text-white text-18base">{description}</p>
                )}
                {action_link &&
                    action_link.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            className="block mb-2 last:mb-0 text-18base"
                        >
                            {item.title}
                        </a>
                    ))}
            </div>
            <span className="absolute inset-0 z-0">
                <GatsbyImage image={image2} alt={title} />
            </span>
        </div>
    );
};
ContactInfoCard.propTypes = {
    title: PropTypes.string,
    action_link: PropTypes.array,
    description: PropTypes.string,
    iconImage: PropTypes.object,
    bgShapImage: PropTypes.object,
};
export default ContactInfoCard;
