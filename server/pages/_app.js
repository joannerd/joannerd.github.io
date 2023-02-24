(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ }),

/***/ 996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "emailjs-com"
var external_emailjs_com_namespaceObject = require("emailjs-com");;
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
// EXTERNAL MODULE: ./lib/gtag.ts
var gtag = __webpack_require__(925);
// EXTERNAL MODULE: ./lib/config.ts
var config = __webpack_require__(328);
// EXTERNAL MODULE: ./styles/App.module.css
var App_module = __webpack_require__(359);
var App_module_default = /*#__PURE__*/__webpack_require__.n(App_module);
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__(501);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar/index.tsx




const routes = [{
  name: 'Profile',
  path: '/'
}, {
  name: 'Resume',
  path: '/resume'
}, {
  name: 'Music',
  path: '/music'
}, {
  name: 'Code',
  path: '/code'
}, {
  name: 'Photo',
  path: '/photo'
}];

const Navbar = () => {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (Navbar_module_default()).nav,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: (Navbar_module_default()).title,
      children: "Joanna Chen"
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (Navbar_module_default()).navLinks,
      children: routes.map(({
        name,
        path
      }) => {
        const isActive = router.pathname === path;
        return /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          onClick: () => router.push(path),
          name: name,
          className: isActive ? (Navbar_module_default()).activeButton : (Navbar_module_default()).button,
          children: name
        }, name);
      })
    })]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: ./components/SocialLinks/SocialLinks.module.css
var SocialLinks_module = __webpack_require__(141);
var SocialLinks_module_default = /*#__PURE__*/__webpack_require__.n(SocialLinks_module);
// EXTERNAL MODULE: ./components/ModalProvider/EmailModal.module.css
var EmailModal_module = __webpack_require__(691);
var EmailModal_module_default = /*#__PURE__*/__webpack_require__.n(EmailModal_module);
;// CONCATENATED MODULE: ./components/ModalProvider/EmailModal.tsx








const EmailModal = ({
  title,
  messageTemplate,
  imageAttachment
}) => {
  const nameRef = (0,external_react_.useRef)();
  const closeRef = (0,external_react_.useRef)();
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)(messageTemplate || '');
  const {
    0: subject,
    1: setSubject
  } = (0,external_react_.useState)('');
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)('');
  const {
    0: shouldSendToSelf,
    1: setShouldSendToSelf
  } = (0,external_react_.useState)(false);
  const {
    0: isEmailSent,
    1: setIsEmailSent
  } = (0,external_react_.useState)(false);
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,external_react_.useState)(false);
  const {
    closeModal
  } = useModal();
  (0,external_react_.useEffect)(() => {
    if (nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }, [nameRef]);
  const halfFields = [{
    type: 'text',
    value: name,
    update: setName,
    placeholder: 'Name',
    label: 'Full Name Required',
    ref: nameRef
  }, {
    type: 'email',
    value: email,
    update: setEmail,
    placeholder: 'Email Address',
    label: 'Email Address Required'
  }];

  const handleCheck = () => {
    setShouldSendToSelf(!shouldSendToSelf);
  };

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleModalKeydown = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.code === 'Tab') {
      const {
        type
      } = e.target;

      if (type && type === 'submit' && closeRef && closeRef.current) {
        closeRef.current.focus();
      }
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = async e => {
    setIsSubmitting(true);
    e.preventDefault();
    const templateParams = {
      name,
      email,
      subject,
      image: imageAttachment ? `<img src="${imageAttachment}" width="300px" />` : '',
      message: message.replace(/\r\n|\r|\n/g, '<br>'),
      from_email: shouldSendToSelf ? email : ''
    };

    try {
      const res = await external_emailjs_com_default().send('gmail', 'default', templateParams, config/* emailUserId */.JL);

      if (res.status !== 200) {
        throw new Error('Unable to send email. Please try again.');
      }

      resetForm();
      setIsEmailSent(true);
      setTimeout(() => {
        closeModal();
        setIsEmailSent(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
  };

  const modalContent = isEmailSent ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    role: "dialog",
    "aria-modal": "true",
    className: (EmailModal_module_default()).success,
    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "fas fa-check-circle"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Your message has been sent."
    })]
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    role: "dialog",
    "aria-modal": "true",
    className: (EmailModal_module_default()).modal,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (EmailModal_module_default()).modalTop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (EmailModal_module_default()).title,
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        ref: closeRef,
        tabIndex: 2,
        type: "button",
        onClick: closeModal,
        className: (EmailModal_module_default()).closeContainer,
        "aria-label": "Close modal",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (EmailModal_module_default()).leftRight
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (EmailModal_module_default()).rightLeft
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (EmailModal_module_default()).form,
      onSubmit: sendEmail,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: imageAttachment ? (EmailModal_module_default()).halfInputs : (EmailModal_module_default()).fullInputs,
        children: halfFields.map(({
          update,
          value,
          label,
          placeholder,
          type,
          ref
        }) => /*#__PURE__*/jsx_runtime_.jsx("input", {
          tabIndex: 2,
          ref: ref,
          required: true,
          "aria-required": true,
          type: type,
          value: value,
          "aria-label": label,
          placeholder: placeholder,
          className: (EmailModal_module_default()).input,
          onChange: e => {
            setError('');
            update(e.target.value);
          }
        }, placeholder))
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        tabIndex: 2,
        type: "text",
        value: subject,
        "aria-label": "Subject",
        placeholder: "Subject (Optional)",
        className: (EmailModal_module_default()).input,
        onChange: e => {
          setError('');
          setSubject(e.target.value);
        }
      }, "Subject"), imageAttachment && /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: imageAttachment,
        className: (EmailModal_module_default()).previewImage,
        alt: "Doodle email preview"
      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
        tabIndex: 2,
        required: true,
        "aria-required": true,
        value: message,
        "aria-label": "Message",
        placeholder: "Message",
        rows: 6,
        className: (EmailModal_module_default()).textarea,
        onChange: e => {
          setMessage(e.target.value);
        }
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: (EmailModal_module_default()).label,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          tabIndex: 2,
          type: "checkbox",
          checked: shouldSendToSelf,
          onChange: handleCheck,
          className: (EmailModal_module_default()).checkbox
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Send a copy to my email address"
        })]
      }), error && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (EmailModal_module_default()).error,
        children: error
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        tabIndex: 2,
        type: "submit",
        disabled: isSubmitting,
        className: error ? (EmailModal_module_default()).submitWithError : (EmailModal_module_default()).submit,
        children: isSubmitting ? 'Sending...' : 'Send message'
      })]
    })]
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    "aria-hidden": true,
    className: (EmailModal_module_default()).background,
    onClick: handleBackgroundClick,
    onKeyDown: handleModalKeydown,
    children: modalContent
  });
};

EmailModal.defaultProps = {
  title: 'Contact',
  messageTemplate: '',
  imageAttachment: ''
};
/* harmony default export */ var ModalProvider_EmailModal = (EmailModal);
;// CONCATENATED MODULE: ./components/ModalProvider/EmailDrawingModal.tsx




const EmailDrawingModal = () => {
  const {
    imageUrl
  } = useModal();
  const messageTemplate = 'Hi Joanna,\n\nCheck out this cute doodle I made on your site!';
  return /*#__PURE__*/jsx_runtime_.jsx(ModalProvider_EmailModal, {
    title: "Send Doodle",
    imageAttachment: imageUrl,
    messageTemplate: messageTemplate
  });
};

/* harmony default export */ var ModalProvider_EmailDrawingModal = (EmailDrawingModal);
;// CONCATENATED MODULE: ./lib/hooks.ts
/* eslint-disable prettier/prettier */


const useScrollLock = isActive => {
  (0,external_react_.useEffect)(() => {
    const isWindowsOS = navigator && navigator.platform && navigator.platform.toLowerCase().includes('win');

    if (isActive && !isWindowsOS) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isActive]);
};

/* harmony default export */ var hooks = (useScrollLock);
;// CONCATENATED MODULE: ./components/ModalProvider/index.tsx






const ModalContext = /*#__PURE__*/(0,external_react_.createContext)({
  modalType: '',
  imageUrl: '',
  openModal: () => {},
  closeModal: () => {},
  setImageUrl: () => {}
});
const useModal = () => (0,external_react_.useContext)(ModalContext);
const MODAL_TYPES = {
  HIDDEN: 'HIDDEN',
  EMAIL: 'EMAIL',
  EMAIL_DRAWING: 'EMAIL_DRAWING'
};

const ModalProvider = ({
  children
}) => {
  const {
    0: modalType,
    1: setModalType
  } = (0,external_react_.useState)(MODAL_TYPES.HIDDEN);
  const {
    0: imageUrl,
    1: setImageUrl
  } = (0,external_react_.useState)('');

  const openModal = type => setModalType(type);

  const closeModal = () => setModalType(MODAL_TYPES.HIDDEN);

  hooks(modalType !== MODAL_TYPES.HIDDEN);
  const value = (0,external_react_.useMemo)(() => ({
    imageUrl,
    modalType,
    openModal,
    closeModal,
    setImageUrl
  }), [modalType, imageUrl]);

  const renderModal = () => {
    switch (modalType) {
      case MODAL_TYPES.EMAIL:
        return /*#__PURE__*/jsx_runtime_.jsx(ModalProvider_EmailModal, {});

      case MODAL_TYPES.EMAIL_DRAWING:
        return /*#__PURE__*/jsx_runtime_.jsx(ModalProvider_EmailDrawingModal, {});

      default:
        return null;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalContext.Provider, {
    value: value,
    children: [renderModal(), children]
  });
};

/* harmony default export */ var components_ModalProvider = (ModalProvider);
;// CONCATENATED MODULE: ./components/SocialLinks/index.tsx





const COLORS = {
  yellow: '#F0CF65',
  red: '#D7816A',
  blue: '#74B2CE',
  purple: 'rgb(187, 132, 219)',
  grey: 'grey'
};
const links = [{
  href: 'https://github.com/joannerd',
  label: 'GitHub',
  className: 'fab fa-github'
}, {
  href: 'https://www.linkedin.com/in/joannerd/',
  label: 'LinkedIn',
  className: 'fab fa-linkedin'
}];

const SocialLinks = ({
  hasScrolledToBottom
}) => {
  const {
    openModal
  } = useModal();

  const sendEmailGaEvent = () => {
    openModal(MODAL_TYPES.EMAIL);
    gtag/* event */.B({
      action: 'open_contact_form',
      category: 'engagement',
      label: 'Open contact form',
      value: 1
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: hasScrolledToBottom ? (SocialLinks_module_default()).hiddenLinks : (SocialLinks_module_default()).links,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      role: "button",
      tabIndex: -1,
      className: (SocialLinks_module_default()).icon,
      "aria-hidden": true,
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        tabIndex: 0,
        onClick: sendEmailGaEvent,
        role: "button",
        onKeyDown: e => {
          if (e.key === 'Enter') {
            sendEmailGaEvent();
          }
        },
        "aria-label": "Email Joanna",
        className: "fa fa-envelope"
      }, "Email Joanna"), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (SocialLinks_module_default()).tooltip,
        children: "Email"
      })]
    }), links.map(({
      href,
      label,
      className
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      role: "button",
      className: (SocialLinks_module_default()).icon,
      "aria-label": label,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        onClick: () => gtag/* event */.B({
          action: 'open_link',
          category: 'engagement',
          label: `Open ${href}`,
          value: 1
        }),
        "aria-hidden": "false",
        href: href,
        "aria-label": label,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: className
        }), null]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (SocialLinks_module_default()).tooltip,
        children: label
      })]
    }, href))]
  });
};

/* harmony default export */ var components_SocialLinks = (SocialLinks);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(11);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/index.tsx



const Footer = ({
  hasScrolledToBottom
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
  className: hasScrolledToBottom ? (Footer_module_default()).footer : (Footer_module_default()).hiddenFooter,
  children: ["\xA9", ` ${new Date().getFullYear()} Joanna Chen · LA`]
});

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: hasScrolledToBottom,
    1: setHasScrolledToBottom
  } = (0,external_react_.useState)(false);

  const scrollListener = () => {
    const totalHeight = window.innerHeight + window.scrollY;
    const hasScrolled = totalHeight >= document.body.offsetHeight;
    setHasScrolledToBottom(hasScrolled);
  };

  const updateGa = url => (0,gtag/* pageview */.L)(url);

  (0,external_react_.useEffect)(() => {
    (0,external_emailjs_com_namespaceObject.init)(config/* emailUserId */.JL);
    window.addEventListener('scroll', scrollListener);
    router_default().events.on('routeChangeComplete', updateGa);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      router_default().events.off('routeChangeComplete', updateGa);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(components_ModalProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (App_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_SocialLinks, {
          hasScrolledToBottom: hasScrolledToBottom
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {
        hasScrolledToBottom: hasScrolledToBottom
      })]
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 11:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__31YtZ",
	"hiddenFooter": "Footer_hiddenFooter__1t57_"
};


/***/ }),

/***/ 691:
/***/ (function(module) {

// Exports
module.exports = {
	"background": "EmailModal_background__z4NH3",
	"modal": "EmailModal_modal__22-v4",
	"modalTop": "EmailModal_modalTop__2B23A",
	"form": "EmailModal_form__1H1gj",
	"title": "EmailModal_title__1GGvg",
	"success": "EmailModal_success__29S2E",
	"input": "EmailModal_input__3IbRx",
	"halfInputs": "EmailModal_halfInputs__vgbXA",
	"fullInputs": "EmailModal_fullInputs__2cjl-",
	"textarea": "EmailModal_textarea__1Ka9K",
	"previewImage": "EmailModal_previewImage__1Uhy5",
	"label": "EmailModal_label__2VHJM",
	"checkbox": "EmailModal_checkbox__1u8Jl",
	"submit": "EmailModal_submit__3KxKT",
	"submitWithError": "EmailModal_submitWithError__2-9zg",
	"error": "EmailModal_error__2f0xU",
	"closeContainer": "EmailModal_closeContainer__OFNsR",
	"leftRight": "EmailModal_leftRight__1vAoV",
	"rightLeft": "EmailModal_rightLeft__15Qgm"
};


/***/ }),

/***/ 501:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "Navbar_nav__HjNQA",
	"navLinks": "Navbar_navLinks__27RAo",
	"button": "Navbar_button__3vQ9i",
	"activeButton": "Navbar_activeButton__3QUcb",
	"title": "Navbar_title__3rFev"
};


/***/ }),

/***/ 141:
/***/ (function(module) {

// Exports
module.exports = {
	"links": "SocialLinks_links__1kpHR",
	"hiddenLinks": "SocialLinks_hiddenLinks__38F-8",
	"icon": "SocialLinks_icon__3Bt7O",
	"tooltip": "SocialLinks_tooltip__3B1Pt",
	"color": "SocialLinks_color__2Bp-N"
};


/***/ }),

/***/ 359:
/***/ (function(module) {

// Exports
module.exports = {
	"background": "App_background__1087Y",
	"container": "App_container__TYg8j"
};


/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(996));
module.exports = __webpack_exports__;

})();