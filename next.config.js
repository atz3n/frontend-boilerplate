/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

const dotenv = require("dotenv");
dotenv.config();


/************************************************************************
 *  Config
 ************************************************************************/

const SUB_PAGE = "";
const GETABLE_PAGES = [
    "/",
    "/subpage"
];


/************************************************************************
 *  MAIN
 ************************************************************************/

const isProd = (process.env.NODE_ENV || "production") === "production";
const linkPrefix = isProd ? SUB_PAGE : "";


const IS_DEV = isProd ? false : process.env.RUN_ENV === "prod" ? false : true;


module.exports = withSass(withCss({
    trailingSlash: true,
    exportPathMap() {
        const pages = {};
        GETABLE_PAGES.forEach((page) => {
            pages[page] = { page };
        });
        return pages;
    },
    assetPrefix: linkPrefix,
    env: {
        linkPrefix,

        /* .env */
        IS_DEV,
    },
    generateBuildId: async () => "current"
}));
