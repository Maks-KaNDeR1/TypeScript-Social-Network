(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{219:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__6rxj1",dialogsItems:"Dialogs_dialogsItems__3gA3l",active:"Dialogs_active__2MX0L",dialog:"Dialogs_dialog__EU5iR",messages:"Dialogs_messages__9dv1e",message:"Dialogs_message__1aPDA",dialogF:"Dialogs_dialogF__NiBx-"}},220:function(e,s,a){e.exports={display:"Message_display__1EHVd",message:"Message_message__ABkZL",description:"Message_description__3trQ6",angle:"Message_angle__2v-k7",angleSent:"Message_angleSent__1R_z6",name:"Message_name__2eLj0",text:"Message_text__2Dm9O",time:"Message_time__1ODfc",nameSent:"Message_nameSent__2sRcT",textSent:"Message_textSent__2-uh7",timeSent:"Message_timeSent__1bH7-"}},221:function(e,s,a){e.exports={items:"AlternativeMessage_items__3Zmak"}},222:function(e,s,a){"use strict";var t=a(90);Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=t(a(91)),n=a(1),c=(0,i.default)((0,n.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.default=c},230:function(e,s,a){"use strict";a.r(s);var t=a(105),i=a(34),n=a(0),c=a.n(n),l=a(23),r=a(219),d=a.n(r),o=a(1),j=function(e){var s="/dialogs/"+e.id;return Object(o.jsxs)("div",{className:d.a.dialog+" "+d.a.active,children:[Object(o.jsx)("img",{src:e.src,alt:"ava"}),Object(o.jsx)(l.b,{to:s,children:e.name})]})},m=a(220),g=a.n(m),u=function(e){return"Maksim"===e.name?Object(o.jsx)("div",{className:g.a.displaySent,children:Object(o.jsxs)("div",{className:g.a.message,style:{justifyContent:"flex-end"},children:[Object(o.jsxs)("div",{className:g.a.description,style:{borderRadius:"26px 28px 0 26px"},children:[Object(o.jsx)("div",{className:g.a.nameSent,children:e.name}),Object(o.jsx)("div",{className:g.a.textSent,children:e.message}),Object(o.jsx)("span",{className:g.a.timeSent,children:e.time})]}),Object(o.jsx)("div",{className:g.a.angleSent}),Object(o.jsx)("img",{src:e.avatar,alt:"avatar"})]})}):Object(o.jsx)("div",{className:g.a.display,children:Object(o.jsxs)("div",{className:g.a.message,children:[Object(o.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(o.jsx)("div",{className:g.a.angle}),Object(o.jsxs)("div",{className:g.a.description,children:[Object(o.jsx)("div",{className:g.a.name,children:e.name}),Object(o.jsx)("div",{className:g.a.text,children:e.message}),Object(o.jsx)("span",{className:g.a.time,children:e.time})]})]})})},_=a(10),x=a(221),b=a.n(x),v=a(222),O=a.n(v);var h=function(e){var s=Object(n.useState)(""),a=Object(_.a)(s,2),t=a[0],i=a[1],c=function(){""!==t.trim()&&(e.addMessage(t),i(""),setTimeout((function(){e.scroll.current.scrollIntoView({behavior:"smooth"})}),0))};return Object(o.jsxs)("div",{className:b.a.items,children:[Object(o.jsx)("input",{type:"text",placeholder:" New message...",value:t,onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&c()}}),Object(o.jsx)(O.a,{style:{cursor:"pointer",marginBottom:"-6px"},onClick:c})]})};var p=function(e){var s=e.dialogs.map((function(e){return Object(o.jsx)(j,{name:e.name,id:e.id,src:e.src},e.id)})),a=e.message.map((function(e){return Object(o.jsx)(u,{id:e.id,avatar:e.avatar,name:e.name,message:e.message,time:e.time},e.id)})),t=c.a.useRef(null);return Object(o.jsxs)("div",{className:d.a.dialogs,children:[Object(o.jsx)("div",{className:d.a.dialogsItems,children:s}),Object(o.jsxs)("div",{className:d.a.dialogF,style:{overflow:"auto",height:"500px",WebkitOverflowScrolling:"touch"},children:[a,Object(o.jsx)("div",{ref:t})]}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{style:{margin:"15px",marginLeft:"340px"},children:Object(o.jsx)(h,{addMessage:e.addMessage,scroll:t})})]})},f=a(15),N=a(44),M=a(45),S=a(56),y=a(55),k=a(14),D=function(e){return{isAuth:e.auth.isAuth}},w=function(e){var s=function(s){Object(S.a)(t,s);var a=Object(y.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(M.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(f.a)({},this.props)):Object(o.jsx)(k.a,{to:"/login"})}}]),t}(c.a.Component);return Object(i.b)(D)(s)},A=a(46);s.default=Object(A.c)(w,Object(i.b)((function(e){return{dialogs:e.dialogsPage.dialogs,message:e.dialogsPage.message}}),{addMessage:t.a}))(p)}}]);
//# sourceMappingURL=4.178b1ee2.chunk.js.map