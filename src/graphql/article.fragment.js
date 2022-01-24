import { graphql } from "gatsby";

export const query = graphql`
    fragment Articles on Article {
        title
        slug
        postedAt {
            date(formatString: "D MMMM, YYYY")
            slug
        }
        author
        tags {
            title
            slug
        }
        categories {
            title
            slug
        }
        content
    }
`;
