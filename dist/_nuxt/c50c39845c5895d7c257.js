(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{571:function(t,o,e){var content=e(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("6f44802a",content,!0,{sourceMap:!1})},572:function(t,o,e){var content=e(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("9dd8b812",content,!0,{sourceMap:!1})},574:function(t,o,e){"use strict";var n=e(571);e.n(n).a},575:function(t,o,e){(o=e(10)(!1)).push([t.i,".content[data-v-7da958f4]{position:fixed;z-index:100;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;box-shadow:0 0 90px -30px var(--primary-shadow);max-height:95vh;overflow:auto;padding:2rem;transition:transform 1s!important}#overlay[data-v-7da958f4]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:50;background:rgba(0,0,0,.25);cursor:pointer}.icon-times[data-v-7da958f4]{position:-webkit-sticky;position:sticky;top:0;float:right;padding:0 10px 5px;font-size:1.3rem}.icon-times[data-v-7da958f4]:hover{text-decoration:none}.closing[data-v-7da958f4]{pointer-events:none;opacity:0}.closing[data-v-7da958f4],.closing .content[data-v-7da958f4]{transition:transform 1s,opacity 1s!important}",""]),t.exports=o},576:function(t,o,e){"use strict";var n=e(572);e.n(n).a},577:function(t,o,e){(o=e(10)(!1)).push([t.i,"body.modal-active{overflow:hidden}",""]),t.exports=o},578:function(t,o,e){"use strict";e(39);var n=e(0).a.extend({head:()=>({bodyAttrs:{class:"modal-active"}}),data:()=>({moving:!1,closing:!1,escPressed:!1}),computed:{toParent(){var t=this.$nuxt.$route.path.split("/"),o=""===t[t.length-1]?3:2;return"/"+t[t.length-o]}},mounted(){this.focusModal()},methods:{closeModal(){this.$nuxt.$router.push(this.toParent)},focusModal(){var t=document.getElementById("modal");t&&setTimeout(()=>t.focus(),300)}}}),r=(e(574),e(576),e(4)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"modal",class:t.closing?"closing":""},[e("div",{attrs:{id:"overlay"},on:{click:t.closeModal}}),t._v(" "),e("div",{staticClass:"content container",attrs:{id:"modal"},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:t.closeModal(o)}}},[e("nuxt-link",{staticClass:"icon-times",attrs:{to:t.toParent}}),t._v(" "),t._t("default")],2)])}),[],!1,null,"7da958f4",null);o.a=component.exports},651:function(t,o,e){"use strict";e.r(o);var n={components:{Modal:e(578).a},head:()=>({title:"Gubergren & Accusam"}),scrollToTop:!1},r=e(4),component=Object(r.a)(n,(function(){var t=this.$createElement,o=this._self._c||t;return o("Modal",[o("h3",[this._v("\n    Gubergren &\n    "),o("span",{staticClass:"white"},[this._v("Accusam")])]),this._v(" "),o("p",[this._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  ")])])}),[],!1,null,null,null);o.default=component.exports}}]);