webpackJsonp([1],{NHnr:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("7+uW"),i={render:function(){var s=this.$createElement,a=this._self._c||s;return a("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),a("router-view")],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s._v("Navbar")]),s._v(" "),t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})]),s._v(" "),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",attrs:{href:"#"}},[s._v("Home "),t("span",{staticClass:"sr-only"},[s._v("(current)")])])]),s._v(" "),t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{href:"#"}},[s._v("Features")])]),s._v(" "),t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{href:"#"}},[s._v("Pricing")])])])])])])}]};var l=t("VU/8")({name:"App"},i,!1,function(s){t("n4UT")},null,null).exports,r=t("/ocq"),n={name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){var s=document.getElementById("myChart");new Chart(s,{type:"line",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"my-3"},[t("p",[s._v("Overview")]),s._v(" "),t("div",{staticClass:"d-flex justify-content-between"},[t("div",{staticClass:"col bg-white mr-3"},[t("div",{staticClass:"p-3 text-center"},[t("i",{staticClass:"fas fa-hand-holding-usd"}),s._v(" "),t("span",[s._v("Total Revenue")]),s._v(" "),t("p",{staticClass:"mt-2 mb-0"},[s._v("54,540")])])]),s._v(" "),t("div",{staticClass:"col bg-white mr-3"},[t("div",{staticClass:"p-3 text-center"},[t("i",{staticClass:"fas fa-hand-holding-usd"}),s._v(" "),t("span",[s._v("Total Revenue")]),s._v(" "),t("p",{staticClass:"mt-2 mb-0"},[s._v("54,540")])])]),s._v(" "),t("div",{staticClass:"col bg-white "},[t("div",{staticClass:"p-3 text-center"},[t("i",{staticClass:"fas fa-hand-holding-usd"}),s._v(" "),t("span",[s._v("Total Revenue")]),s._v(" "),t("p",{staticClass:"mt-2 mb-0"},[s._v("54,540")])])])])]),s._v(" "),t("div",{staticClass:"my-3 p-3 bg-white"},[t("p",[s._v("Activity")]),s._v(" "),t("canvas",{attrs:{id:"myChart"}})]),s._v(" "),t("div",{staticClass:"d-flex my-3 justify-content-between"},[t("div",{staticClass:"col  p-3 bg-white mr-3"},[t("p",[s._v("Transaction Website")]),s._v(" "),t("div",{staticClass:"website"},[t("div",{staticClass:"web__img"},[t("i",{staticClass:"fab fa-facebook-square fa-3x"})]),s._v(" "),t("div",{staticClass:"web__url"},[t("span",[s._v("Facebook.com")])]),s._v(" "),t("div",{staticClass:"web__count"},[t("span",[s._v("45,836")])]),s._v(" "),t("div",{staticClass:"web__rate rate-up"},[t("i",{staticClass:"fas fa-arrow-up"}),s._v(" "),t("span",[s._v("20%")])])]),s._v(" "),t("div",{staticClass:"website"},[t("div",{staticClass:"web__img"},[t("i",{staticClass:"fab fa-google fa-3x"})]),s._v(" "),t("div",{staticClass:"web__url"},[t("span",[s._v("Facebook.com")])]),s._v(" "),t("div",{staticClass:"web__count"},[t("span",[s._v("45,836")])]),s._v(" "),t("div",{staticClass:"web__rate rate-up"},[t("i",{staticClass:"fas fa-arrow-up"}),s._v(" "),t("span",[s._v("20%")])])]),s._v(" "),t("div",{staticClass:"website"},[t("div",{staticClass:"web__img"},[t("i",{staticClass:"fab fa-spotify fa-3x"})]),s._v(" "),t("div",{staticClass:"web__url"},[t("span",[s._v("Facebook.com")])]),s._v(" "),t("div",{staticClass:"web__count"},[t("span",[s._v("45,836")])]),s._v(" "),t("div",{staticClass:"web__rate rate-down"},[t("i",{staticClass:"fas fa-arrow-down"}),s._v(" "),t("span",[s._v("20%")])])]),s._v(" "),t("div",{staticClass:"website"},[t("div",{staticClass:"web__img"},[t("i",{staticClass:"fab fa-wordpress fa-3x"})]),s._v(" "),t("div",{staticClass:"web__url"},[t("span",[s._v("Facebook.com")])]),s._v(" "),t("div",{staticClass:"web__count"},[t("span",[s._v("45,836")])]),s._v(" "),t("div",{staticClass:"web__rate rate-down"},[t("i",{staticClass:"fas fa-arrow-down"}),s._v(" "),t("span",[s._v("20%")])])])]),s._v(" "),t("div",{staticClass:"col  p-3 bg-white "},[t("p",[s._v("Lastest Orders")]),s._v(" "),t("div",{staticClass:"order"},[t("div",{staticClass:"order__image"},[t("img",{attrs:{src:"https://picsum.photos/200/300/?random",alt:""}})]),s._v(" "),t("div",{staticClass:"order__message"},[t("div",{staticClass:"title"},[s._v("Vintage T-shirt")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"far fa-clock"}),s._v(" 2018/6/13 13:42")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"fas fa-male"}),s._v(" Belle Willis")])]),s._v(" "),t("div",{staticClass:"order__total"},[t("div",{staticClass:"text"},[s._v("Total")]),s._v(" "),t("div",{staticClass:"number"},[s._v("3,200")])])]),s._v(" "),t("div",{staticClass:"order"},[t("div",{staticClass:"order__image"},[t("img",{attrs:{src:"https://picsum.photos/200/300/?random",alt:""}})]),s._v(" "),t("div",{staticClass:"order__message"},[t("div",{staticClass:"title"},[s._v("Vintage T-shirt")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"far fa-clock"}),s._v(" 2018/6/13 13:42")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"fas fa-male"}),s._v(" Belle Willis")])]),s._v(" "),t("div",{staticClass:"order__total"},[t("div",{staticClass:"text"},[s._v("Total")]),s._v(" "),t("div",{staticClass:"number"},[s._v("3,200")])])]),s._v(" "),t("div",{staticClass:"order"},[t("div",{staticClass:"order__image"},[t("img",{attrs:{src:"https://picsum.photos/200/300/?random",alt:""}})]),s._v(" "),t("div",{staticClass:"order__message"},[t("div",{staticClass:"title"},[s._v("Vintage T-shirt")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"far fa-clock"}),s._v(" 2018/6/13 13:42")]),s._v(" "),t("div",{staticClass:"sub"},[t("i",{staticClass:"fas fa-male"}),s._v(" Belle Willis")])]),s._v(" "),t("div",{staticClass:"order__total"},[t("div",{staticClass:"text"},[s._v("Total")]),s._v(" "),t("div",{staticClass:"number"},[s._v("3,200")])])])])])])])}]};var c=t("VU/8")(n,v,!1,function(s){t("cdJm")},"data-v-acd0c08c",null).exports;e.a.use(r.a);var o=new r.a({routes:[{path:"/",name:"Home",component:c}]});t("WaEV");e.a.config.productionTip=!1,new e.a({el:"#app",router:o,components:{App:l},template:"<App/>"})},cdJm:function(s,a){},n4UT:function(s,a){},uslO:function(s,a,t){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(s){return t(l(s))}function l(s){var a=e[s];if(!(a+1))throw new Error("Cannot find module '"+s+"'.");return a}i.keys=function(){return Object.keys(e)},i.resolve=l,s.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.1036e5c2670f39729ecd.js.map