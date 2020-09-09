(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(8),l=a.n(i),c=a(1),s=(a(7),a(3)),u=a.n(s),d=a(5),g=a(2),m=a(6);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var h=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},v=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},b=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},y=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},k="_task-list-header-module__ganttTable__3_ygE",x="_task-list-header-module__ganttTable_Header__1nBOt",p="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",w="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",T=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:k,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:x,style:{height:t-2}},o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:p,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:p,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0To")))},_="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",D="_task-list-table-module__taskListCell__3lLk3",C=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,i=e.fontSize,l=e.locale,c={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:_,style:{fontFamily:r,fontSize:i}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(l,c)),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(l,c)))})))},O="_tooltip-module__tooltipDefaultContainer__3T42e",S="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",j="_tooltip-module__tooltipDetailsContainer__25P-K",M=function(e){var t=e.x,a=e.rowHeight,n=e.svgHeight,i=e.task,l=e.fontSize,s=e.fontFamily,u=e.TooltipContent,d=Object(r.useRef)(null),g=Object(r.useState)(1e3),m=Object(c.a)(g,2),h=m[0],f=m[1],v=Object(r.useState)((i.index-1)*a),b=Object(c.a)(v,2),y=b[0],k=b[1];return Object(r.useEffect)((function(){if(d.current){var e=d.current.offsetHeight,t=i.index*a+a;e>t?k(.5*e):t+e>n&&k(n-1.05*e),f(1.1*d.current.scrollWidth)}}),[d,i]),o.a.createElement("foreignObject",{x:t,y:y,width:h,height:1e3},o.a.createElement("div",{ref:d,className:j},o.a.createElement(u,{task:i,fontSize:l,fontFamily:s})))},F=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:O,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),o.a.createElement("p",{className:S},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:S},!!t.progress&&"Progress: ".concat(t.progress," %")))},N="_scroll-module__scroll__3f9LK",W=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,i=e.headerHeight,l=e.onScroll,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:i},className:N,onScroll:l,ref:c},o.a.createElement("div",{style:{height:n,width:1}}))},H=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,i=e.rowWidth,l=e.rowHeight,c=e.scrollY,s=e.tasks,u=e.locale,d=e.ganttHeight,g=e.horizontalContainerClass,m=e.TaskListHeader,h=e.TaskListTable,f=Object(r.useRef)(null);Object(r.useEffect)((function(){f.current&&(f.current.scrollTop=c)}),[c]);var v={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:i},b={rowHeight:l,rowWidth:i,fontFamily:a,fontSize:n,tasks:s,locale:u};return o.a.createElement("div",null,o.a.createElement(m,Object.assign({},v)),o.a.createElement("div",{ref:f,className:g,style:d?{height:d}:{}},o.a.createElement(h,Object.assign({},b))))},L="_gantt-module__ganttVerticalContainer__CZjuD",z="_gantt-module__horizontalContainer__2B2zv",R="_gantt-module__wrapper__3eULf",Y="_grid-module__gridRow__2dZTy",P="_grid-module__gridRowLine__3rUKi",B="_grid-module__gridTick__RuwuK",I=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.gridWidth,l=e.columnWidth,c=e.todayColor,s=0,u=[],d=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:i,y2:0,className:P})],g=Object(m.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;u.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:s,width:i,height:r,className:Y})),d.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:s+r,x2:i,y2:s+r,className:P})),s+=r}}catch(w){g.e(w)}finally{g.f()}for(var v=new Date,b=0,y=[],k=o.a.createElement("rect",null),x=0;x<n.length;x++){var p=n[x];y.push(o.a.createElement("line",{key:p.getTime(),x1:b,y1:0,x2:b,y2:s,className:B})),(x+1!==n.length&&p.getTime()<v.getTime()&&n[x+1].getTime()>=v.getTime()||0!==x&&x+1===n.length&&p.getTime()<v.getTime()&&h(p,p.getTime()-n[x-1].getTime(),"millisecond").getTime()>=v.getTime())&&(k=o.a.createElement("rect",{x:b,y:0,width:l,height:s,fill:c})),b+=l}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},u),o.a.createElement("g",{className:"rowLines"},d),o.a.createElement("g",{className:"ticks"},y),o.a.createElement("g",{className:"today"},k))},Q=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(I,Object.assign({},e)))},V="_calendar-module__calendarBottomText__9w8d5",A="_calendar-module__calendarTopTick__1rLuZ",K="_calendar-module__calendarTopText__2q1Kt",U="_calendar-module__calendarHeader__35nLX",X=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,l=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:A,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:l,x:i,className:K},t))},G=function(e){var t=e.dates,a=e.locale,r=e.viewMode,i=e.headerHeight,l=e.columnWidth,s=e.fontFamily,u=e.fontSize,d=[],g=[];switch(r){case n.Month:var m=function(){for(var e=[],n=[],r=6*l,c=.5*i,s=0;s<t.length;s++){var u=t[s],d=v(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*i,x:l*s+.5*l,className:V},d)),0===s||u.getFullYear()!==t[s-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(X,{key:g,value:g,x1Line:l*s,y1Line:0,y2Line:c,xText:r+l*s-u.getMonth()*l,yText:.9*c}))}}return[e,n]}(),h=Object(c.a)(m,2);d=h[0],g=h[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,c=.5*i,s=t.length-1;s>=0;s--){var u=t[s],d="";0!==s&&u.getMonth()===t[s-1].getMonth()||(d="".concat(v(u,a),", ").concat(u.getFullYear()));var g="W".concat(y(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:l*s,className:V},g)),d&&(s!==t.length-1&&e.push(o.a.createElement(X,{key:d,value:d,x1Line:l*s+r*l,y1Line:0,y2Line:c,xText:l*s+l*r*.5,yText:.9*c})),r=0),r++}return[e,n]}(),b=Object(c.a)(f,2);d=b[0],g=b[1];break;case n.Day:var k=function(){for(var e=[],n=[],r=.5*i,c=0;c<t.length;c++){var s=t[c],u=s.getDate().toString();if(n.push(o.a.createElement("text",{key:s.getTime(),y:.8*i,x:l*c+.5*l,className:V},u)),c+1!==t.length&&s.getMonth()!==t[c+1].getMonth()){var d=v(s,a);e.push(o.a.createElement(X,{key:d+s.getFullYear(),value:d,x1Line:l*(c+1),y1Line:0,y2Line:r,xText:l*(c+1)-s.getDate()*l*.5,yText:.9*r}))}}return[e,n]}(),x=Object(c.a)(k,2);d=x[0],g=x[1];break;default:var p=function(){for(var e=[],c=[],u=r===n.HalfDay?2:4,d=.5*i,g=0;g<t.length;g++){var m=t[g],h=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(c.push(o.a.createElement("text",{key:m.getTime(),y:.8*i,x:l*g,className:V,fontFamily:s},h)),0===g||m.getDate()!==t[g-1].getDate()){var f="".concat(m.getDate()," ").concat(v(m,a));e.push(o.a.createElement(X,{key:f+m.getFullYear(),value:f,x1Line:l*g+u*l,y1Line:0,y2Line:d,xText:l*g+u*l*.5,yText:.9*d}))}}return[e,c]}(),w=Object(c.a)(p,2);d=w[0],g=w[1]}return o.a.createElement("g",{className:"calendar",fontSize:u,fontFamily:s},o.a.createElement("rect",{x:0,y:0,width:l*t.length,height:i,className:U}),g," ",d)},Z=function(e,t,a,n,r,o,i,l,c,s,u,d,m){var h=J(e.start,a,n,r),f=J(e.end,a,n,r),v=q(t,o,i),b=Object(g.a)({backgroundColor:d,backgroundSelectedColor:m,progressColor:s,progressSelectedColor:u},e.styles);return Object(g.a)(Object(g.a)({},e),{},{x1:h,x2:f,y:v,index:t,barCornerRadius:l,handleWidth:c,height:i,barChildren:[],styles:b})},J=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},q=function(e,t,a){return e*t+(t-a)/2},$=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},ee=function(e,t,a,n,r,o){var i=Object(g.a)({},a),l=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),l=i.progress!==a.progress;break;case"start":var s=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=s,(l=i.x1!==a.x1)&&(i.start=$(s,a.x1,a.start,n,r));break;case"end":var u=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=u,(l=i.x2!==a.x2)&&(i.end=$(u,a.x2,a.end,n,r));break;case"move":var d=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]}(e-o,n,a),m=Object(c.a)(d,2),h=m[0],f=m[1];(l=h!==a.x1)&&(i.start=$(h,a.x1,a.start,n,r),i.end=$(f,a.x2,a.end,n,r),i.x1=h,i.x2=f)}return{isChanged:l,changedTask:i}},te="_bar-module__barWrapper__1gfz9",ae="_bar-module__barHandle__I78P8",ne="_bar-module__barLabel__1nTVz",re="_bar-module__barLabelOutside__h9J4Q",oe="_bar-module__barBackground__3xu5M",ie=function(e){var t=e.x,a=e.y,n=e.width,i=e.height,l=e.isSelected,s=e.progressWidth,u=e.barCornerRadius,d=e.text,g=e.hasChild,m=e.arrowIndent,h=e.styles,f=e.onMouseDown,v=Object(r.useRef)(null),b=Object(r.useState)(!0),y=Object(c.a)(b,2),k=y[0],x=y[1];Object(r.useEffect)((function(){v.current&&x(v.current.getBBox().width<n)}),[v,n]);return o.a.createElement("g",{onMouseDown:f},o.a.createElement("rect",{x:t,width:n,y:a,height:i,ry:u,rx:u,fill:l?h.backgroundSelectedColor:h.backgroundColor,className:oe}),o.a.createElement("rect",{x:t,width:s,y:a,height:i,ry:u,rx:u,fill:l?h.progressSelectedColor:h.progressColor}),o.a.createElement("text",{x:k?t+.5*n:t+n+m*+g+.2*m,y:a+.5*i,className:k?ne:re,ref:v},d))},le=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,l=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:ae,ry:i,rx:i,onMouseDown:l})},ce=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:ae,points:t,onMouseDown:a})},se=function(e){var t,a,n,i,l,s,u=e.task,d=e.arrowIndent,g=e.isProgressChangeable,m=e.isDateChangeable,h=e.onEventStart,f=e.isDelete,v=Object(r.useState)(!1),b=Object(c.a)(v,2),y=b[0],k=b[1],x=(t=u.x1,a=u.x2,n=u.progress,(a-t)*n*.01),p=(i=x+u.x1,l=u.y,s=u.height,[i-5,l+s,i+5,l+s,i,l+s-8.66].join(","));return o.a.createElement("g",{className:te,tabIndex:0,onKeyDown:function(e){switch(e.key){case"Delete":f&&h(e,"delete",u)}e.stopPropagation()},onMouseEnter:function(e){h(e,"mouseenter",u)},onMouseLeave:function(e){h(e,"mouseleave",u)},onDoubleClick:function(e){h(e,"dblclick",u)},onFocus:function(e){k(!0),h(e,"select",u)},onBlur:function(e){k(!1),h(e,"unselect",u)}},o.a.createElement(ie,{x:u.x1,y:u.y,width:u.x2-u.x1,height:u.height,progressWidth:x,barCornerRadius:u.barCornerRadius,text:u.name,hasChild:u.barChildren.length>0,arrowIndent:d,styles:u.styles,isSelected:y,onMouseDown:function(e){m&&h(e,"move",u)}}),o.a.createElement("g",{className:"handleGroup"},m&&o.a.createElement("g",null,o.a.createElement(le,{x:u.x1+1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){h(e,"start",u)}}),o.a.createElement(le,{x:u.x2-u.handleWidth-1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){h(e,"end",u)}})),g&&o.a.createElement(ce,{progressPoint:p,onMouseDown:function(e){h(e,"progress",u)}})))},ue=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.arrowIndent,i=t.index>a.index?-1:1,l=a.y+a.height/2,c="M ".concat(t.x2," ").concat(t.y+t.height/2," \n  h ").concat(r," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-r," \n  V ").concat(l," \n  h ").concat(r),s="".concat(a.x1,",").concat(l," \n  ").concat(a.x1-5,",").concat(l-5," \n  ").concat(a.x1-5,",").concat(l+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:c,fill:"none"}),o.a.createElement("polygon",{points:s}))};function de(e){return void 0!==e.key}function ge(e){return void 0!==e.clientX}var me=function(e){var t,a=e.tasks,n=e.dates,i=e.rowHeight,l=e.barCornerRadius,s=e.columnWidth,m=e.barFill,h=e.barProgressColor,f=e.barProgressSelectedColor,v=e.barBackgroundColor,b=e.barBackgroundSelectedColor,y=e.handleWidth,k=e.timeStep,x=e.svg,p=e.svgHeight,w=e.arrowColor,T=e.arrowIndent,_=e.fontFamily,E=e.fontSize,D=e.onTasksChange,C=e.onDateChange,O=e.onProgressChange,S=e.onDoubleClick,j=e.onTaskDelete,F=e.onSelect,N=e.TooltipContent,W=null===x||void 0===x||null===(t=x.current)||void 0===t?void 0:t.createSVGPoint(),H=Object(r.useState)({action:""}),L=Object(c.a)(H,2),z=L[0],R=L[1],Y=Object(r.useState)([]),P=Object(c.a)(Y,2),B=P[0],I=P[1],Q=Object(r.useState)(0),V=Object(c.a)(Q,2),A=V[0],K=V[1],U=Object(r.useState)(0),X=Object(c.a)(U,2),G=X[0],J=X[1],q=Object(r.useState)(!1),$=Object(c.a)(q,2),te=$[0],ae=$[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;K(k*s/e)}),[s,n,k]),Object(r.useEffect)((function(){I(function(e,t,a,n,r,o,i,l,c,s,u){var d=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,g=n*r/100,m=e.map((function(e,r){return Z(e,r,t,d,a,n,g,o,i,l,c,s,u)}));return m=m.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=m.findIndex((function(t){return t.id===a[e]}));-1!==n&&m[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(a,n,s,i,m,l,y,h,f,v,b))}),[a,i,l,s,n,m,y,h,f,v,b]);var ne=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!de(t)){e.next=9;break}if("delete"!==a){e.next=7;break}if(!j){e.next=7;break}return e.next=5,j(n);case 5:void 0!==(r=e.sent)&&r&&(o=B.filter((function(e){return e.id!==n.id})),D(o),F&&F(n,!1));case 7:e.next=35;break;case 9:if(ge(t)){e.next=13;break}"select"===a?F&&F(n,!0):"unselect"===a&&F&&F(n,!1),e.next=35;break;case 13:if("mouseenter"!==a){e.next=17;break}z.action||R({action:a,selectedTask:n,originalTask:n}),e.next=35;break;case 17:if("mouseleave"!==a){e.next=21;break}"mouseenter"===z.action&&R({action:""}),e.next=35;break;case 21:if("dblclick"!==a){e.next=25;break}S&&S(n),e.next=35;break;case 25:if("move"!==a){e.next=34;break}if((null===x||void 0===x?void 0:x.current)&&W){e.next=28;break}return e.abrupt("return");case 28:W.x=t.clientX,l=W.matrixTransform(null===(i=x.current.getScreenCTM())||void 0===i?void 0:i.inverse()),J(l.x-n.x1),R({action:a,selectedTask:n,originalTask:n}),e.next=35;break;case 34:R({action:a,selectedTask:n,originalTask:n});case 35:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z.selectedTask&&W&&(null===x||void 0===x?void 0:x.current)){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),W.x=t.clientX,n=W.matrixTransform(null===x||void 0===x||null===(a=x.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=ee(n.x,z.action,z.selectedTask,A,k,G),o=r.isChanged,i=r.changedTask,o&&(I(B.map((function(e){return e.id===i.id?i:e}))),R(Object(g.a)(Object(g.a)({},z),{},{selectedTask:i})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(d.a)(u.a.mark((function a(n){var r,o,i,l,c,s,d,g,m,h,f,v;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=z.selectedTask,i=z.action,l=z.originalTask,o&&W&&(null===x||void 0===x?void 0:x.current)&&l){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),W.x=n.clientX,c=W.matrixTransform(null===x||void 0===x||null===(r=x.current.getScreenCTM())||void 0===r?void 0:r.inverse()),s=ee(c.x,i,o,A,k,G),d=s.changedTask,g=l.start!==d.start||l.end!==d.end||l.progress!==d.progress,x.current.removeEventListener("mousemove",e),x.current.removeEventListener("mouseup",t),R({action:""}),ae(!1),m=!0,"move"!==i&&"end"!==i&&"start"!==i||!C||!g){a.next=20;break}return a.next=16,C(d);case 16:void 0!==(h=a.sent)&&(m=h),a.next=25;break;case 20:if(!O||!g){a.next=25;break}return a.next=23,O(d);case 23:void 0!==(f=a.sent)&&(m=f);case 25:m||(d=l),v=B.map((function(e){return e.id===d.id?d:e})),D(v);case 28:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();te||"move"!==z.action&&"end"!==z.action&&"start"!==z.action&&"progress"!==z.action||!(null===x||void 0===x?void 0:x.current)||(x.current.addEventListener("mousemove",e),x.current.addEventListener("mouseup",t),ae(!0))}),[B,z,A,G,O,k,C,x,te]),o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:w,stroke:w},B.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(ue,{key:"Arrow from ".concat(e.id," to ").concat(B[t].id),taskFrom:e,taskTo:B[t],rowHeight:i,arrowIndent:T})}))}))),o.a.createElement("g",{className:"bar",fontFamily:_,fontSize:E},B.map((function(e){return o.a.createElement(se,{task:e,arrowIndent:T,isProgressChangeable:!!O&&!e.isDisabled,isDateChangeable:!!C&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:ne,key:e.id})}))),o.a.createElement("g",{className:"toolTip"},z.selectedTask&&o.a.createElement(M,{x:z.selectedTask.x2+T+.5*T,rowHeight:i,svgHeight:p,task:z.selectedTask,fontFamily:_,fontSize:E,TooltipContent:N})))},he=function(e){var t=e.gridProps,a=e.calendarProps,n=e.barProps,i=e.ganttHeight,l=e.scrollY,c=e.scrollX,s=e.onScroll,u=Object(r.useRef)(null),d=Object(r.useRef)(null),m=Object(r.useRef)(null),h=Object(g.a)(Object(g.a)({},n),{},{svg:u});return Object(r.useEffect)((function(){d.current&&(d.current.scrollTop=l)}),[l]),Object(r.useEffect)((function(){m.current&&(m.current.scrollLeft=c)}),[c]),o.a.createElement("div",{className:L,ref:m,onScroll:s},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:a.headerHeight,fontFamily:n.fontFamily},o.a.createElement(G,Object.assign({},a))),o.a.createElement("div",{ref:d,className:z,style:i?{height:i,width:t.gridWidth}:{width:t.gridWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:n.rowHeight*n.tasks.length,fontFamily:n.fontFamily,ref:u},o.a.createElement(Q,Object.assign({},t)),o.a.createElement(me,Object.assign({},h)))))},fe=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,l=e.columnWidth,s=void 0===l?60:l,u=e.listCellWidth,d=void 0===u?"155px":u,g=e.rowHeight,v=void 0===g?50:g,y=e.ganttHeight,k=void 0===y?0:y,x=e.viewMode,p=void 0===x?n.Day:x,w=e.locale,_=void 0===w?"en-GB":w,E=e.barFill,D=void 0===E?60:E,O=e.barCornerRadius,S=void 0===O?3:O,j=e.barProgressColor,M=void 0===j?"#a3a3ff":j,N=e.barProgressSelectedColor,L=void 0===N?"#8282f5":N,Y=e.barBackgroundColor,P=void 0===Y?"#b8c2cc":Y,B=e.barBackgroundSelectedColor,I=void 0===B?"#aeb8c2":B,Q=e.handleWidth,V=void 0===Q?8:Q,A=e.timeStep,K=void 0===A?3e5:A,U=e.arrowColor,X=void 0===U?"grey":U,G=e.fontFamily,Z=void 0===G?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":G,J=e.fontSize,q=void 0===J?"14px":J,$=e.arrowIndent,ee=void 0===$?20:$,te=e.todayColor,ae=void 0===te?"rgba(252, 248, 227, 0.5)":te,ne=e.TooltipContent,re=void 0===ne?F:ne,oe=e.TaskListHeader,ie=void 0===oe?T:oe,le=e.TaskListTable,ce=void 0===le?C:le,se=e.onDateChange,ue=e.onProgressChange,de=e.onDoubleClick,ge=e.onTaskDelete,me=e.onSelect,fe=Object(r.useRef)(null),ve=Object(r.useState)(t),be=Object(c.a)(ve,2),ye=be[0],ke=be[1],xe=Object(r.useState)(0),pe=Object(c.a)(xe,2),we=pe[0],Te=pe[1],_e=Object(r.useState)(0),Ee=Object(c.a)(_e,2),De=Ee[0],Ce=Ee[1],Oe=Object(r.useState)(!1),Se=Object(c.a)(Oe,2),je=Se[0],Me=Se[1],Fe=function(e,t){var a,r=e[0].start,o=e[0].end,i=Object(m.a)(e);try{for(i.s();!(a=i.n()).done;){var l=a.value;l.start<r&&(r=l.start),l.end>o&&(o=l.end)}}catch(c){i.e(c)}finally{i.f()}switch(t){case n.Month:r=h(r,-1,"month"),r=f(r,"month"),o=h(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=h(b(r),-7,"day"),o=h(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=h(r,-1,"day"),o=h(o,19,"day")}return[r,o]}(ye,p),Ne=Object(c.a)(Fe,2),We=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=h(r,1,"month");break;case n.Week:r=h(r,7,"day");break;case n.Day:r=h(r,1,"day");break;case n.HalfDay:r=h(r,12,"hour");break;case n.QuarterDay:r=h(r,6,"hour")}o.push(r)}return o}(Ne[0],Ne[1],p),He=v*t.length,Le=We.length*s,ze=ye.length*v;Object(r.useEffect)((function(){ke(t)}),[t]),Object(r.useEffect)((function(){var e=function(e){e.preventDefault();var t=we+e.deltaY;Te(t<0?0:t>ze-k?ze-k:t),Me(!0)};return fe.current&&k&&k<ye.length*v&&fe.current.addEventListener("wheel",e,{passive:!1}),function(){fe.current&&fe.current.removeEventListener("wheel",e)}}),[fe.current,we,k,ye,v]);var Re={columnWidth:s,gridWidth:Le,tasks:ye,rowHeight:v,dates:We,todayColor:ae},Ye={dates:We,locale:_,viewMode:p,headerHeight:i,columnWidth:s,fontFamily:Z,fontSize:q},Pe={tasks:ye,rowHeight:v,barCornerRadius:S,columnWidth:s,dates:We,barFill:D,barProgressColor:M,barProgressSelectedColor:L,barBackgroundColor:P,barBackgroundSelectedColor:I,handleWidth:V,arrowColor:X,timeStep:K,fontFamily:Z,fontSize:q,arrowIndent:ee,svgHeight:He,onTasksChange:function(e){ke(e)},onDateChange:se,onProgressChange:ue,onDoubleClick:de,onTaskDelete:ge,onSelect:me,TooltipContent:re},Be={rowHeight:v,rowWidth:d,fontFamily:Z,fontSize:q,tasks:ye,locale:_,headerHeight:i,scrollY:we,ganttHeight:k,horizontalContainerClass:z,TaskListHeader:ie,TaskListTable:ce};return o.a.createElement("div",{className:R,onKeyDown:function(e){e.preventDefault();var t=we,a=De,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=v,n=!1;break;case"Up":case"ArrowUp":t-=v,n=!1;break;case"Left":case"ArrowLeft":a-=s;break;case"Right":case"ArrowRight":a+=s}n?Ce(a<0?0:a>Le?Le:a):Te(t<0?0:t>ze-k?ze-k:t),Me(!0)},tabIndex:0,ref:fe},d&&o.a.createElement(H,Object.assign({},Be)),o.a.createElement(he,{gridProps:Re,calendarProps:Ye,barProps:Pe,ganttHeight:k,scrollY:we,scrollX:De,onScroll:function(e){De!==e.currentTarget.scrollLeft&&Ce(e.currentTarget.scrollLeft)}}),o.a.createElement(W,{ganttFullHeight:ze,ganttHeight:k,headerHeight:i,scroll:we,onScroll:function(e){we===e.currentTarget.scrollTop||je||Te(e.currentTarget.scrollTop),Me(!1)}}))},ve=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return o.a.createElement("div",{className:"ViewContainer"},o.a.createElement("button",{className:"Button",onClick:function(){return t(n.QuarterDay)}},"Quarter of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.HalfDay)}},"Half of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Day)}},"Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Week)}},"Week"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Month)}},"Month"),o.a.createElement("div",{className:"Switch"},o.a.createElement("label",{className:"Switch_Toggle"},o.a.createElement("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),o.a.createElement("span",{className:"Slider"})),"Show Task List"))},be=function(){var e=new Date,t=o.a.useState(n.Day),a=Object(c.a)(t,2),r=a[0],i=a[1],l=o.a.useState(!0),s=Object(c.a)(l,2),u=s[0],d=s[1],g=60;r===n.Month?g=300:r===n.Week&&(g=250);var m=[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"]},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",progress:70,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),16),name:"Release & Eat Pizza",id:"Task 6",progress:e.getMonth(),dependencies:["Task 4"],styles:{progressColor:"#ffbb54",progressSelectedColor:"#ff9e0d"}},{start:new Date(e.getFullYear(),e.getMonth(),24),end:new Date(e.getFullYear(),e.getMonth(),25),name:"Closing",id:"Task 9",progress:0,isDisabled:!0}],h=function(e){console.log("On date change Id:"+e.id)},f=function(e){return window.confirm("Are you sure about "+e.name+" ?")},v=function(e){console.log("On progress change Id:"+e.id)},b=function(e){alert("On Double Click event Id:"+e.id)},y=function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))};return o.a.createElement("div",null,o.a.createElement(ve,{onViewModeChange:function(e){return i(e)},onViewListChange:d,isChecked:u}),o.a.createElement("h3",null,"Gantt With Unlimited Height"),o.a.createElement(fe,{tasks:m,viewMode:r,onDateChange:h,onTaskDelete:f,onProgressChange:v,onDoubleClick:b,onSelect:y,listCellWidth:u?"155px":"",columnWidth:g}),o.a.createElement("h3",null,"Gantt With Limited Height"),o.a.createElement(fe,{tasks:m,viewMode:r,onDateChange:h,onTaskDelete:f,onProgressChange:v,onDoubleClick:b,onSelect:y,listCellWidth:u?"155px":"",ganttHeight:300,columnWidth:g}))};l.a.render(o.a.createElement(be,null),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.22a9d1f0.chunk.js.map