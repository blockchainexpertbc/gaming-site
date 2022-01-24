module.exports = `
    type Teams implements Node {
        id: ID!
        name: String!
        slug: String!
        logo: Image
        description: String
        teamPlayer: [TeamPlayer]
    }
    type TeamPlayer {
        id: ID!
    }
`;
