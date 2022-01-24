import React from "react";
import PropTypes from "prop-types";
import ContactInfoCard from "../../../components/contact-info-card";
const ContactUsInfoArea = ({ data }) => {
    return (
        <section className="container px-4">
            <div className="flex flex-wrap -mx-3 text-center">
                {data?.items &&
                    data?.items.map((item) => (
                        <div
                            key={item.id}
                            className="w-full md:w-1/2 lg:w-1/3 px-4"
                        >
                            <ContactInfoCard
                                title={item?.headings[0].content}
                                level={item?.headings[0].level}
                                iconImage={item?.images[0].src}
                                bgShapImage={item.images[1].src}
                                description={item?.description}
                                action_link={item?.action_link}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};
ContactUsInfoArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default ContactUsInfoArea;
