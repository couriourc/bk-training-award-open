(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{271:function(a,t,n){"use strict";n.r(t);var e=n(272);var r=n.n(e);for(var i in e)if(i!=="default")(function(a){n.d(t,a,function(){return e[a]})})(i);t["default"]=r.a},272:function(a,t,n){"use strict";var e=n(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(n(3));var i=n(7);var l=n(209);var d=n(18);var o={name:"applicable-award",data:function a(){return{applicationableAwardRemoteList:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{applicationableAwardList:function a(t){var n;return(n=t.applicationableAwardRemoteList)===null||n===void 0?void 0:n.map(function(a){return{id:a["id"],award_name:a["award_name"],award_description:a["award_description"],award_department_fullname:a["award_department_fullname"],award_department_id:a["award_department_id"],award_reviewers:a["award_reviewers"],award_consultant:a["award_consultant"],award_consultant_displayname:a["award_consultant_displayname"],award_demand:a["award_demand"],start_time:(0,d.formatDate)(a["start_time"]),end_time:(0,d.formatDate)(a["end_time"]),approval_state:a["approval_state"]}})}},created:function a(){this.handleInit()},methods:{toApply:function a(t){var n;this.$router.push({name:i.DETAIL_ROUTE_PATH,query:(n={},(0,r.default)(n,i.DETAIL_TYPE_KEYNAME,i.DETAIL_APPLY),(0,r.default)(n,"award_id",t["id"]),n)})},handleInit:function a(){this.handleGetPageData()},handleGetPageData:function a(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading){return}this.loading=true;return(0,l.getAvailableAwards)({page:n,size:e,award_status:i.ING_AWARD}).then(function(a){var n=a.data;t.pagination.count=n===null||n===void 0?void 0:n.count;t.applicationableAwardRemoteList=n===null||n===void 0?void 0:n.results}).finally(function(a){t.loading=false})}}};t.default=o},350:function(a,t,n){"use strict";n.r(t);var e=n(396);var r=n(271);for(var i in r)if(i!=="default")(function(a){n.d(t,a,function(){return r[a]})})(i);var l=n(17);var d=Object(l["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=d.exports},396:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.applicationableAwardList,pagination:a.pagination,loading:a.loading},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{label:"序列",width:"60",type:"index"}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"}}),a._v(" "),n("bk-table-column",{attrs:{label:"所属小组"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t["row"]["award_department_fullname"]}},[a._v("\n                "+a._s(t.row["award_department_fullname"])+"\n            ")])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"截止申请时间",width:200},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t["row"]["end_time"]}},[a._v("\n                "+a._s(t["row"]["end_time"])+"\n            ")])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{attrs:{text:true},on:{click:function(n){a.toApply(t.row)}}},[a._v("\n                立即申请\n            ")])]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);