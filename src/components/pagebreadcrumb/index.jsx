import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import BreadcrumbImage from "../../data/images/others/breadcrumbs-bg.webp";

const PageBreadcrumb = ({ title, crumbLabel, location, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split("/");
    const label = crumbLabelArr[crumbLabelArr.length - 1];
    const labelArr = label.split("-");
    const disableLinks = [
        "/games",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        "/blog",
        "/blog/page",
        "/blogs",
        "/match",
    ];
    return (
        <section
            className="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-80 bg-cover bg-bottom"
            style={{
                backgroundImage: `url(${BreadcrumbImage})`,
            }}
        >
            <div className=" text-center mt-12 transform">
                <Breadcrumb
                    title={title}
                    crumbs={crumbs}
                    crumbLabel={labelArr.join(" ")}
                    disableLinks={disableLinks}
                />
                <span className="hidden breadcrumb__title breadcrumb__list breadcrumb__separator breadcrumb__list__item breadcrumb__link__active"></span>
            </div>
        </section>
    );
};
PageBreadcrumb.propTypes = {
    title: PropTypes.string,
    crumbLabel: PropTypes.string,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PageBreadcrumb;
