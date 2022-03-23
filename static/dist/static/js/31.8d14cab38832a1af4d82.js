(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{285:function(a,t,n){"use strict";n.r(t);var e=n(286);var r=n.n(e);for(var d in e)if(d!=="default")(function(a){n.d(t,a,function(){return e[a]})})(d);t["default"]=r.a},286:function(a,t,n){"use strict";var e=n(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(n(3));var d=n(210);var i=n(208);var o=n(7);var l={name:"ended-approval",mixins:[d.tableMixins],data:function a(){return{ingAwardRemoteData:[],loading:false}},computed:{ingAwardData:function a(t){var n,e;return(n=(e=t.ingAwardRemoteData)===null||e===void 0?void 0:e.map(function(a){return{award_id:a["id"],award_name:a["award_name"],award_description:a["award_description"],award_department_fullname:a["award_department_fullname"],award_department_id:a["award_department_id"],award_reviewers:a["award_reviewers"],award_consultant:a["award_consultant"],award_consultant_displayname:a["award_consultant_displayname"],award_consultant_displayname_for_display:a["award_consultant"]+"（"+a["award_consultant_displayname"]+"）",award_demand:a["award_demand"],start_time:a["start_time"],end_time:a["end_time"],approval_state:a["approval_state"]}}))!==null&&n!==void 0?n:[]}},mounted:function a(){this.handleInit()},methods:{handleInit:function a(){Promise.all([this.handleGetIngAwardAwards()])},handleGetIngAwardAwards:function a(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.size;if(this.loading)return;this.loading=true;var r={page:n,size:e,award_status:o.ING_AWARD,group_id:this.$bus.curGlobalGroupId};return(0,i.getAwards)(r).then(function(a){var n=a.data;t.pagination.count=n.count;t.ingAwardRemoteData=n.data}).finally(function(a){t.loading=false})},handleToGetDetail:function a(t){var n;this.$router.push({name:o.AWARD_FORM_ROUTE_PATH,query:(n={},(0,r.default)(n,o.AWARD_TYPE_ROUTE_KEY,o.AWARD_TYPE_DETAIL),(0,r.default)(n,"award_id",t["award_id"]),n)})}}};t.default=l},360:function(a,t,n){"use strict";n.r(t);var e=n(406);var r=n(285);for(var d in r)if(d!=="default")(function(a){n.d(t,a,function(){return r[a]})})(d);var i=n(18);var o=Object(i["a"])(r["default"],e["a"],e["b"],false,null,null,null);t["default"]=o.exports},406:function(a,t,n){"use strict";var e=function(){var a=this;var t=a.$createElement;var n=a._self._c||t;return n("self-table",{attrs:{data:a.ingAwardData,loading:a.loading,pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t},"page-change":function(t){a.handleInit()}}},[n("bk-table-column",{attrs:{type:"index",label:"序号",width:60}}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项名称"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["award_name"]},domProps:{textContent:a._s(t.row["award_name"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项开始时间"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["start_time"]},domProps:{textContent:a._s(t.row["start_time"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项截止时间"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["end_time"]},domProps:{textContent:a._s(t.row["end_time"])}})]}}])}),a._v(" "),n("bk-table-column",{attrs:{label:"奖项咨询人"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",{attrs:{title:t.row["award_consultant_displayname_for_display"]}},[a._v(a._s(t.row["award_consultant_displayname_for_display"]))])]}}])})],1)};var r=[];n.d(t,"a",function(){return e});n.d(t,"b",function(){return r})}}]);