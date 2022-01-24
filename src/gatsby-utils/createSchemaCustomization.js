const {
    pagesDefs,
    contentDefs,
    generalDefs,
    matchDefs,
    gamesDefs,
    articlesDefs,
    playersDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pagesDefs,
        contentDefs,
        generalDefs,
        matchDefs,
        gamesDefs,
        articlesDefs,
        playersDefs,
    ];

    createTypes(allTypeDefs);
};
