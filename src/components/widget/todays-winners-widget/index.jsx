import React, { Fragment } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FooterWinnerWidget = ({ infoData }) => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-8 lg:mb-14">
                {infoData?.title}
            </h3>
            <div className="flex">
                <div className="footer_winners_thumb grid gap-2 grid-cols-3">
                    {infoData?.images &&
                        infoData?.images.map((item, i) => (
                            <Link
                                to="/"
                                key={i}
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl"
                            >
                                <GatsbyImage
                                    className="w-8"
                                    image={getImage(item.src)}
                                    alt={item.alt}
                                />
                            </Link>
                        ))}
                </div>
            </div>
        </Fragment>
    );
};
FooterWinnerWidget.propTypes = {
    infoData: PropTypes.shape({
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
        title: PropTypes.string,
    }),
};
export default FooterWinnerWidget;
