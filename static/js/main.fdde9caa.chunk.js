(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{104:function(e,t,n){e.exports={userPhoto:"users_userPhoto__IH2zC"}},105:function(e,t,n){e.exports={ldsspinner:"Preloader_ldsspinner__2ajmc","lds-spinner":"Preloader_lds-spinner__2eR9q"}},106:function(e,t,n){e.exports={items:"AlternativeMessage_items__3Zmak"}},107:function(e,t,n){e.exports={content:"Profile_content__3_7KM"}},108:function(e,t,n){e.exports={item:"Post_item__1Mq8Z"}},121:function(e,t,n){},122:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__1Fll_",item:"Navbar_item__166Pj",active:"Navbar_active__25wbV"}},247:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(48),r=n.n(i),c=(n(121),n(4)),o=n(5),u=n(8),l=n(9),j=(n(122),n(12)),d=n(17),b=n.n(d),p=n(0);var f=function(){return Object(p.jsxs)("div",{className:b.a.nav,children:[Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/profile/",children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/dialogs/",children:"Messages"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/music",children:"Music"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/users",children:"Users"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/setting",children:"Setting"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(p.jsx)(j.b,{to:"/calendar",children:"\u0421alendar"})})]})},h=n(3),g=n(6);var O=function(){var e=Object(s.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),r=Object(g.a)(i,2)[1],c=Object(s.useState)(),o=Object(g.a)(c,2),u=o[0],l=o[1],j=(null===u||void 0===u?void 0:u.toLocaleTimeString())||Object(p.jsx)("br",{}),d=null===u||void 0===u?void 0:u.toLocaleDateString();return Object(s.useEffect)((function(){setInterval((function(){l(new Date),r((function(e){return e+1}))}),1e3)}),[]),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)("div",{onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1)},children:Object(p.jsxs)("h2",{style:{marginTop:"0px",color:"black"},children:[" ",j]})}),n?Object(p.jsx)("div",{children:Object(p.jsxs)("h1",{children:[" ",d," "]})}):Object(p.jsx)("br",{})]})},m=n(14),x=n(11),v=n.n(x),_=n(18),w=n(10),P=n(2),y=n(103),S=n.n(y).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d885d4a3-64ff-4a70-8cfb-d6db15bc8bae"}}),k={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return S.delete("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return S.post("follow/".concat(e)).then((function(e){return e.data}))}},C=function(){return S.get("auth/me").then((function(e){return e.data}))},N=function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return S.post("auth/login",{email:e,password:t,rememberMe:n,captcha:s}).then((function(e){return e.data}))},I=function(){return S.delete("auth/login").then((function(e){return e.data}))},T=function(e){return S.get("profile/".concat(e)).then((function(e){return e.data}))},A=function(e){return S.get("profile/status/".concat(e)).then((function(e){return e.data}))},E=function(e){return S.put("profile/status",{status:e}).then((function(e){return e.data}))},M="TOGGLE_FOLLOW",F="SET_USERS",U="SET_CURRENT_PAGE",z="SET_TOTAL_USERS_COUNT",D="TOGGLE_IS_FETCHING",L="TOGGLE_IS_FOLLOWING_PROGRESS",q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!e.followed}):e}))});case F:return Object(P.a)(Object(P.a)({},e),{},{users:Object(w.a)(t.users)});case z:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case U:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.page});case D:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case L:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=function(e){return{type:D,isFetching:e}},H=function(e,t){return{type:L,userId:e,isFetching:t}},G=function(e){return{type:U,page:e}},J=function(){var e=Object(_.a)(v.a.mark((function e(t,n,s){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(n,!0)),e.next=3,s(n);case 3:0===e.sent.resultCode&&t({type:M,userId:n}),t(H(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),X=n(115),W=n(51),V=n(34),K=n.n(V),Z=n(66),Y=n.n(Z),Q=function(e){for(var t=e.pageSize,n=e.totalItemsCount,a=e.onPageChanged,i=e.currentPage,r=e.portionSize,c=void 0===r?20:r,o=Math.ceil(n/t),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/c),d=Object(s.useState)(1),b=Object(g.a)(d,2),f=b[0],h=b[1],O=(f-1)*c+1,m=f*c;return Object(p.jsxs)("div",{className:Y()(K.a.paginator),children:[Object(p.jsx)("button",{className:K.a.buttonPrev,disabled:f<2,onClick:function(){h(f-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(p.jsx)("span",{className:Y()(Object(W.a)({},K.a.selectedPage,i===e),K.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),Object(p.jsx)("button",{className:K.a.buttonNext,disabled:j<f+1,onClick:function(){h(f+1)},children:"NEXT"})]})},$=n(104),ee=n.n($),te=n.p+"static/media/user.96e310a6.png",ne=function(e){var t,n,s=e.user,a=e.followingInProgress,i=e.unfollow,r=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/".concat(s.id),children:Object(p.jsx)("img",{src:null!=(null===(t=s.photos)||void 0===t?void 0:t.small)?null===(n=s.photos)||void 0===n?void 0:n.small:te,className:ee.a.userPhoto,alt:"profilePhoto"})})}),Object(p.jsx)("div",{children:s.followed?Object(p.jsx)("button",{disabled:a.some((function(e){return e===s.id})),onClick:function(){r(s.id)},children:" Unfollow "}):Object(p.jsx)("button",{disabled:a.some((function(e){return e===s.id})),onClick:function(){i(s.id)},children:" Follow "})})]}),Object(p.jsx)("span",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:s.name}),Object(p.jsx)("div",{children:s.status})]})})]})},se=function(e){var t=e.currentPage,n=e.totalUsersCount,s=e.pageSize,a=e.onPageChanged,i=e.users,r=Object(X.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(Q,{pageSize:s,currentPage:t,totalItemsCount:n,onPageChanged:a}),Object(p.jsx)("div",{children:i.map((function(e){return Object(p.jsx)(ne,{user:e,followingInProgress:r.followingInProgress,unfollow:r.unfollow,follow:r.follow},e.id)}))})]})},ae=n(105),ie=n.n(ae),re=function(){return Object(p.jsxs)("div",{className:ie.a.ldsspinner,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{children:" "}),Object(p.jsx)("div",{})]})},ce=n(19),oe=n(116),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[" ",this.props.isFetching?Object(p.jsx)(re,{}):null,Object(p.jsx)(se,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(a.a.Component),he=Object(ce.c)(Object(m.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:je(e),currentPage:de(e),isFetching:be(e),followingInProgress:pe(e)}}),{toggleIsFetching:R,setCurrentPage:G,getUsers:function(e,t){return function(){var n=Object(_.a)(v.a.mark((function n(s){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(R(!0)),s(G(e)),n.next=4,k.getUsers(e,t);case 4:a=n.sent,s(R(!1)),s((r=a.items,{type:F,users:r})),s((i=a.totalCount,{type:z,totalUsersCount:i}));case 8:case"end":return n.stop()}var i,r}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=k.follow.bind(k),J(n,e,s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=k.unfollow.bind(k),J(n,e,s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(fe),ge="ADD_MESSAGE",Oe={dialogs:[{id:1,name:"Sofiyka",src:"https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1"},{id:2,name:"Maks",src:"https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1"},{id:3,name:"Dimych",src:"https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1"},{id:4,name:"Masha",src:"https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1"},{id:5,name:"Ulya",src:"https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1"},{id:6,name:"Ustina",src:"https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album"},{id:7,name:"Sasha",src:"https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1"},{id:8,name:"Vova",src:"https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1"}],message:[{id:1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sasha",message:"Hello, my friends",time:"22:00"},{id:2,avatar:"https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg",name:"Maksim",message:"Hi all",time:"22:07"},{id:3,avatar:"https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg",name:"Sonya",message:"yo yo yo",time:"22:15"},{id:4,avatar:"https://top-tok.ru/wp-content/uploads/e8a52fc5-620c-4d7c-8f34-ddd8f605f95a.jpg",name:"Natali",message:"How a you?",time:"22:17"},{id:5,avatar:"https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg",name:"Maksim",message:"Everything is fine",time:"22:18"},{id:6,avatar:"https://i.pinimg.com/originals/38/20/44/382044ab16b8772d62a6043dc202bd86.jpg",name:"Galya",message:"What do you do",time:"22:19"},{id:7,avatar:"https://papik.pro/uploads/posts/2022-01/thumbs/1642409371_29-papik-pro-p-gacha-stikeri-31.jpg",name:"Dima",message:"I went out for a walk",time:"22:19"},{id:8,avatar:"https://yt3.ggpht.com/a/AATXAJwg1JVXn5R_VJH_tSFHvGrBbwGEfEW0yDUBAgDkag=s900-c-k-c0xffffffff-no-rj-mo",name:"Alina",message:"I will sleep",time:"22:23"}]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:var n=Math.floor(Math.random()*e.message.length),s=(new Date).getMinutes(),a={id:9,avatar:e.message[n].avatar,name:e.message[n].name,message:t.title,time:"15 :"+s};return Object(P.a)(Object(P.a)({},e),{},{message:[].concat(Object(w.a)(e.message),[a])});default:return e}},xe=n(33),ve=n.n(xe),_e=function(e){var t="/dialogs/"+e.id;return Object(p.jsxs)("div",{className:ve.a.dialog+" "+ve.a.active,children:[Object(p.jsx)("img",{src:e.src,alt:"ava"}),Object(p.jsx)(j.b,{to:t,children:e.name})]})},we=n(26),Pe=n.n(we),ye=function(e){return Object(p.jsx)("div",{className:Pe.a.display,children:Object(p.jsxs)("div",{className:Pe.a.message,children:[Object(p.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(p.jsx)("div",{className:Pe.a.angle}),Object(p.jsxs)("div",{className:Pe.a.description,children:[Object(p.jsx)("div",{className:Pe.a.name,children:e.name}),Object(p.jsx)("div",{className:Pe.a.text,children:e.message}),Object(p.jsx)("span",{className:Pe.a.time,children:e.time})]})]})})},Se=n(106),ke=n.n(Se);var Ce=function(e){var t=Object(s.useState)(""),n=Object(g.a)(t,2),a=n[0],i=n[1],r=function(){e.addMessage(a),i(""),setTimeout((function(){e.scroll.current.scrollIntoView({behavior:"smooth"})}),0)};return Object(p.jsxs)("div",{className:ke.a.items,children:[Object(p.jsx)("input",{type:"text",placeholder:" New message...",value:a,onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&r()}}),Object(p.jsx)("button",{onClick:r,children:"Send"})]})};var Ne=function(e){var t=e.dialogs.map((function(e){return Object(p.jsx)(_e,{name:e.name,id:e.id,src:e.src},e.id)})),n=e.message.map((function(e){return Object(p.jsx)(ye,{id:e.id,avatar:e.avatar,name:e.name,message:e.message,time:e.time},e.id)})),s=a.a.useRef(null);return Object(p.jsxs)("div",{className:ve.a.dialogs,children:[Object(p.jsx)("div",{className:ve.a.dialogsItems,children:t}),Object(p.jsxs)("div",{style:{overflow:"auto",height:"500px"},children:[n,Object(p.jsx)("div",{ref:s})]}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{style:{margin:"15px"},children:Object(p.jsx)(Ce,{addMessage:e.addMessage,scroll:s})})]})},Ie=function(e){return{isAuth:e.auth.isAuth}},Te=function(e){var t=function(t){Object(u.a)(s,t);var n=Object(l.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(P.a)({},this.props)):Object(p.jsx)(h.a,{to:"/login"})}}]),s}(a.a.Component);return Object(m.b)(Ie)(t)},Ae=Object(ce.c)(Te,Object(m.b)((function(e){return{dialogs:e.dialogsPage.dialogs,message:e.dialogsPage.message}}),{addMessage:function(e){return{type:ge,title:e}}}))(Ne),Ee=n(107),Me=n.n(Ee),Fe=n(67),Ue=n.n(Fe);var ze=function(e){var t=Object(s.useState)(!1),n=Object(g.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(e.value),c=Object(g.a)(r,2),o=c[0],u=c[1];return Object(s.useEffect)((function(){u(e.value)}),[e.value]),Object(p.jsxs)("div",{children:[!a&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:" Status: "})," ",Object(p.jsx)("span",{onDoubleClick:function(){i(!0),u(e.value)},children:e.value||"-----"})]}),a&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},De=function(e){return e.profile?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:Ue.a.descriptionBlock,children:[Object(p.jsx)("img",{src:null!=e.profile.photos.large?e.profile.photos.large:te,className:Ue.a.userPhoto,alt:"avatar"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),Object(p.jsx)("div",{children:Object(p.jsx)(ze,{updateStatus:e.updateStatus,value:e.status})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),Object(p.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe,Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:"Contacts: "})}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:e.profile.contacts.facebook}),Object(p.jsx)("li",{children:e.profile.contacts.github}),Object(p.jsx)("li",{children:e.profile.contacts.instagram}),Object(p.jsx)("li",{children:e.profile.contacts.mainLink}),Object(p.jsx)("li",{children:e.profile.contacts.twitter}),Object(p.jsx)("li",{children:e.profile.contacts.vk}),Object(p.jsx)("li",{children:e.profile.contacts.website}),Object(p.jsx)("li",{children:e.profile.contacts.youtube})]})]})}):Object(p.jsx)(re,{})},Le="ADD_POST",qe="UPDATE_NEW_POST_TEXT",Be="SET_USER_PROFILE",Re="SET_STATUS",He="DELETE_POST",Ge={posts:[{id:1,message:"Hi, Yo",likesCount:23},{id:2,message:"I'm in to IT",likesCount:12},{id:3,message:"I'",likesCount:57},{id:4,message:"I'm a BOSS",likesCount:23}],newPostText:"",profile:null,status:""},Je=function(e){return{type:Re,status:e}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:return Object(P.a)(Object(P.a)({},e),{},{newPostText:t.newText});case Be:return Object(P.a)(Object(P.a)({},e),{},{profile:t.profile});case Re:return Object(P.a)(Object(P.a)({},e),{},{status:t.status});case Le:var n={id:5,message:e.newPostText,likesCount:0};return Object(P.a)(Object(P.a)({},e),{},{posts:[].concat(Object(w.a)(e.posts),[n]),newPostText:""});case He:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},We=n(108),Ve=n.n(We),Ke={border:"none",outline:"none",cursor:"pointer",font:"inherit"},Ze=function(e){var t=Object(s.useState)(e.likesCount),n=Object(g.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(!1),c=Object(g.a)(r,2),o=c[0],u=c[1];return Object(p.jsxs)("div",{className:Ve.a.item,children:[Object(p.jsx)("img",{src:"https://i.pinimg.com/600x315/63/e4/e2/63e4e23fffdb56ee09a20ff630eef6ea.jpg",alt:"Ava"}),e.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("button",{style:Ke,onClick:function(){o?(i(a-1),u(!1)):(i(a+1),u(!0)),console.log(a)},children:o?"\ud83d\udc99":"\ud83e\udd0d"})})," ",a," likes"]})]})},Ye=n(55),Qe=n.n(Ye),$e=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(p.jsx)(Ze,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(p.jsxs)("div",{children:["My posts",Object(p.jsxs)("div",{children:[Object(p.jsx)("textarea",{value:e.newPostText,onChange:function(t){var n=t.currentTarget.value;e.updateNewPostText(n)},className:Qe.a.textarea}),Object(p.jsx)("button",{onClick:function(){e.addPost()},className:Qe.a.button,children:"Add post"})]}),Object(p.jsx)("div",{className:Qe.a.posts,children:t})]})})),et=Object(m.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:function(){return{type:Le}},updateNewPostText:function(e){return{type:qe,newText:e}}})($e),tt=function(e){return Object(p.jsxs)("div",{className:Me.a.content,children:[Object(p.jsx)(De,{updateStatus:e.updateStatus,status:e.status,profile:e.profile}),Object(p.jsx)(et,{})]})};function nt(e){return function(t){var n=Object(h.f)(),s=Object(h.g)(),a=Object(h.h)();return Object(p.jsx)(e,Object(P.a)(Object(P.a)({},t),{},{router:{location:n,navigate:s,params:a}}))}}var st=Object(ce.c)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:s=t.sent,n({type:Be,profile:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:s=t.sent,n(Je(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(_.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:0===t.sent.resultCode&&n(Je(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),nt)((function(e){var t=Object(h.g)(),n=Object(h.h)().userId;return Object(s.useEffect)((function(){if(!n){var s=e.authorizedUserId;s||t("/login"),e.getUserProfile(s),e.getStatus(s)}}),[n,t,e]),Object(p.jsx)(tt,Object(P.a)(Object(P.a)({},e),{},{profile:e.profile,status:e.status,updateStatus:e.updateStatus}))})),at=n(68),it=n.n(at);var rt=function(){var e=Object(s.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],i=new Audio("http://streaming.tdiradio.com:8000/house.mp3");return Object(p.jsxs)("div",{className:it.a.pleer,children:[Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:it.a.item,children:"Radio\ud83d\udcfb"})}),Object(p.jsx)("button",{onClick:function(){!1===n?(a(!0),i.pause()):(a(!1),i.play())},children:n?Object(p.jsx)("h2",{children:"\u23f8\ufe0f"}):Object(p.jsx)("h2",{children:"\u25b6\ufe0f"})})]})},ct=n(69),ot=n.n(ct);var ut=function(e){return console.log(e.isAuth),Object(p.jsx)("header",{className:ot.a.header,children:Object(p.jsx)("div",{className:ot.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(p.jsx)(j.b,{to:"/login",children:" Login "})})})},lt="SET_USER_DATA",jt={id:null,email:null,login:null,isAuth:!1},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case lt:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},bt=function(e,t,n,s){return{type:lt,payload:{id:e,email:t,login:n,isAuth:s}}},pt=function(){return function(){var e=Object(_.a)(v.a.mark((function e(t){var n,s,a,i,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===(n=e.sent).resultCode&&(s=n.data,a=s.id,i=s.email,r=s.login,t(bt(a,i,r,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ft=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ut,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),ht=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){I().then((function(t){0===t.data.resultCode&&e(bt(null,null,null,!1))}))}}})(ft),gt=n(29),Ot=n(56),mt=n(39),xt=n.n(mt),vt=Ot.a().shape({password:Ot.b().min(8,"Too Short!").max(50,"Too Long!").required("Required"),email:Ot.b().email("Invalid email").required("Required")}),_t=function(){var e=Object(m.c)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(gt.d,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:vt,onSubmit:function(t){e(function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(a){N(e,t,n,s).then((function(e){0===e.data.resultCode&&a(pt())}))}}(t.email,t.password,t.rememberMe))},children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(gt.c,{className:xt.a.loginBlock,children:[Object(p.jsxs)("label",{children:["Email: ",Object(p.jsx)(gt.b,{placeholder:"email",type:"email",name:"email"}),Object(p.jsx)(gt.a,{className:xt.a.errors,name:"email",component:"div"})]}),Object(p.jsxs)("label",{children:["Password:",Object(p.jsx)(gt.b,{placeholder:"password",type:"password",name:"password"}),Object(p.jsx)(gt.a,{className:xt.a.errors,name:"password",component:"div"})]}),Object(p.jsx)("button",{type:"submit",color:"primary",disabled:t,children:"Submit"})]})}})]})},wt=function(){return Object(m.d)((function(e){return e.auth.isAuth}))?Object(p.jsx)(h.a,{to:"/profile"}):Object(p.jsx)("div",{className:xt.a.loginForm,children:Object(p.jsx)(_t,{})})},Pt="INITIALIZED_SUCCESS",yt={initialized:!1},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pt:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},kt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(ht,{}),Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{path:"/login",element:Object(p.jsx)(wt,{})}),Object(p.jsx)(h.b,{path:"/",element:Object(p.jsx)(h.a,{to:"/profile"})}),Object(p.jsx)(h.b,{path:"/profile/*",element:Object(p.jsx)(st,{})}),Object(p.jsx)(h.b,{path:"/profile/:userId",element:Object(p.jsx)(st,{})}),Object(p.jsx)(h.b,{path:"/dialogs/*",element:Object(p.jsx)(Ae,{})}),Object(p.jsx)(h.b,{path:"/users",element:Object(p.jsx)(he,{})}),Object(p.jsx)(h.b,{path:"/calendar",element:Object(p.jsx)(O,{})}),Object(p.jsx)(h.b,{path:"/music",element:Object(p.jsx)(rt,{})}),Object(p.jsx)(h.b,{path:"404",element:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"404: PAGE NOT FOUND"})}),Object(p.jsx)(h.b,{path:"*",element:Object(p.jsx)(h.a,{to:"404"})})]})})]}):Object(p.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(p.jsx)(re,{})})}}]),n}(s.Component),Ct=Object(ce.c)(Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(_.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(pt());case 2:n=e.sent,Promise.all([n]),t({type:Pt});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),nt)(kt),Nt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},It=n(114),Tt=Object(ce.b)({dialogsPage:me,profilePage:Xe,usersPage:B,auth:dt,app:St}),At=Object(ce.d)(Tt,Object(ce.a)(It.a));r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{store:At,children:Object(p.jsx)(Ct,{})})})}),document.getElementById("root")),Nt()},26:function(e,t,n){e.exports={display:"Message_display__1EHVd",message:"Message_message__ABkZL",description:"Message_description__3trQ6",angle:"Message_angle__2v-k7",name:"Message_name__2eLj0",text:"Message_text__2Dm9O",time:"Message_time__1ODfc"}},33:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__6rxj1",dialogsItems:"Dialogs_dialogsItems__3gA3l",active:"Dialogs_active__2MX0L",dialog:"Dialogs_dialog__EU5iR",messages:"Dialogs_messages__9dv1e",message:"Dialogs_message__1aPDA"}},34:function(e,t,n){e.exports={paginator:"Paginator_paginator__1gSQb",pageNumber:"Paginator_pageNumber__2P-eV",selectedPage:"Paginator_selectedPage__2esd6",buttonPrev:"Paginator_buttonPrev__2_aIG",buttonNext:"Paginator_buttonNext__2x3-8"}},39:function(e,t,n){e.exports={loginForm:"Login_loginForm__qumOe",loginBlock:"Login_loginBlock__Z-_Xs",errors:"Login_errors__3dS0r"}},55:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__9cMJ0",posts:"MyPosts_posts__3d0Un",textarea:"MyPosts_textarea__jzmwN",button:"MyPosts_button__A01AX"}},67:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__33JVh"}},68:function(e,t,n){e.exports={pleer:"Music_pleer__2ayyf",item:"Music_item__1eXWr"}},69:function(e,t,n){e.exports={header:"Header_header__H_o5P",loginBlock:"Header_loginBlock__1sTzL"}}},[[247,1,2]]]);
//# sourceMappingURL=main.fdde9caa.chunk.js.map