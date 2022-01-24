import React from "react";
import PropTypes from "prop-types";
import FunfactItem from "../../../components/funfact";

const FunfactArea = ({ data }) => {
    const conterCol =
        "single-funfact-item w-full xs:w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 justify-center relative content-last-child-before before:absolute before:-right-2 before:top-1/2 before:transform before:text-green before:text-md before:font-bold content-before";
    return (
        <section className="funfact-section">
            <div className="container">
                <div className="counterup_inner flex flex-wrap">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                className={conterCol}
                                tw-content-before="/ /"
                                key={item.id}
                            >
                                <FunfactItem
                                    title={item.headings[0].content}
                                    countNumber={item.countNumber}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
FunfactArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default FunfactArea;
