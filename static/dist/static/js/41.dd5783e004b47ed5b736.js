(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{298:function(t,e,n){"use strict";n.r(e);var a=n(299);var r=n.n(a);for(var l in a)if(l!=="default")(function(t){n.d(e,t,function(){return a[t]})})(l);e["default"]=r.a},299:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var a={name:"award-pending-approval",data:function t(){return{pendingApprovalRemoteData:[{}]}},computed:{pendingApprovalData:function t(e){return e.pendingApprovalRemoteData}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){},handleToGetDetail:function t(){},handleToRefundApplication:function t(){},handleToEditDraft:function t(){}}};e.default=a},355:function(t,e,n){"use strict";n.r(e);var a=n(394);var r=n(298);for(var l in r)if(l!=="default")(function(t){n.d(e,t,function(){return r[t]})})(l);var o=n(7);var u=Object(o["a"])(r["default"],a["a"],a["b"],false,null,null,null);e["default"]=u.exports},394:function(t,e,n){"use strict";var a=function(){var t=this;var e=t.$createElement;var n=t._self._c||e;return n("self-table",{attrs:{data:t.pendingApprovalData}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项名称",prop:"ip"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项开始时间",prop:"source"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项截止时间",prop:"status"}}),t._v(" "),n("bk-table-column",{attrs:{label:"申请人",prop:"create_time"}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人",prop:"create_time"}}),t._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:true},on:{click:function(n){t.handleToGetDetail(e.row)}}},[t._v(" 查看 ")]),t._v(" "),n("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"success",text:true},on:{click:function(n){t.handleToRefundApplication(e.row)}}},[t._v("前往审批")])]}}])})],1)};var r=[];n.d(e,"a",function(){return a});n.d(e,"b",function(){return r})}}]);