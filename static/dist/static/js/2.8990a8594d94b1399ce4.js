(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{190:function(e,t,a){"use strict";a.r(t);var n=a(394);var r=a(251);for(var i in r)if(i!=="default")(function(e){a.d(t,e,function(){return r[e]})})(i);var l=a(18);var u=Object(l["a"])(r["default"],n["a"],n["b"],false,null,"004c0579",null);t["default"]=u.exports},251:function(e,t,a){"use strict";a.r(t);var n=a(252);var r=a.n(n);for(var i in n)if(i!=="default")(function(e){a.d(t,e,function(){return n[e]})})(i);t["default"]=r.a},252:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=a(7);var i=a(19);var l=a(14);var u=n(a(4));var s={name:"select-search",props:{value:{type:[Array,String,Number],default:function e(){return[]}},data:{type:Array,default:function e(){return[]}},multiple:{type:Boolean,default:function e(){return true}},type:{type:String,default:function e(){return"user"}},idKey:{type:String,default:function e(){return"id"}},displayKey:{type:String,default:function e(){return"id"}},filterFn:{type:Function,default:function e(){return function(){return true}}},clearable:{type:Boolean,default:function e(){return false}}},data:function e(t){return{config:{user:{func:t.handleGetUserManageListUsers,idKey:t.idKey||"id",displayKey:"display_name_for_display"},group:{func:t.handleGetDepartment,idKey:t.idKey||"id",displayKey:"full_name"},sys_group:{func:t.handleGetSysGroup,idKey:t.idKey||"id",displayKey:"full_name"},"bk-group":{func:t.handleGetBkGroup,idKey:t.idKey||"id",displayKey:"full_name"},self:{func:this.handleSetMySelfData,idKey:t.idKey||"id",displayKey:t.displayKey}},groupUsers:[],loading:false}},computed:{list:function e(t){var a,n,r;var i=t["config"];var l=t["type"];var e=(a=(n=t.groupUsers)===null||n===void 0?void 0:(r=n.filter)===null||r===void 0?void 0:r.call(n,function(e){return e[i[l]["displayKey"]]}).filter(t.filterFn))!==null&&a!==void 0?a:[];if(e&&!t.value&&!t.multiple){var u;t.handleChange(((u=e[0])===null||u===void 0?void 0:u[i[l]["idKey"]])||"")}if(l==="group"){return t.$bus.groupList}if(l==="self"){return t.data}return e}},created:function e(){this.handleInit()},methods:{handleInit:function e(){var t,a;var n=this.type;(t=this.config[n])===null||t===void 0?void 0:(a=t["func"])===null||a===void 0?void 0:a.call(t)},handleChange:function e(t){if(this.type==="group"){this.$bus.curGlobalGroupId=t}this.$emit("change",t);this.$emit("update:value",t)},handleGetBkGroup:function e(){var t=this;this.loading=true;var a=this.$http.cache.get(r.BK_GROUP_KEYNAME);if(a){this.groupUsers=a;this.loading=false;return}return this.$store.dispatch("bkInfo",{fromCache:true}).then(function(e){t.groupUsers=e["departments"];t.$http.cache.set(r.BK_GROUP_KEYNAME,e["departments"])}).finally(function(e){t.loading=false})},handleGetDepartment:function e(){this.groupUsers=this.$bus.groupList},handleGetUserManageListUsers:function e(){var t=this;this.loading=true;var a=this.$bus.curGlobalGroupId;return(0,i.getGroupUser)({groupId:a}).then(function(e){var n;var i=e.data;if(!i){t.messageWarn("出错啦");t.loading=false;return}t.groupUsers=(n=i===null||i===void 0?void 0:i.map(function(e){e["display_name_for_display"]=(0,l.formatUsernameAndDisplayName)(e["username"],e["display_name"]);return e}))!==null&&n!==void 0?n:[];u.default.cache.set(r.GROUP_USERS_KEYNAME+a,i)}).finally(function(e){t.loading=false})},handleSetMySelfData:function e(){this.groupUsers=this.data},handleGetSysGroup:function e(){var t=this;this.loading=true;var a=this.$http.cache.get(r.SYS_KEYNAME);if(a){this.groupUsers=a;this.loading=false;return}return(0,i.getGroupAll)().then(function(e){t.groupUsers=e.data;t.$http.cache.set(r.SYS_KEYNAME,e.data)}).finally(function(e){t.loading=false})}}};t.default=s},394:function(e,t,a){"use strict";var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("bk-select",{attrs:{placeholder:e.$attrs["placeholder"],"ext-cls":e.$attrs["ext-cls"],readonly:e.$attrs["readonly"],disabled:e.$attrs["disabled"],list:e.list,"id-key":e.config[e.type]["idKey"],"display-key":e.config[e.type]["displayKey"],loading:e.loading,clearable:e.clearable,searchable:true,"enable-virtual-scroll":true,multiple:e.multiple,"display-tag":true,value:e.value,"z-index":9999,"is-tag-width-limit":false,behavior:e.$attrs["behavior"]},on:{change:function(t){e.handleChange(t)}}})};var r=[];a.d(t,"a",function(){return n});a.d(t,"b",function(){return r})}}]);