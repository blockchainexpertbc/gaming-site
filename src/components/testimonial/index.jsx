import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SingleTestimonial = ({ image, alt, name, description, designation }) => {
    return (
        <div className="testimonial_list flex flex-col md:flex-row items-center">
            <div className="testimonial_thumb w-28 md:w-32 lg:w-200 xl:w-260 flex-shrink-0">
                <GatsbyImage image={getImage(image)} alt={alt} />
            </div>
            <div className="testimonial_content flex-grow text-center md:text-left mt-8 md:mt-0 md:ml-14">
                <p className="text-base lg:text-20base leading-loose">
                    {description}
                </p>
                <div className="testimonial_author mt-5">
                    <h3 className="font-bold uppercase">{name}</h3>
                    <span className="text-primary mt-5 block">
                        {designation}
                    </span>
                </div>
            </div>
        </div>
    );
};
SingleTestimonial.propTypes = {
    alt: PropTypes.string,
    description: PropTypes.string,
    designation: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.object,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
        })
    ),
};
export default SingleTestimonial;
