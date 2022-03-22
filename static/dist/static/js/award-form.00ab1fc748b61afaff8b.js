(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{205:function(e,r,a){"use strict";a.r(r);var t=a(382);var n=a(248);for(var i in n)if(i!=="default")(function(e){a.d(r,e,function(){return n[e]})})(i);var s=a(335);var d=a(7);var o=Object(d["a"])(n["default"],t["a"],t["b"],false,null,"3d080a5b",null);r["default"]=o.exports},212:function(e,r,a){"use strict";var t=a(1);Object.defineProperty(r,"__esModule",{value:true});r.deleteAward=w;r.deleteRecord=f;r.getAppliedAwards=c;r.getAvailableAwards=l;r.getAwardById=v;r.getAwards=u;r.postAwards=o;r.postFinishAward=_;r.postRecord=m;r.putAward=p;var n=t(a(4));var i=t(a(3));function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function d(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach(function(r){(0,n.default)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function o(e){return i.default.post("awards/",e)}function u(e){var r=e.page,a=e.size;return i.default.get("awards/",{params:{page:r,size:a}})}function l(e){var r=e.page,a=e.size,t=e.award_status,n=e.group_id;return i.default.get("get_available_awards/",{params:{page:r,size:a,award_status:t,group_id:n}})}function c(e,r){return i.default.get("get_applyed_awards/",{params:{page:e,size:r}})}function m(e,r){return i.default.post("record/",d({is_draft:e},r))}function f(e){console.log(e);return i.default.delete("record/",{data:{id:e}})}function w(e){var r=e.awardId;return i.default.delete("awards/",{data:{award_id:r}})}function p(e,r){var a=r.award_name,t=r.award_level,n=r.award_description,s=r.award_consultant,d=r.award_image,o=r.award_department_fullname,u=r.award_reviewers,l=r.start_time,c=r.end_time,m=r.award_department_id,f=r.award_consultant_displayname,w=r.award_demand;return i.default.put("awards/",{award_id:e,award_name:a,award_level:t,award_description:n,award_consultant:s,award_image:d,award_department_fullname:o,award_reviewers:u,start_time:l,end_time:c,award_department_id:m,award_consultant_displayname:f,award_demand:w})}function v(e){return i.default.get("/awards/".concat(e,"/"))}function _(e){return i.default.post("/finish_award/".concat(e,"/"))}},248:function(e,r,a){"use strict";a.r(r);var t=a(249);var n=a.n(t);for(var i in t)if(i!=="default")(function(e){a.d(r,e,function(){return t[e]})})(i);r["default"]=n.a},249:function(e,r,a){"use strict";var t=a(1);Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;var n=t(a(9));var i=t(a(10));var s=a(155);var d=a(8);var o=a(212);var u=t(a(0));var l=0;function c(){l=null}var m={name:"new-award-form",components:{SelectSearch:function e(){return a.e(1).then(a.bind(null,196))}},props:{awardFormType:{type:String,default:"create"}},data:function e(r){var a=this;return{awardForm:{award_name:"",award_consultant:"",award_demand:"",start_time:null,end_time:null,award_description:"",award_level:"",award_department_id:"",award_department_fullname:"",award_reviewers:"",reviewers:[{uuid:l++,value:[]}]},awardFormRules:Object.freeze({award_name:[{message:"请填写奖项名",required:true,trigger:"blur"}],award_consultant:[{message:"请选择咨询人",required:true,trigger:"blur"}],award_demand:[{message:"请填写奖项需求",required:true,trigger:"blur"}],end_time:[{message:"请补充奖项时间",trigger:"blur",validator:function e(){return r.awardForm["end_time"]}},{message:"截止时间应该比现在更晚",trigger:"blur",validator:function e(){var a=(0,u.default)(r.awardForm["end_time"]);var t=(0,u.default)();return t.diff(a,"seconds")}}],award_description:[{message:"请填写奖项描述",required:true,trigger:"blur"}],reviewers:[{message:"请选择评审人",required:true,trigger:"blur"},{message:"请选择评审人",validator:function e(){var a,t;return(a=r.awardForm["reviewers"])===null||a===void 0?void 0:(t=a[0])===null||t===void 0?void 0:t.value},trigger:"blur"}]}),awardLevels:d.AWARD_LEVEL_MAP,submitLoading:false,config:{edit:{title:"编辑奖项","title-clz":"edit","button-title":"提交修改","button-theme":"warning","confirm-func":this.handleConfirmModifyAward,"cancel-func":function e(){a.$router.replace({name:d.AWARD_MANAGER_ROUTE_PATH})}},create:{title:"新增奖项","title-clz":"new","button-title":"确认新增","button-theme":"success","confirm-func":this.handleConfirmAddNewAward,"cancel-func":function e(){a.$router.go(-1)}}}}},computed:{formType:function e(r){return r.$route.query[d.AWARD_TYPE_ROUTE_KEY]||"create"},groupInfo:{get:function e(r){return r.awardForm.award_department_fullname},set:function e(r){var a=this.awardForm;a.award_department_fullname=r}},awardFormStartEndTime:{get:function e(r){return[r.awardForm.start_time,r.awardForm.end_time]},set:function e(r){if(r.every(function(e){return e})){this.awardForm.start_time=r[0];this.awardForm.end_time=r[1]}}}},beforeCreate:function e(){l=0;this.$once("hook:deactivated",c);this.$once("hook:beforeDestroy",c)},created:function e(){this.handleInit()},methods:{handleInit:function e(){if(this.formType===d.AWARD_TYPE_EDIT&&this.$route.query["award_id"]){this.handleGetAwardDetailById(this.$route.query["award_id"]);this.$bus.headerName="编辑奖项"}},handleGetAwardDetailById:function e(r){var a=this;if(r){return(0,o.getAwardById)(r).then(function(e){var r=e.data;try{r["award_consultant_displayname"]=(0,s.formatUsernameAndDisplayName)(r["award_consultant"],r["award_consultant_displayname"]);r["reviewers"]=r["reviewers"]=r["award_reviewers"].map(function(e){return{uuid:l++,value:e}});a.$bus.curGlobalGroupId=r["award_department_id"]}catch(e){console.error(e)}a.awardForm=r})}},validator:function e(){var r=this;var a=this.awardForm;var t=true;return this.$refs["award-form"].validate().then(function(e){if(!(a["reviewers"]&&a["reviewers"][0].value.length)){r.messageWarn("至少有一级评审人");t=false}a["award_reviewers"]=a["reviewers"].map(function(e){return e.value});return Promise.resolve(t)}).catch(function(e){return Promise.resolve(false)})},getFields:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var a,t;return n.default.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return r.validator();case 2:a=n.sent;if(!a){n.next=11;break}t=r.awardForm;t.start_time=(0,s.formatDate)(t.start_time);t.end_time=(0,s.formatDate)(t.end_time);r.awardForm["award_consultant_displayname"]=r.$bus.curGroupUsers.find(function(e){return e["username"]===t["award_consultant"]})["display_name"];r.awardForm["award_department_id"]=r.$bus.curGlobalGroupId;r.awardForm["award_department_fullname"]=r.$bus.curGlobalSelectedGroup["full_name"];return n.abrupt("return",t);case 11:return n.abrupt("return",null);case 12:case"end":return n.stop()}}},e)}))()},addReviewer:function e(r,a){r.push({uuid:l++,value:[]});if(a.scrollHeight>a.clientHeight){setTimeout(function(){a.scrollTop=a.scrollHeight})}},removeReviewer:function e(r,a){var t=r.findIndex(function(e){return e.uuid===a});r.splice(t,1)},handleConfirmAddNewAward:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var a;return n.default.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return r.getFields();case 2:a=t.sent;if(a){t.next=5;break}return t.abrupt("return",null);case 5:if(!r.submitLoading){t.next=7;break}return t.abrupt("return",null);case 7:r.submitLoading=true;return t.abrupt("return",(0,o.postAwards)(a).then(function(e){r.messageSuccess("创建成功");r.$router.replace({name:d.AWARD_MANAGER_ROUTE_PATH})}).catch(function(e){r.messageWarn("创建失败")}).finally(function(e){r.submitLoading=false}));case 9:case"end":return t.stop()}}},e)}))()},handleConfirmModifyAward:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var a;return n.default.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return r.getFields();case 2:a=t.sent;if(a){t.next=5;break}return t.abrupt("return",null);case 5:if(!r.submitLoading){t.next=7;break}return t.abrupt("return",null);case 7:r.submitLoading=true;return t.abrupt("return",(0,o.putAward)(r.$route.query["award_id"],a).then(function(e){r.messageSuccess("修改成功")}).catch(function(e){r.messageWarn("修改失败")}).finally(function(e){r.submitLoading=false}));case 9:case"end":return t.stop()}}},e)}))()}}};r.default=m},250:function(e,r,a){},335:function(e,r,a){"use strict";var t=a(250);var n=a.n(t);var i=n.a},382:function(e,r,a){"use strict";var t=function(){var e=this;var r=e.$createElement;var a=e._self._c||r;return a("div",{staticClass:"new-award-form-container"},[a("top-back"),e._v(" "),a("div",{staticClass:"controller-panel mt20 mb15"},[a("select-search",{staticStyle:{width:"calc(2*118px + 1*8px)","font-size":"15px"},attrs:{behavior:"simplicity","id-key":"group_id",type:"group",multiple:false,placeholder:"请选择需要查看的小组",clearable:false,value:e.$bus.curGlobalGroupId},on:{"update:value":function(r){e.$set(e.$bus,"curGlobalGroupId",r)},change:function(r){e.handleInit(r)}}})],1),e._v(" "),e.$bus.isCurGroupAdmin?a("div",{staticClass:"form-container"},[a("bk-form",{ref:"award-form",attrs:{"form-type":"vertical",rules:e.awardFormRules,model:e.awardForm}},[a("bk-container",{attrs:{col:12}},[a("bk-row",{staticClass:"mt15 mb15"},[a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"奖项名称",required:true,property:"award_name"}},[a("bk-input",{attrs:{placeholder:"请输入奖项名称"},model:{value:e.awardForm["award_name"],callback:function(r){e.$set(e.awardForm,"award_name",r)},expression:"awardForm['award_name']"}})],1)],1),e._v(" "),a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"奖项申请顾问",required:true,property:"award_consultant"}},[a("select-search",{attrs:{multiple:false,"id-key":"username",placeholder:"请选择申请顾问",value:e.awardForm["award_consultant"]},on:{"update:value":function(r){e.$set(e.awardForm,"award_consultant",r)}}})],1)],1)],1),e._v(" "),a("bk-row",{staticClass:"mt15 mb15"},[a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"申请要求",required:true,property:"award_demand"}},[a("bk-input",{attrs:{placeholder:"请输入255个字符以内",type:"textarea",rows:3,maxlength:255},model:{value:e.awardForm["award_demand"],callback:function(r){e.$set(e.awardForm,"award_demand",r)},expression:"awardForm['award_demand']"}})],1)],1),e._v(" "),a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"奖项描述",required:true,property:"award_description"}},[a("bk-input",{attrs:{placeholder:"请输入255个字符以内",type:"textarea",rows:3,maxlength:255},model:{value:e.awardForm["award_description"],callback:function(r){e.$set(e.awardForm,"award_description",r)},expression:"awardForm['award_description']"}})],1)],1)],1),e._v(" "),a("bk-row",{staticClass:"mt15 mb15"},[a("bk-col",{attrs:{span:7}},[a("bk-form-item",{attrs:{label:"开放申请时间",required:true,property:"end_time","enter-mode":true}},[a("bk-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择日期时间范围",type:"datetimerange",format:"yyyy-MM-dd HH:mm"},model:{value:e.awardFormStartEndTime,callback:function(r){e.awardFormStartEndTime=r},expression:"awardFormStartEndTime"}})],1)],1)],1),e._v(" "),a("bk-row",{staticClass:"mt15 mb15"},[a("bk-col",{attrs:{span:12}},[a("p",{staticClass:"review-divider mt15 mb15"},[a("bk-icon",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.bottom-end",value:"同一级中任何有一人通过就表明该级审批通过",expression:"'同一级中任何有一人通过就表明该级审批通过'",modifiers:{"bottom-end":true}}],staticClass:"tips",attrs:{type:"info"}}),e._v(" "),a("span",{staticClass:"title"},[e._v(" 审批步骤: 1.xxx 2.xxx")])],1),e._v(" "),a("bk-form-item",[a("div",{ref:"review-container",staticClass:"review-container"},e._l(e.awardForm["reviewers"],function(r,t){return a("div",{key:r.uuid,staticClass:"reviewer-list mt10"},[a("span",{staticClass:"mr10 required"},[e._v("第 "+e._s(t+1)+" 批：")]),e._v(" "),a("select-search",{staticStyle:{width:"80%"},attrs:{value:r.value,placeholder:"请选择评审人",disabled:e.config[e.formType]["disabled"],"id-key":"username"},on:{"update:value":function(a){e.$set(r,"value",a)}}}),e._v(" "),a("div",{staticClass:"ml15"},[a("bk-button",{directives:[{name:"show",rawName:"v-show",value:e.awardForm["reviewers"].length>1,expression:"awardForm['reviewers'].length > 1"}],attrs:{theme:"danger",title:"移除同级评审人",icon:"minus-circle-shape"},on:{click:function(a){e.removeReviewer(e.awardForm["reviewers"],r.uuid)}}}),e._v(" "),a("bk-button",{directives:[{name:"show",rawName:"v-show",value:t===e.awardForm["reviewers"].length-1,expression:"index === awardForm['reviewers'].length - 1"}],attrs:{theme:"primary",title:"添加同级评审人",icon:"plus-circle-shape"},on:{click:function(r){e.addReviewer(e.awardForm["reviewers"],e.$refs["review-container"])}}})],1)],1)}),0)])],1)],1)],1),e._v(" "),a("div",{staticClass:"footer center-content mt20"},[a("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"danger"},on:{click:e.config[e.formType]["cancel-func"]}},[e._v("\n                    取消\n                ")]),e._v(" "),a("bk-button",{staticClass:"mr10 ml10",attrs:{theme:e.config[e.formType]["button-theme"]},on:{click:function(r){e.config[e.formType]["confirm-func"]()}}},[e._v("\n                    "+e._s(e.config[e.formType]["button-title"])+"\n                ")])],1)],1)],1):a("empty",[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",{staticClass:"mb20"},[e._v("不好意思，您不是该组管理员~")]),e._v("\n            请联系本组（"+e._s(e.$bus.curGlobalSelectedGroup["full_name"])+"）管理员: "),a("span",{staticStyle:{color:"#cc1111"}},[e._v("\n                "+e._s(e.$bus.curGlobalSelectedGroup["secretary_display_name_for_dispaly"])+"\n            ")])])])],1)};var n=[];a.d(r,"a",function(){return t});a.d(r,"b",function(){return n})}}]);