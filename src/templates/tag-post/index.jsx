import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "@components/pagebreadcrumb";
import BlogLeftSidebarArea from "../../container/blog/blog-left-sidebar";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";

const BlogTagPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog Tags" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Tags"
            />
            <BlogLeftSidebarArea
                data={{
                    items: data.allArticle.nodes,
                }}
            />
        </Layout>
    );
};

BlogTagPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query tagPageQuery($slug: String) {
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
        allArticle(
            filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                width: 200
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default BlogTagPage;
