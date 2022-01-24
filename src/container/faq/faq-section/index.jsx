import React from "react";
import PropTypes from "prop-types";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const FAQSection = ({ data }) => {
    return (
        <section className="faq-section relative">
            <div className="container">
                <div className="grid grid-cols-1 gap-8">
                    <Accordion>
                        {data.items.map((item) => {
                            return (
                                <AccordionItem
                                    id={item.id}
                                    key={item.id}
                                    className="border-secondary-80 px-4 py-5 lg:px-12 lg:py-7 border-solid border-2 rounded-md mb-4 z-10"
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="acc-btn font-bold lg:text-md">
                                            {item.headings[0].content}
                                            <span className="number-of-accordion"></span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="card-body mt-8 leading-9">
                                            {item.description}
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
FAQSection.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default FAQSection;
