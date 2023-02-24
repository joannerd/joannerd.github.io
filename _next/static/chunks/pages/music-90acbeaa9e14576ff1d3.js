(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{3484:function(e,t,n){"use strict";var a=n(5893),o=n(9008);t.Z=function(e){var t=e.pageTitle,n="Joanna Chen: Los Angeles based software engineer and percussionist.";return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,a.jsx)("meta",{property:"og:site_name",content:t},"og:site_name"),(0,a.jsx)("meta",{property:"og:image",content:"/images/joanna.jpg"},"og:image"),(0,a.jsx)("meta",{property:"og:description",content:n},"og:description"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar",content:"#ffffff"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{name:"title",content:t}),(0,a.jsx)("meta",{name:"keywords",content:"software engineer development metal pay proton blockchain XPR MTL NFT app academy web frontend fullstack programming ruby typescript javascript c# node rails react redux express .net core percussionist percussion marimba"}),(0,a.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,a.jsx)("link",{rel:"canonical",href:"https://joannerd.github.io/"}),(0,a.jsx)("link",{rel:"icon",href:"favicon.ico",type:"image/x-icon"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"/logo.png"})]})}},3398:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n(7294))&&a.__esModule?a:{default:a},r=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return n||o&&i}},2775:function(e,t,n){"use strict";var a=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(r=n(3244))&&r.__esModule?r:{default:r},c=n(3398),u=n(1165),l=n(6393);function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var m=o.props[l],d=a[l]||new Set;"name"===l&&i||!d.has(m)?(d.add(m),a[l]=d):r=!1}}}return r}}()).reverse().map((function(e,n){var r=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:r})}))}var M=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),a=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=M},3244:function(e,t,n){"use strict";var a=n(3115),o=n(2553),r=n(2012),i=(n(450),n(9807)),s=n(7690),c=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),m=function(e){i(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=m},810:function(e,t,n){"use strict";n.r(t);var a=n(5893),o=n(3484),r=n(6135),i=n.n(r),s=n(9925),c=[{id:"575082645",name:"Mirage pour Marimba by Yasuo Sueyoshi (SoundCloud)",isSoundCloud:!0},{id:"463480023",name:"L.A. Lullaby by Giovanni Allevi",isSoundCloud:!0},{id:"v6C7oUaxNec",name:"She Who Sleeps With A Small Blanket by Kevin Volans"},{id:"x7xrRkymO74",name:"Transformation of Pachelbel's Canon by Nanae Mimura"},{id:"x4ldxK6fcNQ",name:"Lunsqui - Shi"},{id:"0kCnhBc8Fvw",name:"If We Hold On Together from the Land Before Time"}],u=[{year:"2023",events:[{name:"Southern California Marimba: Online International Artist Competition (Staff)",shortName:"SCM: Online IAC",location:"scmarimba.org"}]},{year:"2021",events:[{name:"Southern California Marimba: Online International Artist Competition (Staff)",shortName:"SCM: Online IAC",location:"scmarimba.org"}]},{year:"2020",events:[{name:"Southern California Marimba: Resonating Voices (Staff)",shortName:"SCM: Resonating Voices",location:"scmarimba.org"},{name:"Less Than 10 Music: Golden Summer (Musician)",shortName:"Less Than 10 Music",location:"lessthan10music.com"}]},{year:"2019",events:[{name:"SPLICE Institute (Musician)",location:"Kalamazoo, MI"},{name:"Toronto Creative Music Lab (Musician)",location:"Toronto, ON"},{name:"Southern California Marimba: International Artist Competition (Musician)",shortName:"SCM: IAC",location:"Orange, CA"},{name:"Black House Collective: SoCal Intermedia Workshop (Musician)",shortName:"Black House Collective",location:"Irvine, CA"},{name:"Kendall Square Orchestra: Cambridge Science Festival (Musician)",shortName:"Kendall Square Orchestra",location:"Cambridge, MA"},{name:"XYLOPHONIA Ragtime Marimba Band (Musician)",shortName:"XYLOPHONIA",location:"Nantucket, MA"},{name:"Mary Poppins Production (Musician)",shortName:"Mary Poppins",location:"Hopedale, MA"},{name:"MIT Water Night: Ideas, Not Theories (Musician)",shortName:"MIT Water Night",location:"Cambridge, MA"},{name:"MASARY Studios: WBUR Opening (Musician)",shortName:"MASARY Studios",location:"Boston, MA"}]},{year:"2018",events:[{name:"Zeltsman Marimba Festival: On Tour (Intern)",shortName:"ZMF",location:"Boston, MA"},{name:"Eureka Ensemble: Sheltering Voices (Musician)",shortName:"Eureka Ensemble",location:"Boston, MA"},{name:"C\xd8DA Ensemble (Musician)",location:"Boston, MA"},{name:"Rhythm X FLOW: Ideas, Not Theories (Musician)",shortName:"Rhythm X FLOW",location:"Boston, MA"},{name:"Metropolitan Wind Symphony (Musician)",location:"Lexington, MA"},{name:"More than a Riot: Women's Equality Day (Musician)",shortName:"More than a Riot",location:"Boston, MA"},{name:"nief-norf Summer Festival (Musician)",location:"Knoxville, TN"},{name:"Percussion Ensemble: Bent Knee (Musician)",shortName:"Bent Knee",location:"Boston, MA"}]},{year:"2017",events:[{name:"Amid the Noise with Kadence Arts (Musician)",shortName:"Kadence Arts: Amid the Noise",location:"Boston, MA"},{name:"PASIC: Amid the Noise with So Percussion (Musician)",shortName:"PASIC: Amid the Noise",location:"Indianapolis, IN"},{name:"Eureka Ensemble (Musician)",location:"Boston, MA"},{name:"New England Philharmonic (Musician)",location:"Boston, MA"},{name:"ILLUMINUS: Ideas, Not Theories (Musician)",shortName:"ILLUMINUS",location:"Boston, MA"},{name:"Chosen Vale Percussion Seminar (Musician)",location:"Enfield, NH"},{name:"Blackbird Creative Lab (Intern)",location:"Ojai, CA"},{name:"Inuksuit by John Luther Adams (Musician)",shortName:"Inuksuit",location:"San Francisco, CA"},{name:"Clinic at Paramount High School (Musician)",shortName:"SCM Clinic",location:"Paramount, CA"},{name:"JACCC Kotohajime (Musician)",location:"Los Angeles, CA"}]},{year:"2016",events:[{name:"Adventures of Luxo Jr by Mya Pennington (Musician)",shortName:"Adventures of Luxo Jr",location:"Rochester, NY"},{name:"Inuksuit by John Luther Adams (Musician)",shortName:"Inuksuit",location:"Boston, MA"},{name:"Southern California Marimba Concert Series (Musician)",shortName:"SCM Concert Series",location:"Orange, CA"}]},{year:"2015",events:[{name:"Fringe NYC: Ideas, Not Theories (Musician)",shortName:"Fringe NYC",location:"New York, NY"},{name:"Zeltsman Marimba Festival (Musician)",shortName:"ZMF",location:"New Brunswick, NJ"},{name:"Boston Philharmonic Youth Orchestra (Musician)",shortName:"BPYO",location:"Boston, MA"}]}],l=function(){return(0,a.jsx)("ul",{className:i().events,children:u.map((function(e){var t=e.year,n=e.events;return(0,a.jsxs)("li",{className:i().event,children:[(0,a.jsx)("h3",{className:i().subtitle,children:t}),n.map((function(e){var t=e.name,n=e.location,o=e.shortName;return(0,a.jsxs)("span",{className:i().info,children:[(0,a.jsx)("p",{className:i().eventName,children:t}),(0,a.jsx)("p",{className:i().mobileEventName,children:o||t}),(0,a.jsx)("p",{className:i().location,children:n})]},t)}))]},t)}))})},m=function(){return(0,a.jsx)("ul",{className:i().projects,children:c.map((function(e){var t=e.id,n=e.name,o=e.isSoundCloud;return(0,a.jsx)("iframe",{onClick:function(){return s.B({action:"play_music",category:"engagement",label:"Play ".concat(n),value:1})},className:o?i().soundcloud:i().project,title:n,src:o?"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(t,"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"):"https://www.youtube.com/embed/".concat(t),role:"listitem"},n)}))})};t.default=function(){return(0,a.jsxs)("article",{children:[(0,a.jsx)(o.Z,{pageTitle:"Music | Joanna Chen"}),(0,a.jsx)("h2",{className:i().title,children:"Recordings"}),(0,a.jsx)(m,{}),(0,a.jsx)("h2",{className:i().title,children:"Events"}),(0,a.jsx)(l,{})]})}},8717:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/music",function(){return n(810)}])},6135:function(e){e.exports={projects:"Music_projects__2RTL-",project:"Music_project__3E_e4",soundcloud:"Music_soundcloud__2QzCb",title:"Music_title__1u-J9",subtitle:"Music_subtitle__1qq_5",events:"Music_events__SW4xR",event:"Music_event__1kJDw",info:"Music_info__2Mgu0",mobileEventName:"Music_mobileEventName__3TtYP",location:"Music_location__awXPI",eventName:"Music_eventName__3gHIT"}},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var a=n(4360);e.exports=function(e){if(Array.isArray(e))return a(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var a=n(8164),o=n(7381),r=n(3585),i=n(5725);e.exports=function(e){return a(e)||o(e)||r(e)||i()}}},function(e){e.O(0,[774,888,179],(function(){return t=8717,e(e.s=t);var t}));var t=e.O();_N_E=t}]);