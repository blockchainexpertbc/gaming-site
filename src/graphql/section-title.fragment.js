import { graphql } from "gatsby";

export const query = graphql`
    fragment SectionTitle on SectionTitle {
        heading
        showDescription
        subHeading
        color
        description
        align
    }
`;
