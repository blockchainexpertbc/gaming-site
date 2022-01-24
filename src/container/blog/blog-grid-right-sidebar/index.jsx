import React from "react";
import PropTypes from "prop-types";
import BlogVerticalCard from "../../../components/blog-vertical-card";
import SidebarWidgets from "../sidebar-widgets";

const BlogGridRightSidebarArea = ({ data }) => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="grid md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-7 lg:col-span-8 row-start-1 md:row-auto">
                        <div className="grid gap-8 xs:grid-cols-2 md:grid-cols-2 mt-8">
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
                    <div className="md:col-span-5 lg:col-span-4 row-start-2 md:row-auto ">
                        <SidebarWidgets />
                    </div>
                </div>
            </div>
        </section>
    );
};
BlogGridRightSidebarArea.propTypes = {
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

export default BlogGridRightSidebarArea;
