(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{271:function(t,n,a){"use strict";a.r(n);var o=a(272);var e=a.n(o);for(var r in o)if(r!=="default")(function(t){a.d(n,t,function(){return o[t]})})(r);n["default"]=e.a},272:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var o=a(240);var e={name:"group-approval",data:function t(){return{groupApprovalRemoteData:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{groupApprovalData:function t(n){return n.groupApprovalRemoteData}},created:function t(){this.handleInit()},methods:{toApprovalGroupJoin:function t(){},handleInit:function t(){this.handleGetPageData(this.pagination)},handleGetPageData:function t(n){var a=this;var e=n.current,r=n.limit;if(this.loading){return}this.loading=true;return(0,o.getGroupManage)({page:e,size:r}).then(function(t){var n=t.data;a.pagination.count=n===null||n===void 0?void 0:n.count;a.groupApprovalRemoteData=n===null||n===void 0?void 0:n.result}).finally(function(t){a.loading=false})}}};n.default=e},340:function(t,n,a){"use strict";a.r(n);var o=a(382);var e=a(271);for(var r in e)if(r!=="default")(function(t){a.d(n,t,function(){return e[t]})})(r);var i=a(7);var u=Object(i["a"])(e["default"],o["a"],o["b"],false,null,null,null);n["default"]=u.exports},382:function(t,n,a){"use strict";var o=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("self-table",{attrs:{data:t.groupApprovalData,pagination:t.pagination,loading:t.loading},on:{"update:pagination":function(n){t.pagination=n},"page-change":t.handleGetPageData}},[a("bk-table-column",{attrs:{label:"序列",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请人"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("bk-button",{attrs:{text:true},on:{click:function(a){t.toApprovalGroupJoin(n.row)}}},[t._v("\n                通过\n            ")]),t._v(" "),a("bk-button",{attrs:{text:true},on:{click:function(a){t.toApprovalGroupJoin(n.row)}}},[t._v("\n                不通过\n            ")])]}}])})],1)};var e=[];a.d(n,"a",function(){return o});a.d(n,"b",function(){return e})}}]);