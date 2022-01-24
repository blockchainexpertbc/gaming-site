import React from "react";
import PlayerCard from "../../../components/player-card";
import PropTypes from "prop-types";
const PlayersArea = ({ data }) => {
    return (
        <section className="player-section mb-15 md:pb-80">
            <div className="container">
                <div className="grid gap-y-10 gap-4 lg:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {data?.items &&
                        data?.items?.map((item) => (
                            <PlayerCard
                                key={item.id || item.title}
                                name={item?.name}
                                image={item?.image.src}
                                needLavel={item?.needLavel}
                                socials={item?.socials}
                                slug={item?.slug}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};
PlayersArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default PlayersArea;
