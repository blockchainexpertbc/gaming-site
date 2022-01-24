import React, { Fragment } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils/mobile-nav-utils";
import PropTypes from "prop-types";
const MobileNavMenu = ({ MobilemenuData, ofcanvasOpen, ofcanvasHandaler }) => {
    const MobileMenuArr = MobilemenuData;
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 500);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 500);
                }
            });
        }
    };

    return (
        <div
            className={`${
                ofcanvasOpen ? "mobile-menu-open" : ""
            } fixed invisible top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto opacity-0 transition-all`}
        >
            <div
                className="OffCanvasContent fixed left-0 top-0 z-20 opacity-0 invisible h-full w-full bg-black"
                onClick={ofcanvasHandaler}
                onKeyDown={ofcanvasHandaler}
                role="button"
                tabIndex={0}
            ></div>
            <div
                className="OffCanvasContent"
                onClick={ofcanvasHandaler}
                onKeyDown={ofcanvasHandaler}
                role="button"
                tabIndex={0}
            />
            <div
                className="site-mobile-menu transform -translate-x-full 
            transition-all text-black bg-white z-30 
            relative h-full px-8 py-8 w-310 sm:w-96 overflow-x-hidden overflow-y-auto"
            >
                <button
                    onClick={ofcanvasHandaler}
                    onKeyDown={ofcanvasHandaler}
                    className=" flex justify-end items-center ml-auto"
                >
                    Close <i className="icofont-close"></i>
                </button>
                <ul className="mt-10 mb-10">
                    {MobileMenuArr.map((menu) => {
                        const submenu = menu.submenu;
                        return (
                            <li
                                key={`menu-${menu.id}`}
                                className={`${
                                    !!submenu ? "has-submenu-dropdown" : ""
                                } relative font-medium block pb-3 mb-3 border-b`}
                            >
                                <Link activeClassName="active" to={menu.link}>
                                    {menu.text}
                                </Link>
                                {!!submenu && (
                                    <Fragment>
                                        <button
                                            className="menu-toggle menu-expand absolute right-0 justify-center cursor-pointer bg-transparent"
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                        >
                                            <i className="icofont-rounded-down"></i>
                                        </button>
                                        <ul className="submenu-nav hidden mt-4">
                                            {submenu.map((submenu, i) => {
                                                return (
                                                    <li
                                                        key={`submenu${i}`}
                                                        className="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0 "
                                                    >
                                                        <Link to={submenu.link}>
                                                            {submenu.text}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Fragment>
                                )}
                            </li>
                        );
                    })}
                </ul>
                <div className="action-button text-center">
                    <Button path="/" shape="square2xl" className="text-white">
                        SIGN UP
                        <StaticImage
                            className="align-middle ml-3"
                            src="../../../data/images/icons/arrrow-icon2.webp"
                            alt=""
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

MobileNavMenu.propTypes = {
    MobilemenuData: PropTypes.array,
    ofcanvasOpen: PropTypes.bool,
    ofcanvasHandaler: PropTypes.func,
};

export default MobileNavMenu;
