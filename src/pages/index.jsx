import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import HeroArea from "../container/home/hero";
import WelcomeFeaturesArea from "../container/home/welcome-features";
import WatchLiveStremingArea from "../container/home/watch-live-streaming";
import MatchArea from "../container/home/match";
import PopulerGamesArea from "../container/home/popular-game";
import TestimonialArea from "../container/home/testimonial";
import LatestBlogArea from "../container/home/latest-blog";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";

const IndexPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Home" pathname="/" />
            <HeroArea data={content["hero-section"]} />
            <WelcomeFeaturesArea data={content["welcome-section"]} />
            <WatchLiveStremingArea data={{ items: data.allMatch.nodes }} />
            <MatchArea
                data={{
                    ...content["upcoming-match"],
                    items: data.allMatch.nodes,
                }}
            />
            <FunfactArea data={content["funfact-section"]} />
            <PopulerGamesArea
                data={{
                    ...content["populer-games-section"],
                    items: data.allGames.nodes,
                }}
            />
            <TestimonialArea data={content["testimonial-section"]} />
            <LatestBlogArea
                data={{
                    ...content["latest-section"],
                    items: data.latestPosts.nodes,
                }}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
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
        allGames: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
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
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
            }
        }
        allMatch(sort: { order: DESC, fields: date }, limit: 3) {
            nodes {
                ...Matchs
            }
        }
        allGames(sort: { order: DESC, fields: date }, limit: 4) {
            nodes {
                ...Games
            }
        }
        latestPosts: allArticle(
            limit: 4
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                width: 200
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
