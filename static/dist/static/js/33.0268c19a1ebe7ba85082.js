(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{212:function(a,t,e){"use strict";var n=e(1);Object.defineProperty(t,"__esModule",{value:true});t.deleteRecord=_;t.getAvailableAwards=s;t.getAwardById=f;t.getAwards=l;t.postAwards=u;t.postFinishAward=w;t.postRecord=c;t.putAward=p;var r=n(e(4));var d=n(e(3));function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,n)}return e}function o(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach(function(t){(0,r.default)(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function u(a){return d.default.post("awards/",a)}function l(a){var t=a.page,e=a.size,n=a.group_id,r=a.award_status;return d.default.get("awards/",{params:{page:t,size:e,group_id:n,award_status:r}})}function s(a){var t=a.page,e=a.size,n=a.award_status,r=a.group_id;return d.default.get("get_available_awards/",{params:{page:t,size:e,award_status:n,group_id:r}})}function c(a,t){return d.default.post("record/",o({is_draft:a},t))}function _(a){console.log(a);return d.default.delete("record/",{data:{id:a}})}function p(a,t){var e=t.award_name,n=t.award_level,r=t.award_description,i=t.award_consultant,o=t.award_image,u=t.award_department_fullname,l=t.award_reviewers,s=t.start_time,c=t.end_time,_=t.award_department_id,p=t.award_consultant_displayname,f=t.award_demand;return d.default.put("awards/",{award_id:a,award_name:e,award_level:n,award_description:r,award_consultant:i,award_image:o,award_department_fullname:u,award_reviewers:l,start_time:s,end_time:c,award_department_id:_,award_consultant_displayname:p,award_demand:f})}function f(a){return d.default.get("/awards/".concat(a,"/"))}function w(a){return d.default.post("/finish_award/".concat(a,"/"))}},278:function(a,t,e){"use strict";e.r(t);var n=e(279);var r=e.n(n);for(var d in n)if(d!=="default")(function(a){e.d(t,a,function(){return n[a]})})(d);t["default"]=r.a},279:function(a,t,e){"use strict";var n=e(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=n(e(4));var d=e(8);var i=e(212);var o=n(e(0));var u={name:"applicable-award",data:function a(){return{applicationableAwardRemoteList:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{applicationableAwardList:function a(t){var e;return(e=t.applicationableAwardRemoteList)===null||e===void 0?void 0:e.map(function(a){return{id:a["id"],award_name:a["award_name"],award_description:a["award_description"],award_department_fullname:a["award_department_fullname"],award_department_id:a["award_department_id"],award_reviewers:a["award_reviewers"],award_consultant:a["award_consultant"],award_consultant_displayname:a["award_consultant_displayname"],award_demand:a["award_demand"],start_time:a["start_time"],end_time:(0,o.default)(a["end_time"]).format("YYYY-MM-DD hh:mm"),approval_state:a["approval_state"]}})}},created:function a(){this.handleInit()},methods:{toApply:function a(t){var e;this.$router.push({name:d.DETAIL_ROUTE_PATH,query:(e={},(0,r.default)(e,d.DETAIL_TYPE_KEYNAME,d.DETAIL_APPLY),(0,r.default)(e,"award_id",t["id"]),e)})},handleInit:function a(){this.handleGetPageData()},handleGetPageData:function a(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading){return}this.loading=true;return(0,i.getAvailableAwards)({page:e,size:n,award_status:d.ING_AWARD}).then(function(a){var e=a.data;t.pagination.count=e===null||e===void 0?void 0:e.count;t.applicationableAwardRemoteList=e===null||e===void 0?void 0:e.results}).finally(function(a){t.loading=false})}}};t.default=u},348:function(a,t,e){"use strict";e.r(t);var n=e(392);var r=e(278);for(var d in r)if(d!=="default")(function(a){e.d(t,a,function(){return r[a]})})(d);var i=e(7);var o=Object(i["a"])(r["default"],n["a"],n["b"],false,null,null,null);t["default"]=o.exports},392:function(a,t,e){"use strict";var n=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("self-table",{attrs:{data:a.applicationableAwardList,pagination:a.pagination,loading:a.loading,height:300},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[e("bk-table-column",{attrs:{label:"序列",width:"60",type:"index"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"}}),a._v(" "),e("bk-table-column",{attrs:{label:"所属小组"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{attrs:{title:t["row"]["award_department_fullname"]}},[a._v("\n                "+a._s(t.row["award_department_fullname"])+"\n            ")])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"截止申请时间",width:200},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{attrs:{title:t["row"]["end_time"]}},[a._v("\n                "+a._s(t["row"]["end_time"])+"\n            ")])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-button",{attrs:{text:true},on:{click:function(e){a.toApply(t.row)}}},[a._v("\n                立即申请\n            ")])]}}])})],1)};var r=[];e.d(t,"a",function(){return n});e.d(t,"b",function(){return r})}}]);