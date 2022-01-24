import { graphql } from "gatsby";

export const query = graphql`
    fragment Menu on Menu {
        id
        link
        text
        megamenu {
            title
            submenu {
                text
                link
                id
            }
        }
        submenu {
            id
            link
            text
        }
    }
`;
