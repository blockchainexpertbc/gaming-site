import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import SectionTitle from "../../../components/title";

const ContactFormArea = ({ data }) => {
    return (
        <section className="contact-us-form-section pt-16 md:pt-24">
            <div className="container">
                <div className="section-title mb-15">
                    {data?.section_title && (
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    )}
                </div>
                <div className="grid gap-x-8 grid-cols-2">
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="email"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Address"
                        />
                    </div>
                    <div className="single-fild col-span-2">
                        <textarea
                            className="px-6 pt-4 h-72 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Write from here"
                        />
                    </div>
                </div>
                {data?.buttons &&
                    data.buttons.map(({ id, content, ...props }) => (
                        <div
                            className="section-title-warp text-center mt-10"
                            key={id}
                        >
                            <Button {...props} className="text-white">
                                {content}
                                <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                />
                            </Button>
                        </div>
                    ))}
            </div>
        </section>
    );
};
ContactFormArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
    }),
};
export default ContactFormArea;
