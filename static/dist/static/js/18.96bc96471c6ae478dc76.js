(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{212:function(a,t,e){"use strict";var r=e(1);Object.defineProperty(t,"__esModule",{value:true});t.deleteAward=p;t.deleteRecord=_;t.getAppliedAwards=u;t.getAvailableAwards=c;t.getAwardById=f;t.getAwards=o;t.postAwards=l;t.postFinishAward=v;t.postRecord=w;t.putAward=m;var n=r(e(4));var d=r(e(3));function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,r)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach(function(t){(0,n.default)(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function l(a){return d.default.post("awards/",a)}function o(a){var t=a.page,e=a.size;return d.default.get("awards/",{params:{page:t,size:e}})}function c(a){var t=a.page,e=a.size,r=a.award_status,n=a.group_id;return d.default.get("get_available_awards/",{params:{page:t,size:e,award_status:r,group_id:n}})}function u(a,t){return d.default.get("get_applyed_awards/",{params:{page:a,size:t}})}function w(a,t){return d.default.post("record/",i({is_draft:a},t))}function _(a){console.log(a);return d.default.delete("record/",{data:{id:a}})}function p(a){var t=a.awardId;return d.default.delete("awards/",{data:{award_id:t}})}function m(a,t){var e=t.award_name,r=t.award_level,n=t.award_description,s=t.award_consultant,i=t.award_image,l=t.award_department_fullname,o=t.award_reviewers,c=t.start_time,u=t.end_time,w=t.award_department_id,_=t.award_consultant_displayname,p=t.award_demand;return d.default.put("awards/",{award_id:a,award_name:e,award_level:r,award_description:n,award_consultant:s,award_image:i,award_department_fullname:l,award_reviewers:o,start_time:c,end_time:u,award_department_id:w,award_consultant_displayname:_,award_demand:p})}function f(a){return d.default.get("/awards/".concat(a,"/"))}function v(a){return d.default.post("/finish_award/".concat(a,"/"))}},310:function(a,t,e){"use strict";e.r(t);var r=e(311);var n=e.n(r);for(var d in r)if(d!=="default")(function(a){e.d(t,a,function(){return r[a]})})(d);t["default"]=n.a},311:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=e(212);var n=e(155);var d=0;var s={name:"detail-info",data:function a(){return{awardForm:{id:"",award_name:"",award_description:"",award_department_id:"",award_department_fullname:"",award_reviewers:"",award_consultant:"",award_consultant_displayname:"",award_demand:"",start_time:"",end_time:"",approval_state:""}}},created:function a(){this.handleInit()},methods:{handleInit:function a(){var t=this.$route.query["award_id"];this.handleGetAwardDetailById(t)},handleGetAwardDetailById:function a(t){var e=this;if(t){return(0,r.getAwardById)(t).then(function(a){var t=a.data;try{t["time_range"]="".concat((0,n.formatDate)(t["start_time"]),"~").concat((0,n.formatDate)(t["end_time"]));console.log(t["award_reviewers"]);t["reviewers"]=t["award_reviewers"].map(function(a){return{uuid:d++,value:a}});t["award_consultant_displayname"]="".concat(t["award_consultant"],"（").concat(t["award_consultant_displayname"],"）")}catch(a){console.error(a)}e.awardForm=t})}}}};t.default=s},312:function(a,t,e){},366:function(a,t,e){"use strict";e.r(t);var r=e(407);var n=e(310);for(var d in n)if(d!=="default")(function(a){e.d(t,a,function(){return n[a]})})(d);var s=e(367);var i=e(7);var l=Object(i["a"])(n["default"],r["a"],r["b"],false,null,"d994eb8a",null);t["default"]=l.exports},367:function(a,t,e){"use strict";var r=e(312);var n=e.n(r);var d=n.a},407:function(a,t,e){"use strict";var r=function(){var a=this;var t=a.$createElement;var e=a._self._c||t;return e("div",{staticClass:"detail-form-container"},[e("bk-container",{attrs:{col:12}},[e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项名称:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{disabled:true,placeholder:"奖项名","ext-cls":"detail-input",title:a.awardForm["award_name"]},model:{value:a.awardForm["award_name"],callback:function(t){a.$set(a.awardForm,"award_name",t)},expression:"awardForm['award_name']"}})],1),a._v(" "),e("bk-col",{attrs:{span:6}},[e("span",[a._v("接口人:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{"ext-cls":"detail-input",placeholder:"接口人",disabled:true,title:a.awardForm["award_consultant_displayname"]},model:{value:a.awardForm["award_consultant_displayname"],callback:function(t){a.$set(a.awardForm,"award_consultant_displayname",t)},expression:"awardForm['award_consultant_displayname']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("所属组织:")]),a._v(" "),e("bk-input",{staticStyle:{width:"auto"},attrs:{disabled:true,placeholder:"所属组织","ext-cls":"detail-input",title:a.awardForm["award_department_fullname"]},model:{value:a.awardForm["award_department_fullname"],callback:function(t){a.$set(a.awardForm,"award_department_fullname",t)},expression:"awardForm['award_department_fullname']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项要求:")])]),a._v(" "),e("bk-col",{attrs:{span:6}},[e("span",[a._v("奖项描述:")])])],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{type:"textarea",rows:3,disabled:true,placeholder:"奖项要求","ext-cls":"detail-input",title:a.awardForm["award_demand"]},model:{value:a.awardForm["award_demand"],callback:function(t){a.$set(a.awardForm,"award_demand",t)},expression:"awardForm['award_demand']"}})],1),a._v(" "),e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{type:"textarea",rows:3,disabled:true,placeholder:"奖项描述","ext-cls":"detail-input",title:a.awardForm["award_description"]},model:{value:a.awardForm["award_description"],callback:function(t){a.$set(a.awardForm,"award_description",t)},expression:"awardForm['award_description']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:12}},[e("span",[a._v("开放申请时间段:")])])],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:6}},[e("bk-input",{staticStyle:{width:"calc(2*118px + 8px)"},attrs:{disabled:true,placeholder:"开放申请时间段","ext-cls":"detail-input",title:a.awardForm["time_range"]},model:{value:a.awardForm["time_range"],callback:function(t){a.$set(a.awardForm,"time_range",t)},expression:"awardForm['time_range']"}})],1)],1),a._v(" "),e("bk-row",{staticClass:"mt15"},[e("bk-col",{attrs:{span:12}},[e("span",{staticClass:"title"},[a._v(" 审批轮次: 1.xxx 2.xxx")])])],1),a._v(" "),e("bk-row",{staticClass:"review-container mt15"},[e("bk-col",{attrs:{span:12}},[e("ul",{staticClass:"reviewer-list"},a._l(a.awardForm["reviewers"],function(t,r){return e("li",{key:t.uuid,staticClass:"item mb15"},[e("span",{staticClass:"mr10"},[a._v(" 第 "+a._s(r+1)+" 轮")]),a._v(" "),e("select-search",{attrs:{value:t.value,placeholder:"请选择评审人",disabled:true,"id-key":"username",title:t.value.join(",")},on:{"update:value":function(e){a.$set(t,"value",e)}}})],1)}),0)])],1)],1)],1)};var n=[];e.d(t,"a",function(){return r});e.d(t,"b",function(){return n})}}]);