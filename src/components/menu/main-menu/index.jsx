import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
            {menuarr?.map((menu) => {
                const submenu = menu.submenu;
                return (
                    <li
                        key={`menu-${menu.id}`}
                        className={`${
                            !!submenu ? "has-submenu" : ""
                        } group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100`}
                    >
                        <Link
                            activeClassName="active"
                            to={menu.link}
                            className="font-semibold uppercase"
                        >
                            {menu.text}
                        </Link>
                        {!!submenu && (
                            <ul className="submenu-nav absolute left-0 z-50 bg-white rounded-lg mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 p-4 border border-gray-100 w-64">
                                {submenu.map((submenu, i) => {
                                    return (
                                        <li key={`submenu${i}`}>
                                            <Link
                                                to={submenu.link}
                                                className="menu-sub-item text-sm font-medium text-black block py-1 hover:text-primary"
                                            >
                                                {submenu.text}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};
export default MainMenu;
