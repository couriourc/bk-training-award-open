(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{266:function(a,t,n){"use strict";n.r(t);var e=n(267);var r=n.n(e);for(var o in e)if(o!=="default")(function(a){n.d(t,a,function(){return e[a]})})(o);t["default"]=r.a},267:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var e=n(19);var r=n(14);var o=n(8);var i=n(207);var l={name:"group-approval",mixins:[i.tableMixins],data:function a(){return{groupApprovalRemoteData:[]}},computed:{groupApprovalData:function a(t){var n,e;return(n=(e=t.groupApprovalRemoteData)===null||e===void 0?void 0:e.map(function(a){return{apply_id:a["apply_id"],group_id:a["group_id"],group_name:a["group_name"],username:a["username"],display_name:a["display_name"],display_name_for_display:(0,r.formatUsernameAndDisplayName)(a["username"],a["display_name"]),status:a["status"],create_time:(0,r.formatDate)(a["create_time"]),update_time:(0,r.formatDate)(a["update_time"])}}))!==null&&n!==void 0?n:[]}},created:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetPageData()])},handleGetPageData:function a(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading){return}this.loading=true;return(0,e.getGroupManage)({page:n,size:r,status:o.GROUP_PENDING_APPROVAL}).then(function(a){t.groupApprovalRemoteData=a.data}).finally(function(a){t.loading=false})},handleToPassGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:true};this.handlePostGroupManage(n,"已同意用户".concat(t["display_name_for_display"],"加入：").concat(t["group_name"]))},handleRejectGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:false};this.handlePostGroupManage(n,"已拒绝用户".concat(t["display_name_for_display"],"加入：").concat(t["group_name"]))},handlePostGroupManage:function a(t,n){var r=this;return(0,e.postGroupManage)(t).then(function(a){r.messageSuccess(n);r.handleInit()})}}};t.default=l},350:function(a,t,n){"use strict";n.r(t);var e=n(396);var r=n(266);for(var o in r)if(o!=="default")(function(a){n.d(t,a,function(){return r[a]})})(o);var i=n(18);var l=Object(i["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=l.exports},396:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.groupApprovalData,pagination:a.pagination,loading:a.loading},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{label:"序号",type:"index",width:"60"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请小组",prop:"group_name"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请人",prop:"display_name_for_display"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请时间",prop:"create_time"}}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{text:true},on:{click:function(n){a.handleToPassGroupUser(t.row)}}},[a._v("\n                通过\n            ")]),a._v(" "),n("bk-popconfirm",{attrs:{trigger:"click",width:280},on:{confirm:function(n){a.handleRejectGroupUser(t.row)}}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"demo-custom"},[n("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon color-danger",staticStyle:{color:"red"}}),a._v(" "),n("span",{staticClass:"content-text"},[a._v("确认拒绝该用户的申请？")])])]),a._v(" "),n("bk-button",{staticClass:"ml10",attrs:{text:true,theme:"danger"}},[a._v("\n                    拒绝\n                ")])],1)]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);