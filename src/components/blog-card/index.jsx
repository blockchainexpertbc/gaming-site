import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCard = ({ title, date, slug, dateSlug, image1 }) => {
    return (
        <div className="single_blog flex sm:flex-row md:flex-row items-center mt-7">
            <div className="blog_thumb w-28 justify-center items-center sm:w-28 md:w-28 lg:w-48 flex-shrink-0">
                <Link to={`/${slug}`} className="block">
                    {image1 ? (
                        <GatsbyImage
                            className="rounded-4xl"
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
            <div className="blog_content ml-4 md:ml-4 lg:ml-9">
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
                    className="pl-11 text-sm font-medium sm:uppercase hover:text-primary relative 
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
                    More Deatails
                </Link>
            </div>
        </div>
    );
};
BlogCard.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    image1: PropTypes.object,
};
export default BlogCard;
