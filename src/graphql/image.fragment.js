import { graphql } from "gatsby";

export const query = graphql`
    fragment Image on Image {
        src {
            name
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: DOMINANT_COLOR
                    quality: 100
                )
            }
        }
        alt
    }
`;
