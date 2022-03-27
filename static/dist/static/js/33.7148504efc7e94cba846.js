(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{290:function(a,t,e){"use strict";e.r(t);var n=e(291);var r=e.n(n);for(var i in n)if(i!=="default")(function(a){e.d(t,a,function(){return n[a]})})(i);t["default"]=r.a},291:function(a,t,e){"use strict";var n=e(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=n(e(3));var i=e(208);var o=e(7);var l=e(210);var d=e(14);var u=e(209);var p=e(211);var s=n(e(212));function c(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,n)}return e}function _(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach(function(t){(0,r.default)(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var v={name:"ended-review",components:{AwardTitle:s.default,ApprovalStateTag:function a(){return e.e(0).then(e.bind(null,299))},SliderLayout:function a(){return e.e(1).then(e.bind(null,320))}},mixins:[i.tableMixins],data:function a(){return{endedReviewRemoteData:[],awardApplicationDetailRemoteData:[],awardApplicationDetailPagination:_({},i.paginationTemplate),curAwardInfo:{}}},computed:{endedReviewData:function a(t){var e,n;return(e=(n=t.endedReviewRemoteData)===null||n===void 0?void 0:n.map(function(a,t){var e,n;var r=(e=(n=a["award_reviewers"])===null||n===void 0?void 0:n.map(function(a,t){var e;return{uuid:p.uuid.get(),description:(e="第"+(t+1)+"轮:"+a.join(","))!==null&&e!==void 0?e:""}}))!==null&&e!==void 0?e:[];return{award_id:a["id"],award_name:a["award_name"],award_description:a["award_description"],award_department_fullname:a["award_department_fullname"],award_department_id:a["award_department_id"],award_reviewers:a["award_reviewers"],award_reviewers_for_display:r,award_consultant:a["award_consultant"],award_consultant_displayname:a["award_consultant_displayname"],award_consultant_displayname_for_display:(0,d.formatUsernameAndDisplayName)(a["award_consultant"],a["award_consultant_displayname"]),award_demand:a["award_demand"],start_time:(0,d.formatDate)(a["start_time"]),end_time:(0,d.formatDate)(a["end_time"]),approval_state:a["approval_state"],approval_state_en:o.APPLY_APPROVAL_STATE_EN_MAP[a["approval_state"]],approval_state_cn:o.APPLY_APPROVAL_STATE_MAP[a["approval_state"]]}}))!==null&&e!==void 0?e:[]},awardApplicationDetailData:function a(t){var e,n;return(e=(n=t.awardApplicationDetailRemoteData)===null||n===void 0?void 0:n.map(function(a){var t,e,n,r;var i=(t=(e=a["application_users"])===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:{};var l=a["award_info"];var u=(n=(r=l["award_reviewers"])===null||r===void 0?void 0:r.map(function(a,t){var e;return{uuid:p.uuid.get(),description:(e="第"+(t+1)+"轮:"+a.join(","))!==null&&e!==void 0?e:""}}))!==null&&n!==void 0?n:[];return{application_id:a["id"],award_id:a["award_id"],award_department_id:a["award_department_id"],approval_turn:a["approval_turn"],approval_text:a["approval_text"]||"暂无评语",approval_state:a["approval_state"],award_reviewers_for_display:u,approval_state_en:o.APPLY_APPROVAL_STATE_EN_MAP[a["approval_state"]],approval_state_cn:o.APPLY_APPROVAL_STATE_MAP[a["approval_state"]],application_time:(0,d.formatDate)(a["application_time"]),application_users:a["application_users"],application_user_for_display:(0,d.formatUsernameAndDisplayName)(i["username"],i["display_name"])}}))!==null&&e!==void 0?e:[]}},created:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetEndedAwardAwards()])},handleGetEndedAwardAwards:function a(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var r={page:e,size:n,award_status:o.ENDED_REVIEW,group_id:this.$bus.curGlobalGroupId};return(0,l.getAwards)(r).then(function(a){var e,n;var r=a.data;t.pagination.count=(e=r===null||r===void 0?void 0:r.count)!==null&&e!==void 0?e:0;t.endedReviewRemoteData=(n=r===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:[]}).finally(function(a){t.loading=false})},handleGetAwardApplications:function a(t){var e=this;var n=t["award_id"];this.curAwardInfo=t;if(this.loading)return;this.loading=true;(0,u.getAwardApplication)({id:n}).then(function(a){var t,n;var r=a.data;e.awardApplicationDetailPagination.count=(t=r.count)!==null&&t!==void 0?t:0;e.awardApplicationDetailRemoteData=(n=r.results)!==null&&n!==void 0?n:[];return Promise.resolve()}).then(function(a){e.toShowAwardApplicationInfo()}).finally(function(a){e.loading=false})},toShowAwardApplicationInfo:function a(){this.$refs["application-detail"].show()}}};t.default=v},365:function(a,t,e){"use strict";e.r(t);var n=e(408);var r=e(290);for(var i in r)if(i!=="default")(function(a){e.d(t,a,function(){return r[a]})})(i);var o=e(18);var l=Object(o["a"])(r["default"],n["a"],n["b"],false,null,null,null);t["default"]=l.exports},408:function(a,t,e){"use strict";var n=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("div",[e("self-table",{attrs:{data:a.endedReviewData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[e("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("award-title",{attrs:{award:t.row,title:t.row["award_name"]}},[a._v("\n                    "+a._s(t.row["award_name"])+"\n                ")])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项开始时间",prop:"start_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项截止时间",prop:"end_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项咨询人"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{attrs:{title:t.row["award_consultant_displayname_for_display"]}},[a._v("\n\n                    "+a._s(t.row["award_consultant_displayname_for_display"])+"\n                ")])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"总评审轮次"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-select",{attrs:{value:1,clearable:false}},a._l(t.row["award_reviewers_for_display"],function(a,t){return e("bk-option",{key:a["uuid"],attrs:{name:a["description"],id:t+1,title:a["description"]}})}),1)]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-button",{attrs:{text:true},on:{click:function(e){a.handleGetAwardApplications(t.row)}}},[a._v("\n                    查看申请结果\n                ")])]}}])})],1),a._v(" "),e("slider-layout",{ref:"application-detail",attrs:{"header-title":"奖项人列表",width:800}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("self-table",{attrs:{data:a.awardApplicationDetailData,pagination:a.awardApplicationDetailPagination,loading:a.loading},on:{"update:pagination":function(t){a.awardApplicationDetailPagination=t},"page-change":function(t){a.handleGetAwardApplications(a.curAwardInfo)}}},[e("bk-table-column",{attrs:{label:"序号",type:"index",width:80}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请人"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{attrs:{title:t.row["application_user_for_display"]},domProps:{textContent:a._s(t.row["application_user_for_display"])}})]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"评审轮次",width:300},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-select",{attrs:{value:t.row["approval_turn"]||1,clearable:false}},a._l(t.row["award_reviewers_for_display"],function(a,t){return e("bk-option",{key:a["uuid"],attrs:{name:a["description"],id:t+1,title:a["description"]}})}),1)]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"评审结果",width:90},scopedSlots:a._u([{key:"default",fn:function(a){return[e("approval-state-tag",{attrs:{"approval-state-cn":a.row["approval_state_cn"],"approval-state-en":a.row["approval_state_en"]}})]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"评语"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{attrs:{title:t.row["approval_text"]},domProps:{textContent:a._s(t.row["approval_text"])}})]}}])})],1)],1)])],1)};var r=[];e.d(t,"a",function(){return n});e.d(t,"b",function(){return r})}}]);