import { graphql } from "gatsby";

export const query = graphql`
    fragment Games on Games {
        id
        slug
        title
        gameThum {
            alt
            src {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        buttons {
            color
            shape
            path
            id
            content
            size
        }
        categories {
            title
            slug
        }
        date
        updated
        size
        installs
        currentVersion
        inAppProducts
        quoteText
        images {
            alt
            src {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        content {
            id
            section
            headings {
                content
            }
            items {
                id
                desc
            }
        }
    }
`;
