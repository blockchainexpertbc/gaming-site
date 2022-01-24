import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import cn from "classnames";
import btnImagesm from "../../../data/images/others/btn-signup-sm.webp";
import btnImagelg from "../../../data/images/others/btn-signup.webp";

const sizeStyle = {
    md: `leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12`,
    lg: `text-22base h-73 w-230 leading-73`,
    xl: `h-15 w-50 text-xl leading-3`,
};
const shapeStyle = {
    rounded: `rounded`,
    square: `rounded-4xl`,
    square20xl: `rounded-20`,
    square2xl: `rounded-2xl`,
    square22xl: `rounded-22`,
};
const colorStyle = {
    primary: `bg-primary`,
    secondary: `bg-secondary`,
};

const Button = ({ children, type, path, className, size, shape, color }) => {
    const btnstyle = {
        size: size || "md",
        shape: shape || "square22xl",
        color: color || "primary",
    };
    const buttonClasses = cn(
        className,
        "font-exo",
        "inline-block",
        "text-center",
        "font-bold",
        "group",
        "hover:opacity-80",
        sizeStyle[btnstyle["size"]],
        shapeStyle[btnstyle["shape"]],
        colorStyle[btnstyle["color"]]
    );

    const btnImageSm = {
        backgroundImage: `url(${btnImagesm})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const btnImageLg = {
        backgroundImage: `url(${btnImagelg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    if (path) {
        const internal = /^\/(?!\/)/.test(path);
        const isHash = path.startsWith("#");

        if (internal) {
            return (
                <Link
                    to={path}
                    style={size ? btnImageLg : btnImageSm}
                    className={buttonClasses}
                >
                    {children}
                </Link>
            );
        }
        if (isHash) {
            return (
                <button
                    href={path}
                    style={size ? btnImageLg : btnImageSm}
                    className={buttonClasses}
                >
                    {children}
                </button>
            );
        }
        return (
            <a
                href={path}
                target="_blank"
                style={size ? btnImageLg : btnImageSm}
                className={buttonClasses}
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <button style={size} type={type} className={buttonClasses}>
            {children}
        </button>
    );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    path: PropTypes.string,
    size: PropTypes.oneOf(["xm", "sm", "md", "lg", "xl"]),
    shape: PropTypes.oneOf([
        "square",
        "rounded",
        "oval",
        "square2xl",
        "square20xl",
        "square22xl",
    ]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "dark",
        "light",
        "warning",
    ]),
    path: PropTypes.string,
};
Button.defaultProps = {
    type: "button",
};
export default Button;
