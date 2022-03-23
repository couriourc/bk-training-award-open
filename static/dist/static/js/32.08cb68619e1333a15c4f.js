(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{287:function(t,a,n){"use strict";n.r(a);var e=n(288);var r=n.n(e);for(var i in e)if(i!=="default")(function(t){n.d(a,t,function(){return e[t]})})(i);a["default"]=r.a},288:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=void 0;var e=n(208);var r=n(210);var i=n(7);var o={name:"ended-approval",mixins:[r.tableMixins],data:function t(){return{ingReviewRemoteData:[]}},computed:{ingReviewData:function t(a){var n;return(n=a.ingReviewRemoteData)===null||n===void 0?void 0:n.map(function(t){return{award_id:t["id"],award_name:t["award_name"],award_description:t["award_description"],award_department_fullname:t["award_department_fullname"],award_department_id:t["award_department_id"],award_reviewers:t["award_reviewers"],award_consultant:t["award_consultant"],award_consultant_displayname:t["award_consultant_displayname"],award_consultant_displayname_for_display:t["award_consultant"]+"（"+t["award_consultant_displayname"]+"）",award_demand:t["award_demand"],start_time:t["start_time"],end_time:t["end_time"],approval_state:t["approval_state"]}})}},mounted:function t(){this.handleInit()},methods:{handleInit:function t(){Promise.all([this.handleGetIngReview()])},handleGetIngReview:function t(){var a=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.size;if(this.loading)return;this.loading=true;var o={page:n,size:r,award_status:i.ING_REVIEW,group_id:this.$bus.curGlobalGroupId};return(0,e.getAwards)(o).then(function(t){var n=t.data;a.pagination.count=n.count;a.ingReviewRemoteData=n.data}).finally(function(t){a.loading=false})},handleToGetDetail:function t(a){console.log(a);this.$router.push({name:i.AWARD_APPLICATION_DETAILS_ROUTE_PATH,query:{award_id:a["award_id"],group_id:this.$bus.curGlobalGroupId}})},handleToOverAward:function t(a){var n=this;return(0,e.postFinishAward)(a["award_id"]).then(function(t){n.handleInit();n.messageSuccess("已成功终止奖项评审")})}}};a.default=o},361:function(t,a,n){"use strict";n.r(a);var e=n(407);var r=n(287);for(var i in r)if(i!=="default")(function(t){n.d(a,t,function(){return r[t]})})(i);var o=n(18);var l=Object(o["a"])(r["default"],e["a"],e["b"],false,null,null,null);a["default"]=l.exports},407:function(t,a,n){"use strict";var e=function(){var t=this;var a=t.$createElement;var n=t._self._c||a;return n("self-table",{attrs:{data:t.ingReviewData,loading:t.loading,pagination:t.pagination},on:{"update:pagination":function(a){t.pagination=a},"page-change":function(a){t.handleInit()}}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:60}}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项名称"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{attrs:{title:a.row["award_name"]},domProps:{textContent:t._s(a.row["award_name"])}})]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项开始时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{attrs:{title:a.row["start_time"]},domProps:{textContent:t._s(a.row["start_time"])}})]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项截止时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{attrs:{title:a.row["end_time"]},domProps:{textContent:t._s(a.row["end_time"])}})]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{attrs:{title:a.row["award_consultant_displayname_for_display"]}},[t._v(t._s(a.row["award_consultant_displayname_for_display"]))])]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"总评审轮次",width:300},scopedSlots:t._u([{key:"default",fn:function(a){return[n("bk-select",{attrs:{value:0,clearable:false}},t._l(a.row["award_reviewers"],function(t,a){return n("bk-option",{key:t,attrs:{name:"第"+(a+1)+"轮:"+t.join(","),id:a,title:"第"+(a+1)+"轮:"+t.join(",")}})}),1)]}}])}),t._v(" "),n("bk-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("bk-popconfirm",{attrs:{trigger:"click",width:"280"},on:{confirm:function(n){t.handleToOverAward(a.row)}}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon",staticStyle:{color:"#cc3333"}}),t._v(" "),n("span",{staticClass:"content-text"},[t._v("将会提前结束奖项,未评审的将置为未通过\n                    ")])]),t._v(" "),n("bk-button",{staticClass:"mr20 ml20 ",attrs:{theme:"danger",text:true}},[t._v("结束奖项")])],1)]}}])})],1)};var r=[];n.d(a,"a",function(){return e});n.d(a,"b",function(){return r})}}]);