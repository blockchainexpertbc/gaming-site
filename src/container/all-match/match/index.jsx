import React from "react";
import PropTypes from "prop-types";
import MatchItem from "../../../components/match";
import SectionTitle from "../../../components/title";

const MatchArea = ({ data }) => {
    return (
        <section className="upcoming-gaming-section pb-16 md:pb-24">
            <div className="container">
                {data?.section_title && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    </div>
                )}
                {data?.items &&
                    data?.items.map((item) => (
                        <MatchItem
                            key={item.id}
                            title={item?.title}
                            registeredTeams={item?.registeredTeams}
                            date={item?.date}
                            slug={item?.slug}
                            video_link={item?.liveStreaming?.link}
                            teamImage1={item.teams[0]?.logo.src}
                            teamImage2={item.teams[1]?.logo.src}
                        />
                    ))}
            </div>
        </section>
    );
};
MatchArea.propTypes = {
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
export default MatchArea;
