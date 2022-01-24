import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
    description,
    lang,
    image: metaImage,
    title,
    titleTemplate,
    pathname,
    canonical,
    nextPage,
    prevPage,
    rootPath,
    isBlogPost,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                        canonical
                        siteLanguage
                        image
                        titleTemplate
                        twitterUsername
                        mainUrl
                    }
                    buildTime
                }
            }
        `
    );

    let pageUrl;
    const path = pathname.replace(/^\/|\/$/g, "");
    const metaTitle = title || site.siteMetadata.title;
    const template = titleTemplate || site.siteMetadata.titleTemplate;
    const metaDescription = description || site.siteMetadata.description;
    const language = lang || site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const mainUrl = site.siteMetadata.mainUrl.replace(/\/$/, "");
    const bannerImage =
        metaImage && metaImage.src
            ? `${mainUrl}${metaImage.src}`
            : `${siteUrl}/${site.siteMetadata.image}`;
    let canonicalLink;
    if (canonical) {
        canonicalLink = `${mainUrl}${canonical}`;
    } else {
        canonicalLink = site.siteMetadata.canonical;
    }
    const imgWidth = metaImage?.width ? metaImage.width : 875;
    const imgHeight = metaImage?.height ? metaImage.height : 554;
    pageUrl = `${siteUrl}/${path}`;
    pageUrl = pageUrl.replace(/^\/+/g, "");
    const rootUrl = siteUrl + rootPath;
    const prevLink = prevPage && prevPage !== null && rootUrl + prevPage;
    const nextLink = nextPage && nextPage !== null && rootUrl + nextPage;
    let siteTitle;
    if (pathname === "/") {
        siteTitle = `${site.siteMetadata.titleTemplate} By ${site.siteMetadata.title}`;
    } else {
        siteTitle = `${template} By ${metaTitle}`;
    }

    const basSchema = [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: `${siteTitle}`,
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: site.siteMetadata.logo,
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: `${siteTitle}`,
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            inLanguage: language,
            potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },
    ];

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@graph": [...basSchema],
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: language,
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={bannerImage} />
            <link rel="canonical" href={canonicalLink} />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
            />
            {prevLink && <link rel="prev" href={prevLink} />}
            {nextLink && <link rel="next" href={nextLink} />}

            {/* OpenGraph tags */}
            <meta property="og:locale" content={language} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalLink} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:secure_url" content={bannerImage} />
            <meta property="og:image:width" content={`${imgWidth}px`} />
            <meta property="og:image:height" content={`${imgHeight}px`} />
            <meta property="og:image:alt" content={siteTitle} />
            <meta property="og:image:type" content="image/png" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata.twitterUsername}
            />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={bannerImage} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    pathname: PropTypes.string.isRequired,
    canonical: PropTypes.string,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    rootPath: PropTypes.string,
    isBlogPost: PropTypes.bool,
};

SEO.defaultProps = {
    lang: `en`,
    description: ``,
    pathname: "/",
};

export default SEO;
