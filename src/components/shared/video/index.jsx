import React from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";
import { Portal } from "react-portal";
const Video = ({ channel, isOpen, videoId, setOpen }) => {
    return (
        <Portal>
            <ModalVideo
                channel={channel}
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </Portal>
    );
};

Video.propTypes = {
    isOpen: PropTypes.bool,
    videoId: PropTypes.string,
    setOpen: PropTypes.func,
    channel: PropTypes.string,
};

export default Video;
