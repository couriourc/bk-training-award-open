(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{281:function(a,t,n){"use strict";n.r(t);var e=n(282);var r=n.n(e);for(var i in e)if(i!=="default")(function(a){n.d(t,a,function(){return e[a]})})(i);t["default"]=r.a},282:function(a,t,n){"use strict";var e=n(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(n(3));var i=n(208);var o=n(209);var l=n(7);var d=n(18);var u=n(207);var s=n(210);function p(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),n.push.apply(n,e)}return n}function _(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.default)(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var c={name:"ended-approval",components:{SliderLayout:function a(){return n.e(1).then(n.bind(null,315))}},mixins:[i.tableMixins],data:function a(t){return{ingAwardRemoteData:[],ingAwardApplicationDetailRemoteData:[],curAwardInfo:{},ingAwardApplicationDetailPagination:_({},i.paginationTemplate),isOnlyDetail:false}},computed:{ingAwardData:function a(t){var n,e;return(n=(e=t.ingAwardRemoteData)===null||e===void 0?void 0:e.map(function(a){var t,n;var e=(t=(n=a["award_reviewers"])===null||n===void 0?void 0:n.map(function(a,t){var n;return{uuid:s.uuid.get(),description:(n="第"+(t+1)+"轮:"+a.join(","))!==null&&n!==void 0?n:""}}))!==null&&t!==void 0?t:[];return{award_id:a["id"],award_name:a["award_name"],award_description:a["award_description"],award_department_fullname:a["award_department_fullname"],award_department_id:a["award_department_id"],award_reviewers:a["award_reviewers"],award_reviewers_for_display:e,award_consultant:a["award_consultant"],award_consultant_displayname:a["award_consultant_displayname"],award_consultant_displayname_for_display:(0,d.formatUsernameAndDisplayName)(a["award_consultant"],a["award_consultant_displayname"]),award_demand:a["award_demand"],start_time:(0,d.formatDate)(a["start_time"]),end_time:(0,d.formatDate)(a["end_time"]),approval_state:a["approval_state"],approval_state_en:l.APPLY_APPROVAL_STATE_EN_MAP[a["approval_state"]],approval_state_cn:l.APPLY_APPROVAL_STATE_MAP[a["approval_state"]]}}))!==null&&n!==void 0?n:[]},ingAwardApplicationDetailData:function a(){var t,n;return(t=(n=this.ingAwardApplicationDetailRemoteData)===null||n===void 0?void 0:n.map(function(a){var t,n,e,r;var i=(t=(n=a["application_users"])===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:{};var o=a["award_info"];var u=(e=(r=o["award_reviewers"])===null||r===void 0?void 0:r.map(function(a,t){var n;return{uuid:s.uuid.get(),description:(n="第"+(t+1)+"轮:"+a.join(","))!==null&&n!==void 0?n:""}}))!==null&&e!==void 0?e:[];return{application_id:a["id"],award_id:a["award_id"],award_department_id:a["award_department_id"],approval_turn:a["approval_turn"],approval_text:a["approval_text"],approval_state:a["approval_state"],award_reviewers_for_display:u,approval_state_en:l.APPLY_APPROVAL_STATE_EN_MAP[a["approval_state"]],approval_state_cn:l.APPLY_APPROVAL_STATE_MAP[a["approval_state"]],application_time:(0,d.formatDate)(a["application_time"]),application_users:a["application_users"],application_reason:a["application_reason"],application_user_for_display:(0,d.formatUsernameAndDisplayName)(i["username"],i["display_name"])}}))!==null&&t!==void 0?t:[]}},created:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetIngAwardAwards()])},handleGetIngAwardAwards:function a(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading)return;this.loading=true;var r={page:n,size:e,award_status:l.ING_AWARD,group_id:this.$bus.curGlobalGroupId};return(0,o.getAwards)(r).then(function(a){var n,e;var r=a.data;t.pagination.count=(n=r.count)!==null&&n!==void 0?n:0;t.ingAwardRemoteData=(e=r.data)!==null&&e!==void 0?e:[]}).finally(function(a){t.loading=false})},handleToGetDetail:function a(t){var n;this.$router.push({name:l.AWARD_FORM_ROUTE_PATH,query:(n={},(0,r.default)(n,l.AWARD_TYPE_ROUTE_KEY,l.AWARD_TYPE_DETAIL),(0,r.default)(n,"award_id",t["award_id"]),n)})},toGetAwardApplicationDetail:function a(t,n){var e=this;this.curAwardInfo=t;var r=t["award_id"];this.isOnlyDetail=n;return(0,u.getAwardApplication)({id:r}).then(function(a){var t,n;var r=a.data;e.ingAwardApplicationDetailPagination.count=(t=r.count)!==null&&t!==void 0?t:0;e.ingAwardApplicationDetailRemoteData=(n=r.results)!==null&&n!==void 0?n:[];return Promise.resolve()}).then(function(a){return e.toShowAwardApplicationInfo()})},toShowAwardApplicationInfo:function a(){this.$refs["application-detail"].show()},handleToCheckAward:function a(t){var n;this.$router.push({name:l.AWARD_FORM_ROUTE_PATH,query:(n={},(0,r.default)(n,l.AWARD_TYPE_ROUTE_KEY,l.AWARD_TYPE_DETAIL),(0,r.default)(n,"award_id",t["award_id"]),n)})}}};t.default=c},357:function(a,t,n){"use strict";n.r(t);var e=n(401);var r=n(281);for(var i in r)if(i!=="default")(function(a){n.d(t,a,function(){return r[a]})})(i);var o=n(17);var l=Object(o["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=l.exports},401:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("div",[n("self-table",{attrs:{data:a.ingAwardData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:60}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项名称"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["award_name"]},domProps:{textContent:a._s(t.row["award_name"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"申请开始时间"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["start_time"]},domProps:{textContent:a._s(t.row["start_time"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"申请截止时间"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["end_time"]},domProps:{textContent:a._s(t.row["end_time"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"评审轮次",width:300},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-select",{attrs:{value:t.row["approval_turn"]||1,clearable:false}},a._l(t.row["award_reviewers_for_display"],function(a,t){return n("bk-option",{key:a["uuid"],attrs:{name:a["description"],id:t+1,title:a["description"]}})}),1)]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["award_consultant_displayname_for_display"]}},[a._v(a._s(t.row["award_consultant_displayname_for_display"]))])]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{text:true},on:{click:function(n){a.handleToCheckAward(t.row)}}},[a._v("\n                    奖项详情\n                ")]),a._v(" "),n("bk-button",{staticClass:"mr10 ml10",attrs:{text:true},on:{click:function(n){a.toGetAwardApplicationDetail(t.row,true)}}},[a._v("\n                    申请详情\n                ")])]}}])})],1),a._v(" "),n("slider-layout",{ref:"application-detail",attrs:{"header-title":a.curAwardInfo["award_name"],width:800}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("self-table",{attrs:{data:a.ingAwardApplicationDetailData,pagination:a.ingAwardApplicationDetailPagination,loading:a.loading},on:{"update:pagination":function(t){a.ingAwardApplicationDetailPagination=t},"page-change":function(t){a.toGetAwardApplicationDetail(a.curAwardInfo)}}},[n("bk-table-column",{attrs:{label:"序号",type:"index",width:80}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请人"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["application_user_for_display"]},domProps:{textContent:a._s(t.row["application_user_for_display"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"申请理由"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["application_reason"]},domProps:{textContent:a._s(t.row["application_reason"]||"暂无评语")}})]}}])})],1)],1)])],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);