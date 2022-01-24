import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogVerticalCard = ({ title, date, slug, dateSlug, image1 }) => {
    return (
        <div className="single_blog items-center">
            <div className="blog_thumb ">
                <Link to={`/${slug}`} className="block">
                    {image1 ? (
                        <GatsbyImage
                            className="rounded-xl"
                            image={getImage(image1)}
                            alt={title}
                        />
                    ) : (
                        <StaticImage
                            className="rounded-4xl"
                            src="../../assets/images/placeholder-image.png"
                            alt={title}
                        />
                    )}
                </Link>
            </div>
            <div className="blog_content mt-6">
                <div className="blog_date">
                    <Link to={`/date/${dateSlug}`} className="mb-2 block">
                        <i className="icofont-calendar text-primary mr-2"></i>
                        {date}
                    </Link>
                </div>
                <h3 className="font-bold uppercase mb-1 md:mb-3 md:text-18base lg:text-md">
                    <Link to={`/${slug}`} className="hover:text-primary">
                        {title || "Blog Title"}
                    </Link>
                </h3>
                <Link
                    to={`/${slug}`}
                    className="pl-12 text-sm font-medium hover:text-primary relative 
                    text-white 
                    after:absolute
                    content-after
                  after:bg-primary
                    after:w-8 
                    after:h-0.5
                    after:z-0 
                    after:top-1/2 
                    after:left-0 
                    after:transform 
                    after:-translate-y-2/4 
                    after:transition 
                    after:opacity-100"
                >
                    READ MORE
                </Link>
            </div>
        </div>
    );
};
BlogVerticalCard.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    dateSlug: PropTypes.string,
    slug: PropTypes.string,
    image1: PropTypes.object,
};
export default BlogVerticalCard;
