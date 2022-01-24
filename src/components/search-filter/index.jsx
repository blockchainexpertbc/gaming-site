import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ searchHelander, searchValueTitle }) => {
    return (
        <div className="search-bx">
            <form action="#" className="relative">
                <input
                    onBlur={searchHelander}
                    onChange={searchHelander}
                    type="text"
                    placeholder="Search"
                    className="px-5 h-14 sm:w-64 border-secondary-90 text-white bg-secondary-100 border-2 border-solid rounded-lg focus:outline-none"
                />
                <button
                    type="submit"
                    className="absolute px-5 top-0 right-0 bg-transparent transition-all inline-block h-full hover:text-primary"
                >
                    <i className="icofont-search-1"></i>
                </button>
            </form>
        </div>
    );
};
SearchBox.propTypes = {
    searchHelander: PropTypes.func,
    searchValueTitle: PropTypes.string,
};
export default SearchBox;
