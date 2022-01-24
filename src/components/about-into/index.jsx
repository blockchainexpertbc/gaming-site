import React from "react";
import Button from "../shared/button";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
const AboutUsInto = ({ aboutusInto }) => {
    return (
        <div className="about-us-into">
            {aboutusInto?.headings[0] && (
                <h3 className="font-bold mb-5 text-primary uppercase pl-24 relative after:absolute content-after after:bg-primary after:w-16  after:h-1 after:z-0  after:top-1/2  after:left-0  after:transform  after:-translate-y-2/4  after:transition  after:opacity-100">
                    {aboutusInto?.headings[0]?.content}
                </h3>
            )}
            {aboutusInto?.headings[1] && (
                <h2 className="text-white font-bold uppercase mb-6">
                    {aboutusInto?.headings[1]?.content}
                </h2>
            )}
            <div className="about_desc mb-8">
                {aboutusInto?.items &&
                    aboutusInto.items.map((item) => (
                        <p className="leading-8" key={item.id}>
                            {item.description}
                        </p>
                    ))}
            </div>
            {aboutusInto?.buttons &&
                aboutusInto.buttons.map(({ id, content, ...props }) => (
                    <Button key={id} {...props} className="text-white">
                        {content}
                        <StaticImage
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src="../../data/images/icons/arrrow-icon.webp"
                            alt=""
                        />
                    </Button>
                ))}
        </div>
    );
};
AboutUsInto.propTypes = {
    aboutusInto: PropTypes.object,
};
export default AboutUsInto;
