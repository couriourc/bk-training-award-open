(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8,0,1],{195:function(t,e,a){"use strict";a.r(e);var r=a(318);var n=a(212);for(var u in n)if(u!=="default")(function(t){a.d(e,t,function(){return n[t]})})(u);var i=a(225);var o=a(7);var s=Object(o["a"])(n["default"],r["a"],r["b"],false,null,"4a4bcd31",null);e["default"]=s.exports},196:function(t,e,a){"use strict";a.r(e);var r=a(319);var n=a(215);for(var u in n)if(u!=="default")(function(t){a.d(e,t,function(){return n[t]})})(u);var i=a(7);var o=Object(i["a"])(n["default"],r["a"],r["b"],false,null,"2dd7145d",null);e["default"]=o.exports},203:function(t,e,a){"use strict";a.r(e);var r=a(373);var n=a(242);for(var u in n)if(u!=="default")(function(t){a.d(e,t,function(){return n[t]})})(u);var i=a(329);var o=a(7);var s=Object(o["a"])(n["default"],r["a"],r["b"],false,null,"42c1639b",null);e["default"]=s.exports},212:function(t,e,a){"use strict";a.r(e);var r=a(213);var n=a.n(r);for(var u in r)if(u!=="default")(function(t){a.d(e,t,function(){return r[t]})})(u);e["default"]=n.a},213:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var r={name:"Tabs",model:{prop:"curTab",event:"tab-click"},props:{tabItems:{type:Array,default:function t(){return[]}},defaultKey:{type:String,default:function t(){return null}},curTab:{type:String,default:function t(){var e,a;return this.defaultKey||((e=this.tabItems)===null||e===void 0?void 0:(a=e[0])===null||a===void 0?void 0:a["tab-key"])}}},data:function t(e){return{}},methods:{tabClick:function t(e){if(this.curTab===e["tab-key"])return;this.$emit("tab-click",e["tab-key"])}}};e.default=r},214:function(t,e,a){},215:function(t,e,a){"use strict";a.r(e);var r=a(216);var n=a.n(r);for(var u in r)if(u!=="default")(function(t){a.d(e,t,function(){return r[t]})})(u);e["default"]=n.a},216:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var r=a(229);var n=a(8);var u=a(22);var i={name:"select-search",props:{value:{type:[Array,String,Number],default:function t(){return[]}},data:{type:Array,default:function t(){return[]}},multiple:{type:Boolean,default:function t(){return true}},type:{type:String,default:function t(){return"user"}},idKey:{type:String,default:function t(){return"id"}},displayKey:{type:String,default:function t(){return"id"}},filterFn:{type:Function,default:function t(){return true}},clearable:{type:Boolean,default:function t(){return true}}},data:function t(e){return{config:{user:{func:e.handleGetUserManageListUsers,idKey:e.idKey||"id",displayKey:"display_name_for_display"},group:{func:e.handleGetDepartment,idKey:e.idKey||"id",displayKey:"full_name"},"bk-group":{func:e.handleGetBkGroup,idKey:e.idKey||"id",displayKey:"full_name"},secretary:{func:e.handleGetSecretaryDepartment,idKey:e.idKey||"id",displayKey:"full_name"},self:{func:this.handleSetMySelfData,idKey:e.idKey||"id",displayKey:e.displayKey}},groupUsers:[],loading:false}},computed:{list:function t(e){var a,r,n;var u=e["config"];var i=e["type"];var t=(a=(r=e.groupUsers)===null||r===void 0?void 0:(n=r.filter)===null||n===void 0?void 0:n.call(r,function(t){return t[u[i]["displayKey"]]}).filter(e.filterFn))!==null&&a!==void 0?a:[];if(i==="group"){return e.$bus.groupList}if(t&&!e.value&&!e.multiple){var o,s;console.log((o=t[0])===null||o===void 0?void 0:o[u[i]["idKey"]]);e.handleChange(((s=t[0])===null||s===void 0?void 0:s[u[i]["idKey"]])||"")}return t}},created:function t(){this.handleInit()},methods:{handleInit:function t(){var e,a;var r=this.type;(e=this.config[r])===null||e===void 0?void 0:(a=e["func"])===null||a===void 0?void 0:a.call(e)},handleChange:function t(e){if(this.type==="group"){this.$bus.curGlobalGroupId=e}this.$emit("change",e);this.$emit("update:value",e)},handleGetBkGroup:function t(){var e=this;this.loading=true;var a=this.$http.cache.get(n.BK_GROUP_KEYNAME);if(a){this.groupUsers=a;this.loading=false;return}return this.$store.dispatch("bkInfo",{fromCache:true}).then(function(t){e.groupUsers=t["departments"];e.$http.cache.set(n.BK_GROUP_KEYNAME,t["departments"])}).finally(function(t){e.loading=false})},handleGetDepartment:function t(){this.groupUsers=this.$bus.groupList},handleGetUserManageListUsers:function t(){var e=this;this.loading=true;var a=this.$bus.curGlobalGroupId;var r=this.$http.cache.get(n.GROUP_USERS_KEYNAME+a);if(r){this.groupUsers=r;this.loading=false;return}return(0,u.getGroupUser)({groupId:this.$bus.curGlobalGroupId}).then(function(t){if(!t.data){e.messageWarn("出错啦");e.loading=false;return}e.groupUsers=t.data.map(function(t){t["display_name_for_display"]="".concat(t["username"],"(").concat(t["display_name"],")");return t});e.$http.cache.set(n.GROUP_USERS_KEYNAME+a,t.data)}).finally(function(t){e.loading=false})},handleGetSecretaryDepartment:function t(){var e=this;return(0,r.getSecretaryDepartment)().then(function(t){if(!t.data){e.messageWarn("出错啦");e.loading=false}e.groupUsers=t.data;e.$http.cache.set(n.GROUP_SECRETARY_KEYNAME,t.data)})},handleSetMySelfData:function t(){this.groupUsers=this.data}}};e.default=i},218:function(t,e,a){"use strict";var r=a(1);Object.defineProperty(e,"__esModule",{value:true});Object.defineProperty(e,"tableMixins",{enumerable:true,get:function t(){return n.default}});var n=r(a(219))},219:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var r={data:function t(){return{remoteData:[],pagination:{current:1,count:0,limit:10},tableDataIsLoading:false,tableDataUrl:""}},methods:{handlePageSizeChange:function t(e){this.pagination.current=1;this.pagination.limit=e;this.handleGetPageData(this.pagination.current,e)},handleCurrentChange:function t(e){this.pagination.current=e;this.handleGetPageData(e,this.pagination.limit)},handleGetPageData:function t(e,a){var r=this;var n=this.tableDataUrl;this.tableDataIsLoading=true;return this.$http.get(n).then(function(t){r.remoteData=t.data.results}).finally(function(t){r.tableDataIsLoading=false})}}};e.default=r},225:function(t,e,a){"use strict";var r=a(214);var n=a.n(r);var u=n.a},229:function(t,e,a){"use strict";var r=a(1);Object.defineProperty(e,"__esModule",{value:true});e.getListDepartments=u;e.getListUsers=i;e.getSecretaryDepartment=o;var n=r(a(4));function u(t){var e=t.page,a=t.page_size,r=t.fuzzy_lookups;return n.default.get("/usermanage/list_departments/",{params:{page:e,page_size:a,fuzzy_lookups:r}})}function i(t){var e=t.page,a=t.page_size,r=t.fuzzy_lookups;return n.default.get("/usermanage/list_users/",{params:{page:e,page_size:a,fuzzy_lookups:r}})}function o(){return n.default.get("/secretary_department/")}},242:function(t,e,a){"use strict";a.r(e);var r=a(243);var n=a.n(r);for(var u in r)if(u!=="default")(function(t){a.d(e,t,function(){return r[t]})})(u);e["default"]=n.a},243:function(t,e,a){"use strict";var r=a(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var n=r(a(9));var u=r(a(10));var i=a(218);var o=a(22);var s=a(8);var l=r(a(196));var c=r(a(195));var d={name:s.GROUP_MANAGER_ROUTE_PATH,components:{Tabs:c.default,SelectSearch:l.default},mixins:[i.tableMixins],data:function t(e){return{remoteData:[],groupTabItems:[],groupCurIndexStatus:"",transferMyGroup:false,transferForm:{full_name:"",target_username:""},transferFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想移交的小组名",trigger:"blur"},{message:"请正确输入您想移交的小组名",trigger:"blur",validator:function t(){return e.$bus.curGlobalSelectedGroup["full_name"]===e.transferForm["full_name"]}}],target_username:[{required:true,message:"请选择你想转交给的用户",trigger:"blur"}]}),isOutCurGroup:false,outCurGroupForm:{},outCurGroupFormRules:Object.freeze({full_name:[{required:true,message:"请输入您想退出的小组名",trigger:"blur"},{message:"请正确输入您想退出的小组名",trigger:"blur",validator:function t(){return e.$bus.curGlobalSelectedGroup["full_name"]===e.outCurGroupForm["full_name"]}}]}),isInviteUser:false,isInviteUserForm:{}}},computed:{tableData:function t(e){var a,r;var n=e.remoteData;return(a=n===null||n===void 0?void 0:(r=n.map)===null||r===void 0?void 0:r.call(n,function(t){var e=t["username"];var a=t["display_name"];return{display_name:t["display_name"],email:t["email"],phone:t["phone"],user_id:t["user_id"],username:t["username"],display_name_for_display:e+"("+a+")"}}))!==null&&a!==void 0?a:[]}},created:function t(){this.handleInit()},methods:{handleInit:function t(){return Promise.all([this.handleGetPageData()])},toAddNewGroup:function t(e){e.show()},toRemoveUser:function t(e){var a=this;var r=e.username;var n={username:r};if(this.tableDataIsLoading){return}this.tableDataIsLoading=true;return(0,o.deleteGroupManage)(n).then(function(t){console.log(t);a.messageSuccess("移除成功")}).finally(function(t){a.tableDataIsLoading=false})},handlePageChange:function t(e){this.pagination.page=e;return this.handleGetPageData(e,this.pagination.limit)},handlePageLimitChange:function t(e){this.pagination.page=1;this.pagination.limit=e;return this.handleGetPageData(this.pagination.page,e)},handleGetPageData:function t(){var e=this;var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.page;var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;this.tableDataIsLoading=true;var n=this.$bus.curGlobalGroupId;var u={groupId:n};return(0,o.getGroupUser)(u).then(function(t){e.remoteData=t.data}).finally(function(t){e.tableDataIsLoading=false})},toJoinGroup:function t(){this.$bus.$emit(s.APP_GROUP_DIALOG,[true,true,"join"])},toCreateGroup:function t(){this.$bus.$emit(s.APP_GROUP_DIALOG,[true,true,"create"])},toTransferGroup:function t(){this.transferMyGroup=true},toInviteUser:function t(){},toOutCurGroup:function t(){this.isOutCurGroup=true},transferValidator:function t(){var e=this;return(0,u.default)(n.default.mark(function t(){var a;return n.default.wrap(function t(r){while(1){switch(r.prev=r.next){case 0:a=e.$refs["transfer-form"];return r.abrupt("return",a.validate().then(function(t){console.log(t)}));case 2:case"end":return r.stop()}}},t)}))()},handleTransferCurGroup:function t(){var e=this;return(0,u.default)(n.default.mark(function t(){var a,r,u;return n.default.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return e.transferValidator();case 2:a=n.sent;if(a){n.next=5;break}return n.abrupt("return");case 5:r=e.transferForm;n.next=8;return(0,o.putGroupManage)(r).then(function(t){e.$store.dispatch("userInfo");e.$bus.handleGetGroupList();return true}).catch(function(t){return false});case 8:u=n.sent;return n.abrupt("return",u);case 10:case"end":return n.stop()}}},t)}))()},handleOutCurGroup:function t(){var e=this;return(0,u.default)(n.default.mark(function t(){var a,r,u;return n.default.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:a=e.$bus.curGlobalGroupId;r={group_id:a};n.next=4;return(0,o.deleteGroupUser)(r).then(function(t){e.$store.dispatch("userInfo");return true}).catch(function(t){console.log(t);return false});case 4:u=n.sent;return n.abrupt("return",u);case 6:case"end":return n.stop()}}},t)}))()}}};e.default=d},244:function(t,e,a){},318:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("div",{staticClass:"tab-header"},[t._l(t.tabItems||[],function(e){return a("div",{key:e["tab-name"],class:["tab-item",{active:e["tab-key"]===t.curTab}],on:{click:function(a){t.tabClick(e)}}},[a("p",{directives:[{name:"waves",rawName:"v-waves"}]},[t._v("\n                "+t._s(e["tab-name"])+"\n            ")])])}),t._v(" "),a("div",{staticClass:"controller"},[t._t("right-controller")],2)],2),t._v(" "),a("div",{staticClass:"tab-content"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"tab-footer"},[t._t("tab-footer")],2)])};var n=[];a.d(e,"a",function(){return r});a.d(e,"b",function(){return n})},319:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("bk-select",{attrs:{placeholder:t.$attrs["placeholder"],"ext-cls":t.$attrs["ext-cls"],readonly:t.$attrs["readonly"],disabled:t.$attrs["disabled"],list:t.list,"id-key":t.config[t.type]["idKey"],"display-key":t.config[t.type]["displayKey"],loading:t.loading,clearable:t.clearable,searchable:true,"enable-virtual-scroll":true,multiple:t.multiple,"display-tag":true,value:t.value,"z-index":9999999999,"is-tag-width-limit":false,behavior:t.$attrs["behavior"]},on:{change:function(e){t.handleChange(e)}}})};var n=[];a.d(e,"a",function(){return r});a.d(e,"b",function(){return n})},329:function(t,e,a){"use strict";var r=a(244);var n=a.n(r);var u=n.a},373:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"group-manager-container"},[a("bk-dialog",{attrs:{"render-directive":"if","mask-close":false,"header-position":"left","confirm-fn":t.handleTransferCurGroup},model:{value:t.transferMyGroup,callback:function(e){t.transferMyGroup=e},expression:"transferMyGroup"}},[a("bk-form",{ref:"transfer-form",attrs:{"label-width":100,rules:t.transferFormRules,model:t.transferFormRules}},[a("bk-form-item",{attrs:{label:"确认小组名",required:true,property:"full_name"}},[a("bk-input",{attrs:{placeholder:"请再次输入小组名（"+t.$bus.curGlobalSelectedGroup["full_name"]+"）以确认移交"},model:{value:t.transferForm["full_name"],callback:function(e){t.$set(t.transferForm,"full_name",e)},expression:"transferForm['full_name']"}})],1),t._v(" "),a("bk-form-item",{attrs:{label:"移交对象",required:true,property:"target_username"}},[a("select-search",{attrs:{type:"self",data:t.tableData,"id-key":"username","display-key":"display_name_for_display",multiple:false,placeholder:"请选择组内成员转交权限",value:t.transferForm["target_username"]},on:{"update:value":function(e){t.$set(t.transferForm,"target_username",e)}}})],1)],1)],1),t._v(" "),a("bk-dialog",{attrs:{"render-directive":"if","mask-close":false,"header-position":"left","confirm-fn":t.handleOutCurGroup},model:{value:t.isOutCurGroup,callback:function(e){t.isOutCurGroup=e},expression:"isOutCurGroup"}},[a("bk-form",{attrs:{"label-width":100,rules:t.outCurGroupFormRules,model:t.outCurGroupForm}},[a("bk-form-item",{attrs:{label:"退出该小组",required:true}},[a("bk-input",{attrs:{placeholder:"请再次输入小组名（"+t.$bus.curGlobalSelectedGroup["full_name"]+"）以确认退出小组"},model:{value:t.outCurGroupForm["full_name"],callback:function(e){t.$set(t.outCurGroupForm,"full_name",e)},expression:"outCurGroupForm['full_name']"}})],1)],1)],1),t._v(" "),a("top-back"),t._v(" "),a("div",{staticClass:"controller-panel mt20 mb15"},[a("select-search",{staticStyle:{width:"calc(2*118px + 1*8px)","font-size":"15px"},attrs:{behavior:"simplicity","id-key":"group_id",type:"group",multiple:false,placeholder:"请选择需要查看的小组",clearable:false,value:t.$bus.curGlobalGroupId},on:{"update:value":function(e){t.$set(t.$bus,"curGlobalGroupId",e)},change:function(e){t.handleInit(e)}}}),t._v(" "),a("div",{staticClass:"button-panel"},[a("bk-button",{attrs:{theme:"success"},on:{click:function(e){t.toJoinGroup()}}},[t._v("加入小组")]),t._v(" "),a("bk-button",{attrs:{theme:"primary"},on:{click:function(e){t.toCreateGroup()}}},[t._v("创建小组")]),t._v(" "),a("bk-dropdown-menu",{ref:"dropdown"},[a("div",{staticClass:"dropdown-trigger-btn",attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[a("bk-button",{attrs:{theme:"danger"}},[t._v("更多操作 "),a("i",{class:["bk-icon icon-angle-down"]})])],1),t._v(" "),a("ul",{staticClass:"more-action",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[a("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(e){t.toOutCurGroup()}}},[t._v("邀请入组\n                    ")]),t._v(" "),t.$bus.isCurGroupAdmin?a("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(e){t.toTransferGroup()}}},[t._v("移交小组\n                    ")]):a("bk-button",{staticClass:"mb10",attrs:{text:true},on:{click:function(e){t.toOutCurGroup()}}},[t._v("退出小组\n                    ")])],1)])],1)],1),t._v(" "),a("tabs",[a("self-table",{attrs:{data:t.tableData,loading:t.tableDataIsLoading}},[a("bk-table-column",{attrs:{type:"index",label:"序号",width:80}}),t._v(" "),a("bk-table-column",{attrs:{label:"用户名",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["display_name"]))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"姓名",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["display_name"]))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["phone"]))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row["email"]))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"操作",fix:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("bk-popconfirm",{attrs:{trigger:"click",width:"280",disabled:!t.$bus.isCurGroupAdmin||e.row["username"]===t.$store.state.user["username"]},on:{confirm:function(a){t.toRemoveUser(e.row)}}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"demo-custom"},[a("i",{staticClass:"bk-icon icon-info-circle-shape pr5 content-icon",staticStyle:{color:"#cc1111"}}),t._v(" "),a("span",{staticClass:"content-text"},[t._v("注意: 将会移除该成员")])])]),t._v(" "),a("bk-button",{attrs:{theme:"primary",outline:true,text:true,disabled:!t.$bus.isCurGroupAdmin||e.row["username"]===t.$store.state.user["username"]}},[t._v("\n                            移除\n                        ")])],1)]}}])})],1)],1)],1)};var n=[];a.d(e,"a",function(){return r});a.d(e,"b",function(){return n})}}]);