const { slugify } = require("../utils/functions");

module.exports = ({ node, actions, createNodeId }) => {
    const { createNode, createNodeField } = actions;
    // General Header
    if (node.internal.type === "GeneralJson") {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            menu: node.menu,
            footer: node.footer,
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Home & Inner pages
    if (
        node.internal.type === "HomepagesJson" ||
        node.internal.type === "InnerPagesJson"
    ) {
        createNode({
            id: createNodeId(`Page-${node.id}`),
            parent: node.id,
            title: node.title,
            pageType: node.pageType,
            content: node.content,
            internal: {
                type: "Page",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    // Match pages
    if (node.internal.type === "MatchsJson") {
        createNode({
            id: createNodeId(`Match-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: slugify(node.title),
            date: node.date,
            teams: node.teams,
            registeredTeams: node.registeredTeams,
            playerNumber: node.playerNumber,
            teamNubmber: node.teamNubmber,
            winningPrize: node.winningPrize,
            images: node.images,
            liveStreaming: node.liveStreaming,
            quoteText: node.quoteText,
            content: node.content,
            internal: {
                type: "Match",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    // Teams pages
    if (node.internal.type === "TeamsJson") {
        createNode({
            id: createNodeId(`Team-${node.id}`),
            parent: node.id,
            name: node.name,
            logo: node.logo,
            description: node.description,
            teamPlayer: node.teamPlayer,
            internal: {
                type: "Team",
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    // Games pages
    if (node.internal.type === "GamesJson") {
        createNode({
            id: createNodeId(`Games-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: slugify(node.title),
            gameThum: node.gameThum,
            categories: node.categories,
            date: node.date,
            updated: node.updated,
            size: node.size,
            installs: node.installs,
            currentVersion: node.currentVersion,
            inAppProducts: node.inAppProducts,
            images: node.images,
            buttons: node.buttons,
            quoteText: node.quoteText,
            content: node.content,
            internal: {
                type: "Games",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    // Match pages
    if (node.internal.type === "PlayersJson") {
        createNode({
            id: createNodeId(`Players-${node.id}`),
            parent: node.id,
            title: node.title,
            name: node.name,
            slug: slugify(node.name),
            needLavel: node.needLavel,
            image: node.image,
            socials: node.socials,
            items: node.items,
            content: node.content,
            internal: {
                type: "Players",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    // Fields create in Grapql file
    if (node.internal.type === "MarkdownRemark") {
        createNode({
            id: createNodeId(`Article-${node.id}`),
            parent: node.id,
            title: node.frontmatter.title,
            image: node.frontmatter.image,
            slug: slugify(node.frontmatter.title),
            postedAt: node.frontmatter.date,
            excerpt: node.excerpt,
            author: node.frontmatter.author,
            quote_text: node.frontmatter.quote_text,
            categories: node.frontmatter.categories,
            tags: node.frontmatter.tags,
            //content: node.rawMarkdownBody,
            internal: {
                type: "Article",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
