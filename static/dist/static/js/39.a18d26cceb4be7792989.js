(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{267:function(a,t,n){"use strict";n.r(t);var e=n(268);var o=n.n(e);for(var r in e)if(r!=="default")(function(a){n.d(t,a,function(){return e[a]})})(r);t["default"]=o.a},268:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var e=n(19);var o=n(14);var r=n(13);var i={name:"group-approval",data:function a(){return{groupApprovalRemoteData:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{groupApprovalData:function a(t){var n,e;return(n=(e=t.groupApprovalRemoteData)===null||e===void 0?void 0:e.map(function(a){return{apply_id:a["apply_id"],group_id:a["group_id"],group_name:a["group_name"],username:a["username"],display_name:a["display_name"],display_name_for_display:(0,o.formatUsernameAndDisplayName)(a["username"],a["display_name"]),status:a["status"],create_time:(0,o.formatDate)(a["create_time"]),update_time:(0,o.formatDate)(a["update_time"])}}))!==null&&n!==void 0?n:[]}},created:function a(){this.handleInit()},methods:{handleInit:function a(){this.handleGetPageData(this.pagination)},handleGetPageData:function a(t){var n=this;var o=t.current,i=t.limit;if(this.loading){return}this.loading=true;return(0,e.getGroupManage)({page:o,size:i,status:r.GROUP_PENDING_APPROVAL}).then(function(a){n.groupApprovalRemoteData=a.data}).finally(function(a){n.loading=false})},handleToPassGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:true};this.handlePostGroupManage(n,"已同意用户：".concat(t["display_name_for_display"],"加入").concat(t["group_name"]))},handleRejectGroupUser:function a(t){var n={apply_ids:[t["apply_id"]],is_allow:false};this.handlePostGroupManage(n,"已拒绝用户：".concat(t["display_name_for_display"],"加入").concat(t["group_name"]))},handlePostGroupManage:function a(t,n){var o=this;return(0,e.postGroupManage)(t).then(function(a){o.messageSuccess(n);o.handleInit()})}}};t.default=i},348:function(a,t,n){"use strict";n.r(t);var e=n(394);var o=n(267);for(var r in o)if(r!=="default")(function(a){n.d(t,a,function(){return o[a]})})(r);var i=n(18);var l=Object(i["a"])(o["default"],e["a"],e["b"],false,null,null,null);t["default"]=l.exports},394:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.groupApprovalData,pagination:a.pagination,loading:a.loading},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{label:"序号",type:"index",width:"60"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请小组",prop:"group_name"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请人",prop:"display_name_for_display"}}),a._v(" "),n("bk-table-column",{attrs:{label:"申请时间",prop:"create_time"}}),a._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{text:true},on:{click:function(n){a.handleToPassGroupUser(t.row)}}},[a._v("\n                通过\n            ")]),a._v(" "),n("bk-popconfirm",{attrs:{trigger:"click",width:280},on:{confirm:function(n){a.handleRejectGroupUser(t.row)}}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"demo-custom"},[n("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon color-danger",staticStyle:{color:"red"}}),a._v(" "),n("span",{staticClass:"content-text"},[a._v("确认拒绝该用户的申请？")])])]),a._v(" "),n("bk-button",{staticClass:"ml10",attrs:{text:true,theme:"danger"}},[a._v("\n                    拒绝\n                ")])],1)]}}])})],1)};var o=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return o})}}]);