import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const FunfactItem = ({ title, countNumber }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <div className="single_counterup text-white text-center">
            <div className="counterup_text mt-4">
                <CountUp
                    start={focus ? 0 : null}
                    end={countNumber}
                    duration={5}
                >
                    {({ countUpRef }) => (
                        <h2 className="counterup text-primary font-metal font-bold text-center">
                            <span ref={countUpRef} />
                            <VisibilitySensor
                                onChange={(isVisible) =>
                                    visibleChangeHandler(isVisible)
                                }
                            >
                                <span className="sr-only">+</span>
                            </VisibilitySensor>
                        </h2>
                    )}
                </CountUp>
                <span>{title}</span>
            </div>
        </div>
    );
};
FunfactItem.propTypes = {
    title: PropTypes.string,
    iconImage: PropTypes.object,
    shapImage: PropTypes.object,
    countNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FunfactItem;
