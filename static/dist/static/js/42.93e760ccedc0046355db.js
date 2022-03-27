(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{290:function(a,t,e){"use strict";e.r(t);var n=e(291);var r=e.n(n);for(var i in n)if(i!=="default")(function(a){e.d(t,a,function(){return n[a]})})(i);t["default"]=r.a},291:function(a,t,e){"use strict";var n=e(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=n(e(3));var i=e(13);var o=e(207);var l=e(289);var d=e(14);var u=e(209);var p=e(210);var s={name:"pending-approval",mixins:[l.applyTableMixins],data:function a(){return{pendingApprovalRemoteData:[],APPLY_STATE:Object.freeze(i.APPLY_STATE)}},computed:{pendingApprovalData:function a(t){var e,n;return(e=(n=t.pendingApprovalRemoteData)===null||n===void 0?void 0:n.map(function(a){var t,e,n,r;var i=(t=a["award_info"])!==null&&t!==void 0?t:{};var o=(e=(n=i["award_reviewers"])===null||n===void 0?void 0:n.map(function(a,t){return{uuid:p.uuid.get(),title:"审批流程",icon:t+1,description:a.join(",")}}))!==null&&e!==void 0?e:[];return{approval_id:a["id"],record_id:a["id"],approval_state:a["approval_state"],approval_turn:a["approval_turn"],application_reason:a["application_reason"],application_time:(0,d.formatDate)(a["application_time"]),award_id:a["award_id"],award_name:(r=a["award_info"])===null||r===void 0?void 0:r["award_name"],award_department_id:["award_department_id"],award_department_fullname:i["award_department_fullname"],award_reviewers:i["award_reviewers"],award_reviewers_steps:o,award_consultant:i["award_consultant"],award_description:i["award_description"],award_consultant_displayname:i["award_consultant_displayname"],award_consultant_displayname_for_display:i["award_consultant_displayname_for_display"],award_demand:i["award_demand"],start_time:(0,d.formatDate)(i["start_time"]),end_time:(0,d.formatDate)(i["end_time"])}}))!==null&&e!==void 0?e:[]}},created:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetPendingApproval()])},handleGetPendingApproval:function a(){var t=this;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;var r={page:e,size:n,group_id:this.$bus.curGlobalGroupId,apply_status:i.MYAPPLY_PENDING_APPLY};if(this.loading)return;this.loading=true;return(0,o.getRecord)(r).then(function(a){var e,n;var r=a.data;t.pagination.count=(e=r.count)!==null&&e!==void 0?e:0;t.pendingApprovalRemoteData=(n=r.data)!==null&&n!==void 0?n:[]}).finally(function(a){t.loading=false})},handleToRefundApplication:function a(t){var e=this;return(0,u.deleteRecord)(t).then(function(a){e.messageWarn("撤回成功");e.handleInit()})},handleToEditDraft:function a(t){var e;if(!t["award_id"]){return}this.$router.push({name:i.DETAIL_ROUTE_PATH,query:(e={},(0,r.default)(e,i.DETAIL_TYPE_KEYNAME,i.DETAIL_EDIT),(0,r.default)(e,"award_id",t["award_id"]),(0,r.default)(e,"record_id",t["record_id"]),e)})},handleToGetDetail:function a(t){var e;this.$router.push({name:i.DETAIL_ROUTE_PATH,query:(e={},(0,r.default)(e,i.DETAIL_TYPE_KEYNAME,i.DETAIL_APPLY_DETAIL),(0,r.default)(e,"award_id",t["award_id"]),(0,r.default)(e,"record_id",t["record_id"]),e)})},handleGetDetail:function a(t){var e=t.store["states"].expandRows;var n=t.row;var r=e===null||e===void 0?void 0:e.some(function(a,n){if(a.approval_id===t.row["approval_id"]){e.splice(n,1);return true}});if(r)return;e.push(n)}}};t.default=s},361:function(a,t,e){"use strict";e.r(t);var n=e(404);var r=e(290);for(var i in r)if(i!=="default")(function(a){e.d(t,a,function(){return r[a]})})(i);var o=e(18);var l=Object(o["a"])(r["default"],n["a"],n["b"],false,null,null,null);t["default"]=l.exports},404:function(a,t,e){"use strict";var n=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("self-table",{attrs:{data:a.pendingApprovalData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[e("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),e("bk-table-column",{attrs:{label:"奖项名称",prop:"award_name"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请开始时间",prop:"start_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请截止时间",prop:"end_time"}}),a._v(" "),e("bk-table-column",{attrs:{label:"申请理由"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.light",value:t.row["application_reason"],expression:"application.row['application_reason']",modifiers:{light:true}}]},[a._v(" "+a._s(t.row["application_reason"]))])]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"当前评审轮次",width:300},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-select",{attrs:{value:t.row["approval_turn"],clearable:false}},a._l(t.row["award_reviewers"],function(a,t){return e("bk-option",{key:a.uuid,attrs:{name:"第"+(t+1)+"轮:"+a.join(","),id:t,title:"第"+(t+1)+"轮:"+a.join(",")}})}),1)]}}])}),a._v(" "),e("bk-table-column",{attrs:{label:"操作",width:250},scopedSlots:a._u([{key:"default",fn:function(t){return[e("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:true},on:{click:function(e){a.handleToGetDetail(t.row)}}},[a._v("\n                详情\n            ")]),a._v(" "),e("bk-popconfirm",{attrs:{title:"确认撤回该申请？",content:"撤回申请之后需要重新申请！",trigger:"click"},on:{confirm:function(e){a.handleToRefundApplication(t.row["approval_id"])}}},[e("bk-button",{directives:[{name:"show",rawName:"v-show",value:t.row["approval_state"]===a.APPLY_STATE["review_pending"],expression:"application.row['approval_state'] === APPLY_STATE['review_pending']"}],staticClass:"ml10 mr10",attrs:{theme:"danger",text:true}},[a._v("\n                    撤回申请\n                ")])],1),a._v(" "),e("bk-button",{directives:[{name:"show",rawName:"v-show",value:t.row["approval_state"]===a.APPLY_STATE["draft"],expression:"application.row['approval_state'] === APPLY_STATE['draft']"}],staticClass:"ml10 mr10",attrs:{theme:"warning",text:true},on:{click:function(e){a.handleToEditDraft(t.row)}}},[a._v("\n                编辑草稿\n            ")])]}}])})],1)};var r=[];e.d(t,"a",function(){return n});e.d(t,"b",function(){return r})}}]);