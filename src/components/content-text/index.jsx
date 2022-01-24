import React, { Fragment } from "react";
import PropTypes from "prop-types";
const ContentText = ({ data }) => {
    return (
        <div className="description mt-6">
            {data?.headings && (
                <h3 className="font-bold uppercase mb-4">
                    {data?.headings[0].content}
                </h3>
            )}
            {data?.items &&
                data?.items?.map((item, i) => (
                    <p key={i} className="leading-8">
                        {item?.desc}
                    </p>
                ))}
        </div>
    );
};
ContentText.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                alt: PropTypes.string,
                desc: PropTypes.string,
            })
        ),
    }),
};
export default ContentText;
