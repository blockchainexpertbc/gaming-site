import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import { DiscussionEmbed } from "disqus-react";
const SinglePosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    // Social Share
    const baseUrl = "https://bonx.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.article?.id,
        title: data?.article?.title,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title={data?.article?.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Details"
            />
            <div className="blog-post-content-wrapper">
                <div className="container">
                    <div className="grid">
                        <div className="single-grid">
                            <div className="post-top-area max-w-4xl m-auto text-center mb-16">
                                <ul className="flex mb-8 justify-center">
                                    <li className="relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full">
                                        By
                                        <span>
                                            {" "}
                                            {data?.article?.author || "Admin"}
                                        </span>
                                    </li>
                                    <li className="relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full">
                                        <span>
                                            {data?.article?.postedAt.date}
                                        </span>
                                    </li>
                                    <li className="">
                                        <span>5 min read</span>
                                    </li>
                                </ul>
                                {data?.article?.title && (
                                    <h2 className="font-bold uppercase md:mb-3 lg:text-xl xl:text-2xl">
                                        {data?.article?.title || "Blog Title"}
                                    </h2>
                                )}

                                <div className="post-tags mt-8 space-x-3">
                                    {data?.article?.tags.map((tag, i) => (
                                        <Link
                                            className="px-4 py-2 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md"
                                            key={`tags-${tag.slug}`}
                                            to={`/tags/${tag.slug}`}
                                        >
                                            {tag.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="thaum text-center pb-10">
                                <GatsbyImage
                                    className="rounded-xl"
                                    image={getImage(data?.article?.image?.src)}
                                    alt={data?.article?.title}
                                />
                            </div>

                            <div className="content-box max-w-4xl m-auto">
                                <div
                                    className="blog-post-description"
                                    dangerouslySetInnerHTML={{
                                        __html: data?.article?.content,
                                    }}
                                />
                                <div className="social-share-wrap items-center mt-14 py-6 border-b-2 border-t-2 border-secondary-70 flex flex-col sm:flex-row justify-between">
                                    <h3 className="share font-bold">
                                        SHARE THIS ARTICLE:
                                    </h3>
                                    <ul className="post-social-list space-x-2 mt-5 sm:mt-0">
                                        <a
                                            className="px-3 py-2 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md"
                                            href={
                                                "https://www.facebook.com/sharer/sharer.php?u=" +
                                                baseUrl +
                                                pageContext.slug
                                            }
                                        >
                                            <i className="icofont-facebook"></i>
                                        </a>
                                        <a
                                            className="px-3 py-2 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md"
                                            href={
                                                "https://twitter.com/share?url=" +
                                                baseUrl +
                                                pageContext.slug +
                                                "&text=" +
                                                data?.article?.title +
                                                "&via" +
                                                "twitterHandle"
                                            }
                                        >
                                            <i className="icofont-twitter"></i>
                                        </a>
                                        <a
                                            className="px-3 py-2 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md"
                                            href="https://www.linkedin.com/"
                                        >
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </ul>
                                </div>
                                <div className="mt-14 text-white">
                                    <div className="mb-4">
                                        <h3 className="font-bold">Comments</h3>
                                    </div>
                                    <DiscussionEmbed
                                        shortname={disqusShorttname}
                                        config={disquscConfig}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

SinglePosts.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        article: PropTypes.shape({
            image: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            categories: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            postedAt: PropTypes.shape({
                date: PropTypes.string,
            }),
            alt: PropTypes.string,
            id: PropTypes.string,
            title: PropTypes.string,
            slug: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.string,
        }),
    }),
};

export const postQuery = graphql`
    query articleBySlug($slug: String!) {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        article(slug: { eq: $slug }) {
            ...Articles
            image {
                src {
                    childImageSharp {
                        gatsbyImageData(formats: WEBP)
                    }
                }
                alt
            }
        }
    }
`;
export default SinglePosts;
