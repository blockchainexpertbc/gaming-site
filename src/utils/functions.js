/* eslint-disable prettier/prettier */

const getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};

const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

const createList = ({ list, separator = "," }) => {
    if (!list) return;
    return list.map((text, index) => {
        let sep;
        if (list.length !== index + 1) {
            sep = separator;
        }
        return { text, sep };
    });
};

const flatDeep = (arr, d = 1) => {
    return d > 0
        ? arr.reduce(
              (acc, val) =>
                  acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
              []
          )
        : arr.slice();
};

function truncateString(str, num, dots = true) {
    let endDots = dots ? "..." : "";
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + endDots;
}

function slideUp(element, duration = 500) {
    return new Promise(function (resolve, reject) {
        element.style.height = element.offsetHeight + "px";
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(function () {
            element.style.display = "none";
            element.style.removeProperty("height");
            element.style.removeProperty("padding-top");
            element.style.removeProperty("padding-bottom");
            element.style.removeProperty("margin-top");
            element.style.removeProperty("margin-bottom");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
            resolve(false);
        }, duration);
    });
}

function slideDown(element, duration = 500) {
    return new Promise(function (resolve, reject) {
        element.style.removeProperty("display");
        let display = window.getComputedStyle(element).display;

        if (display === "none") display = "block";

        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        element.style.height = height + "px";
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        window.setTimeout(function () {
            element.style.removeProperty("height");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
        }, duration);
    });
}

function slideToggle(element, duration = 500) {
    if (window.getComputedStyle(element).display === "none") {
        return slideDown(element, duration);
    } else {
        return slideUp(element, duration);
    }
}

function normalizedData(data) {
    let allContetnt;

    data.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [key, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [key]: property,
            };
        }, {});

        allContetnt = {
            ...allContetnt,
            [newObj.section]: {
                ...newObj,
            },
        };
    });

    return allContetnt;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].slug === obj.slug) {
            return i;
        }
    }

    return -1;
}
module.exports = {
    slugify,
    getSiblings,
    getClosest,
    createList,
    flatDeep,
    truncateString,
    slideUp,
    slideDown,
    slideToggle,
    normalizedData,
    containsObject,
};
