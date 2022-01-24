import React from "react";
import PropTypes from "prop-types";
import BlogCard from "../../../components/blog-card";
import SidebarWidgets from "../sidebar-widgets";

const BlogLeftSidebarArea = ({ data }) => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="grid md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-5 lg:col-span-4 row-start-2 md:row-auto ">
                        <SidebarWidgets />
                    </div>
                    <div className="md:col-span-7 lg:col-span-8 row-start-1 md:row-auto">
                        {data?.items &&
                            data?.items.map((item) => (
                                <BlogCard
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
            </div>
        </section>
    );
};
BlogLeftSidebarArea.propTypes = {
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

export default BlogLeftSidebarArea;
