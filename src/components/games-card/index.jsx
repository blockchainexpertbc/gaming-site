import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import PropTypes from "prop-types";
import Button from "../shared/button";

const GameCard = ({ alt, slug, image, buttons }) => {
    const game_thumb =
        "group mt-10 relative text-white font-bold after:absolute content-after after:border-4 after:bg-gray-80 after:z-10 after:border-opacity-50 after:w-full after:h-full after:z-0  after:rounded-5xl after:top-1/2  after:left-1/2  after:transform  after:-translate-x-2/4  after:-translate-y-2/4  after:transition  after:opacity-0  hover:after:opacity-70 before:bg-secondary-100 before:empty-content before:absolute before:w-full  before:h-full before:z-10 before:rounded-5xl before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-70";
    return (
        <div className="game-card relative">
            <div className={game_thumb}>
                <GatsbyImage
                    className="rounded-4xl"
                    image={getImage(image)}
                    alt={alt}
                />
                {buttons &&
                    buttons.map(({ id, content, ...props }) => (
                        <Button
                            key={id}
                            {...props}
                            path={`/games/${slug}`}
                            className="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100"
                        >
                            {content}
                            <StaticImage
                                className="align-middle ml-3 transition-all hover:ml-5"
                                src="../../data/images/icons/arrrow-icon2.webp"
                                alt=""
                            />
                        </Button>
                    ))}
            </div>
        </div>
    );
};
GameCard.propTypes = {
    alt: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.object,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
        })
    ),
};
export default GameCard;
