(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{625:function(t,e,o){var content=o(629);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("6f44802a",content,!0,{sourceMap:!1})},626:function(t,e,o){var content=o(631);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("9dd8b812",content,!0,{sourceMap:!1})},628:function(t,e,o){"use strict";var n=o(625);o.n(n).a},629:function(t,e,o){(e=o(18)(!1)).push([t.i,".content[data-v-7da958f4]{position:fixed;z-index:100;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;box-shadow:0 0 90px -30px var(--primary-shadow);max-height:95vh;overflow:auto;padding:2rem;transition:transform 1s!important}#overlay[data-v-7da958f4]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:50;background:rgba(0,0,0,.25);cursor:pointer}.icon-times[data-v-7da958f4]{position:-webkit-sticky;position:sticky;top:0;float:right;padding:0 10px 5px;font-size:1.3rem}.icon-times[data-v-7da958f4]:hover{text-decoration:none}.closing[data-v-7da958f4]{pointer-events:none;opacity:0}.closing[data-v-7da958f4],.closing .content[data-v-7da958f4]{transition:transform 1s,opacity 1s!important}",""]),t.exports=e},630:function(t,e,o){"use strict";var n=o(626);o.n(n).a},631:function(t,e,o){(e=o(18)(!1)).push([t.i,"body.modal-active{overflow:hidden}",""]),t.exports=e},632:function(t,e,o){"use strict";o(57);var n=o(0).a.extend({head:function(){return{bodyAttrs:{class:"modal-active"}}},data:function(){return{moving:!1,closing:!1,escPressed:!1}},computed:{toParent:function(){var t=this.$nuxt.$route.path.split("/"),e=""===t[t.length-1]?3:2;return"/"+t[t.length-e]}},mounted:function(){this.focusModal()},methods:{closeModal:function(){this.$nuxt.$router.push(this.toParent)},focusModal:function(){var t=document.getElementById("modal");t&&setTimeout((function(){return t.focus()}),300)}}}),r=(o(628),o(630),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal",class:t.closing?"closing":""},[o("div",{attrs:{id:"overlay"},on:{click:t.closeModal}}),t._v(" "),o("div",{staticClass:"content container",attrs:{id:"modal"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeModal(e)}}},[o("nuxt-link",{staticClass:"icon-times",attrs:{to:t.toParent}}),t._v(" "),t._t("default")],2)])}),[],!1,null,"7da958f4",null);e.a=component.exports},708:function(t,e,o){"use strict";o.r(e);var n=o(632),r=o(148),l={components:{Modal:n.a,ImageSet:r.a},head:function(){return{title:"Lorem & Ipsum"}},scrollToTop:!1,data:function(){return{images:["images/placeholders/beach0.jpg","images/placeholders/beach1.jpg","images/placeholders/beach2.jpg","images/placeholders/boat0.jpg","images/placeholders/boat1.jpg","images/placeholders/canada.jpg","images/placeholders/chile0.jpg","images/placeholders/chile1.jpg"]}}},c=o(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",[n("h3",[t._v("\n    Lorem &\n    "),n("span",{staticClass:"white"},[t._v("Ipsum")])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.images,(function(image){return n("a",{staticClass:"col-6 col-sm-4 col-m-3",attrs:{href:o(230)("./"+image)}},[n("ImageSet",{staticClass:"thumbnail",attrs:{src:image,sizes:"thumbnail"}})],1)})),0),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur,\n    totam, aperiam quae alias, doloribus tempora minima ipsam quia modi\n    laboriosam. Dolores voluptates cupiditate et, facilis voluptatibus numquam\n    omnis fugit!\n  ")]),t._v(" "),n("h4",[t._v("The quick brown fox jumps over something.")]),t._v(" "),n("h5",[t._v("Is there a other placeholder sentence?")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  ")]),t._v(" "),n("h4",[t._v("The quick brown fox jumps over something.")]),t._v(" "),n("h5",[t._v("Is there a other placeholder sentence?")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);