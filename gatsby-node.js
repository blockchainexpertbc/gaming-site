/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const get = require("lodash.get");
const _ = require("lodash");
const onCreateNode = require("./src/gatsby-utils/onCreateNode");
const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
const createResolvers = require("./src/gatsby-utils/createResolvers");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(__dirname, "./src/theme"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
            },
        },
    });
};

exports.createSchemaCustomization = createSchemaCustomization;

// Single Post Page
exports.onCreateNode = onCreateNode;

exports.createResolvers = createResolvers;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        matchsPosts: path.resolve("src/templates/match-details/index.jsx"),
        gamesPosts: path.resolve("src/templates/games-details/index.jsx"),
        playersPosts: path.resolve("src/templates/players-details/index.jsx"),
        singleArticles: path.resolve(
            "src/templates/single-blog-post/index.jsx"
        ),
        tagPosts: path.resolve("src/templates/tag-post/index.jsx"),
        categoriePosts: path.resolve("src/templates/categories-post/index.jsx"),
        datePage: path.resolve("src/templates/date-post/index.jsx"),
    };
    return graphql(`
        {
            allMatch {
                nodes {
                    slug
                }
            }
            allGames {
                nodes {
                    slug
                }
            }
            allPlayers {
                nodes {
                    slug
                }
            }
            allArticle {
                edges {
                    node {
                        slug
                        tags {
                            slug
                        }
                        categories {
                            slug
                        }
                        postedAt {
                            date(formatString: "D MMMM, YYYY")
                            slug
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        //  Matchs Details Page
        const matchsPosts = res.data.allMatch.nodes;
        matchsPosts.forEach((node) => {
            createPage({
                path: `/match/${node.slug}`,
                component: templates.matchsPosts,
                context: {
                    slug: node.slug,
                },
            });
        });

        //  Games Details Page
        const gamesPosts = res.data.allGames.nodes;
        gamesPosts.forEach((node) => {
            createPage({
                path: `/games/${node.slug}`,
                component: templates.gamesPosts,
                context: {
                    slug: node.slug,
                },
            });
        });

        // Players Details Page
        const playersPosts = res.data.allPlayers.nodes;
        playersPosts.forEach((node) => {
            createPage({
                path: `/players/${node.slug}`,
                component: templates.playersPosts,
                context: {
                    slug: node.slug,
                },
            });
        });

        // Create Single Blog Post Page
        const articles = res.data.allArticle.edges;
        articles.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: templates.singleArticles,
                context: {
                    slug: node.slug,
                },
            });
        });

        // Create Tags, categories, Date Page
        let tags = [];
        let categories = [];
        let dates = [];
        let dateSlugs = [];
        articles.forEach((edge) => {
            if (get(edge, "node.tags")) {
                tags = tags.concat(edge.node.tags.map((tag) => tag.slug));
            }
            if (get(edge, "node.categories")) {
                categories = categories.concat(
                    edge.node.categories.map((cat) => cat.slug)
                );
            }
            if (get(edge, "node.postedAt")) {
                dates = dates.concat(edge.node.postedAt.date);
                dateSlugs = dateSlugs.concat(edge.node.postedAt.slug);
            }
        });

        //Tag Post Page Create
        tags = [...new Set(tags)];
        tags.forEach((tag) => {
            createPage({
                path: `/tags/${tag}`,
                component: templates.tagPosts,
                context: {
                    slug: tag,
                },
            });
        });

        // Create Categories Page
        categories = [...new Set(categories)];
        categories.forEach((category) => {
            createPage({
                path: `/category/${category}`,
                component: templates.categoriePosts,
                context: {
                    slug: category,
                },
            });
        });

        // Create Date Page
        dates = [...new Set(dates)];
        dateSlugs = [...new Set(dateSlugs)];
        dateSlugs.forEach((dateSlug, i) => {
            createPage({
                path: `/date/${dateSlug}`,
                component: templates.datePage,
                context: {
                    date: dates[i],
                    slug: dateSlug,
                },
            });
        });
        //
    });
};
