(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{306:function(a,t,e){"use strict";e.r(t);var r=e(307);var n=e.n(r);for(var s in r)if(s!=="default")(function(a){e.d(t,a,function(){return r[a]})})(s);t["default"]=n.a},307:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(209);var n=e(18);var s=0;var d={name:"detail-info",data:function a(){return{awardForm:{id:"",award_name:"",award_description:"",award_department_id:"",award_department_fullname:"",award_reviewers:"",award_consultant:"",award_consultant_displayname:"",award_demand:"",start_time:"",end_time:"",approval_state:""}}},created:function a(){this.handleInit()},methods:{handleInit:function a(){var t=this.$route.query["award_id"];this.handleGetAwardDetailById(t)},handleGetAwardDetailById:function a(t){var e=this;if(t){return(0,r.getAwardById)(t).then(function(a){var t=a.data;try{t["time_range"]="".concat((0,n.formatDate)(t["start_time"]),"~").concat((0,n.formatDate)(t["end_time"]));console.log(t["award_reviewers"]);t["reviewers"]=t["award_reviewers"].map(function(a){return{uuid:s++,value:a}});t["award_consultant_displayname"]="".concat(t["award_consultant"],"（").concat(t["award_consultant_displayname"],"）")}catch(a){console.error(a)}e.awardForm=t})}}}};t.default=d},308:function(a,t,e){},368:function(a,t,e){"use strict";e.r(t);var r=e(410);var n=e(306);for(var s in n)if(s!=="default")(function(a){e.d(t,a,function(){return n[a]})})(s);var d=e(369);var i=e(17);var l=Object(i["a"])(n["default"],r["a"],r["b"],false,null,"d994eb8a",null);t["default"]=l.exports},369:function(a,t,e){"use strict";var r=e(308);var n=e.n(r);var s=n.a},410:function(a,t,e){"use strict";var r=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("div",{staticClass:"detail-form-container"},[e("bk-container",{attrs:{col:12}},[e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项名称:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{disabled:true,placeholder:"奖项名","ext-cls":"detail-input",title:a.awardForm["award_name"]},model:{value:a.awardForm["award_name"],callback:function(t){a.$set(a.awardForm,"award_name",t)},expression:"awardForm['award_name']"}})],1),a._v(" "),e("bk-col",{attrs:{span:6}},[e("span",[a._v("接口人:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{"ext-cls":"detail-input",placeholder:"接口人",disabled:true,title:a.awardForm["award_consultant_displayname"]},model:{value:a.awardForm["award_consultant_displayname"],callback:function(t){a.$set(a.awardForm,"award_consultant_displayname",t)},expression:"awardForm['award_consultant_displayname']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("所属组织:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{disabled:true,placeholder:"所属组织","ext-cls":"detail-input",title:a.awardForm["award_department_fullname"]},model:{value:a.awardForm["award_department_fullname"],callback:function(t){a.$set(a.awardForm,"award_department_fullname",t)},expression:"awardForm['award_department_fullname']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项要求:")])]),a._v(" "),e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项描述:")])])],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{type:"textarea",rows:3,disabled:true,placeholder:"奖项要求","ext-cls":"detail-input",title:a.awardForm["award_demand"]},model:{value:a.awardForm["award_demand"],callback:function(t){a.$set(a.awardForm,"award_demand",t)},expression:"awardForm['award_demand']"}})],1),a._v(" "),e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{type:"textarea",rows:3,disabled:true,placeholder:"奖项描述","ext-cls":"detail-input",title:a.awardForm["award_description"]},model:{value:a.awardForm["award_description"],callback:function(t){a.$set(a.awardForm,"award_description",t)},expression:"awardForm['award_description']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:12}},[e("span",[a._v("开放申请时间段:")])])],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{disabled:true,placeholder:"开放申请时间段","ext-cls":"detail-input",title:a.awardForm["time_range"]},model:{value:a.awardForm["time_range"],callback:function(t){a.$set(a.awardForm,"time_range",t)},expression:"awardForm['time_range']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:12}},[e("span",{staticClass:"title"},[a._v(" 审批轮次: 1.xxx 2.xxx")])])],1),a._v(" "),e("bk-row",{staticClass:"review-container mt15"},[e("bk-col",{attrs:{span:12}},[e("ul",{staticClass:"reviewer-list"},a._l(a.awardForm["reviewers"],function(t,r){return e("li",{key:t.uuid,staticClass:"item mb15"},[e("span",{staticClass:"mr10"},[a._v(" 第 "+a._s(r+1)+" 轮")]),a._v(" "),e("select-search",{attrs:{value:t.value,placeholder:"请选择评审人",disabled:true,"id-key":"username",title:t.value.join(",")},on:{"update:value":function(e){a.$set(t,"value",e)}}})],1)}),0)])],1)],1)],1)};var n=[];e.d(t,"a",function(){return r});e.d(t,"b",function(){return n})}}]);