import React from "react";
import PropTypes from "prop-types";
import GameCard from "../../../components/games-card";
import SectionTitle from "../../../components/title";

const PopulerGamesArea = ({ data }) => {
    return (
        <section className="populer-games-section pt-16 md:pt-24 py-16 md:py-28">
            <div className="container">
                {data?.section_title && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    </div>
                )}

                <div className="flex flex-wrap -mt-8">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                className="w-full md:w-1/2 lg:w-1/2 px-4"
                                key={item.id}
                            >
                                <GameCard
                                    date={item?.date}
                                    slug={item?.slug}
                                    image={item.gameThum.src}
                                    alt={item?.gameThum?.alt}
                                    buttons={item?.buttons}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
PopulerGamesArea.propTypes = {
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
export default PopulerGamesArea;
