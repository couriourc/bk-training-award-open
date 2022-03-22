(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{212:function(a,t,e){"use strict";var r=e(1);Object.defineProperty(t,"__esModule",{value:true});t.deleteAward=f;t.deleteRecord=_;t.getAppliedAwards=s;t.getAvailableAwards=u;t.getAwardById=w;t.getAwards=p;t.postAwards=l;t.postRecord=c;t.putAward=v;var n=r(e(4));var i=r(e(3));function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,r)}return e}function d(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach(function(t){(0,n.default)(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function l(a){return i.default.post("awards/",a)}function p(a){var t=a.page,e=a.size;return i.default.get("awards/",{params:{page:t,size:e}})}function u(a){var t=a.page,e=a.size,r=a.award_status,n=a.group_id;return i.default.get("get_available_awards/",{params:{page:t,size:e,award_status:r,group_id:n}})}function s(a,t){return i.default.get("get_applyed_awards/",{params:{page:a,size:t}})}function c(a,t){return i.default.post("record/",d({is_draft:a},t))}function _(a){console.log(a);return i.default.delete("record/",{data:{id:a}})}function f(a){var t=a.awardId;return i.default.delete("awards/",{data:{award_id:t}})}function v(a,t){var e=t.award_name,r=t.award_level,n=t.award_description,o=t.award_consultant,d=t.award_image,l=t.award_department_fullname,p=t.award_reviewers,u=t.start_time,s=t.end_time;return i.default.put("awards/",{award_id:a,award_name:e,award_level:r,award_description:n,award_consultant:o,award_image:d,award_department_fullname:l,award_reviewers:p,start_time:u,end_time:s})}function w(a){return i.default.get("/awards/".concat(a,"/"))}},214:function(a,t,e){"use strict";var r=e(1);Object.defineProperty(t,"__esModule",{value:true});t.getApplicationById=l;t.getAwardApproval=i;t.getRecord=o;t.postApproval=d;var n=r(e(3));function i(a){var t=a.page,e=a.size,r=a.group_id,i=a.approval_status;return n.default.get("/approval/",{params:{page:t,size:e,group_id:r,approval_status:i}})}function o(a){var t=a.page,e=a.size,r=a.group_id,i=a.apply_status;return n.default.get("record/",{params:{page:t,size:e,group_id:r,apply_status:i}})}function d(a){var t=a.id,e=a.action,r=a.approval_text;return n.default.post("/approval/",{id:t,action:e,approval_text:r})}function l(a){return n.default.get("/application/".concat(a,"/"))}},222:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.applyTableMixins=void 0;var r={data:function a(){return{pagination:{current:1,count:0,limit:10},loading:false}},mounted:function a(){this.handleInit()},methods:{}};t.applyTableMixins=r},294:function(a,t,e){"use strict";e.r(t);var r=e(295);var n=e.n(r);for(var i in r)if(i!=="default")(function(a){e.d(t,a,function(){return r[a]})})(i);t["default"]=n.a},295:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(8);var n=e(214);var i=e(222);var o=e(155);var d=e(212);var l={name:"pending-approval",mixins:[i.applyTableMixins],data:function a(){return{pendingApprovalRemoteData:[],APPLY_STATE:Object.freeze(r.APPLY_STATE)}},computed:{pendingApprovalData:function a(t){return t.pendingApprovalRemoteData.map(function(a){var t,e;var r=(t=a["award_info"])!==null&&t!==void 0?t:{};var n=r["award_reviewers"].map(function(a,t){return{title:"审批流程",icon:t+1,description:a.join(",")}});return{approval_id:a["id"],record_id:a["id"],approval_state:a["approval_state"],application_reason:a["application_reason"],application_time:(0,o.formatDate)(a["application_time"]),award_id:a["award_id"],award_name:(e=a["award_info"])===null||e===void 0?void 0:e["award_name"],award_department_id:["award_department_id"],award_department_fullname:r["award_department_fullname"],award_reviewers:r["award_reviewers"],award_reviewers_steps:n,award_consultant:r["award_consultant"],award_description:r["award_description"],award_consultant_displayname:r["award_consultant_displayname"],award_consultant_displayname_for_display:r["award_consultant_displayname_for_display"],award_demand:r["award_demand"],start_time:(0,o.formatDate)(r["start_time"]),end_time:(0,o.formatDate)(r["end_time"])}})}},mounted:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetPendingApproval()])},handleGetPendingApproval:function a(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;var o={page:e,size:i,group_id:this.$bus.curGlobalGroupId,apply_status:r.PENDING_APPROVAL};if(this.loading)return;this.loading=true;return(0,n.getRecord)(o).then(function(a){console.log(a);var e=a.data;t.pagination["count"]=e.count;t.pendingApprovalRemoteData=e.data}).finally(function(a){t.loading=false})},handleToRefundApplication:function a(t){var e=this;return(0,d.deleteRecord)(t).then(function(a){e.messageWarn("撤回成功");e.handleInit()})},handleToEditDraft:function a(t){if(!t["award_id"]){return}this.$router.push({name:r.DETAIL_ROUTE_PATH,query:{type:"edit",award_id:t["award_id"],record_id:t["record_id"]}})},handleToGetDetail:function a(t){this.$router.push({name:r.DETAIL_ROUTE_PATH,query:{type:"apply_detail",award_id:t["award_id"],record_id:t["record_id"]}})},handleGetDetail:function a(t){var e=t.store["states"].expandRows;var r=t.row;var n=e===null||e===void 0?void 0:e.some(function(a,r){if(a.approval_id===t.row["approval_id"]){e.splice(r,1);return true}});if(n)return;e.push(r)}}};t.default=l},356:function(a,t,e){"use strict";e.r(t);var r=e(397);var n=e(294);for(var i in n)if(i!=="default")(function(a){e.d(t,a,function(){return n[a]})})(i);var o=e(7);var d=Object(o["a"])(n["default"],r["a"],r["b"],false,null,null,null);t["default"]=d.exports},397:function(a,t,e){"use strict";var r=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("self-table",{attrs:{data:a.pendingApprovalData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[e("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请开始时间",prop:"start_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请截止时间",prop:"end_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请理由"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.light",value:t.row["application_reason"],expression:"application.row['application_reason']",modifiers:{light:true}}]},[a._v(" "+a._s(t.row["application_reason"]))])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"操作",width:250},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:true},on:{click:function(e){a.handleToGetDetail(t.row)}}},[a._v("\n                详情\n            ")]),a._v(" "),e("bk-popconfirm",{attrs:{title:"确认撤回该申请？",content:"撤回申请之后需要重新申请！",trigger:"click"},on:{confirm:function(e){a.handleToRefundApplication(t.row["approval_id"])}}},[e("bk-button",{directives:[{name:"show",rawName:"v-show",value:t.row["approval_state"]===a.APPLY_STATE["review_pending"],expression:"application.row['approval_state'] === APPLY_STATE['review_pending']"}],staticClass:"ml10 mr10",attrs:{theme:"danger",text:true}},[a._v("\n                    撤回申请\n                ")])],1),a._v(" "),e("bk-button",{directives:[{name:"show",rawName:"v-show",value:t.row["approval_state"]===a.APPLY_STATE["draft"],expression:"application.row['approval_state'] === APPLY_STATE['draft']"}],staticClass:"ml10 mr10",attrs:{theme:"warning",text:true},on:{click:function(e){a.handleToEditDraft(t.row)}}},[a._v("\n                编辑草稿\n            ")])]}}])})],1)};var n=[];e.d(t,"a",function(){return r});e.d(t,"b",function(){return n})}}]);