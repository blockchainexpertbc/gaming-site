import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import WelcomeFeatures from "../../../components/welcome-features";
const WelcomeFeaturesArea = ({ data }) => {
    return (
        <section className="pt-16 md:pt-24">
            <div className="container px-4">
                {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )}
                <div className="flex flex-wrap -mx-3 text-center">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 lg:w-1/3 px-4"
                            >
                                <WelcomeFeatures
                                    title={item.headings[0].content}
                                    level={item.headings[0].level}
                                    iconImage={item.images[0].src}
                                    bgShapImage={item.images[1].src}
                                    description={item.description}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
WelcomeFeaturesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default WelcomeFeaturesArea;
