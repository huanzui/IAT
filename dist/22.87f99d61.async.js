(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"I+uj":function(e,t,a){"use strict";var l=a("Kx42"),s=a("9IiP");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Ned6");var u=l(a("kCSO"));a("IVmH");var r=l(a("9Gyq"));a("NDJR");var n=l(a("O/nY")),d=l(a("JcFD")),f=l(a("1JdC")),c=l(a("Ack4")),i=l(a("z8zN")),m=l(a("DcvJ"));a("w5ni");var o,p,y,E=l(a("iKoH")),k=s(a("fjaS")),v=a("KTCi"),h=l(a("9plo")),x=a("32uE"),R=l(a("zHco")),g=l(a("oQmc")),C=(l(a("8dDR")),E.default.Panel),b=(o=(0,x.connect)(function(e){var t=e.system,a=e.task;return{system:t,task:a}}),o((y=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return a=(0,c.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(s))),a.state={taskResult:{},charData:[{title:"",x:0,y:0}],result:[{x:"\u6d4b\u8bd5\u901a\u8fc7",y:0},{x:"\u6d4b\u8bd5\u5931\u8d25",y:0}],dailyResult:[{failCount:0,runTime:0,day:"00000",taskCount:0,avrageElapsed:0}]},a.queryTaskInfo=function(e){a.props.dispatch({type:"task/queryTaskResult",payload:{id:e}}).then(function(){var e=a.props.task,t=[];e.taskResult.result&&e.taskResult.result.forEach(function(e){t.push({title:e.label,label:(0,h.default)(e.timeStamp).format("H:mm:ss"),x:parseInt(e.timeStamp,10),y:parseInt(e.elapsed,10)})}),a.setState({charData:t,taskResult:e.taskResult,result:[{x:"\u6d4b\u8bd5\u901a\u8fc7",y:e.taskResult.sucess},{x:"\u6d4b\u8bd5\u5931\u8d25",y:e.taskResult.fail}],dailyResult:e.taskResult.daily_result})})},a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.search;if(-1!==e.indexOf("?")){var t=e.substr(1);this.queryTaskInfo(t)}}},{key:"render",value:function(){var e=this.state,t=e.taskResult,a=e.result,l=e.dailyResult,s=k.default.createElement("div",{className:g.default.pageHeaderContent},k.default.createElement("p",null,"\u5f00\u59cb\u65f6\u95f4\uff1a",(0,h.default)(t.startTime).format("YYYY-MM-DD HH:mm:ss")),k.default.createElement("p",null,"\u7ed3\u675f\u65f6\u95f4\uff1a",(0,h.default)(t.endTime).format("YYYY-MM-DD HH:mm:ss")),k.default.createElement("p",null,"\u7528\u4f8b\u7edf\u8ba1\uff1a",k.default.createElement("span",{className:g.default.total},t.total)," \u603b\u6570",k.default.createElement("span",{className:g.default.sucess},t.sucess)," \u6210\u529f",k.default.createElement("span",{className:g.default.fail},t.fail)," \u5931\u8d25")),d=k.default.createElement("div",{className:g.default.extraImg},k.default.createElement(v.Pie,{data:a,colors:["#2ecc71","#e74c3c"],height:160,lineWidth:4}));return k.default.createElement(R.default,{title:t.testname,content:s,extraContent:d},k.default.createElement(u.default,{gutter:24},k.default.createElement(r.default,{xl:12,lg:24,md:24,sm:24,xs:24},k.default.createElement(n.default,{title:"\u672c\u6b21\u4efb\u52a1\u7ed3\u679c",bordered:!1},k.default.createElement(E.default,{className:g.default.resultCollapse},t.result&&t.result.map(function(e,t){return k.default.createElement(C,{header:e.label,key:t,className:"True"===e.success?g.default.caseSucess:g.default.caseFail},k.default.createElement("p",null,e.failureMessage))})))),k.default.createElement(r.default,{xl:12,lg:24,md:24,sm:24,xs:24},k.default.createElement(n.default,{title:"\u6bcf\u65e5\u8017\u65f6\u6570\u636e\u5bf9\u6bd4",bordered:!1},k.default.createElement("div",{style:{padding:"0 24px"}},k.default.createElement(v.Curved,{data:l}))),k.default.createElement(n.default,{style:{marginTop:10},title:"\u6bcf\u65e5\u7528\u4f8b\u6267\u884c\u60c5\u51b5",bordered:!1},k.default.createElement("div",{style:{padding:"0 24px"}},k.default.createElement(v.CurvedTwo,{data:l}))))))}}]),t}(k.PureComponent),p=y))||p),D=b;t.default=D}}]);