import PropTypes from "prop-types";
import { LinkWrapper, AnchorTag } from "./style";

const Anchor = ({ path, children, className, rel, label, target, sx }) => {
    const internal = /^\/(?!\/)/.test(path);
    if (internal) {
        return (
            <LinkWrapper
                aria-label={label}
                rel="preload"
                className={className}
                to={path}
            >
                {children}
            </LinkWrapper>
        );
    }
    return (
        <AnchorTag
            aria-label={label}
            rel={rel}
            className={className}
            href={path}
            target={target}
        >
            {children}
        </AnchorTag>
    );
};

Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    rel: PropTypes.string,
    label: PropTypes.string,
    target: PropTypes.oneOf(["_blank" | "_self" | "_parent" | "_top"]),
    sx: PropTypes.shape({}),
};

export default Anchor;
