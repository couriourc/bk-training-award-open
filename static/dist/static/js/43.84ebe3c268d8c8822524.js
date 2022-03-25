(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{301:function(a,t,n){"use strict";n.r(t);var e=n(302);var r=n.n(e);for(var o in e)if(o!=="default")(function(a){n.d(t,a,function(){return e[a]})})(o);t["default"]=r.a},302:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var e=n(210);var r=n(19);var o=n(7);var i=n(151);var l={name:"group-pending-approval",mixins:[e.tableMixins],data:function a(){return{pendingApprovalRemoteData:[]}},computed:{pendingApprovalData:function a(t){var n,e;return(n=(e=t.pendingApprovalRemoteData)===null||e===void 0?void 0:e.map(function(a){return{apply_id:a["apply_id"],group_id:a["group_id"],group_name:a["group_name"],username:a["username"],display_name:a["display_name"],display_name_for_display:(0,i.formatUsernameAndDisplayName)(a["username"],a["display_name"]),status:a["status"],create_time:a["create_time"],update_time:a["update_time"]}}))!==null&&n!==void 0?n:[]}},mounted:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetGroupPendingApproval()])},handleGetGroupPendingApproval:function a(){var t=this;if(this.loading)return;this.loading=true;var n={group_id:this.$bus.curGlobalGroupId,status:o.GROUP_PENDING_APPROVAL};return(0,r.getGroupManage)(n).then(function(a){t.pendingApprovalRemoteData=a.data}).finally(function(a){t.loading=false})},handleToPassGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:true};this.handlePostGroupManage(n,"已同意用户：".concat(t["display_name_for_display"],"加入").concat(t["group_name"]))},handleRejectGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:false};this.handlePostGroupManage(n,"已拒绝用户：".concat(t["display_name_for_display"],"加入").concat(t["group_name"]))},handlePostGroupManage:function a(t,n){var e=this;return(0,r.postGroupManage)(t).then(function(a){e.messageSuccess(n);e.handleInit()})}}};t.default=l},365:function(a,t,n){"use strict";n.r(t);var e=n(409);var r=n(301);for(var o in r)if(o!=="default")(function(a){n.d(t,a,function(){return r[a]})})(o);var i=n(18);var l=Object(i["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=l.exports},409:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.pendingApprovalData,loading:false,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请用户",prop:"display_name_for_display"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请时间",prop:"create_time"}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人",prop:"create_time"}}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{text:true},on:{click:function(n){a.handleToPassGroupUser(t.row)}}},[a._v("\n                通过\n            ")]),a._v(" "),n("bk-popconfirm",{attrs:{trigger:"click",width:280},on:{confirm:function(n){a.handleRejectGroupUser(t.row)}}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"demo-custom"},[n("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon color-danger",staticStyle:{color:"red"}}),a._v(" "),n("span",{staticClass:"content-text"},[a._v("确认拒绝该用户的申请？")])])]),a._v(" "),n("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"danger",text:true}},[a._v("\n                    拒绝\n                ")])],1)]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);