import React from "react";
import PropTypes from "prop-types";
import { flatDeep, containsObject } from "@utils/functions";

const GameCategories = ({ selectItem, categories }) => {
    let cats = [];

    const allCategories = flatDeep(categories);

    allCategories.forEach((cat) => {
        const obj = {
            title: cat.title,
            slug: cat.slug,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            cats[objIndex] = obj;
        } else {
            cats.push(obj);
        }
    });

    return (
        <div className="filter-option">
            <select
                id="cats"
                onBlur={selectItem}
                onChange={selectItem}
                className="px-5 h-14 sm:w-64 border-secondary-90 text-white bg-secondary-100 border-2 border-solid rounded-lg focus:outline-none"
            >
                <option value="all" className="bg-black">
                    All Category
                </option>
                {cats.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                        {cat.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
GameCategories.propTypes = {
    categories: PropTypes.shape({}),
    selectItem: PropTypes.func,
    categories: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })
        )
    ),
};
export default GameCategories;
