(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20],{122:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),l=a(123),o=a(124),c=a(46),i=a(129),s=a(1),u=a(125),m=a.n(u),p=a(135),b=a(136),d=a(127),f=a(128),g=a(99),h=a.n(g);function y({item:e,onItemClick:t,collapsible:a,...l}){const{items:o,href:c,label:i,type:u}=e,[p,b]=Object(n.useState)(e.collapsed),[g,h]=Object(n.useState)(null);e.collapsed!==g&&(h(e.collapsed),b(e.collapsed));const v=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),b(e=>!e)});switch(u){case"category":return o.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":p}),key:i},r.a.createElement("a",Object(s.a)({className:m()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?v:void 0},l),i),r.a.createElement("ul",{className:"menu__list"},o.map(e=>r.a.createElement(y,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(d.a,Object(s.a)({className:"menu__link",to:c},Object(f.a)(c)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),i))}}var v=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:l,hideOnScroll:c=!1}={}}}={},isClient:i}=Object(o.a)(),{logoLink:u,logoLinkProps:f,logoImageUrl:g,logoAlt:v}=Object(b.a)(),{docsSidebars:O,path:E,sidebar:k,sidebarCollapsible:w}=e;if(Object(p.a)(t),!k)return null;const j=O[k];if(!j)throw new Error(`Cannot find the sidebar "${k}" in the sidebar config!`);return w&&j.forEach(e=>function e(t,a){const{items:n,href:r,type:l}=t;switch(l){case"category":{const r=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===a}}(e,E)),r.a.createElement("div",{className:h.a.sidebar},c&&r.a.createElement(d.a,Object(s.a)({tabIndex:"-1",className:h.a.sidebarLogo,to:u},f),null!=g&&r.a.createElement("img",{key:i,src:g,alt:v}),null!=l&&r.a.createElement("strong",null,l)),r.a.createElement("div",{className:m()("menu","menu--responsive",h.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?r.a.createElement("span",{className:m()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},j.map(e=>r.a.createElement(y,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:w})))))},O=a(137),E=a(131),k=a(134),w=a(104),j=a.n(w);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,s=t.routes.find(e=>Object(k.a)(n.pathname,e))||{},{permalinkToSidebar:u,docsSidebars:m,version:p}=a,b=u[s.path],{siteConfig:{themeConfig:d={}}={},isClient:f}=Object(o.a)(),{sidebarCollapsible:g=!0}=d;return 0===Object.keys(s).length?r.a.createElement(E.default,e):r.a.createElement(i.a,{version:p,key:f},r.a.createElement("div",{className:j.a.docPage},b&&r.a.createElement("div",{className:j.a.docSidebarContainer},r.a.createElement(v,{docsSidebars:m,path:s.path,sidebar:b,sidebarCollapsible:g})),r.a.createElement("main",{className:j.a.docMainContainer},r.a.createElement(l.a,{components:O.a},Object(c.a)(t.routes)))))}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||l;return a?r.a.createElement(d,c({ref:t},s,{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(129);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);