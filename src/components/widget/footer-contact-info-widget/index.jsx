import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FooterContactInfoWidget = ({ infoData }) => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-8 lg:mb-14">
                {infoData?.title}
            </h3>
            <div className="footer_contact_info">
                {infoData?.contact_info &&
                    infoData?.contact_info?.map((item) => (
                        <div
                            className="footer_contact_info_list mb-5 last:mb-0"
                            key={item.id}
                        >
                            <span className="text-primary mb-3 block">
                                {item.title}:
                            </span>
                            <p>{item.text}</p>
                        </div>
                    ))}
            </div>
        </Fragment>
    );
};
FooterContactInfoWidget.propTypes = {
    infoData: PropTypes.shape({
        contact_info: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
        text: PropTypes.string,
    }),
};
export default FooterContactInfoWidget;
