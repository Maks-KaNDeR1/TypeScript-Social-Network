(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{100:function(e,t,n){e.exports={userPhoto:"users_userPhoto__IH2zC"}},101:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__1fYEQ"}},102:function(e,t,n){e.exports={ldsspinner:"Preloader_ldsspinner__2ajmc","lds-spinner":"Preloader_lds-spinner__2eR9q"}},103:function(e,t,n){e.exports={items:"AlternativeMessage_items__3Zmak"}},104:function(e,t,n){e.exports={content:"Profile_content__3_7KM"}},105:function(e,t,n){e.exports={item:"Post_item__1Mq8Z"}},111:function(e,t,n){e.exports={loginForm:"Login_loginForm__qumOe"}},118:function(e,t,n){},119:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__1Fll_",item:"Navbar_item__166Pj",active:"Navbar_active__25wbV"}},244:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(46),r=n.n(i),c=(n(118),n(4)),o=n(5),u=n(8),l=n(9),j=(n(119),n(13)),d=n(17),p=n.n(d),b=n(1);var f=function(){return Object(b.jsxs)("div",{className:p.a.nav,children:[Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/profile/",children:"Profile"})}),Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/dialogs/",children:"Messages"})}),Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/music",children:"Music"})}),Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/users",children:"Users"})}),Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/setting",children:"Setting"})}),Object(b.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(b.jsx)(j.b,{to:"/calendar",children:"\u0421alendar"})})]})},h=n(3),O=n(6);var g=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),r=Object(O.a)(i,2)[1],c=Object(s.useState)(),o=Object(O.a)(c,2),u=o[0],l=o[1],j=(null===u||void 0===u?void 0:u.toLocaleTimeString())||Object(b.jsx)("br",{}),d=null===u||void 0===u?void 0:u.toLocaleDateString();return Object(s.useEffect)((function(){setInterval((function(){l(new Date),r((function(e){return e+1}))}),1e3)}),[]),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(b.jsx)("div",{onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1)},children:Object(b.jsxs)("h2",{style:{marginTop:"0px",color:"black"},children:[" ",j]})}),n?Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{children:[" ",d," "]})}):Object(b.jsx)("br",{})]})},m=n(14),v=n(11),x=n.n(v),_=n(18),w=n(10),P=n(2),y=n(99),S=n.n(y).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d885d4a3-64ff-4a70-8cfb-d6db15bc8bae"}}),k={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return S.delete("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return S.post("follow/".concat(e)).then((function(e){return e.data}))}},C=function(){return S.get("auth/me").then((function(e){return e.data}))},N=function(e){return S.get("profile/".concat(e)).then((function(e){return e.data}))},I=function(e){return S.get("profile/status/".concat(e)).then((function(e){return e.data}))},T=function(e){return S.put("profile/status",{status:e}).then((function(e){return e.data}))},A="TOGGLE_FOLLOW",E="SET_USERS",M="SET_CURRENT_PAGE",F="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",D="TOGGLE_IS_FOLLOWING_PROGRESS",z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!e.followed}):e}))});case E:return Object(P.a)(Object(P.a)({},e),{},{users:Object(w.a)(t.users)});case F:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case M:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.page});case U:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case D:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},q=function(e){return{type:U,isFetching:e}},H=function(e,t){return{type:D,userId:e,isFetching:t}},R=function(e){return{type:M,page:e}},B=function(){var e=Object(_.a)(x.a.mark((function e(t,n,s){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(n,!0)),e.next=3,s(n);case 3:0===e.sent.resultCode&&t({type:A,userId:n}),t(H(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),J=n(100),G=n.n(J),W=n.p+"static/media/user.96e310a6.png",X=n(101),K=n.n(X);var V=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(b.jsx)("div",{children:n.map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t?K.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:t})}))})},Z=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(V,{pageSize:e.pageSize,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,onPageChanged:e.onPageChanged}),e.users.map((function(t){var n,s;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{to:"/profile/".concat(t.id),children:Object(b.jsx)("img",{src:null!=(null===(n=t.photos)||void 0===n?void 0:n.small)?null===(s=t.photos)||void 0===s?void 0:s.small:W,className:G.a.userPhoto,alt:"profilePhoto"})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:" Unfollow "}):Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Follow "})})]}),Object(b.jsx)("span",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]})})]},t.id)}))]})},Y=n(102),Q=n.n(Y),$=function(){return Object(b.jsxs)("div",{className:Q.a.ldsspinner,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:" "}),Object(b.jsx)("div",{})]})},ee=n(19),te=function(e){return{isAuth:e.auth.isAuth}},ne=function(e){var t=function(t){Object(u.a)(s,t);var n=Object(l.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(P.a)({},this.props)):Object(b.jsx)(h.a,{to:"/login"})}}]),s}(a.a.Component);return Object(m.b)(te)(t)},se=n(113),ae=Object(se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ie=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ue=function(e){return e.usersPage.followingInProgress},le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[" ",this.props.isFetching?Object(b.jsx)($,{}):null,Object(b.jsx)(Z,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(a.a.Component),je=Object(ee.c)(ne,Object(m.b)((function(e){return{users:ae(e),pageSize:ie(e),totalUsersCount:re(e),currentPage:ce(e),isFetching:oe(e),followingInProgress:ue(e)}}),{toggleIsFetching:q,setCurrentPage:R,getUsers:function(e,t){return function(){var n=Object(_.a)(x.a.mark((function n(s){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(q(!0)),s(R(e)),n.next=4,k.getUsers(e,t);case 4:a=n.sent,s(q(!1)),s((r=a.items,{type:E,users:r})),s((i=a.totalCount,{type:F,totalUsersCount:i}));case 8:case"end":return n.stop()}var i,r}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=k.follow.bind(k),B(n,e,s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=k.unfollow.bind(k),B(n,e,s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(le),de="ADD_MESSAGE",pe={dialogs:[{id:1,name:"Sofiyka",src:"https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1"},{id:2,name:"Maks",src:"https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1"},{id:3,name:"Dimych",src:"https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1"},{id:4,name:"Masha",src:"https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1"},{id:5,name:"Ulya",src:"https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1"},{id:6,name:"Ustina",src:"https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album"},{id:7,name:"Sasha",src:"https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1"},{id:8,name:"Vova",src:"https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1"}],message:[{id:1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sasha",message:"Hello, my friends",time:"22:00"},{id:2,avatar:"https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg",name:"Maksim",message:"Hi all",time:"22:07"},{id:3,avatar:"https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg",name:"Sonya",message:"yo yo yo",time:"22:15"},{id:4,avatar:"https://top-tok.ru/wp-content/uploads/e8a52fc5-620c-4d7c-8f34-ddd8f605f95a.jpg",name:"Natali",message:"How a you?",time:"22:17"},{id:5,avatar:"https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg",name:"Maksim",message:"Everything is fine",time:"22:18"},{id:6,avatar:"https://i.pinimg.com/originals/38/20/44/382044ab16b8772d62a6043dc202bd86.jpg",name:"Galya",message:"What do you do",time:"22:19"},{id:7,avatar:"https://papik.pro/uploads/posts/2022-01/thumbs/1642409371_29-papik-pro-p-gacha-stikeri-31.jpg",name:"Dima",message:"I went out for a walk",time:"22:19"},{id:8,avatar:"https://yt3.ggpht.com/a/AATXAJwg1JVXn5R_VJH_tSFHvGrBbwGEfEW0yDUBAgDkag=s900-c-k-c0xffffffff-no-rj-mo",name:"Alina",message:"I will sleep",time:"22:23"}]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:var n=Math.floor(Math.random()*e.message.length),s=(new Date).getMinutes(),a={id:9,avatar:e.message[n].avatar,name:e.message[n].name,message:t.title,time:"15 :"+s};return Object(P.a)(Object(P.a)({},e),{},{message:[].concat(Object(w.a)(e.message),[a])});default:return e}},fe=n(32),he=n.n(fe),Oe=function(e){var t="/dialogs/"+e.id;return Object(b.jsxs)("div",{className:he.a.dialog+" "+he.a.active,children:[Object(b.jsx)("img",{src:e.src,alt:"ava"}),Object(b.jsx)(j.b,{to:t,children:e.name})]})},ge=n(26),me=n.n(ge),ve=function(e){return Object(b.jsx)("div",{className:me.a.display,children:Object(b.jsxs)("div",{className:me.a.message,children:[Object(b.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(b.jsx)("div",{className:me.a.angle}),Object(b.jsxs)("div",{className:me.a.description,children:[Object(b.jsx)("div",{className:me.a.name,children:e.name}),Object(b.jsx)("div",{className:me.a.text,children:e.message}),Object(b.jsx)("span",{className:me.a.time,children:e.time})]})]})})},xe=n(103),_e=n.n(xe);var we=function(e){var t=Object(s.useState)(""),n=Object(O.a)(t,2),a=n[0],i=n[1],r=function(){e.addMessage(a),i(""),setTimeout((function(){e.scroll.current.scrollIntoView({behavior:"smooth"})}),0)};return Object(b.jsxs)("div",{className:_e.a.items,children:[Object(b.jsx)("input",{type:"text",placeholder:" New message...",value:a,onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&r()}}),Object(b.jsx)("button",{onClick:r,children:"Send"})]})};var Pe=function(e){var t=e.dialogs.map((function(e){return Object(b.jsx)(Oe,{name:e.name,id:e.id,src:e.src},e.id)})),n=e.message.map((function(e){return Object(b.jsx)(ve,{id:e.id,avatar:e.avatar,name:e.name,message:e.message,time:e.time},e.id)})),s=a.a.useRef(null);return Object(b.jsxs)("div",{className:he.a.dialogs,children:[Object(b.jsx)("div",{className:he.a.dialogsItems,children:t}),Object(b.jsxs)("div",{style:{overflow:"auto",height:"500px"},children:[n,Object(b.jsx)("div",{ref:s})]}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{style:{margin:"15px"},children:Object(b.jsx)(we,{addMessage:e.addMessage,scroll:s})})]})},ye=Object(ee.c)(ne,Object(m.b)((function(e){return{dialogs:e.dialogsPage.dialogs,message:e.dialogsPage.message}}),{addMessage:function(e){return{type:de,title:e}}}))(Pe),Se=n(104),ke=n.n(Se),Ce=n(63),Ne=n.n(Ce);var Ie=function(e){var t=Object(s.useState)(!1),n=Object(O.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(e.value),c=Object(O.a)(r,2),o=c[0],u=c[1];return Object(s.useEffect)((function(){u(e.value)}),[e.value]),Object(b.jsxs)("div",{children:[!a&&Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:" Status: "})," ",Object(b.jsx)("span",{onDoubleClick:function(){i(!0),u(e.value)},children:e.value||"-----"})]}),a&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},Te=function(e){return e.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:Ne.a.descriptionBlock,children:[Object(b.jsx)("img",{src:null!=e.profile.photos.large?e.profile.photos.large:W,className:Ne.a.userPhoto,alt:"avatar"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),Object(b.jsx)("div",{children:Object(b.jsx)(Ie,{updateStatus:e.updateStatus,value:e.status})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"My professional skills"}),": ",e.profile.lookingForAJobDescription]}),Object(b.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe,Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Contacts: "})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e.profile.contacts.facebook}),Object(b.jsx)("li",{children:e.profile.contacts.github}),Object(b.jsx)("li",{children:e.profile.contacts.instagram}),Object(b.jsx)("li",{children:e.profile.contacts.mainLink}),Object(b.jsx)("li",{children:e.profile.contacts.twitter}),Object(b.jsx)("li",{children:e.profile.contacts.vk}),Object(b.jsx)("li",{children:e.profile.contacts.website}),Object(b.jsx)("li",{children:e.profile.contacts.youtube})]})]})}):Object(b.jsx)($,{})},Ae="ADD_POST",Ee="UPDATE_NEW_POST_TEXT",Me="SET_USER_PROFILE",Fe="SET_STATUS",Ue="DELETE_POST",De={posts:[{id:1,message:"Hi, Yo",likesCount:23},{id:2,message:"I'm in to IT",likesCount:12},{id:3,message:"I'",likesCount:57},{id:4,message:"I'm a BOSS",likesCount:23}],newPostText:"",profile:null,status:""},ze=function(e){return{type:Fe,status:e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(P.a)(Object(P.a)({},e),{},{newPostText:t.newText});case Me:return Object(P.a)(Object(P.a)({},e),{},{profile:t.profile});case Fe:return Object(P.a)(Object(P.a)({},e),{},{status:t.status});case Ae:var n={id:5,message:e.newPostText,likesCount:0};return Object(P.a)(Object(P.a)({},e),{},{posts:[].concat(Object(w.a)(e.posts),[n]),newPostText:""});case Ue:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},qe=n(105),He=n.n(qe),Re={border:"none",outline:"none",cursor:"pointer",font:"inherit"},Be=function(e){var t=Object(s.useState)(e.likesCount),n=Object(O.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(!1),c=Object(O.a)(r,2),o=c[0],u=c[1];return Object(b.jsxs)("div",{className:He.a.item,children:[Object(b.jsx)("img",{src:"https://i.pinimg.com/600x315/63/e4/e2/63e4e23fffdb56ee09a20ff630eef6ea.jpg",alt:"Ava"}),e.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("button",{style:Re,onClick:function(){o?(i(a-1),u(!1)):(i(a+1),u(!0)),console.log(a)},children:o?"\ud83d\udc99":"\ud83e\udd0d"})})," ",a," likes"]})]})},Je=n(52),Ge=n.n(Je),We=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(b.jsx)(Be,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(b.jsxs)("div",{children:["My posts",Object(b.jsxs)("div",{children:[Object(b.jsx)("textarea",{value:e.newPostText,onChange:function(t){var n=t.currentTarget.value;e.updateNewPostText(n)},className:Ge.a.textarea}),Object(b.jsx)("button",{onClick:function(){e.addPost()},className:Ge.a.button,children:"Add post"})]}),Object(b.jsx)("div",{className:Ge.a.posts,children:t})]})})),Xe=Object(m.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:function(){return{type:Ae}},updateNewPostText:function(e){return{type:Ee,newText:e}}})(We),Ke=function(e){return Object(b.jsxs)("div",{className:ke.a.content,children:[Object(b.jsx)(Te,{updateStatus:e.updateStatus,status:e.status,profile:e.profile}),Object(b.jsx)(Xe,{})]})};function Ve(e){return function(t){var n=Object(h.f)(),s=Object(h.g)(),a=Object(h.h)();return Object(b.jsx)(e,Object(P.a)(Object(P.a)({},t),{},{router:{location:n,navigate:s,params:a}}))}}var Ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.router.params.userId;e||(e=22023),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(b.jsx)(Ke,Object(P.a)(Object(P.a)({},this.props),{},{profile:this.props.profile,isAuth:this.props.isAuth,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(a.a.Component),Ye=Object(ee.c)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:s=t.sent,n({type:Me,profile:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:s=t.sent,n(ze(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:0===t.sent.resultCode&&n(ze(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Ve)(Ze),Qe=n(64),$e=n.n(Qe);var et=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],i=new Audio("http://streaming.tdiradio.com:8000/house.mp3");return Object(b.jsxs)("div",{className:$e.a.pleer,children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:$e.a.item,children:"Radio\ud83d\udcfb"})}),Object(b.jsx)("button",{onClick:function(){!1===n?(a(!0),i.pause()):(a(!1),i.play())},children:n?Object(b.jsx)("h2",{children:"\u23f8\ufe0f"}):Object(b.jsx)("h2",{children:"\u25b6\ufe0f"})})]})},tt=n(65),nt=n.n(tt);var st=function(e){return console.log(e.isAuth),Object(b.jsx)("header",{className:nt.a.header,children:Object(b.jsx)("div",{className:nt.a.loginBlock,children:e.isAuth?Object(b.jsx)(j.b,{to:"/login",children:"Login"}):"login"})})},at=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(st,Object(P.a)({},this.props))}}]),n}(a.a.Component),it=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{})(at),rt=n(37),ct=n(53),ot=n(111),ut=n.n(ot);function lt(){var e=ct.a({email:ct.b().email("Invalid email format").required("Required"),password:ct.b().required("Required")});return Object(b.jsx)(rt.c,{initialValues:{email:"",password:""},validationSchema:e,onSubmit:function(e){console.log("Form data",e)},children:function(e){return Object(b.jsxs)(rt.b,{className:ut.a.loginForm,children:[Object(b.jsx)(rt.a,{control:"input",type:"email",label:"Email",name:"email"}),Object(b.jsx)(rt.a,{control:"input",type:"password",label:"Password",name:"password"}),Object(b.jsx)("button",{type:"submit",disabled:!e.isValid,children:"Submit"})]})}})}var jt=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)(lt,{})]})},dt="SET_USER_DATA",pt={id:null,email:null,login:null,isAuth:!1},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case dt:return Object(P.a)(Object(P.a)(Object(P.a)({},e),t.data),{},{isAuth:!0});default:return e}},ft=function(e,t,n){return{type:dt,data:{id:e,email:t,login:n}}},ht="INITIALIZED_SUCCESS",Ot={initialized:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ht:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},mt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(it,{}),Object(b.jsx)(f,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/profile/:userId",element:Object(b.jsx)(Ye,{})}),Object(b.jsx)(h.b,{path:"/profile/*",element:Object(b.jsx)(Ye,{})}),Object(b.jsx)(h.b,{path:"/dialogs/*",element:Object(b.jsx)(ye,{})}),Object(b.jsx)(h.b,{path:"/users",element:Object(b.jsx)(je,{})}),Object(b.jsx)(h.b,{path:"/login",element:Object(b.jsx)(jt,{})}),Object(b.jsx)(h.b,{path:"/calendar",element:Object(b.jsx)(g,{})}),Object(b.jsx)(h.b,{path:"/music",element:Object(b.jsx)(et,{})})]})})]}):Object(b.jsx)($,{})}}]),n}(s.Component),vt=Object(ee.c)(Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(_.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(_.a)(x.a.mark((function e(t){var n,s,a,i,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===(n=e.sent).resultCode&&(s=n.data,a=s.id,i=s.email,r=s.login,t(ft(a,i,r)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:n=e.sent,Promise.all([n]),t({type:ht});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),Ve)(mt),xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},_t=n(112),wt=Object(ee.b)({dialogsPage:be,profilePage:Le,usersPage:L,auth:bt,app:gt}),Pt=Object(ee.d)(wt,Object(ee.a)(_t.a));r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{store:Pt,children:Object(b.jsx)(vt,{})})})}),document.getElementById("root")),xt()},26:function(e,t,n){e.exports={display:"Message_display__1EHVd",message:"Message_message__ABkZL",description:"Message_description__3trQ6",angle:"Message_angle__2v-k7",name:"Message_name__2eLj0",text:"Message_text__2Dm9O",time:"Message_time__1ODfc"}},32:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__6rxj1",dialogsItems:"Dialogs_dialogsItems__3gA3l",active:"Dialogs_active__2MX0L",dialog:"Dialogs_dialog__EU5iR",messages:"Dialogs_messages__9dv1e",message:"Dialogs_message__1aPDA"}},52:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__9cMJ0",posts:"MyPosts_posts__3d0Un",textarea:"MyPosts_textarea__jzmwN",button:"MyPosts_button__A01AX"}},63:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__33JVh"}},64:function(e,t,n){e.exports={pleer:"Music_pleer__2ayyf",item:"Music_item__1eXWr"}},65:function(e,t,n){e.exports={header:"Header_header__H_o5P",loginBlock:"Header_loginBlock__1sTzL"}}},[[244,1,2]]]);
//# sourceMappingURL=main.3a05ce5b.chunk.js.map