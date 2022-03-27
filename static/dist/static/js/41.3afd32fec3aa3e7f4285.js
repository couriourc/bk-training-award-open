(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{292:function(a,t,e){"use strict";e.r(t);var n=e(293);var r=e.n(n);for(var i in n)if(i!=="default")(function(a){e.d(t,a,function(){return n[a]})})(i);t["default"]=r.a},293:function(a,t,e){"use strict";var n=e(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(7);var i=e(207);var o=e(289);var l=e(18);var d=n(e(294));var p={name:"ended-approval",components:{ApprovalStateTag:d.default},mixins:[o.applyTableMixins],data:function a(){return{endedApprovalRemoteData:[]}},computed:{endedApprovalData:function a(t){return t.endedApprovalRemoteData.map(function(a){var t,e;var n=(t=a["award_info"])!==null&&t!==void 0?t:{};var i=n["award_reviewers"].map(function(a,t){return{title:"审批流程",icon:t+1,description:a.join(",")}});return{approval_id:a["id"],record_id:a["id"],approval_state:a["approval_state"],approval_state_en:r.APPLY_APPROVAL_STATE_EN_MAP[a["approval_state"]],approval_state_cn:r.APPLY_APPROVAL_STATE_MAP[a["approval_state"]],application_reason:a["application_reason"],application_time:(0,l.formatDate)(a["application_time"]),award_id:a["award_id"],award_name:(e=a["award_info"])===null||e===void 0?void 0:e["award_name"],award_department_id:["award_department_id"],award_department_fullname:n["award_department_fullname"],award_reviewers:n["award_reviewers"],award_reviewers_steps:i,award_consultant:n["award_consultant"],award_description:n["award_description"],award_consultant_displayname:n["award_consultant_displayname"],award_consultant_displayname_for_display:n["award_consultant_displayname_for_display"],award_demand:n["award_demand"],start_time:(0,l.formatDate)(n["start_time"]),end_time:(0,l.formatDate)(n["end_time"])}})}},mounted:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetEndedApproval()])},handleGetEndedApproval:function a(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;var o={page:e,size:n,group_id:this.$bus.curGlobalGroupId,apply_status:r.MYAPPLY_ENDED_APPROVAL};if(this.loading)return;this.loading=true;return(0,i.getRecord)(o).then(function(a){var e=a.data;t.pagination["count"]=e.count;t.endedApprovalRemoteData=e.data}).finally(function(a){t.loading=false})},handleToGetDetail:function a(t){this.$router.push({name:r.DETAIL_ROUTE_PATH,query:{type:"detail",award_id:t["award_id"],record_id:t["record_id"]}})}}};t.default=p},362:function(a,t,e){"use strict";e.r(t);var n=e(405);var r=e(292);for(var i in r)if(i!=="default")(function(a){e.d(t,a,function(){return r[a]})})(i);var o=e(17);var l=Object(o["a"])(r["default"],n["a"],n["b"],false,null,null,null);t["default"]=l.exports},405:function(a,t,e){"use strict";var n=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("self-table",{attrs:{data:a.endedApprovalData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[e("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请开始时间",prop:"start_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请截止时间",prop:"end_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请理由"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.light",value:t.row["application_reason"],expression:"application.row['application_reason']",modifiers:{light:true}}]},[a._v(" "+a._s(t.row["application_reason"]))])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"评审结果"},scopedSlots:a._u([{key:"default",fn:function(a){return[e("approval-state-tag",{attrs:{"approval-state-cn":a.row["approval_state_en"],"approval-state-en":a.row["approval_state_en"]}})]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"评语",width:300},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.light",value:t.row["approval_text"],expression:"endedApprovals.row['approval_text']",modifiers:{light:true}}]},[a._v(a._s(t.row["approval_text"]))])]}}])})],1)};var r=[];e.d(t,"a",function(){return n});e.d(t,"b",function(){return r})}}]);