import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Logo from "../../logo";

const FooterInfoWidget = ({ infoData }) => {
    return (
        <Fragment>
            <Logo />
            <p className="mt-7">{infoData?.text}</p>
            <div className="footer_social flex mt-8">
                {infoData?.socials?.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${item.title}-style h-10 w-10 leading-10 text-center mr-3 last:mr-0`}
                    >
                        <i className={item.icon}></i>
                    </a>
                ))}
            </div>
        </Fragment>
    );
};
FooterInfoWidget.propTypes = {
    infoData: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
        text: PropTypes.string,
    }),
};
export default FooterInfoWidget;
