import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";

const Category = () => {
    const categoriesQuery = useStaticQuery(graphql`
        query CategoriesQuery {
            allArticle {
                edges {
                    node {
                        categories {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `);
    const categories = categoriesQuery.allArticle.edges;
    const allCategories = flatDeep(
        categories.map((cate) => cate.node.categories)
    );
    let cats = [];
    allCategories.forEach((cat) => {
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
        <ul>
            {cats.map((cat) => (
                <li key={cat.slug} className="mb-5 last:mb-0">
                    <Link
                        to={`/category/${cat.slug}`}
                        className="px-5 py-4 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    >
                        <i className="icofont-rounded-double-right"></i>{" "}
                        {cat.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
Category.propTypes = {
    categories: PropTypes.shape({}),
};
export default Category;
