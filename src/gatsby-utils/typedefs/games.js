module.exports = `
    type Games implements Node {
        id: ID!
        title: String!
        slug: String!
        date: Date @dateformat
        gameThum: Image
        updated: String
        size: String
        installs: String
        currentVersion: String
        inAppProducts: String
        is_featured: Boolean
        quoteText: String
        categories: [Categories]
        images: [Image]
        content: [GameContent]
        buttons: [Button]
    }
    type GameContent {
        id: ID!
        headings: [Heading]
    }
    type Item {
        id: ID!
    }
    type Categories {
        title: String
        slug: String
    }
`;
