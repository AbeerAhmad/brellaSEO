import { createGlobalStyle } from "styled-components";

import FuturaStdBook from "./FuturaStd-Book.woff2";

import FuturaCondensed from "./FuturaStd-Condensed.woff2";

import FuturaCondensedBold from "./FuturaStd-CondensedBold.woff2";

import FuturaStdLight from "./FuturaStd-Light.woff";

import FuturaStdHeavy from "./FuturaStd-Heavy.woff2";

import FuturaStdMedium from "./FuturaStd-Medium.woff2";

import FuturaStdCondensedExtraBd from "./FuturaStd-CondensedExtraBd.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'FuturaStd-CondensedBold';
        src: local('FuturaStd-CondensedBold'), url(${FuturaCondensedBold}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'FuturaStd-Condensed';
        src: local('FuturaStd-Condensed'), url(${FuturaCondensed}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'FuturaStd-Book';
        src: local('FuturaStd-Book'), url(${FuturaStdBook}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'FuturaStd-CondensedExtraBd';
        src: local('FuturaStd-CondensedExtraBd'), url(${FuturaStdCondensedExtraBd}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'FuturaStd-Light';
        src: local('FuturaStd-Light'), url(${FuturaStdLight}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'FuturaStd-Heavy';
        src: local('FuturaStd-Heavy'), url(${FuturaStdHeavy}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'FuturaStd-Medium';
        src: local('FuturaStd-Medium'), url(${FuturaStdMedium}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    
    
    body {
        font-family: 'FuturaStd-Book', Futura, Helvetica, Arial, sans-serif;
    }
`;
