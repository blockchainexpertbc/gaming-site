import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
const FooterMemuList = ({ infoData }) => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-8 lg:mb-14">
                {infoData?.title}
            </h3>
            <ul className="footer_contact_info">
                {infoData?.list &&
                    infoData?.list.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            {item.text}
                        </Link>
                    ))}
            </ul>
        </Fragment>
    );
};
FooterMemuList.propTypes = {
    infoData: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
    }),
};
export default FooterMemuList;
