import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import BlogCard from "../../../components/blog-card";

const LatestBlogArea = ({ data }) => {
    return (
        <section className="latest-blog-section pt-16 md:pt-24">
            <div className="container px-4">
                {data?.section_title && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    </div>
                )}
                <div className="flex flex-wrap -mt-8">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4"
                                key={`blog-post-${item.title}`}
                            >
                                <BlogCard
                                    title={item.title}
                                    author={item.author}
                                    date={item.postedAt.date}
                                    dateSlug={item.postedAt.slug}
                                    slug={item.slug}
                                    image1={item.image.src}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
LatestBlogArea.propTypes = {
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

export default LatestBlogArea;
