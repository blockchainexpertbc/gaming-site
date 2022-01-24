module.exports = `
    type General implements Node @childOf(types: ["GeneralJson"]){
        id: ID!
        section: String!
        menu: [Menu]
        footer: [Footer]
    }
    type Menu {
        id: ID!
        text: String!
        link: String!
        submenu: [Submenu]
        megamenu: [Megamenu]
    }
    type Submenu {
        id: ID!
        text: String!
        link: String!
    }
    type Megamenu {
        title: String
        submenu: [Submenu]
    }
    type Footer {
        id: ID!
        text: String
        link: String
        icon: String
        list: [List]
        socials: [Social]
        contact_info: [ContactInfo]
        images: [Image]
    }
    type ContactInfo {
        id: ID!
        title: String
        text: String
        icon: String
    }
    type List {
        id: ID!
        text: String!
        link: String!
        icon: String
    }
`;
