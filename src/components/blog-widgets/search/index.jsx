import React from "react";

const Search = () => {
    return (
        <form action="#" className="relative">
            <input
                className="px-5 h-14 border-secondary-90 bg-secondary-100 border-2 border-solid rounded-md w-full focus:outline-none"
                placeholder="Search here"
                type="text"
            />
            <button
                type="submit"
                className="absolute px-5 top-0 right-0 bg-primary hover:bg-primary-90 transition-all rounded-md inline-block h-full"
            >
                <i className="icofont-search-1"></i>
            </button>
        </form>
    );
};

export default Search;
