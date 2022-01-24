import React from "react";
import Category from "../../../components/blog-widgets/category";
import Search from "../../../components/blog-widgets/search";
import Tags from "../../../components/blog-widgets/tags";

const SidebarWidgets = () => {
    const postWidghtItem =
        "px-5 md:px-4 lg:px-7 xl:px-9 py-7 border-secondary-90 bg-secondary-100 border-2 border-solid rounded-lg mb-10 last:mb-0";
    return (
        <div className="post-sidebar mt-8">
            <div className={postWidghtItem}>
                <h3 className="uppercase font-bold mb-7">SEARCH HERE</h3>
                <Search />
            </div>
            <div className={postWidghtItem}>
                <h3 className="uppercase font-bold mb-7">POST CATEGORY</h3>
                <Category />
            </div>
            <div className={postWidghtItem}>
                <h3 className="uppercase font-bold mb-7">TAGS</h3>
                <Tags />
            </div>
        </div>
    );
};

export default SidebarWidgets;
