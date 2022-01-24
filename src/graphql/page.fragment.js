import { graphql } from "gatsby";

export const query = graphql`
    fragment PageContentAll on PageContent {
        section
        headings {
            content
            level
        }
        link
        items {
            id
            title
            description
            designation
            link
            name
            rating
            subject
            icon
            countNumber
            headings {
                level
                content
            }
            images {
                ...Image
            }
            action_link {
                link
                title
            }
        }
        texts {
            content
        }
        buttons {
            ...Button
        }
        section_title {
            ...SectionTitle
        }
        images {
            ...Image
        }
    }
`;
