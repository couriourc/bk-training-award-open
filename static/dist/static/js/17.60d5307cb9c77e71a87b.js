(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{212:function(t,e,a){"use strict";var r=a(1);Object.defineProperty(e,"__esModule",{value:true});e.deleteRecord=d;e.getAvailableAwards=p;e.getAwardById=_;e.getAwards=l;e.postAwards=c;e.postFinishAward=m;e.postRecord=u;e.putAward=f;var n=r(a(4));var i=r(a(3));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){(0,n.default)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function c(t){return i.default.post("awards/",t)}function l(t){var e=t.page,a=t.size,r=t.group_id,n=t.award_status;return i.default.get("awards/",{params:{page:e,size:a,group_id:r,award_status:n}})}function p(t){var e=t.page,a=t.size,r=t.award_status,n=t.group_id;return i.default.get("get_available_awards/",{params:{page:e,size:a,award_status:r,group_id:n}})}function u(t,e){return i.default.post("record/",s({is_draft:t},e))}function d(t){console.log(t);return i.default.delete("record/",{data:{id:t}})}function f(t,e){var a=e.award_name,r=e.award_level,n=e.award_description,o=e.award_consultant,s=e.award_image,c=e.award_department_fullname,l=e.award_reviewers,p=e.start_time,u=e.end_time,d=e.award_department_id,f=e.award_consultant_displayname,_=e.award_demand;return i.default.put("awards/",{award_id:t,award_name:a,award_level:r,award_description:n,award_consultant:o,award_image:s,award_department_fullname:c,award_reviewers:l,start_time:p,end_time:u,award_department_id:d,award_consultant_displayname:f,award_demand:_})}function _(t){return i.default.get("/awards/".concat(t,"/"))}function m(t){return i.default.post("/finish_award/".concat(t,"/"))}},313:function(t,e,a){"use strict";a.r(e);var r=a(314);var n=a.n(r);for(var i in r)if(i!=="default")(function(t){a.d(e,t,function(){return r[t]})})(i);e["default"]=n.a},314:function(t,e,a){"use strict";var r=a(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var n=r(a(14));var i=r(a(15));var o=r(a(4));var s=a(8);var c=a(212);var l=a(213);var p=a(155);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach(function(e){(0,o.default)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f={name:"apply-form",components:{Uploader:function t(){return a.e(19).then(a.bind(null,372))}},inject:["awardDetail"],data:function t(e){var a;return{config:(a={},(0,o.default)(a,s.DETAIL_APPLY,{hidden_button:false,is_editor:true,init:function t(){}}),(0,o.default)(a,s.DETAIL_APPLY_DETAIL,{hidden_button:true,is_editor:false,init:function t(){e.handleGetRecord()}}),(0,o.default)(a,s.DETAIL_DRAFT_DETAIL,{hidden_button:false,is_editor:true,init:function t(){}}),(0,o.default)(a,s.DETAIL_APPROVAL_DETAIL,{hidden_button:true,is_editor:false,init:function t(){e.handleGetRecord()}}),a),configType:{apply:s.DETAIL_APPLY,apply_detail:s.DETAIL_APPLY_DETAIL,draft_detail:s.DETAIL_DRAFT_DETAIL,approval_detail:s.DETAIL_APPROVAL_DETAIL},applyForm:{application_users:"",application_reason:"",application_attachments:[]},applyFormRules:Object.freeze({application_reason:[{required:true,message:"请填写申请理由",trigger:"blur"}]})}},computed:{groupUsers:function t(e){var a;return(a=e.$http.cache.get(s.GROUP_USERS_KEYNAME))!==null&&a!==void 0?a:[]},award:function t(e){return e.awardDetail()},formType:function t(e){return e.$route.query[s.DETAIL_TYPE_KEYNAME]||s.DETAIL_APPLY}},created:function t(){this.handleInit()},methods:{handleInit:function t(){var e;(e=this.config[this.$route.query[s.DETAIL_TYPE_KEYNAME]])===null||e===void 0?void 0:e.init()},handleSetDefaultInfo:function t(){},validator:function t(){return this.$refs["apply-form"].validate()},handleToSaveApplyForm:function t(e){var a=this;return(0,i.default)(n.default.mark(function t(){return n.default.wrap(function t(r){while(1){switch(r.prev=r.next){case 0:r.next=2;return a.validator();case 2:a.handleToDealWidthApply(true,e).then(function(t){a.messageSuccess("保存草稿成功")});case 3:case"end":return r.stop()}}},t)}))()},handleToSendApplyForm:function t(e){var a=this;return(0,i.default)(n.default.mark(function t(){return n.default.wrap(function t(r){while(1){switch(r.prev=r.next){case 0:r.next=2;return a.validator();case 2:a.handleToDealWidthApply(false,e).then(function(t){a.messageSuccess("申请成功");return a.$router.replace({name:s.MYAPPLY_ROUTE_PATH})});case 3:case"end":return r.stop()}}},t)}))()},handleToDealWidthApply:function t(e,a){return(0,c.postRecord)(e,d({award_department_id:this.award["award_department_id"],award_id:this.award["id"]},a))},handleOnlyGroup:function t(e){var a=e["departments"].map(function(t){return t["full_name"]});var r=this.$route.params["award_department_fullname"];return a.includes(r)},handleGetRecord:function t(){var e=this;return(0,l.getApplicationById)(this.$route.query["record_id"]).then(function(t){var a=t.data;e.applyForm.application_users=(0,p.formatUsernameAndDisplayName)(a.application_users[0]["username"],a.application_users[0]["display_name"]);e.applyForm.application_reason=a.application_reason;e.applyForm.application_attachments=a.application_attachments})}}};e.default=f},315:function(t,e,a){},368:function(t,e,a){"use strict";a.r(e);var r=a(408);var n=a(313);for(var i in n)if(i!=="default")(function(t){a.d(e,t,function(){return n[t]})})(i);var o=a(369);var s=a(7);var c=Object(s["a"])(n["default"],r["a"],r["b"],false,null,"321932c7",null);e["default"]=c.exports},369:function(t,e,a){"use strict";var r=a(315);var n=a.n(r);var i=n.a},408:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"apply-form-container"},[a("bk-form",{ref:"apply-form",staticClass:"form",staticStyle:{height:"400px"},attrs:{"label-width":90,rules:t.applyFormRules,model:t.applyForm}},[a("bk-form-item",{directives:[{name:"show",rawName:"v-show",value:!t.config[t.formType]["is_editor"],expression:"!config[formType]['is_editor']"}],attrs:{label:"申请人"}},[a("bk-input",{attrs:{disabled:!t.config[t.formType]["is_editor"]},model:{value:t.applyForm.application_users,callback:function(e){t.$set(t.applyForm,"application_users",e)},expression:"applyForm.application_users"}})],1),t._v(" "),a("bk-form-item",{attrs:{label:"申请理由",required:"true",property:"application_reason"}},[a("bk-input",{attrs:{placeholder:"请输入255字以内的申请理由",type:"textarea",rows:3,maxlength:255,disabled:!t.config[t.formType]["is_editor"]},model:{value:t.applyForm["application_reason"],callback:function(e){t.$set(t.applyForm,"application_reason",e)},expression:"applyForm['application_reason']"}})],1),t._v(" "),a("bk-form-item",{attrs:{label:"申请材料"}},[a("Uploader",{staticClass:"mb20",staticStyle:{"max-height":"300px","overflow-y":"scroll"},attrs:{limit:2,readonly:!t.config[t.formType]["is_editor"]},model:{value:t.applyForm["application_attachments"],callback:function(e){t.$set(t.applyForm,"application_attachments",e)},expression:"applyForm['application_attachments']"}})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.config[t.formType]["hidden_button"],expression:"!config[formType]['hidden_button']"}],staticClass:"button-item"},[a("bk-button",{staticClass:"mr10",attrs:{theme:"danger","ext-cls":"button-item"},on:{click:function(e){t.$router.back()}}},[a("bk-icon",{attrs:{type:"minus-circle"}}),t._v(" "),a("span",[t._v("取消")])],1),t._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary","ext-cls":"button-item"},on:{click:function(e){t.handleToSaveApplyForm(t.applyForm)}}},[a("bk-icon",{attrs:{type:"save"}}),t._v(" "),a("span",[t._v("保存草稿")])],1),t._v(" "),t.formType==="apply"?a("bk-button",{staticClass:"mr10",attrs:{theme:"success","ext-cls":"button-item"},on:{click:function(e){t.handleToSendApplyForm(t.applyForm)}}},[a("bk-icon",{attrs:{type:"check-circle"}}),t._v(" "),a("span",[t._v("发起申请")])],1):t.formType===t.configType["draft_detail"]?a("bk-button",{staticClass:"mr10",attrs:{theme:"warning","ext-cls":"button-item"},on:{click:function(e){t.handleToSendApplyForm(t.applyForm)}}},[a("bk-icon",{attrs:{type:"check-circle"}}),t._v(" "),a("span",[t._v("重新申请")])],1):t._e()],1)],1)};var n=[];a.d(e,"a",function(){return r});a.d(e,"b",function(){return n})}}]);