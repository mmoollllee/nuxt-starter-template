(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{676:function(n,e,t){var content=t(680);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(26).default)("0b67660e",content,!0,{sourceMap:!0})},677:function(n,e,t){var content=t(682);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(26).default)("9dd8b812",content,!0,{sourceMap:!0})},679:function(n,e,t){"use strict";var o=t(676);t.n(o).a},680:function(n,e,t){(e=t(25)(!0)).push([n.i,"[data-v-12ec474e]:root{--body-bg:#e40039;--body-color:#111;--primary-shadow:#000;--primary-dark:#a41636;--primary-light:#e53b62;--primary-gray:#979494;--primary-gray-dark:#7e7a7a;--primary-gray-light:#c9c8c8;--primary-gray-lighter:#e2e2e2;--spacer:1rem}.modal[data-v-12ec474e]{position:fixed;z-index:100;overflow:auto;top:0;left:0;bottom:0;right:0;max-width:100vw;padding:0}.content[data-v-12ec474e]{background:#fff;box-shadow:0 0 90px -30px #000;box-shadow:0 0 90px -30px var(--primary-shadow);padding:2rem;margin-top:-100vh;transition:transform 1s!important;color:#111;color:var(--body-color);position:relative;margin-left:auto;margin-right:auto}@media (min-width:640px){.content[data-v-12ec474e]{margin-top:-95vh;margin-bottom:5vh}}@media (min-width:992px){.content[data-v-12ec474e]{margin-top:-90vh;margin-bottom:10vh}}#overlay[data-v-12ec474e]{position:sticky;top:0;width:100%;height:100%;z-index:0;background:rgba(0,0,0,.25);cursor:pointer}.icon-times[data-v-12ec474e]{position:absolute;top:15px;right:10px;float:right;padding:0 10px 5px;font-size:1.3rem}.icon-times[data-v-12ec474e],.icon-times[data-v-12ec474e]:hover{text-decoration:none}.closing[data-v-12ec474e]{pointer-events:none;opacity:0}.closing[data-v-12ec474e],.closing .content[data-v-12ec474e]{transition:transform 1s,opacity 1s!important}p[data-v-12ec474e]{max-width:100%}","",{version:3,sources:["/Users/mg/dev/Clients/greencore-festival.de/nuxt-app/css/_bootstrap_functions.scss","/Users/mg/dev/Clients/greencore-festival.de/nuxt-app/components/partials/Modal.vue","/Users/mg/dev/Clients/greencore-festival.de/nuxt-app/node_modules/bootstrap/scss/mixins/_breakpoints.scss"],names:[],mappings:"AAuBA,uBACE,iBAAU,CACV,iBAAa,CACb,qBAAiB,CACjB,sBAAe,CACf,uBAAgB,CAChB,sBAAe,CACf,2BAAoB,CACpB,4BAAqB,CACrB,8BAAsB,CAqCtB,aArCuB,CCnBzB,wBACE,cAAe,CACf,WAAY,CACZ,aAAc,CACd,KAAM,CACN,MAAO,CACP,QAAS,CACT,OAAQ,CACR,eAAgB,CAChB,SAAU,CACX,0BAGC,eAAiB,CACjB,8BAAkD,CAAlD,+CAAkD,CAClD,YAAa,CACb,iBAAkB,CAClB,iCAAmC,CACnC,UAAwB,CAAxB,uBAAwB,CACxB,iBAAkB,CAClB,gBAAiB,CACjB,iBAAkB,CAUnB,yBAnBD,0BAYI,gBAAiB,CACjB,iBAAkB,CAMrB,CCgBG,yBDnCJ,0BAgBI,gBAAiB,CACjB,kBAAmB,CAEtB,CAED,0BACE,eAAgB,CAChB,KAAM,CACN,UAAW,CACX,WAAY,CACZ,SAAU,CACV,0BAA+B,CAC/B,cAAe,CAChB,6BAGC,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,WAAY,CACZ,kBAAmB,CACnB,gBACqB,CAPvB,gEAOE,oBAEuB,CACtB,0BAID,mBAAoB,CACpB,SAC+C,CAHjD,6DAGE,4CAGiD,CAChD,mBAID,cAAe",file:"Modal.vue",sourcesContent:["// ---------------------------\n// Sass Options: https://getbootstrap.com/docs/4.0/getting-started/theming/#sass-options\n// ---------------------------\n$enable-rounded: false; // default true\n$enable-responsive-font-sizes: true; // default false\n$enable-caret: false; // default true\n$enable-validation-icons: false; // default true\n$enable-deprecation-messages: false; // default true\n\n// ---------------------------\n// Colors\n// ---------------------------\n$primary: #d11c45;\n$primary-dark: darken($primary, 10%);\n$primary-light: lighten($primary, 10%);\n$primary-gray: #979494;\n$primary-gray-dark: darken($primary-gray, 10%);\n$primary-gray-light: lighten($primary-gray, 20%);\n$primary-gray-lighter: lighten($primary-gray, 30%);\n$primary-shadow: darken($primary, 90%);\n$body-bg: #e40039;\n$body-color: #111;\n\n:root {\n  --body-bg: #{$body-bg};\n  --body-color: #{$body-color};\n  --primary-shadow: #{$primary-shadow};\n  --primary-dark: #{$primary-dark};\n  --primary-light: #{$primary-light};\n  --primary-gray: #{$primary-gray};\n  --primary-gray-dark: #{$primary-gray-dark};\n  --primary-gray-light: #{$primary-gray-light};\n  --primary-gray-lighter: #{$primary-gray-lighter};\n}\n\n// ---------------------------\n// Links\n// ---------------------------\n\n// $link-color: theme-color('primary');\n// $link-decoration: none;\n// $link-hover-color: darken($link-color, 15%);\n// $link-hover-decoration: underline;\n\n// ---------------------------\n// Spacing & Sizes\n// ---------------------------\n$spacer: 1rem; // default 1rem\n// $paragraph-margin-bottom: 1rem;\n\n$grid-breakpoints: (\n  xxs: 0,\n  xs: 480px,\n  s: 576px,\n  sm: 640px,\n  m: 768px,\n  l: 992px,\n  xl: 1150px,\n  xxl: 1300px,\n);\n\n// $container-max-widths: (\n//   sm: 540px,\n//   md: 720px,\n//   lg: 960px,\n//   xl: 1140px\n// );\n\n:root {\n  --spacer: #{$spacer};\n}\n\n// Bootstrap Functional Imports\n@import 'bootstrap/scss/_functions.scss';\n@import 'bootstrap/scss/_variables.scss';\n@import 'bootstrap/scss/_mixins.scss';\n","\n\n\n\n\n\n\n\n\n\n\n@import '~/css/_bootstrap_functions.scss';\n\n.modal {\n  position: fixed;\n  z-index: 100;\n  overflow: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  max-width: 100vw;\n  padding: 0;\n}\n\n.content {\n  background: white;\n  box-shadow: 0 0px 90px -30px var(--primary-shadow);\n  padding: 2rem;\n  margin-top: -100vh;\n  transition: transform 1s !important;\n  color: var(--body-color);\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n\n  @include media-breakpoint-up(sm) {\n    margin-top: -95vh;\n    margin-bottom: 5vh;\n  }\n  @include media-breakpoint-up(l) {\n    margin-top: -90vh;\n    margin-bottom: 10vh;\n  }\n}\n\n#overlay {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  background: rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n\n.icon-times {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  float: right;\n  padding: 0 10px 5px;\n  font-size: 1.3rem;\n  text-decoration: none;\n  &:hover {\n    text-decoration: none;\n  }\n}\n\n.closing {\n  pointer-events: none;\n  opacity: 0;\n  transition: transform 1s, opacity 1s !important;\n\n  .content {\n    transition: transform 1s, opacity 1s !important;\n  }\n}\n\np {\n  max-width: 100%;\n}\n",'// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    ""  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    "-sm"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint\'s minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n']}]),n.exports=e},681:function(n,e,t){"use strict";var o=t(677);t.n(o).a},682:function(n,e,t){(e=t(25)(!0)).push([n.i,"body.modal-active{overflow:hidden}","",{version:3,sources:["/Users/mg/dev/Clients/greencore-festival.de/nuxt-app/components/partials/Modal.vue"],names:[],mappings:"AAqFA,kBACE,eACF",file:"Modal.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbody.modal-active {\n  overflow: hidden;\n}\n"]}]),n.exports=e},683:function(n,e,t){"use strict";t(56);var o=t(0).a.extend({data:function(){return{moving:!1,closing:!1,askBeforeClose:!1}},computed:{toParent:function(){var n=this.$nuxt.$route.path.split("/"),e=""===n[n.length-1]?3:2;return"/"+n[n.length-e]}},mounted:function(){var body=document.querySelector("body");body&&body.classList.add("modal-active")},destroyed:function(){this.removeModalActive()},methods:{removeModalActive:function(){var body=document.querySelector("body");body&&body.classList.remove("modal-active")},closeModal:function(){this.askBeforeClose&&!confirm("Ihre Änderungen gehen verloren wenn Sie diese Seite verlassen.")||(this.removeModalActive(),this.$nuxt.$router.push(this.toParent))},preventClose:function(){this.askBeforeClose=!0}}}),r=(t(679),t(681),t(5)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"modal",class:n.closing?"closing":""},[t("div",{attrs:{id:"overlay"},on:{click:n.closeModal}}),n._v(" "),t("div",{staticClass:"content container",attrs:{id:"modal"},on:{keydown:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:n.closeModal(e)}}},[t("nuxt-link",{staticClass:"icon-times",attrs:{to:n.toParent}}),n._v(" "),n._t("default")],2)])}),[],!1,null,"12ec474e",null);e.a=component.exports},762:function(n,e,t){"use strict";t.r(e);var o={components:{Modal:t(683).a},head:function(){return{title:"Gubergren & Accusam"}},scrollToTop:!1},r=t(5),component=Object(r.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("Modal",[e("h3",[this._v("\n    Gubergren &\n    "),e("span",{staticClass:"white"},[this._v("Accusam")])]),this._v(" "),e("p",[this._v("\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);