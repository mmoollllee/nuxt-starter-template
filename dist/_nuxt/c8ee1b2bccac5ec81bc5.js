(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{704:function(t,e,n){"use strict";n.r(e);var o=n(150),c=n(0),r=n(149),l=c.a.extend({data:function(){return{contact:r.contact}},methods:{parsePhoneNumberFromString:o.a,openCookiePrefs:function(){this.$store.commit("cookies/openMessage")}},head:function(){return{title:"privacy"}}}),h=n(4),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("section",{staticClass:"card row",attrs:{id:"content"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"col-12 col-l-6"},[n("h4",[t._v("Responsible for this website")]),t._v(" "),n("p",[t._v("\n          The persons responsible for data processing on this website are:\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.contact.company)),n("br"),t._v("\n          "+t._s(t.contact.street)),n("br"),t._v("\n          "+t._s(t.contact.postcode)+" "+t._s(t.contact.city)+"\n        ")]),t._v(" "),n("p",[n("a",{attrs:{href:t.parsePhoneNumberFromString(t.contact.phone,"DE").getURI(),title:t.contact.company+" anrufen","data-icon-left":"k"}},[t._v("\n            "+t._s(t.contact.phone)+" ")]),n("br"),t._v(" "),n("Mailto",{attrs:{mail:t.contact.mail,"data-icon-left":"h"}})],1)]),t._v(" "),n("div",{staticClass:"col-12"},[n("h3",[t._v("Plugins and Tools")]),t._v(" "),n("p",[t._v("\n          The first time you open this web page, a window for Configuration of\n          the local website settings is displayed. You have the option of\n          using cookies and allow or prohibit third party services.\n        ")]),t._v(" "),n("button",{staticClass:"button secondary",attrs:{"data-icon-right":"n"},on:{click:t.openCookiePrefs}},[t._v("\n          Change Configuration\n        ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"container title"},[e("span",{staticClass:"bg-primary"},[this._v("privacy")]),e("br"),this._v(" "),e("span",{staticClass:"bg-white"},[this._v("Kurt Gansloser GmbH")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"col-12"},[e("h2",[this._v("privacy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-l-6"},[e("h3",[this._v("Put all your privacy-stuff here")]),this._v(" "),e("p",[this._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas\n          amet ducimus alias a. Rerum amet totam eos magnam omnis ea inventore\n          sint, necessitatibus molestiae et explicabo quos ex dicta saepe.\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);