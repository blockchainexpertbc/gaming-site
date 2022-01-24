import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import OurTeamCard from "../../../components/our-team-card";
import Button from "../../../components/shared/button";
const OurTeamsArea = ({ data }) => {
    return (
        <section className="teams-section pb-16 md:pb-28">
            <div className="container">
                {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )}
                <div className="grid gap-y-6 gap-x-3 md:gap-x-4 xl:gap-9 sm:grid-cols-2 lg:grid-cols-3">
                    {data?.items &&
                        data?.items.map((item) => (
                            <OurTeamCard
                                key={item.id}
                                image={item?.images[0].src}
                                name={item?.name}
                                designation={item?.designation}
                            />
                        ))}
                </div>
                <div className="more-match text-center mt-28">
                    {data?.buttons &&
                        data.buttons.map(({ id, content, ...props }) => (
                            <Button key={id} {...props} className="text-white">
                                {content}
                            </Button>
                        ))}
                </div>
            </div>
        </section>
    );
};
OurTeamsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
    }),
};
export default OurTeamsArea;
