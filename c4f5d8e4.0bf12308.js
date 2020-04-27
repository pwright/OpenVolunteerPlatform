(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(121),c=a(114),i=a(115),o=a.n(i),m=(a(131),a(116)),s=a(117),u=a(107),d=a.n(u);function p({siteConfig:e}){return r.a.createElement("header",{className:o()("hero hero--primary",d.a.heroBanner,d.a.heroGraphback)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3 text--left"},r.a.createElement("div",{className:d.a.heroImage},r.a.createElement("img",{src:"/img/logo.png",alt:"logo"})),r.a.createElement("p",{className:"hero__title"},e.tagline),r.a.createElement("ul",null,r.a.createElement("li",null,"Platform for rapid application developement for volounter management"),r.a.createElement("li",null,"Full control data and deployment"),r.a.createElement("li",null,"Out of the box components for Forms, Maps"),r.a.createElement("li",null,"Keycloak based security and Role based authentication"),r.a.createElement("li",null,"Live updates thanks to GraphQL subscriptions")),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(s.a,{className:o()("button button--primary button--lg button--rounded",d.a.getStarted),to:Object(m.a)("docs/gettingstarted")},"Get Started"))))))}var f=a(108),E=a.n(f),g=[{title:r.a.createElement(r.a.Fragment,null,"Define your model"),imageUrl:"img/input.png",description:r.a.createElement(r.a.Fragment,null)},{title:r.a.createElement(r.a.Fragment,null,"Choose your stack"),imageUrl:"img/config.png",description:r.a.createElement(r.a.Fragment,null)},{title:r.a.createElement(r.a.Fragment,null,"Deploy"),imageUrl:"img/rocket.png",description:r.a.createElement(r.a.Fragment,null)}];function v(e){var t=e.imageUrl,a=e.title,n=e.description,l=Object(m.a)(t);return r.a.createElement("div",{className:"text--center"},l&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:E.a.featureImage,src:l,alt:a})),r.a.createElement("h3",{className:E.a.featureTitle},a),r.a.createElement("p",null,n))}function h(){return r.a.createElement("div",{className:E.a.splitContainer},r.a.createElement("div",{className:o()(E.a.leftSplit,E.a.featureSticky)},r.a.createElement("div",{className:E.a.stickyContent},r.a.createElement("h2",{className:"hero__subtitle"},"Open Volunteer Platform Workflow"),r.a.createElement("p",null,"Open Volunteer Platform lets you build and deploy set of applications to help your organization with all volunteering efforts. Simply define your business model for Volunteers and Recipients and Deploy it to Red Hat Cloud."))),r.a.createElement("div",{className:E.a.rightSplit},r.a.createElement("div",{className:o()(E.a.splitRow,E.a.before)}),g&&g.length&&g.map((function(e,t){return r.a.createElement("div",{className:E.a.splitRow,key:t},r.a.createElement(v,e))})),r.a.createElement("div",{className:o()(E.a.splitRow,E.a.after)})))}a(145),a(160);var b=a(161),N=a.n(b),y=(a(130),a(162)),w=a(109),k=a.n(w);function x(){var e=function(){document.getElementById("underscore").classList.toggle("hidden")};return Object(n.useEffect)((function(){var t=setInterval(e,400);return function(){return clearInterval(t)}})),r.a.createElement("div",{id:"underscore",className:k.a.underscore},"_")}function O(e){var t=e.phrase,a=1,l=!1,c=!1,i=function(){var e=Object(y.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("text").innerHTML=t.substring(0,a),n=l?s:m,e.next=5,u();case 5:o()||n();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){return c||a===t.length+1&&!l||0===a&&l},m=function(){a<t.length+1&&a++},s=function(){a>0&&a--},u=function(){var e=Object(y.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l||a!==t.length+1){e.next=3;break}return e.next=3,d();case 3:if(!l||0!==a){e.next=6;break}return e.next=6,d();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){return l=!l,c=!0,new Promise((function(e){setTimeout((function(){c=!1,e()}),3e3)}))};return Object(n.useEffect)((function(){var e=setInterval(i,120);return function(){return clearInterval(e)}})),r.a.createElement("span",{id:"text"})}function C(){return r.a.createElement("div",null,r.a.createElement("div",{className:k.a.terminalHeader},r.a.createElement("p",null,"Quick start!")),r.a.createElement("div",{className:k.a.terminal},r.a.createElement("span",null,">\xa0\xa0"),r.a.createElement(O,{phrase:"git clone http://github.com/aerogear/OpenVolunteerPlatform"}),r.a.createElement(x,null)))}var F=a(110),j=a.n(F);function I(e){var t,a=e.open,n=e.close;return console.log(a),r.a.createElement("div",{className:o()(j.a.modalWindow,{"hide-modal":!a})},r.a.createElement("div",{className:j.a.modalBackground}),r.a.createElement("a",{href:"#video",className:j.a.close,onClick:n},"close"),r.a.createElement("div",{className:j.a.modalContent},r.a.createElement("div",{className:j.a.youtubeWrapper},r.a.createElement("iframe",((t={className:j.a.youtubeIFrame,frameBorder:"0",width:"560",height:"310",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://www.youtube.com/embed/wmpEiffqxy8?autoplay=1"}).frameBorder="0",t.allowFullScreen=!0,t.align="middle",t)))))}function S(){var e=Object(n.useState)(!1),t=e[0],a=e[1],l=function(e){e.preventDefault(),a(!t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{open:t,close:l}),r.a.createElement("section",{id:"video",className:j.a.videoSection},r.a.createElement("div",{className:"text--center"},r.a.createElement("h2",{className:j.a.subtitle},"Open Volunteer Platform back in 10 minutes"),r.a.createElement("div",{className:j.a.videoComponent},r.a.createElement("a",{href:"#",className:j.a.play,onClick:l},r.a.createElement("img",{src:Object(m.a)("img/play.png"),alt:""}))))))}t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return r.a.createElement(l.a,{title:t.title,description:"Open Volunteer Platform <head />"},r.a.createElement(p,{siteConfig:t}),r.a.createElement(h,null),r.a.createElement(C,null),r.a.createElement(S,null))}}}]);