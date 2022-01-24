import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import LiveStreaming from "../../components/live-streaming";
import ContentText from "../../components/content-text";
import Button from "../../components/shared/button";
import { DiscussionEmbed } from "disqus-react";
const MatchDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.match.content || []);
    // Base Url
    const baseUrl = "https://bonx.com";
    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.match?.id,
        title: data?.match?.title,
        url: baseUrl + "/" + pageContext.slug,
    };
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Match Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Match Details"
            />
            <div className="match-post-content-wrapper">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="single-grid">
                            <div className="this-match-teams mb-10">
                                <div className="px-10 py-8 space-x-8 rounded-3xl flex justify-center items-center lg:justify-between lg:max-w-sm m-auto border-4 border-secondary-90">
                                    <div className="mx-1.5">
                                        <GatsbyImage
                                            className="md:h-auto"
                                            image={getImage(
                                                data?.match?.teams[0]?.logo.src
                                            )}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mx-3.5">
                                        <StaticImage
                                            src="../../data/images/team-logo/game-vs1.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mx-1.5">
                                        <GatsbyImage
                                            className="md:h-auto"
                                            image={getImage(
                                                data?.match?.teams[1]?.logo.src
                                            )}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="live-stream-box">
                                <LiveStreaming
                                    title={
                                        data?.match?.liveStreaming?.headings[0]
                                            .content
                                    }
                                    image={
                                        data?.match?.liveStreaming?.images[0]
                                            .src
                                    }
                                    video_link={
                                        data?.match?.liveStreaming?.link
                                    }
                                />
                            </div>

                            <div className="match_details_counterup flex flex-col sm:flex-row justify-between items-center py-12 mb-12 border-b-2 border-secondary-80 ">
                                <div className="match_counterup_inner flex items-center">
                                    <div className="match_counterup_list mr-6 pr-6 lg:mr-16 lg:pr-16 relative pt-4">
                                        <span className="text-primary font-bold">
                                            PLAYER:
                                        </span>
                                        <h2 className="counterup font-bold mt-3">
                                            {data?.match?.playerNumber}
                                        </h2>
                                        <span className="absolute right-0 top-0 transform rotate-12 bg-secondary-80 h-28 w-0.5"></span>
                                    </div>
                                    <div className="match_counterup_list mr-6 pr-6 lg:mr-16 lg:pr-16 relative pt-4">
                                        <span className="text-primary font-bold">
                                            TEAM:
                                        </span>
                                        <h2 className="font-bold mt-3">
                                            {data?.match?.teamNubmber}
                                        </h2>
                                        <span className="absolute right-0 top-0 transform rotate-12 bg-secondary-80 h-28 w-0.5"></span>
                                    </div>
                                    <div className="match_counterup_list pt-4">
                                        <span className="text-primary font-bold">
                                            WINNING PRIZE:
                                        </span>
                                        <h2 className="font-bold mt-3">
                                            {"$"}
                                            {data?.match?.winningPrize}
                                        </h2>
                                    </div>
                                </div>
                                <div className="join_now_btn mt-10 sm:top-0">
                                    <Button path="/" size="lg">
                                        JOIN NOW{" "}
                                    </Button>
                                </div>
                            </div>

                            <div className="content-box">
                                <p className="date text-primary font-bold mb-3">
                                    {data.match.date}
                                </p>
                                <h2 className="font-bold">
                                    {data.match.title}{" "}
                                </h2>

                                <div className="content-details">
                                    <ContentText
                                        data={content["game-details-per-one"]}
                                    />

                                    {data?.match?.quoteText && (
                                        <blockquote className="py-5 mb-5">
                                            <p className="font-bold text-yollow-90 italic text-22base lg:text-28base">
                                                {data?.match?.quoteText}
                                            </p>
                                        </blockquote>
                                    )}

                                    <ContentText
                                        data={content["game-details-per-two"]}
                                    />
                                </div>

                                <div className="team-player">
                                    <div className="teams-players-one mt-15">
                                        <h5 className="text-primary uppercase font-bold">
                                            TEAM - 01
                                        </h5>

                                        {data?.match.teams && (
                                            <h3 className="font-bold uppercase lg:text-xl">
                                                {data?.match.teams[0].name}{" "}
                                                PLAYERS
                                            </h3>
                                        )}

                                        <Swiper
                                            layout={{
                                                nav: "team-players-navigation",
                                                dots: "team-players-dots-style",
                                            }}
                                            navigation={{
                                                nextEl: ".team-players-slider-button-next",
                                                prevEl: ".team-players-slider-button-prev",
                                            }}
                                            slidesPerView={2}
                                            spaceBetween={20}
                                            breakpoints={{
                                                320: {
                                                    slidesPerView: 3,
                                                },
                                                480: {
                                                    slidesPerView: 4,
                                                },
                                                768: {
                                                    slidesPerView: 5,
                                                },
                                                992: {
                                                    slidesPerView: 6,
                                                },
                                            }}
                                        >
                                            {data?.match.teams &&
                                                data?.match.teams[0].teamPlayer.map(
                                                    (teamplayer) => (
                                                        <SwiperSlide
                                                            key={teamplayer.id}
                                                        >
                                                            <div className="players-list mt-5">
                                                                <GatsbyImage
                                                                    image={getImage(
                                                                        teamplayer
                                                                            .images[0]
                                                                            .src
                                                                    )}
                                                                    alt={
                                                                        teamplayer
                                                                            .images[0]
                                                                            .alt
                                                                    }
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                )}
                                        </Swiper>
                                    </div>

                                    <div className="teams-players-two mt-15">
                                        <h5 className="text-primary uppercase font-bold">
                                            TEAM - 02
                                        </h5>

                                        {data?.match.teams && (
                                            <h3 className="font-bold uppercase lg:text-xl">
                                                {data?.match.teams[1].name}{" "}
                                                PLAYERS
                                            </h3>
                                        )}

                                        <Swiper
                                            layout={{
                                                nav: "team-players-navigation",
                                                dots: "team-players-dots-style",
                                            }}
                                            navigation={{
                                                nextEl: ".team-players-slider-button-next",
                                                prevEl: ".team-players-slider-button-prev",
                                            }}
                                            slidesPerView={2}
                                            spaceBetween={20}
                                            breakpoints={{
                                                320: {
                                                    slidesPerView: 3,
                                                },
                                                480: {
                                                    slidesPerView: 4,
                                                },
                                                768: {
                                                    slidesPerView: 5,
                                                },
                                                992: {
                                                    slidesPerView: 6,
                                                },
                                            }}
                                        >
                                            {data?.match.teams &&
                                                data?.match.teams[1].teamPlayer.map(
                                                    (teamplayer) => (
                                                        <SwiperSlide
                                                            key={teamplayer.id}
                                                        >
                                                            <div className="players-list mt-5">
                                                                <GatsbyImage
                                                                    image={getImage(
                                                                        teamplayer
                                                                            .images[0]
                                                                            .src
                                                                    )}
                                                                    alt={
                                                                        teamplayer
                                                                            .images[0]
                                                                            .alt
                                                                    }
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                )}
                                        </Swiper>
                                    </div>
                                    <div className="teams-description mt-15">
                                        <ContentText
                                            data={
                                                content["game-details-per-two"]
                                            }
                                        />
                                    </div>
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

MatchDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        match: PropTypes.shape({
            liveStreaming: PropTypes.shape({
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    })
                ),
                headings: PropTypes.arrayOf(
                    PropTypes.shape({ content: PropTypes.string })
                ),
                link: PropTypes.string,
            }),
            quoteText: PropTypes.string,
            playerNumber: PropTypes.string,
            teamNubmber: PropTypes.string,
            winningPrize: PropTypes.string,
            teams: PropTypes.arrayOf(
                PropTypes.shape({
                    logo: PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    }),
                    name: PropTypes.string,
                    teamPlayer: PropTypes.arrayOf(
                        PropTypes.shape({ content: PropTypes.string })
                    ),
                })
            ),
            image: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
            alt: PropTypes.string,
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
    query MatchDetailsBySlug($slug: String!) {
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
        match(slug: { eq: $slug }) {
            ...Matchs
        }
    }
`;
export default MatchDetails;
