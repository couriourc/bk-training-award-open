(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{208:function(t,a,e){"use strict";e.r(a);var n=e(383);var i=e(258);for(var s in i)if(s!=="default")(function(t){e.d(a,t,function(){return i[t]})})(s);var r=e(338);var l=e(7);var o=Object(l["a"])(i["default"],n["a"],n["b"],false,null,"77eda9cd",null);a["default"]=o.exports},258:function(t,a,e){"use strict";e.r(a);var n=e(259);var i=e.n(n);for(var s in n)if(s!=="default")(function(t){e.d(a,t,function(){return n[t]})})(s);a["default"]=i.a},259:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=void 0;var n={name:"detail",components:{ApprovalList:function t(){return e.e(44).then(e.bind(null,363))},DetailInfo:function t(){return e.e(19).then(e.bind(null,364))},ApplyForm:function t(){return e.e(17).then(e.bind(null,366))}},props:{type:{type:String,default:function t(){return null}}},provide:function t(){var a=this;return{awardDetail:function t(){return a.$refs["award-detail"].awardForm}}},data:function t(){return{formType:"detail",isShow:false,applyForm:{},panelCutOut:false,applicationSteps:[{title:"奖项申请",icon:1,name:"apply"},{title:"奖项审批",icon:2},{title:"得知审批结果",icon:"success"}],applicationSteps2:[{title:"修改草稿",icon:1,name:"apply"},{title:"发起申请",icon:2},{title:"奖项审批",icon:"success"}],approvalTabItems:[{"tab-name":"审批列表","tab-key":"approval-list"}]}},computed:{isShowApplyForm:function t(){return["apply","edit","apply_detail"].includes(this.formType)}},created:function t(){this.handleInit()},methods:{handleInit:function t(){this.applyForm=this.$route.params;this.formType=this.$route.query["type"]},trigglePanel:function t(){this.panelCutOut=!this.panelCutOut},handleToPaasApproval:function t(){},handleToRejectApproval:function t(){},handleBatchPassApproval:function t(){},handleBatchRejectApproval:function t(){}}};a.default=n},260:function(t,a,e){},338:function(t,a,e){"use strict";var n=e(260);var i=e.n(n);var s=i.a},383:function(t,a,e){"use strict";var n=function(){var t=this;var a=t.$createElement;var e=t._self._c||a;return e("div",{staticClass:"detail-container"},[e("top-back"),t._v(" "),t.formType==="approval"?e("div",{class:["approval-list"]},[e("div",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"tip-button",on:{click:t.trigglePanel}},[t._v("\n            "+t._s(t.panelCutOut?"展开":"收起")+"\n        ")]),t._v(" "),e("div",{class:["approval-content",{not_active:t.panelCutOut}]},[e("tabs",{staticStyle:{height:"100%"},attrs:{"tab-items":t.approvalTabItems}},[[e("approval-list",{tag:"component"})]],2)],1)]):t._e(),t._v(" "),e("div",{staticClass:"board"},[e("div",{staticClass:"form-panel"},[e("DetailInfo",{ref:"award-detail",staticClass:"detail"}),t._v(" "),t.isShowApplyForm?e("ApplyForm",{ref:"applyForm",staticClass:"form",attrs:{id:t.applyForm["id"]}}):t._e()],1),t._v(" "),t.$route.query["type"]==="edit"?e("bk-steps",{staticClass:"mt20 pt20 pl20 pr20",attrs:{steps:t.applicationSteps2,size:"small"}}):e("bk-steps",{staticClass:"mt20 pt20 pl20 pr20",attrs:{steps:t.applicationSteps,size:"small"}})],1),t._v(" "),t.$route.query["type"]==="approval"?e("div",{staticClass:"tc w100  mt15"},[e("div",{staticClass:"button-item"},[e("bk-button",{staticClass:"mr20 ml20",attrs:{theme:"danger","ext-cls":"button-item"},on:{click:function(a){t.handleToPaasApproval()}}},[e("bk-icon",{attrs:{type:"close-circle"}}),t._v(" "),e("span",[t._v("不通过")])],1),t._v(" "),e("bk-button",{staticClass:"mr20 ml20",attrs:{theme:"success","ext-cls":"button-item"},on:{click:function(a){t.handleToRejectApproval()}}},[e("span",[t._v("通过")]),t._v(" "),e("bk-icon",{attrs:{type:"check-circle"}})],1)],1)]):t._e()],1)};var i=[];e.d(a,"a",function(){return n});e.d(a,"b",function(){return i})}}]);