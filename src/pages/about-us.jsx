import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import FunfactArea from "../container/home/funfact";
import TestimonialArea from "../container/home/testimonial";
import WatchLiveStremingArea from "../container/home/watch-live-streaming";
import AboutUsOurStudioArea from "../container/about-us/about-us-our-studio";
import OurTeamsArea from "../container/about-us/our-teams";

const MatchPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="About Us Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutUsOurStudioArea data={content["our-studio-section"]} />
            <FunfactArea data={content["funfact-section"]} />
            <WatchLiveStremingArea data={{ items: data.allMatch.nodes }} />
            <OurTeamsArea data={content["our-team-section"]} />
            <TestimonialArea data={content["testimonial-section"]} />
        </Layout>
    );
};

MatchPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allMatch: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query aboutUsPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "aboutUsPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
        allMatch(sort: { order: DESC, fields: date }, limit: 3) {
            nodes {
                ...Matchs
            }
        }
    }
`;

export default MatchPage;
