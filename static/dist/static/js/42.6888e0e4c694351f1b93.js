(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{301:function(t,n,a){"use strict";a.r(n);var e=a(302);var r=a.n(e);for(var o in e)if(o!=="default")(function(t){a.d(n,t,function(){return e[t]})})(o);n["default"]=r.a},302:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var e=a(209);var r=a(210);var o={name:"award-ended-approval",mixins:[r.tableMixins],data:function t(){return{endedApprovalRemoteData:[{}]}},computed:{endedApprovalData:function t(n){return n.endedApprovalRemoteData}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){Promise.all([this.handleGetPendingApproval()])},handleGetPendingApproval:function t(){var n=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var o={page:a,size:r,group_id:this.$bus.curGlobalGroupId,approval_status:2};return(0,e.getAwardApproval)(o).then(function(t){var a=t.data;n.pagination.count=a.count;n.endedApprovalRemoteData=a.results}).finally(function(t){n.loading=false})},handleGetDetail:function t(){}}};n.default=o},368:function(t,n,a){"use strict";a.r(n);var e=a(414);var r=a(301);for(var o in r)if(o!=="default")(function(t){a.d(n,t,function(){return r[t]})})(o);var l=a(18);var i=Object(l["a"])(r["default"],e["a"],e["b"],false,null,null,null);n["default"]=i.exports},414:function(t,n,a){"use strict";var e=function(){var t=this;var n=t.$createElement;var a=t._self._c||n;return a("self-table",{attrs:{data:t.endedApprovalData,loading:t.loading,pagination:t.pagination},on:{"update:pagination":function(n){t.pagination=n},"page-change":function(n){t.handleInit()}}},[a("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项名称",prop:"ip"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请开始时间",prop:"source"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请截止时间",prop:"status"}}),t._v(" "),a("bk-table-column",{attrs:{label:"奖项顾问",prop:"create_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"评语"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("bk-select",{attrs:{readonly:true}},[a("bk-option",[t._v(t._s(n.row))])],1)]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("bk-button",{attrs:{text:true},on:{click:function(a){t.handleGetDetail(n.row)}}})]}}])})],1)};var r=[];a.d(n,"a",function(){return e});a.d(n,"b",function(){return r})}}]);