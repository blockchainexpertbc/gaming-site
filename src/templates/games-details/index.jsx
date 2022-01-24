import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import ContentText from "../../components/content-text";
import { DiscussionEmbed } from "disqus-react";
const GamesDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.games.content || []);

    // Base Url
    const baseUrl = "https://bonx.com";
    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.games?.id,
        title: data?.games?.title,
        url: baseUrl + "/" + pageContext.slug,
    };
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Games Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Games Details"
            />
            <div className="games-post-content-wrapper">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="single-grid">
                            <div className="content-box">
                                <p className="date text-primary font-bold mb-3">
                                    {data.games.date}
                                </p>
                                <h2 className="font-bold">
                                    {data.games.title}{" "}
                                </h2>

                                <div className="content-details">
                                    <ContentText
                                        data={content["game-details-per-one"]}
                                    />
                                    <div className="game-all-images my-10">
                                        <Swiper
                                            layout={{
                                                nav: "games-navigation",
                                                dots: "games-dots-style",
                                            }}
                                            navigation={{
                                                nextEl: ".games-slider-button-next",
                                                prevEl: ".games-slider-button-prev",
                                            }}
                                            slidesPerView={1}
                                            spaceBetween={20}
                                        >
                                            {data?.games?.images &&
                                                data?.games?.images?.map(
                                                    (gameThum) => (
                                                        <SwiperSlide
                                                            key={gameThum.alt}
                                                        >
                                                            <GatsbyImage
                                                                image={getImage(
                                                                    gameThum.src
                                                                )}
                                                                alt={
                                                                    gameThum.alt
                                                                }
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                )}
                                        </Swiper>
                                        <div className="z-10 transform pt-12 flex space-x-4">
                                            <div
                                                className="games-slider-button-next swipper-arrow text-white transform w-68 h-55
                                             flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover"
                                            >
                                                <StaticImage
                                                    src="../../data/images/icons/navigation-arrow2.webp"
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="games-slider-button-prev swipper-arrow text-white 
                                            transform w-68 h-55 flex items-center
                                             justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover"
                                            >
                                                <StaticImage
                                                    src="../../data/images/icons/navigation-arrow1.webp"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <ContentText
                                        data={content["game-details-per-two"]}
                                    />
                                    <ContentText
                                        data={content["game-details-per-three"]}
                                    />

                                    <ContentText
                                        data={
                                            content[
                                                "game-details-per-whats-new"
                                            ]
                                        }
                                    />

                                    {data?.games?.quoteText && (
                                        <blockquote className="py-5 mb-5">
                                            <p className="font-bold text-yollow-90 italic text-22base lg:text-28base">
                                                {data?.games?.quoteText}
                                            </p>
                                        </blockquote>
                                    )}

                                    <div className="additional-information-area bg-secondary-60 px-9 py-9 rounded-2xl mb-9">
                                        <h3 className="font-bold mb-6">
                                            Additional Information:
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
                                            <div className="additional_information_text">
                                                <h4 className="font-bold mb-5">
                                                    Updated:
                                                </h4>
                                                <span>
                                                    {data?.games?.updated}
                                                </span>
                                            </div>
                                            <div className="additional_information_text">
                                                <h4 className="font-bold mb-5">
                                                    SIZE:
                                                </h4>
                                                <span>{data?.games?.size}</span>
                                            </div>
                                            <div className="additional_information_text">
                                                <h4 className="font-bold mb-5">
                                                    INSTALLS:
                                                </h4>
                                                <span>
                                                    {data?.games?.installs}
                                                </span>
                                            </div>
                                            <div className="additional_information_text">
                                                <h4 className="font-bold mb-5">
                                                    CURRENT VERSION:
                                                </h4>
                                                <span>
                                                    {
                                                        data?.games
                                                            ?.currentVersion
                                                    }
                                                </span>
                                            </div>
                                            <div className="additional_information_text">
                                                <h4 className="font-bold mb-5">
                                                    IN-APP PRODUCTS:
                                                </h4>
                                                <span>
                                                    {data?.games?.inAppProducts}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <ContentText
                                        data={content["game-details-per-04"]}
                                    />
                                </div>

                                <div className="mt-14 text-white">
                                    <div className="mb-4">
                                        <h3 className="font-bold">Comments</h3>
                                    </div>
                                    <DiscussionEmbed
                                        shortname={disqusShorttname}
                                        config={disquscConfig}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

GamesDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        games: PropTypes.shape({
            quoteText: PropTypes.string,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
            updated: PropTypes.string,
            size: PropTypes.string,
            updated: PropTypes.string,
            installs: PropTypes.string,
            currentVersion: PropTypes.string,
            inAppProducts: PropTypes.string,
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                })
            ),
        }),
    }),
};

export const postQuery = graphql`
    query gamesDetailsBySlug($slug: String!) {
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
        games(slug: { eq: $slug }) {
            ...Games
        }
    }
`;
export default GamesDetails;
