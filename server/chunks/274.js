exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);




const Title = ({
  pageTitle
}) => {
  const description = 'Joanna Chen: Los Angeles based software engineer and percussionist.';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: pageTitle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: pageTitle
    }, "og:title"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:site_name",
      content: pageTitle
    }, "og:site_name"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: "/images/joanna.jpg"
    }, "og:image"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:description",
      content: description
    }, "og:description"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "theme-color",
      content: "#ffffff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "apple-mobile-web-app-status-bar",
      content: "#ffffff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "title",
      content: pageTitle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "keywords",
      content: "software engineer development metal pay proton blockchain XPR MTL NFT app academy web frontend fullstack programming ruby typescript javascript c# node rails react redux express .net core percussionist percussion marimba"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "manifest",
      href: "/manifest.json"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "canonical",
      href: "https://joannerd.github.io/"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "icon",
      href: "favicon.ico",
      type: "image/x-icon"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "apple-touch-icon",
      href: "/logo.png"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Title);

/***/ }),

/***/ 328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yv": function() { return /* binding */ isProduction; },
/* harmony export */   "V7": function() { return /* binding */ gaTrackingId; },
/* harmony export */   "JL": function() { return /* binding */ emailUserId; }
/* harmony export */ });
const isProduction = true;
const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';
const emailUserId = process.env.NEXT_PUBLIC_EMAIL_USER_ID || '';

/***/ }),

/***/ 925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ pageview; },
/* harmony export */   "B": function() { return /* binding */ event; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328);
/* eslint-disable no-unused-vars */

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .isProduction */ .yv) {
    window.gtag('config', _config__WEBPACK_IMPORTED_MODULE_0__/* .gaTrackingId */ .V7, {
      page_path: url
    });
  }
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .isProduction */ .yv) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  }
};

/***/ })

};
;