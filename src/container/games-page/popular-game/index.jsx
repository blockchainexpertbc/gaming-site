import React, { useState } from "react";
import PropTypes from "prop-types";
import GameCard from "../../../components/games-card";
import GameCategories from "../../../components/game-categories";
import SearchBox from "../../../components/search-filter";

const GamesArea = ({ data }) => {
    const [filterGames, setFilterGames] = useState(data.items);

    const selectItem = function (e) {
        const selectGame = e.target.value;
        if (selectGame === "all") {
            setFilterGames(data.items);
            return;
        }
        const filteredGames = data.items
            .map((game) => ({
                ...game,
                catSlug: game.categories.map((cat) => cat.slug),
            }))
            .filter((cat) => cat.catSlug.includes(selectGame));
        setFilterGames(filteredGames);
    };

    const categories = data?.items.map((item) => item.categories);

    // -------------------------
    // Search Box Flter
    // -------------------------

    const searchValueTitle = data?.items.map((item) => item.title);
    const searchHelander = function (e) {
        const searchVal = e.target.value;
    };
    return (
        <section className="games-section pt-16 md:pt-24 pb-16 md:pb-28">
            <div className="container">
                <div className="filter-wrap bg-secondary-70 rounded-2xl px-5 py-7 mb-10">
                    <div className="flex justify-between">
                        <div className="category-filter">
                            <GameCategories
                                categories={categories}
                                selectItem={selectItem}
                            />
                        </div>
                        <div className="search-filter">
                            <SearchBox
                                // searchValueTitle={searchValueTitle}
                                searchHelander={searchHelander}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    {filterGames &&
                        filterGames.map((item) => (
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
GamesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default GamesArea;
