import React from "react";
import PropTypes from "prop-types";
import BlogCard from "../../../components/blog-card";

const BlogWithoutSidebarArea = ({ data }) => {
    return (
        <section className="blog-section">
            <div className="container px-4">
                <div className="flex flex-wrap -mx-3">
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
BlogWithoutSidebarArea.propTypes = {
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

export default BlogWithoutSidebarArea;
