(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"9G6C":function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">ng-class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ active: $state.includes(<span class="token punctuation">\'</span>patterns<span class="token punctuation">\'</span>),selected: $state.includes(<span class="token punctuation">\'</span>patterns<span class="token punctuation">\'</span>)}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">ng-class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ in: $state.includes(<span class="token punctuation">\'</span>patterns<span class="token punctuation">\'</span>)} <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">ng-class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ active: $state.includes(<span class="token punctuation">\'</span>patterns.uirouter<span class="token punctuation">\'</span>) }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">ui-sref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>patterns.uirouter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>UI Router<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>'}},YoOe:function(n,a){n.exports={snippet:'$urlRouterProvider<span class="token punctuation">.</span><span class="token function">otherwise</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n$stateProvider<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">"app/views/blank.html"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token string">"patterns"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    abstract<span class="token punctuation">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>\n    url<span class="token punctuation">:</span> <span class="token string">"/patterns"</span><span class="token punctuation">,</span>\n    template<span class="token punctuation">:</span> <span class="token string">"&lt;ui-view autoscroll=\\"true\\"/>"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token string">"patterns.sidenavigation"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"/sidenavigation"</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">"app/sideNavigation/sideNavigation.html"</span><span class="token punctuation">,</span>\n    controller<span class="token punctuation">:</span> <span class="token string">"SideNavigationCtrl as sn"</span><span class="token punctuation">,</span>\n    data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        pageTitle<span class="token punctuation">:</span><span class="token string">"Navigation"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token string">"patterns.uirouter"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"/uirouter"</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">"app/uiRouter/uiRouter.html"</span><span class="token punctuation">,</span>\n    data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        pageTitle<span class="token punctuation">:</span> <span class="token string">"UI Router"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'}},pUTF:function(n,a,t){"use strict";t.r(a);var s=t("CcnG"),l=t("T/2f"),p=t("YZ8U"),e=t("mrSG"),u=t("yHOM"),o=function(n){function a(){return n.call(this,t("yPbm"))||this}return Object(e.__extends)(a,n),Object(e.__decorate)([Object(u.a)("ComponentsUiRouterNg1Component")],a)}(t("AVdU").a),c={category:p.b.resolveCategoryData(p.a.Components,"UI Router")},i=function(){return function(n,a){a.registerResolver(n)}}(),d=t("WmtN"),r=t("CfOV"),k=t("pMnS"),m=t("GBPT"),g=t("rYg0"),f=t("r1ng"),v=t("COk8"),h=t("9hoY"),b=t("+gXg"),y=t("rpQh"),C=t("2RDK"),w=s["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return s["\u0275vid"](2,[(n()(),s["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["UI Router is a routing framework for Angular, which allows organizing parts of the user interface into a state machine."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["The power of UI router lies in its ability to nest views and states."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](6,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["Add "])),(n()(),s["\u0275eld"](8,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["ui-view"])),(n()(),s["\u0275ted"](-1,null,[" directive inside the "])),(n()(),s["\u0275eld"](11,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["body"])),(n()(),s["\u0275ted"](-1,null,[" tag."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](15,0,null,null,1,"uxd-snippet",[],null,null,null,f.b,f.a)),s["\u0275did"](16,114688,null,0,v.a,[],{content:[0,"content"]},null),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](18,0,null,null,10,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["Add "])),(n()(),s["\u0275eld"](20,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["a"])),(n()(),s["\u0275ted"](-1,null,[" tags for navigation. \xa0Adding "])),(n()(),s["\u0275eld"](23,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["ui-sref"])),(n()(),s["\u0275ted"](-1,null,[" directive helps with state transitions and auto-generates\n    the "])),(n()(),s["\u0275eld"](26,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["href"])),(n()(),s["\u0275ted"](-1,null,[" attribute of the element it\u2019s attached to, if the corresponding state has a URL."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](30,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["A navigation entry is highighted when the state is selected and is contained in the "])),(n()(),s["\u0275eld"](32,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["active"])),(n()(),s["\u0275ted"](-1,null,[", "])),(n()(),s["\u0275eld"](35,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["selected"])),(n()(),s["\u0275ted"](-1,null,["    classes."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](39,0,null,null,1,"uxd-snippet",[],null,null,null,f.b,f.a)),s["\u0275did"](40,114688,null,0,v.a,[],{content:[0,"content"]},null),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](42,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["Set up the states with"])),(n()(),s["\u0275eld"](44,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["$stateProvider"])),(n()(),s["\u0275ted"](-1,null,["."])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](48,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s["\u0275ted"](-1,null,["State parameters are discussed below:"])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](51,0,null,null,26,"uxd-api-properties",[],null,null,null,h.b,h.a)),s["\u0275did"](52,49152,null,0,b.a,[],null,null),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](54,0,null,0,2,"tr",[["name","url"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](55,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Defines the path provided in ui-sref.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](58,0,null,0,2,"tr",[["name","templateUrl"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](59,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Configures a state's template, e.g. physical path of the page.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](62,0,null,0,2,"tr",[["name","abstract"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](63,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Indicates that a state can have child states but can't be self activated.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](66,0,null,0,2,"tr",[["name","template"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](67,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Simplest way to set your template.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](70,0,null,0,2,"tr",[["name","data"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](71,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Sets custom data, e.g. pageTitle.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n    "])),(n()(),s["\u0275eld"](74,0,null,0,2,"tr",[["name","controller"],["uxd-api-property",""]],null,null,null,y.b,y.a)),s["\u0275did"](75,49152,null,0,C.a,[],{name:[0,"name"]},null),(n()(),s["\u0275ted"](-1,0,["\n        Assign a controller to the state, e.g. SideNavigationCtrl as sn, pageTitle.\n    "])),(n()(),s["\u0275ted"](-1,0,["\n"])),(n()(),s["\u0275ted"](-1,null,["\n\n"])),(n()(),s["\u0275eld"](79,0,null,null,1,"uxd-snippet",[["language","javascript"]],null,null,null,f.b,f.a)),s["\u0275did"](80,114688,null,0,v.a,[],{language:[0,"language"],content:[1,"content"]},null)],function(n,a){var t=a.component;n(a,16,0,t.snippets.compiled.sample1SnippetHtml),n(a,40,0,t.snippets.compiled.sample2SnippetHtml),n(a,55,0,"url"),n(a,59,0,"templateUrl"),n(a,63,0,"abstract"),n(a,67,0,"template"),n(a,71,0,"data"),n(a,75,0,"controller"),n(a,80,0,"javascript",t.snippets.compiled.sample3SnippetJs)},null)}function x(n){return s["\u0275vid"](0,[(n()(),s["\u0275eld"](0,0,null,null,1,"uxd-components-ui-router-ng1",[],null,null,null,R,w)),s["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var U=s["\u0275ccf"]("uxd-components-ui-router-ng1",o,x,{},{},[]),N=t("x4zH"),O=t("Ip0R"),F=t("M2Lx"),S=t("unTc"),A=t("lLAP"),I=t("gIcY"),T=t("eDkP"),P=t("Fzqc"),_=t("dWZg"),j=t("qina"),z=t("zCE2"),D=t("4c35"),L=t("qAlS"),G=t("ZYCi"),M=t("FLOw"),$=t("XtaT");t.d(a,"ComponentsRouterModuleNgFactory",function(){return Y});var Y=s["\u0275cmf"](i,[],function(n){return s["\u0275mod"]([s["\u0275mpd"](512,s.ComponentFactoryResolver,s["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,r.sb,r.a,k.a,m.a,g.a,U]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["\u0275mpd"](5120,"flotDataService",N.b,["$injector"]),s["\u0275mpd"](5120,"lineDataService",N.c,["$injector"]),s["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[s.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),s["\u0275mpd"](4608,F.c,F.c,[]),s["\u0275mpd"](4608,S.c,S.c,[[2,S.a]]),s["\u0275mpd"](4608,S.Q,S.Q,[]),s["\u0275mpd"](4608,S.ec,S.ec,[A.d,S.c,S.dc,[2,S.a],s.RendererFactory2]),s["\u0275mpd"](4608,S.Ic,S.Ic,[s.RendererFactory2]),s["\u0275mpd"](4608,I.A,I.A,[]),s["\u0275mpd"](4608,T.a,T.a,[T.f,T.b,s.ComponentFactoryResolver,T.e,T.c,s.Injector,s.NgZone,O.DOCUMENT,P.b]),s["\u0275mpd"](5120,T.g,T.h,[T.a]),s["\u0275mpd"](4608,S.uf,S.uf,[]),s["\u0275mpd"](4608,S.Gd,S.Gd,[]),s["\u0275mpd"](1073742336,N.a,N.a,[]),s["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),s["\u0275mpd"](1073742336,_.b,_.b,[]),s["\u0275mpd"](1073742336,F.d,F.d,[]),s["\u0275mpd"](1073742336,A.a,A.a,[]),s["\u0275mpd"](1073742336,S.G,S.G,[]),s["\u0275mpd"](1073742336,S.b,S.b,[]),s["\u0275mpd"](1073742336,S.af,S.af,[]),s["\u0275mpd"](1073742336,j.a,j.a,[]),s["\u0275mpd"](1073742336,z.a,z.a,[]),s["\u0275mpd"](1073742336,S.pb,S.pb,[]),s["\u0275mpd"](1073742336,I.z,I.z,[]),s["\u0275mpd"](1073742336,I.l,I.l,[]),s["\u0275mpd"](1073742336,P.a,P.a,[]),s["\u0275mpd"](1073742336,D.c,D.c,[]),s["\u0275mpd"](1073742336,L.a,L.a,[]),s["\u0275mpd"](1073742336,T.d,T.d,[]),s["\u0275mpd"](1073742336,S.z,S.z,[]),s["\u0275mpd"](1073742336,S.tf,S.tf,[]),s["\u0275mpd"](1073742336,S.Jd,S.Jd,[]),s["\u0275mpd"](1073742336,G.s,G.s,[[2,G.x],[2,G.o]]),s["\u0275mpd"](1073742336,S.fe,S.fe,[]),s["\u0275mpd"](1073742336,M.a,M.a,[]),s["\u0275mpd"](1073742336,S.Fd,S.Fd,[]),s["\u0275mpd"](1073742336,$.a,$.a,[]),s["\u0275mpd"](1073742336,i,i,[s.ComponentFactoryResolver,p.b]),s["\u0275mpd"](1024,G.m,function(){return[[{path:"**",component:l.a,data:c}]]},[])])})},y2P8:function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ui-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>'}},yPbm:function(n,a,t){var s={"./sample1.snippet.html":"y2P8","./sample2.snippet.html":"9G6C","./sample3.snippet.js":"YoOe"};function l(n){var a=p(n);return t(a)}function p(n){var a=s[n];if(!(a+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a}l.keys=function(){return Object.keys(s)},l.resolve=p,n.exports=l,l.id="yPbm"}}]);