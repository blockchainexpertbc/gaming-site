import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "../components/pagebreadcrumb";
import MatchArea from "../container/all-match/match";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";

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
            <SEO title="Match Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="UPCOMING MATCH"
            />
            <MatchArea
                data={{
                    items: data?.allMatch?.nodes,
                }}
            />

            <FunfactArea
                className=" -mt-10"
                data={content["funfact-section"]}
            />
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
    query matchPageQuery {
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
        page(title: { eq: "matchPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
        allMatch(sort: { order: DESC, fields: date }) {
            nodes {
                ...Matchs
            }
        }
    }
`;

export default MatchPage;
