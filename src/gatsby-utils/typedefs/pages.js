module.exports = `
    type Page implements Node {
        id: ID!
        title: String!
        content: [PageContent]
        pageType: PageType!
    }
    enum PageType {
        innerpage
        homepage
    }
    type PageContent {
        id: ID!
        section: String!
        headings: [Heading]
        texts: [Text]
        items: [Item]
        section_title: SectionTitle
        images: [Image]
        buttons: [Button]
        link: String
    }
    type Item {
        id: ID!
        title: String
        description: String
        images: [Image]
        link: String
        name: String,
        designation: String,
        socials: [Social]
        rating: Int
        subject: String
        alt: String
        icon: String
        countNumber: Int
        action_link: [ActionLink]
    }
    type ActionLink {
        title: String
        link: String
    }
    
`;
