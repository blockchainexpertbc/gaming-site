import React from "react";
import PropTypes from "prop-types";
const SectionTitle = ({
    heading,
    description,
    align,
    color,
    showDescription,
}) => {
    const title = {
        showDescription: showDescription || false,
        align: align || "center",
        color: color || "primary",
    };
    return (
        <div className="section-title">
            <div className="container">
                <div align={title.align} className="mx-auto">
                    <h2 className="font-bold max-w-3xl">{heading}</h2>
                    {title.showDescription && (
                        <p className="max-w-xl mt-2 leading-7 text-18base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    align: PropTypes.oneOf(["left", "right", "center"]),
    color: PropTypes.oneOf(["white", "primary"]),
    showDescription: PropTypes.bool,
};
export default SectionTitle;
