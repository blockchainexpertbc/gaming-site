import React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/shared/button";
const NotFoundPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="404: Not found" pathname="/" />
            <div className="not-found pt-260">
                <div className="container text-center">
                    <div className="error_title mb-10">
                        <h3 className="text-lg font-bold">OPPS...</h3>
                        <p className="text-35base uppercase font-bold">
                            SORRY, this page is not found.
                        </p>
                    </div>
                    <div className="mb-16">
                        <StaticImage
                            src="../data/images/others/404.webp"
                            alt=""
                        />
                    </div>
                    <Button size="lg" path="/" className="text-white">
                        GO TO HOME
                        <StaticImage
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src="../data/images/icons/arrrow-icon.webp"
                            alt=""
                        />
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};
export const query = graphql`
    query NotFoundPageQuery {
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
    }
`;
export default NotFoundPage;
