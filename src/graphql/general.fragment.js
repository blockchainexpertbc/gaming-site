import { graphql } from "gatsby";

export const query = graphql`
    fragment General on General {
        id
        title
        slug
        excerpt
        images {
            src {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: TRACED_SVG
                        quality: 100
                    )
                }
            }
        }
    }
`;
