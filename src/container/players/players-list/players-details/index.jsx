import React from "react";
import PropTypes from "prop-types";

const PlayersDetailsText = ({ description }) => {
    return <p className="leading-8">{description}</p>;
};
PlayersDetailsText.propTypes = {
    description: PropTypes.string,
};
export default PlayersDetailsText;
