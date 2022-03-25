(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{196:function(e,r,t){"use strict";t.r(r);var a=t(382);var n=t(231);for(var i in n)if(i!=="default")(function(e){t.d(r,e,function(){return n[e]})})(i);var s=t(332);var u=t(18);var o=Object(u["a"])(n["default"],a["a"],a["b"],false,null,"35fe5874",null);r["default"]=o.exports},231:function(e,r,t){"use strict";t.r(r);var a=t(232);var n=t.n(a);for(var i in a)if(i!=="default")(function(e){t.d(r,e,function(){return a[e]})})(i);r["default"]=n.a},232:function(e,r,t){"use strict";var a=t(1);Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;var n=a(t(11));var i=a(t(12));var s=t(151);var u=t(7);var o=t(208);var d=a(t(0));var l=t(319);var c={name:"new-award-form",components:{SelectSearch:function e(){return t.e(0).then(t.bind(null,189))}},props:{awardFormType:{type:String,default:"create"}},data:function e(r){var t=this;return{awardForm:{award_name:"",award_consultant:"",award_demand:"",start_time:null,end_time:null,award_description:"",award_level:"",award_department_id:"",award_department_fullname:"",award_reviewers:"",reviewers:[{uuid:l.uuid.get(),value:[]}]},awardFormRules:Object.freeze({award_name:[{message:"请填写奖项名",required:true,trigger:"blur"}],award_consultant:[{message:"请选择咨询人",required:true,trigger:"blur"}],award_demand:[{message:"请填写奖项需求",required:true,trigger:"blur"}],end_time:[{message:"请补充奖项时间",trigger:"blur",validator:function e(){return r.awardForm["end_time"]}},{message:"截止时间应该比现在更晚",trigger:"blur",validator:function e(){var t=(0,d.default)(r.awardForm["end_time"]);var a=(0,d.default)();return a.diff(t,"seconds")}}],award_description:[{message:"请填写奖项描述",required:true,trigger:"blur"}],reviewers:[{message:"请选择评审人",required:true,trigger:"blur"},{message:"请选择评审人",validator:function e(){var t,a;return(t=r.awardForm["reviewers"])===null||t===void 0?void 0:(a=t[0])===null||a===void 0?void 0:a.value},trigger:"blur"}]}),awardLevels:u.AWARD_LEVEL_MAP,submitLoading:false,config:{edit:{title:"编辑奖项","title-clz":"edit","button-title":"提交修改","button-theme":"warning","confirm-func":this.handleConfirmModifyAward,"cancel-func":function e(){t.$router.replace({name:u.AWARD_MANAGER_ROUTE_PATH})}},create:{title:"新增奖项","title-clz":"new","button-title":"确认新增","button-theme":"success","confirm-func":this.handleConfirmAddNewAward,"cancel-func":function e(){t.$router.go(-1)}}}}},computed:{formType:function e(r){return r.$route.query[u.AWARD_TYPE_ROUTE_KEY]||"create"},groupInfo:{get:function e(r){return r.awardForm.award_department_fullname},set:function e(r){var t=this.awardForm;t.award_department_fullname=r}},awardFormStartEndTime:{get:function e(){return[this.awardForm.start_time,this.awardForm.end_time]},set:function e(r){if(r.every(function(e){return e})){if((0,d.default)(r[0]).diff((0,d.default)(r[1]),"seconds")<0){this.awardForm.start_time=r[0];this.awardForm.end_time=r[1]}else{this.awardForm.start_time=r[1];this.awardForm.end_time=r[0]}}}}},beforeCreate:function e(){this.$once("hook:deactivated",function(){return l.uuid.clear()});this.$once("hook:beforeDestroy",function(){return l.uuid.clear()})},created:function e(){this.handleInit()},methods:{handleInit:function e(){if(this.formType===u.AWARD_TYPE_EDIT&&this.$route.query["award_id"]){this.handleGetAwardDetailById(this.$route.query["award_id"]);this.$bus.headerName="编辑奖项"}},handleGetAwardDetailById:function e(r){var t=this;if(r){return(0,o.getAwardById)(r).then(function(e){var r=e.data;try{r["award_consultant_displayname"]=(0,s.formatUsernameAndDisplayName)(r["award_consultant"],r["award_consultant_displayname"]);r["reviewers"]=r["reviewers"]=r["award_reviewers"].map(function(e){return{uuid:l.uuid.get(),value:e}});t.$bus.curGlobalGroupId=r["award_department_id"]}catch(e){console.error(e)}t.awardForm=r})}},validator:function e(){var r=this;var t=this.awardForm;var a=true;return this.$refs["award-form"].validate().then(function(e){if(!(t["reviewers"]&&t["reviewers"][0].value.length)){r.messageWarn("至少有一级评审人");a=false}t["award_reviewers"]=t["reviewers"].map(function(e){return e.value});return Promise.resolve(a)}).catch(function(e){return Promise.resolve(false)})},getFields:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var t,a;return n.default.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return r.validator();case 2:t=n.sent;if(!t){n.next=11;break}a=r.awardForm;a.start_time=(0,s.formatDate)(a.start_time);a.end_time=(0,s.formatDate)(a.end_time);r.awardForm["award_consultant_displayname"]=r.$bus.curGroupUsers.find(function(e){return e["username"]===a["award_consultant"]})["display_name"];r.awardForm["award_department_id"]=r.$bus.curGlobalGroupId;r.awardForm["award_department_fullname"]=r.$bus.curGlobalSelectedGroup["full_name"];return n.abrupt("return",a);case 11:return n.abrupt("return",null);case 12:case"end":return n.stop()}}},e)}))()},addReviewer:function e(r,t){r.push({uuid:l.uuid.get(),value:[]});if(t.scrollHeight>t.clientHeight){setTimeout(function(){t.scrollTop=t.scrollHeight})}},removeReviewer:function e(r,t){var a=r.findIndex(function(e){return e.uuid===t});r.splice(a,1)},handleConfirmAddNewAward:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var t;return n.default.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.next=2;return r.getFields();case 2:t=a.sent;if(t){a.next=5;break}return a.abrupt("return",null);case 5:if(!r.submitLoading){a.next=7;break}return a.abrupt("return",null);case 7:r.submitLoading=true;return a.abrupt("return",(0,o.postAwards)(t).then(function(e){r.messageSuccess("创建成功");r.$router.replace({name:u.AWARD_MANAGER_ROUTE_PATH})}).catch(function(e){r.messageWarn("创建失败")}).finally(function(e){r.submitLoading=false}));case 9:case"end":return a.stop()}}},e)}))()},handleConfirmModifyAward:function e(){var r=this;return(0,i.default)(n.default.mark(function e(){var t;return n.default.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.next=2;return r.getFields();case 2:t=a.sent;if(t){a.next=5;break}return a.abrupt("return",null);case 5:if(!r.submitLoading){a.next=7;break}return a.abrupt("return",null);case 7:r.submitLoading=true;return a.abrupt("return",(0,o.putAward)(r.$route.query["award_id"],t).then(function(e){r.messageSuccess("修改成功")}).catch(function(e){r.messageWarn("修改失败")}).finally(function(e){r.submitLoading=false}));case 9:case"end":return a.stop()}}},e)}))()}}};r.default=c},233:function(e,r,t){},332:function(e,r,t){"use strict";var a=t(233);var n=t.n(a);var i=n.a},382:function(e,r,t){"use strict";var a=function(){var e=this;var r=e.$createElement;var t=e._self._c||r;return t("div",{staticClass:"new-award-form-container"},[t("top-back"),e._v(" "),t("div",{staticClass:"controller-panel mt20 mb15"},[t("select-search",{staticStyle:{width:"calc(2*118px + 1*8px)","font-size":"15px"},attrs:{behavior:"simplicity","id-key":"group_id",type:"group",multiple:false,placeholder:"请选择需要查看的小组",clearable:false,value:e.$bus.curGlobalGroupId},on:{"update:value":function(r){e.$set(e.$bus,"curGlobalGroupId",r)},change:function(r){e.handleInit(r)}}})],1),e._v(" "),e.$bus.isCurGroupAdmin?t("div",{staticClass:"form-container"},[t("bk-form",{ref:"award-form",attrs:{"form-type":"vertical",rules:e.awardFormRules,model:e.awardForm}},[t("bk-container",{attrs:{col:12}},[t("bk-row",{staticClass:"mt15 mb15"},[t("bk-col",{attrs:{span:6}},[t("bk-form-item",{attrs:{label:"奖项名称",required:true,property:"award_name"}},[t("bk-input",{attrs:{placeholder:"请输入奖项名称"},model:{value:e.awardForm["award_name"],callback:function(r){e.$set(e.awardForm,"award_name",r)},expression:"awardForm['award_name']"}})],1)],1),e._v(" "),t("bk-col",{attrs:{span:6}},[t("bk-form-item",{attrs:{label:"奖项申请顾问",required:true,property:"award_consultant"}},[t("select-search",{attrs:{multiple:false,"id-key":"username",placeholder:"请选择申请顾问",value:e.awardForm["award_consultant"]},on:{"update:value":function(r){e.$set(e.awardForm,"award_consultant",r)}}})],1)],1)],1),e._v(" "),t("bk-row",{staticClass:"mt15 mb15"},[t("bk-col",{attrs:{span:6}},[t("bk-form-item",{attrs:{label:"申请要求",required:true,property:"award_demand"}},[t("bk-input",{attrs:{placeholder:"请输入255个字符以内",type:"textarea",rows:3,maxlength:255},model:{value:e.awardForm["award_demand"],callback:function(r){e.$set(e.awardForm,"award_demand",r)},expression:"awardForm['award_demand']"}})],1)],1),e._v(" "),t("bk-col",{attrs:{span:6}},[t("bk-form-item",{attrs:{label:"奖项描述",required:true,property:"award_description"}},[t("bk-input",{attrs:{placeholder:"请输入255个字符以内",type:"textarea",rows:3,maxlength:255},model:{value:e.awardForm["award_description"],callback:function(r){e.$set(e.awardForm,"award_description",r)},expression:"awardForm['award_description']"}})],1)],1)],1),e._v(" "),t("bk-row",{staticClass:"mt15 mb15"},[t("bk-col",{attrs:{span:7}},[t("bk-form-item",{attrs:{label:"开放申请时间",required:true,property:"end_time","enter-mode":true}},[t("bk-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择日期时间范围",type:"datetimerange",format:"yyyy-MM-dd HH:mm"},model:{value:e.awardFormStartEndTime,callback:function(r){e.awardFormStartEndTime=r},expression:"awardFormStartEndTime"}})],1)],1)],1),e._v(" "),t("bk-row",{staticClass:"mt15 mb15"},[t("bk-col",{attrs:{span:12}},[t("p",{staticClass:"review-divider mt15 mb15"},[t("bk-icon",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.bottom-end",value:"同一级中任何有一人通过就表明该级审批通过",expression:"'同一级中任何有一人通过就表明该级审批通过'",modifiers:{"bottom-end":true}}],staticClass:"tips",attrs:{type:"info"}}),e._v(" "),t("span",{staticClass:"title"},[e._v(" 审批步骤: 1.xxx 2.xxx")])],1),e._v(" "),t("bk-form-item",[t("div",{ref:"review-container",staticClass:"review-container"},e._l(e.awardForm["reviewers"],function(r,a){return t("div",{key:r.uuid,staticClass:"reviewer-list mt10"},[t("span",{staticClass:"mr10 required"},[e._v("第 "+e._s(a+1)+" 批：")]),e._v(" "),t("select-search",{staticStyle:{width:"80%"},attrs:{value:r.value,placeholder:"请选择评审人",disabled:e.config[e.formType]["disabled"],"id-key":"username"},on:{"update:value":function(t){e.$set(r,"value",t)}}}),e._v(" "),t("div",{staticClass:"ml15"},[t("bk-button",{directives:[{name:"show",rawName:"v-show",value:e.awardForm["reviewers"].length>1,expression:"awardForm['reviewers'].length > 1"}],attrs:{theme:"danger",title:"移除同级评审人",icon:"minus-circle-shape"},on:{click:function(t){e.removeReviewer(e.awardForm["reviewers"],r.uuid)}}}),e._v(" "),t("bk-button",{directives:[{name:"show",rawName:"v-show",value:a===e.awardForm["reviewers"].length-1,expression:"index === awardForm['reviewers'].length - 1"}],attrs:{theme:"primary",title:"添加同级评审人",icon:"plus-circle-shape"},on:{click:function(r){e.addReviewer(e.awardForm["reviewers"],e.$refs["review-container"])}}})],1)],1)}),0)])],1)],1)],1),e._v(" "),t("div",{staticClass:"footer center-content mt20"},[t("bk-button",{staticClass:"mr10 ml10",attrs:{theme:"danger"},on:{click:e.config[e.formType]["cancel-func"]}},[e._v("\n                    取消\n                ")]),e._v(" "),t("bk-button",{staticClass:"mr10 ml10",attrs:{theme:e.config[e.formType]["button-theme"]},on:{click:function(r){e.config[e.formType]["confirm-func"]()}}},[e._v("\n                    "+e._s(e.config[e.formType]["button-title"])+"\n                ")])],1)],1)],1):t("empty",[t("div",{attrs:{slot:"description"},slot:"description"},[t("p",{staticClass:"mb20"},[e._v("不好意思，您不是该组管理员~")]),e._v("\n            请联系本组（"+e._s(e.$bus.curGlobalSelectedGroup["full_name"])+"）管理员: "),t("span",{staticStyle:{color:"#cc1111"}},[e._v("\n                "+e._s(e.$bus.curGlobalSelectedGroup["secretary_display_name_for_dispaly"])+"\n            ")])])])],1)};var n=[];t.d(r,"a",function(){return a});t.d(r,"b",function(){return n})}}]);