(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{267:function(e,a,t){"use strict";t.r(a);var n=t(268);var i=t.n(n);for(var s in n)if(s!=="default")(function(e){t.d(a,e,function(){return n[e]})})(s);a["default"]=i.a},268:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=void 0;var n=t(346);var i=t(151);var s={name:"message-list",components:{MessageCard:function e(){return t.e(24).then(t.bind(null,371))}},data:function e(){return{messageRemoteData:[],loading:false,pagination:{current:1,count:0,limit:10}}},computed:{messageData:function e(a){var t,n;return(t=(n=a.messageRemoteData)===null||n===void 0?void 0:n.map(function(e){return{msg_id:e["id"],group_id:e["group_id"],group_name:e["group_name"],action_type:e["action_type"],action_target:e["action_target"],action_username:e["action_username"],action_display_name:e["action_display_name"],action_display_name_for_display:(0,i.formatUsernameAndDisplayName)(e["action_username"],e["action_display_name"]),message:e["message"],is_read:e["is_read"]}}))!==null&&t!==void 0?t:[]}},created:function e(){this.handleInit()},methods:{handleInit:function e(){this.handleGetPageData()},handleSetLimit:function e(){this.pagination.current=1;return this.handleGetPageData()},handleGetPageData:function e(){var a=this;var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pagination.current;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pagination.limit;if(this.loading){return}this.loading=true;return(0,n.getMessage)({page:t,size:i}).then(function(e){a.messageRemoteData=e.data.data;a.pagination.count=e.data.count}).finally(function(e){a.loading=false})},handleRead:function e(a,t){var i=this;var s=a.msg_id,r=a.message;return(0,n.putMessage)({msg_id:s}).then(function(e){i.messageRemoteData[t]["is_read"]=true})}}};a.default=s},269:function(e,a,t){},345:function(e,a,t){"use strict";t.r(a);var n=t(394);var i=t(267);for(var s in i)if(s!=="default")(function(e){t.d(a,e,function(){return i[e]})})(s);var r=t(347);var o=t(18);var u=Object(o["a"])(i["default"],n["a"],n["b"],false,null,"1de6ab76",null);a["default"]=u.exports},346:function(e,a,t){"use strict";var n=t(1);Object.defineProperty(a,"__esModule",{value:true});a.getMessage=s;a.putMessage=r;var i=n(t(4));function s(e){var a=e.page,t=e.size;return i.default.get("/message/",{params:{page:a,size:t}})}function r(e){var a=e.msg_id;return i.default.put("/message/",{msg_id:a})}},347:function(e,a,t){"use strict";var n=t(269);var i=t.n(n);var s=i.a},394:function(e,a,t){"use strict";var n=function(){var e=this;var a=e.$createElement;var t=e._self._c||a;return t("div",{staticClass:"message-table"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.messageData.length,expression:"messageData.length"},{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.loading,title:"请稍等,正在为您安放数据"},expression:"{ isLoading: loading ,title: '请稍等,正在为您安放数据' }"}],staticClass:"message-content"},e._l(e.messageData,function(a,n){return t("message-card",{key:a["id"],attrs:{message:a},on:{"tool-click":function(t){e.handleRead(a,n)}}})}),1),e._v(" "),t("empty",{directives:[{name:"show",rawName:"v-show",value:!e.messageData.length,expression:"!messageData.length"}]}),e._v(" "),t("bk-pagination",{directives:[{name:"show",rawName:"v-show",value:e.pagination.count>2,expression:"pagination.count > 2"}],attrs:{small:true,current:e.pagination.current,count:e.pagination.count,limit:e.pagination.limit},on:{"update:current":function(a){e.$set(e.pagination,"current",a)},"update:limit":function(a){e.$set(e.pagination,"limit",a)},"limit-change":function(a){e.handleSetLimit()},change:function(a){e.handleInit()}}})],1)};var i=[];t.d(a,"a",function(){return n});t.d(a,"b",function(){return i})}}]);