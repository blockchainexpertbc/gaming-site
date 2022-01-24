import { graphql } from "gatsby";

export const query = graphql`
    fragment Matchs on Match {
        id
        date(formatString: "DD MMMM, YYYY, hh:mm:ss A")
        title
        slug
        playerNumber
        teamNubmber
        winningPrize
        registeredTeams
        liveStreaming {
            id
            link
            headings {
                content
                level
            }
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
        teams {
            name
            logo {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            teamPlayer {
                id
                name
                images {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
        quoteText
        content {
            id
            section
            items {
                id
                desc
            }
        }
    }
`;
