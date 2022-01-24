import React from "react";
import PropTypes from "prop-types";
import BlogVerticalCard from "../../../components/blog-vertical-card";

const BlogGridWithoutSidebarArea = ({ data }) => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {data?.items &&
                        data?.items.map((item) => (
                            <BlogVerticalCard
                                key={`blog-post-${item.title}`}
                                title={item.title}
                                author={item.author}
                                date={item.postedAt.date}
                                dateSlug={item.postedAt.slug}
                                slug={item.slug}
                                image1={item.image.src}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};
BlogGridWithoutSidebarArea.propTypes = {
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

export default BlogGridWithoutSidebarArea;
