import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer on Footer {
        id
        icon
        link
        text
        title
        contact_info {
            id
            text
            title
        }
        list {
            id
            link
            text
            icon
        }
        socials {
            id
            icon
            link
            title
        }
        images {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
        }
    }
`;
