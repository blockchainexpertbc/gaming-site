import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";

const Tags = () => {
    const tagsQuery = useStaticQuery(graphql`
        query TagsQuery {
            allArticle {
                edges {
                    node {
                        tags {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `);

    const tags = tagsQuery.allArticle.edges;
    const allTgs = flatDeep(tags.map((cate) => cate.node.tags));
    let cats = [];
    allTgs.forEach((cat) => {
        const obj = {
            title: cat.title,
            slug: cat.slug,
            count: 1,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
                slug: cat.slug,
                count: prevCount + 1,
            };
        } else {
            cats.push(obj);
        }
    });
    return (
        <div className="all-tags">
            {cats.map((cat) => (
                <Link
                    key={cat.slug}
                    to={`/tags/${cat.slug}`}
                    className="inline-block mr-2 my-1 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-lg py-3 px-6 xl:px-8"
                >
                    {cat.title}
                </Link>
            ))}
        </div>
    );
};
Tags.propTypes = {
    tags: PropTypes.shape({}),
};
export default Tags;
