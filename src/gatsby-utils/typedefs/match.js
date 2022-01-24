module.exports = `
    type Match implements Node {
        id: ID!
        title: String!
        slug: String!
        date: Date @dateformat
        teams: [Team]
        registeredTeams: String
        playerNumber: String
        teamNubmber: String
        winningPrize: String
        is_featured: Boolean
        quoteText: String
        images: [Image]
        liveStreaming: LiveStreaming
        content: [MatchContent]
    }
    type MatchContent {
        id: ID!
    }
    type Item {
        id: ID!
    }
    type LiveStreaming {
        id: ID!
        headings: [Heading]
        images: [Image]
        link: String
    }
`;
