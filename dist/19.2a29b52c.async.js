(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Sx4j:function(e,t,a){"use strict";var l=a("Kx42"),r=a("9IiP");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("NDJR");var u=l(a("O/nY"));a("exC3");var n=l(a("kTaU"));a("7yTU");var d=l(a("w1zo"));a("Iv38");var s=l(a("K2bM")),f=l(a("iC6Q"));a("A4tV");var i=l(a("iZNX")),c=l(a("JcFD")),o=l(a("1JdC")),m=l(a("Ack4")),p=l(a("z8zN")),y=l(a("DcvJ"));a("XcO7");var v=l(a("Nyip"));a("lVCw");var h=l(a("elJD"));a("okGu");var k=l(a("izsL"));a("VrM9");var E,g,b,C,V=l(a("IOlO")),w=r(a("fjaS")),j=l(a("9plo")),q=a("32uE"),F=l(a("zHco")),T=l(a("IN2g")),x=l(a("oQmc")),H=V.default.Item,I=k.default.TextArea,P=h.default.Option,L=(v.default.Group,0),N=0,D=(E=(0,q.connect)(function(e){var t=e.system,a=e.task;return{system:t,task:a}}),g=V.default.create({onValuesChange:function(e,t,a){if(t)for(var l in t)if("project"===l){var r=a.project;console.log("projectId:",r);var u=e.dispatch;u({type:"task/queryProjectCaseList",payload:{id:r}})}}}),E(b=g((C=function(e){function t(){var e,a;(0,c.default)(this,t);for(var l=arguments.length,r=new Array(l),u=0;u<l;u++)r[u]=arguments[u];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(r))),a.state={projectList:[]},a.queryProjectList=function(){var e=a.props.dispatch;e({type:"system/queryProjectList",payload:{status:"1"}}).then(function(){var e=a.props.system;a.setState({projectList:e.projectList})})},a.handleBack=function(){var e=a.props.dispatch;e({type:"task/goListPage"})},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,r=t.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,t){if(!e){var a=(0,j.default)(t.runTime).format("HH:mm");t.runTime=a,l({type:"task/queryAddTask",payload:{info:t}})}})},a.addHeader=function(){var e=a.props.form,t=e.getFieldValue("headerkeys"),l=t.concat(++L);e.setFieldsValue({headerkeys:l})},a.addParam=function(){var e=a.props.form,t=e.getFieldValue("paramkeys"),l=t.concat(++N);e.setFieldsValue({paramkeys:l})},a.removeHeader=function(e){var t=a.props.form,l=t.getFieldValue("headerkeys");t.setFieldsValue({headerkeys:l.filter(function(t){return t!==e})})},a.removeParam=function(e){var t=a.props.form,l=t.getFieldValue("paramkeys");t.setFieldsValue({paramkeys:l.filter(function(t){return t!==e})})},a}return(0,y.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.queryProjectList()}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=a.getFieldDecorator,r=a.getFieldValue,c=t.task,o=this.state.projectList,m={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},p={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};l("headerkeys",{initialValue:[]});var y=r("headerkeys"),E=y.map(function(t,a){return w.default.createElement(V.default.Item,(0,f.default)({},0===a?m:p,{label:0===a?"\u8bf7\u6c42\u5934\u53c2\u6570":"",required:!1,key:t}),l("headers[".concat(t,"]"),{validateTrigger:["onChange","onBlur"]})(w.default.createElement(T.default,null)),y.length>0?w.default.createElement(i.default,{className:x.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeHeader(t)}}):null)});l("paramkeys",{initialValue:[]});var g=r("paramkeys"),b=g.map(function(t,a){return w.default.createElement(V.default.Item,(0,f.default)({},0===a?m:p,{label:0===a?"\u5168\u5c40\u53c2\u6570":"",required:!1,key:t}),l("params[".concat(t,"]"),{validateTrigger:["onChange","onBlur"]})(w.default.createElement(T.default,null)),g.length>0?w.default.createElement(i.default,{className:x.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeParam(t)}}):null)});return w.default.createElement(F.default,null,w.default.createElement(u.default,{bordered:!1},w.default.createElement(V.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},w.default.createElement(H,(0,f.default)({},m,{label:"\u9879\u76ee\u540d\u79f0"}),l("project",{rules:[{required:!0,message:"\u9879\u76ee\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}]})(w.default.createElement(h.default,{placeholder:"\u8bf7\u5148\u9009\u62e9\u9879\u76ee",style:{width:220}},o&&o.map(function(e){return w.default.createElement(P,{value:e.id,key:e.id,title:e.name},e.name)})))),w.default.createElement(H,(0,f.default)({},m,{label:"\u4efb\u52a1\u540d\u79f0"}),l("name",{rules:[{required:!0,message:"\u4efb\u52a1\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}]})(w.default.createElement(k.default,{placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}))),w.default.createElement(H,(0,f.default)({},m,{label:"\u4efb\u52a1\u63cf\u8ff0"}),l("taskDesc",{rules:[{required:!1}]})(w.default.createElement(I,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u63cf\u8ff0",rows:4}))),w.default.createElement(H,(0,f.default)({},m,{label:"\u4efb\u52a1\u7c7b\u578b"}),w.default.createElement("div",null,l("taskType",{rules:[{required:!0,message:"\u4efb\u52a1\u7c7b\u578b\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:"2"})(w.default.createElement(v.default.Group,null,w.default.createElement(v.default,{value:"1"},"\u5373\u65f6\u4efb\u52a1"),w.default.createElement(v.default,{value:"2"},"\u5b9a\u65f6\u4efb\u52a1"))),w.default.createElement(H,{style:{marginBottom:0}},l("runTime",{initialValue:(0,j.default)("12:08","HH:mm")})(w.default.createElement(s.default,{format:"HH:mm",style:{margin:"8px 0",display:"2"===r("taskType")?"block":"none"}}))))),w.default.createElement(H,(0,f.default)({},m,{label:"\u6d4b\u8bd5\u57df\u540d"}),l("domain",{rules:[{required:!0,message:"\u6d4b\u8bd5\u57df\u540d\u4e0d\u53ef\u4e3a\u7a7a"}]})(w.default.createElement(k.default,{placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u57df\u540d .eg: app.xxx.com"}))),w.default.createElement(H,(0,f.default)({},m,{label:"\u4ee3\u7406\u8bbe\u7f6e"}),l("proxy",{})(w.default.createElement(k.default,{placeholder:"\u683c\u5f0f: user:password@server:port"}))),w.default.createElement(V.default.Item,{className:x.default.listForm},E,w.default.createElement(V.default.Item,p,w.default.createElement(d.default,{type:"dashed",onClick:this.addHeader,style:{width:"100%"}},w.default.createElement(i.default,{type:"plus"})," \u8bbe\u7f6e\u8bf7\u6c42\u5934\u53c2\u6570"))),w.default.createElement(V.default.Item,{className:x.default.listForm},b,w.default.createElement(V.default.Item,p,w.default.createElement(d.default,{type:"dashed",onClick:this.addParam,style:{width:"100%"}},w.default.createElement(i.default,{type:"plus"})," \u6dfb\u52a0\u5168\u5c40\u9ed8\u8ba4\u53c2\u6570"))),w.default.createElement(H,(0,f.default)({},m,{label:"\u7528\u4f8b\u8bbe\u7f6e"}),l("case",{rules:[{required:!0,message:"\u4efb\u52a1\u7528\u4f8b\u4e0d\u53ef\u4e3a\u7a7a"}]})(w.default.createElement(n.default,{dataSource:c.caseData,titles:["\u9879\u76ee\u7528\u4f8b","\u4efb\u52a1\u7528\u4f8b"],targetKeys:r("case"),render:function(e){return e.name}}))),w.default.createElement(H,(0,f.default)({},p,{style:{marginTop:32}}),w.default.createElement(d.default,{onClick:function(){return e.handleBack()}},"\u53d6\u6d88"),w.default.createElement(d.default,{type:"primary",htmlType:"submit",style:{marginLeft:8}},"\u63d0\u4ea4")))))}}]),t}(w.PureComponent),b=C))||b)||b),S=D;t.default=S}}]);