module.exports = `
    type Social {
        id: ID!
        icon: String
        link: String
        title: String
    }
    type Heading {
        content: String!
        level: String
    }
    type Text {
        content: String!
    }
    type Image @infer{
        src: File @fileByRelativePath
        alt: String
    }
    type SectionTitle {
        id: ID!
        heading: String
        subHeading: String
        description: String
        align: Align
        color: TextColor
        showDescription: Boolean
    }
    enum Align {
        left
        right
        center
    }
    enum TextColor {
        white
        primary
    }

    type Button {
        id: ID!
        content: String!
        path: String
        variant: ButtonVariant
        color: ButtonColor
        size: ButtonSize
        shape: ButtonShape
    }
    enum ButtonVariant {
        outlined
        iconButton
    }
    enum ButtonColor {
        primary
        secondary
        dark
        light
        warning
        outlineDanger
        borderGradient
        outlineWarning
        outlinePrimary
        outlineSecondary
        borderNormal
        bgSuccess
        bgWhite
    }
    enum ButtonSize {
        xs
        sm
        md
        lg
        xl
    }
    enum ButtonShape {
        square
        rounded
        rounded5
        rounded10
        rounded15
        oval
    }
`;
