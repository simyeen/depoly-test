(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),c=t.n(a),o=t(31),u=t.n(o),i=(t(73),t(11)),s=t(13),b=t(7),l=t(8),j=t(4),d={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","0b7285"]},f=t(20);function O(){var n=Object(b.a)(["\n  ","\n"]);return O=function(){return n},n}function p(){var n=Object(b.a)(["\n  ","\n"]);return p=function(){return n},n}function h(){var n=Object(b.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n    "]);return h=function(){return n},n}function g(){var n=Object(b.a)(["\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      width: 100%;\n      font-size: 1.125rem;\n    "]);return g=function(){return n},n}function m(){var n=Object(b.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n\n  ","\n\n  ","\n"]);return m=function(){return n},n}var v=Object(l.a)(m(),d.gray[8],d.gray[6],(function(n){return n.fullWidth&&Object(l.a)(g())}),(function(n){return n.cyan&&Object(l.a)(h(),d.cyan[5],d.cyan[4])})),x=l.b.button(p(),v),y=Object(l.b)(f.b)(O(),v),w=function(n){return n.to?Object(r.jsx)(y,Object(j.a)(Object(j.a)({},n),{},{cyan:n.cyan?1:0})):Object(r.jsx)(x,Object(j.a)({},n))},k=t(66);function E(){var n=Object(b.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return E=function(){return n},n}var C=l.b.div(E()),S=function(n){var e=n.children,t=Object(k.a)(n,["children"]);return Object(r.jsx)(C,Object(j.a)(Object(j.a)({},t),{},{children:e}))};function I(){var n=Object(b.a)(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]);return I=function(){return n},n}function T(){var n=Object(b.a)(["\n  height: 4rem;\n"]);return T=function(){return n},n}function L(){var n=Object(b.a)(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  .logo {\n    font-size: 1.125rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n  }\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(b.a)(["\n  position: fixed;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n"]);return N=function(){return n},n}var R,F=l.b.div(N()),_=Object(l.b)(S)(L()),A=l.b.div(T()),z=l.b.div(I()),D=function(n){var e=n.user,t=n.onLogout;return Object(r.jsxs)(r.Fragment,{children:[console.log(e),Object(r.jsx)(F,{children:Object(r.jsxs)(_,{children:[Object(r.jsx)("div",{className:"logo",children:"MOAT"}),Object(r.jsx)("div",{className:"right",children:e?Object(r.jsxs)("div",{className:"right",children:[Object(r.jsx)(z,{children:e.username}),Object(r.jsx)(w,{onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]}):Object(r.jsx)("div",{className:"right",children:Object(r.jsx)(w,{to:"/login",children:"\ub85c\uadf8\uc778"})})})]})}),Object(r.jsx)(A,{})]})},G=t(10),M=t(14),U=t.n(M),P=t(16),q=t(104),H=t(103),J=t(12),W="loading/START_LOADING",Z="loading/FINISH_LOADING",B=Object(q.a)(W,(function(n){return n})),K=Object(q.a)(Z,(function(n){return n})),$=Object(H.a)((R={},Object(G.a)(R,W,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},Object(G.a)({},t,!0))})),Object(G.a)(R,Z,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},Object(G.a)({},t,!0))})),R),{}),Q=function(n){return[n,"".concat(n,"_SUCCESS"),"".concat(n,"_FAILURE")]};function V(n,e){var t="".concat(n,"_SUCCESS"),r="".concat(n,"_FAILURE");return U.a.mark((function a(c){var o;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(J.c)(B(n));case 2:return a.prev=2,a.next=5,Object(J.b)(e,c.payload);case 5:return o=a.sent,a.next=8,Object(J.c)({type:t,payload:o.data});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(J.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(J.c)(K(n));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var X,Y=t(53),nn=t.n(Y).a.create(),en=function(){return nn.post("/api/auth/logout")},tn=U.a.mark(hn),rn=U.a.mark(gn),an="user/TEMP_SET_USER",cn=Q("user/CHECK"),on=Object(P.a)(cn,3),un=on[0],sn=on[1],bn=on[2],ln="user/LOGOUT",jn=Object(q.a)(an,(function(n){return n})),dn=Object(q.a)(un),fn=Object(q.a)(ln),On=V(un,(function(){return nn.get("/api/auth/check")}));function pn(){try{localStorage.removeItem("user")}catch(n){console.log("localStorage is not working")}}function hn(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(J.b)(en);case 3:localStorage.removeItem("user"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),tn,null,[[0,6]])}function gn(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.d)(un,On);case 2:return n.next=4,Object(J.d)(bn,pn);case 4:return n.next=6,Object(J.d)(ln,hn);case 6:case"end":return n.stop()}}),rn)}var mn=Object(H.a)((X={},Object(G.a)(X,an,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{user:t})})),Object(G.a)(X,sn,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{user:t,checkError:null})})),Object(G.a)(X,bn,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{user:null,checkError:t})})),Object(G.a)(X,ln,(function(n,e){return Object(j.a)(Object(j.a)({},n),{},{user:null})})),X),{user:null,checkError:null}),vn=function(){var n=Object(s.b)(),e=Object(s.c)((function(n){return{user:n.user.user}})).user;return Object(r.jsx)(D,{user:e,onLogout:function(){n(fn())}})},xn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(vn,{}),Object(r.jsx)("div",{children:"\uc548\ub155\ud558\uc138\uc694."})]})};function yn(){var n=Object(b.a)(["\n  .logo-area {\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return yn=function(){return n},n}function wn(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: ",";\n\n  display: flex;\n  flex-direction: colunm;\n  justify-content: center;\n  align-items: center;\n"]);return wn=function(){return n},n}var kn,En=l.b.div(wn(),d.gray[8]),Cn=l.b.div(yn()),Sn=function(n){var e=n.children;return Object(r.jsx)(En,{children:Object(r.jsxs)(Cn,{children:[Object(r.jsxs)("div",{className:"logo-area",children:[Object(r.jsx)(f.b,{to:"/",children:"MOAT"})," "]}),e]})})},In=t(54),Tn=U.a.mark(Kn),Ln="auth/CHANGE_FIELD",Nn="auth/INITIALIZE_FORM",Rn=Q("auth/REGISTER"),Fn=Object(P.a)(Rn,3),_n=Fn[0],An=Fn[1],zn=Fn[2],Dn=Q("auth/LOGIN"),Gn=Object(P.a)(Dn,3),Mn=Gn[0],Un=Gn[1],Pn=Gn[2],qn=Object(q.a)(Ln,(function(n){return{form:n.form,key:n.key,value:n.value}})),Hn=Object(q.a)(Nn,(function(n){return n})),Jn=Object(q.a)(_n,(function(n){return{username:n.username,password:n.password}})),Wn=Object(q.a)(Mn,(function(n){return{username:n.username,password:n.password}})),Zn=V(_n,(function(n){var e=n.username,t=n.password;return nn.post("/api/auth/register",{username:e,password:t})})),Bn=V(Mn,(function(n){var e=n.username,t=n.password;return nn.post("/api/auth/login",{username:e,password:t})}));function Kn(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.d)(_n,Zn);case 2:return n.next=4,Object(J.d)(Mn,Bn);case 4:case"end":return n.stop()}}),Tn)}var $n={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},auth:null,authError:null},Qn=Object(H.a)((kn={},Object(G.a)(kn,Ln,(function(n,e){var t=e.payload,r=t.form,a=t.key,c=t.value;return Object(In.a)(n,(function(n){n[r][a]=c}))})),Object(G.a)(kn,Nn,(function(n,e){var t,r=e.payload;return Object(j.a)(Object(j.a)({},n),{},(t={},Object(G.a)(t,r,$n[r]),Object(G.a)(t,"authError",null),t))})),Object(G.a)(kn,An,(function(n,e){return Object(j.a)(Object(j.a)({},n),{},{auth:e.payload,authError:null})})),Object(G.a)(kn,zn,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{authError:t})})),Object(G.a)(kn,Un,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{authError:null,auth:t})})),Object(G.a)(kn,Pn,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{authError:t})})),kn),$n);function Vn(){var n=Object(b.a)(["\n  margin-top: 1rem;\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(b.a)(["\n  margin-top: 2rem;\n  text-align: right;\n  a {\n    color: ",";\n    text-decoration: underline;\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(b.a)(["\n  font-size: 1rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n\n  &:focus {\n    color: $oc-teal-7;\n    border-bottom: 1px solid ",";\n  }\n\n  & + & {\n    margin-top: 1rem;\n  }\n"]);return Yn=function(){return n},n}function ne(){var n=Object(b.a)(["\n  h3 {\n    margin: 0;\n    color: ",";\n    margin-bottom: 1rem;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(b.a)(["\n  color: red;\n  text-align: center;\n  font-size: 0.825rem;\n  margin-top: 1rem;\n"]);return ee=function(){return n},n}var te=l.b.div(ee()),re=l.b.div(ne(),d.gray[8]),ae=l.b.input(Yn(),d.gray[5],d.gray[7]),ce=l.b.div(Xn(),d.gray[6],d.gray[9]),oe=Object(l.b)(w)(Vn()),ue={login:"\ub85c\uadf8\uc778",register:"\ud68c\uc6d0\uac00\uc785"},ie=function(n){var e=n.type,t=n.form,a=n.onChange,c=n.onSubmit,o=n.error,u=ue[e];return Object(r.jsxs)(re,{children:[console.log(t),Object(r.jsx)("h3",{children:u}),Object(r.jsxs)("form",{onSubmit:c,children:[Object(r.jsx)(ae,{autoComplete:"username",name:"username",placeholder:"\uc544\uc774\ub514",onChange:a,value:t.username}),Object(r.jsx)(ae,{autoComplete:"new-password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",onChange:a,value:t.password}),"register"===e&&Object(r.jsx)(ae,{autoComplete:"new-password",name:"passwordConfirm",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",type:"password",onChange:a,value:t.passwordConfirm}),o&&Object(r.jsx)(te,{children:o}),Object(r.jsx)(oe,{cyan:!0,fullWidth:!0,children:u})]}),Object(r.jsx)(ce,{children:"login"===e?Object(r.jsx)(f.b,{to:"/register",children:"\ud68c\uc6d0\uac00\uc785"}):Object(r.jsx)(f.b,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})},se=Object(i.e)((function(n){var e=n.history,t=Object(a.useState)(null),c=Object(P.a)(t,2),o=c[0],u=c[1],i=Object(s.b)(),b=Object(s.c)((function(n){var e=n.auth,t=n.user;return{form:e.login,auth:e.auth,authError:e.authError,user:t.user}})),l=b.form,j=b.auth,d=b.authError,f=b.user;return Object(a.useEffect)((function(){i(Hn("login"))}),[i]),Object(a.useEffect)((function(){if(d)return console.log("\uc624\ub958 \ubc1c\uc0dd"),console.log(d),void u("\ub85c\uadf8\uc778 \uc2e4\ud328");j&&(console.log("\ub85c\uadf8\uc778 \uc131\uacf5"),i(dn()))}),[j,d,i]),Object(a.useEffect)((function(){if(f){e.push("/");try{localStorage.setItem("user",JSON.stringify(f))}catch(n){console.log("localStorage is not working")}}}),[f,e]),Object(r.jsx)(ie,{type:"login",form:l,onChange:function(n){var e=n.target,t=e.value,r=e.name;i(qn({form:"login",key:r,value:t}))},onSubmit:function(n){n.preventDefault();var e=l.username,t=l.password;i(Wn({username:e,password:t}))},error:o})})),be=function(){return Object(r.jsx)(Sn,{children:Object(r.jsx)(se,{})})},le=Object(i.e)((function(n){var e=n.history,t=Object(a.useState)(null),c=Object(P.a)(t,2),o=c[0],u=c[1],i=Object(s.b)(),b=Object(s.c)((function(n){var e=n.auth,t=n.user;return{form:e.register,authError:e.authError,auth:e.auth,user:t.user}})),l=b.form,j=b.auth,d=b.authError,f=b.user;return Object(a.useEffect)((function(){i(Hn("register"))}),[i]),Object(a.useEffect)((function(){if(d)return 409===d.response.status?void u("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacc4\uc815\uba85\uc785\ub2c8\ub2e4."):void u("\ud68c\uc6d0\uac00\uc785 \uc2e4\ud328");j&&(console.log("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5"),console.log("auth"),i(dn()))}),[j,d,i]),Object(a.useEffect)((function(){if(f){e.push("/");try{localStorage.setItem("user",JSON.stringify(f))}catch(n){console.log("localStorage is not working")}}}),[e,f]),Object(r.jsx)(ie,{type:"register",form:l,onChange:function(n){var e=n.target,t=e.name,r=e.value;i(qn({form:"register",key:t,value:r}))},onSubmit:function(n){n.preventDefault();var e=l.username,t=l.password,r=l.passwordConfirm;if(![e,t,r].includes(""))return t!==r?(u("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),i(qn({form:"register",key:t,value:""})),void i(qn({form:"register",key:r,value:""}))):void i(Jn({username:e,password:t}));u("\ube48 \uce78\uc744 \ubaa8\ub450 \uc785\ub825\ud558\uc138\uc694.")},error:o})})),je=function(){return Object(r.jsx)(Sn,{children:Object(r.jsx)(le,{})})},de=t(55),fe=t(56),Oe=t(67),pe=t(63),he=t(57),ge=t(60),me=function(n){Object(Oe.a)(t,n);var e=Object(pe.a)(t);function t(){return Object(de.a)(this,t),e.apply(this,arguments)}return Object(fe.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"application",children:["Lottie",Object(r.jsxs)(he.a,{children:[Object(r.jsx)("script",{src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}),Object(r.jsx)(ge.a,{src:"https://assets1.lottiefiles.com/private_files/lf30_zmdmlimu.json",background:"transparent",speed:"1",style:{width:"52px",height:"28px"},loop:!0,autoplay:!0})]})]})}}]),t}(c.a.Component);function ve(){var n=Object(b.a)(["\n  height: 2.125rem;\n  & + & {\n    margin-left: 0.5rem;\n  }\n"]);return ve=function(){return n},n}function xe(){var n=Object(b.a)(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]);return xe=function(){return n},n}var ye=l.b.div(xe()),we=Object(l.b)(w)(ve()),ke=function(n){var e=n.onCancel,t=n.onPublish;return Object(r.jsxs)(ye,{children:[Object(r.jsx)(we,{cyan:!0,onClick:t,children:"\ud3ec\uc2a4\ud2b8\ub4f1\ub85d"}),Object(r.jsx)(we,{onClick:e,children:"\ucde8\uc18c"})]})},Ee=t(61),Ce=t.n(Ee);t(101);function Se(){var n=Object(b.a)(["\n  .ql-editor {\n    padding: 0;\n    min-height: 320px;\n    font-size: 1.125rem;\n    line-height: 1.5;\n  }\n  .ql-editor.ql-blank::before {\n    left: 0px;\n  }\n"]);return Se=function(){return n},n}function Ie(){var n=Object(b.a)(["\n  font-size: 3rem;\n  outline: none;\n  padding-bottom: 0.5rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  margin-bottom: 2rem;\n  width: 100%;\n"]);return Ie=function(){return n},n}function Te(){var n=Object(b.a)(["\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n"]);return Te=function(){return n},n}var Le,Ne=Object(l.b)(S)(Te()),Re=l.b.input(Ie(),d.gray[4]),Fe=l.b.div(Se()),_e=function(n){var e=n.onChangeField,t=n.title,c=(n.body,Object(a.useRef)(null)),o=Object(a.useRef)(null);Object(a.useEffect)((function(){o.current=new Ce.a(c.current,{theme:"bubble",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud558\uc138\uc694...",modules:{toolbar:[[{header:"1"},{header:"2"}],["bold","italic","underline","strike"],[{list:"orderd"},{list:"bullet"}],["blockquote","code-block","link","image"]]}});var n=o.current;n.on("text-change",(function(t,r,a){"user"===a&&e({key:"body",value:n.root.innerHTML})}))}),[e]);return Object(r.jsxs)(Ne,{children:[Object(r.jsx)(Re,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(n){e({key:"title",value:n.target.value})},value:t}),Object(r.jsx)(Fe,{children:Object(r.jsx)("div",{ref:c})})]})},Ae=U.a.mark(Ze),ze="write/INITIALIZE",De="write/INITIALIZE",Ge=Q("write/WRITE_POST"),Me=Object(P.a)(Ge,3),Ue=Me[0],Pe=Me[1],qe=Me[2],He=Object(q.a)(ze),Je=Object(q.a)(De,(function(n){return{key:n.key,value:n.value}})),We=(Object(q.a)(Ue,(function(n){return{title:n.title,body:n.body,tags:n.tags}})),V(Ue,(function(n){var e=n.title,t=n.body,r=n.tags;return nn.post("/api/posts",{title:e,body:t,tags:r})})));function Ze(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.d)(Ue,We);case 2:case"end":return n.stop()}}),Ae)}var Be={title:"",body:"",tags:[],post:null,postError:null},Ke=Object(H.a)((Le={},Object(G.a)(Le,ze,(function(){return Be})),Object(G.a)(Le,De,(function(n,e){var t=e.payload,r=t.key,a=t.value;return Object(j.a)(Object(j.a)({},n),{},Object(G.a)({},r,a))})),Object(G.a)(Le,Ue,(function(n){return Object(j.a)(Object(j.a)({},n),{},{post:null,postError:null})})),Object(G.a)(Le,Pe,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{post:t,postError:null})})),Object(G.a)(Le,qe,(function(n,e){var t=e.payload;return Object(j.a)(Object(j.a)({},n),{},{post:null,postError:t})})),Le),Be),$e=function(){var n=Object(s.b)(),e=Object(s.c)((function(n){return{title:n.title,body:n.body}})),t=e.title,c=e.body,o=Object(a.useCallback)((function(e){return n(Je(e))}),[n]);return Object(a.useEffect)((function(){return function(){return n(He())}}),[n]),Object(r.jsx)(_e,{onChangeField:o,title:t,body:c})},Qe=t(64);function Ve(){var n=Object(b.a)(["\n  display: flex;\n  margin-top: 0.5rem;\n"]);return Ve=function(){return n},n}function Xe(){var n=Object(b.a)(["\n  margin-right: 0.5rem;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return Xe=function(){return n},n}function Ye(){var n=Object(b.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  width: 256px;\n  border: 1px solid ",";\n  input,\n  button {\n    outline: none;\n    border: none;\n    font-size: 1rem;\n  }\n\n  input {\n    padding: 0.5rem;\n    flex: 1;\n    min-width: 0;\n  }\n  button {\n    cursor: pointer;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    border: none;\n    background: ",";\n    color: white;\n    font-weight: bold;\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return Ye=function(){return n},n}function nt(){var n=Object(b.a)(["\n  width: 100%;\n  border-top: 1px solid ",";\n  padding-top: 2rem;\n\n  h4 {\n    color: ",";\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n  }\n"]);return nt=function(){return n},n}var et=l.b.div(nt(),d.gray[2],d.gray[8]),tt=l.b.form(Ye(),d.gray[9],d.gray[8],d.gray[6]),rt=l.b.div(Xe(),d.gray[6]),at=l.b.div(Ve()),ct=function(n){var e=n.tags,t=n.onChangeTags,o=Object(a.useState)(""),u=Object(P.a)(o,2),i=u[0],s=u[1],b=Object(a.useState)([]),l=Object(P.a)(b,2),j=l[0],d=l[1],f=Object(a.useCallback)((function(n){if(n&&!j.includes(n)){var e=[].concat(Object(Qe.a)(j),[n]);d(e),t(e)}}),[j,t]),O=Object(a.useCallback)((function(n){var e=j.filter((function(e){return e!==n}));d(e),t(e)}),[j,t]),p=Object(a.useCallback)((function(n){s(n.target.value)}),[]),h=Object(a.useCallback)((function(n){n.preventDefault(),f(i.trim()),s("")}),[i,f]);Object(a.useEffect)((function(){d(e)}),[e]);var g=c.a.memo((function(n){var e=n.tags,t=n.onRemove;return Object(r.jsx)(at,{children:e.map((function(n){return Object(r.jsx)(m,{tag:n,onRemove:t},n)}))})})),m=c.a.memo((function(n){var e=n.tag,t=n.onRemove;return Object(r.jsxs)(rt,{onClick:function(){t(e)},children:["#",e]})}));return Object(r.jsxs)(et,{children:[Object(r.jsx)("h4",{children:"\ud0dc\uadf8"}),Object(r.jsxs)(tt,{onSubmit:h,children:[Object(r.jsx)("input",{placeholder:"\ud0dc\uadf8\ub97c \uc785\ub825\ud558\uc138\uc694",value:i,onChange:p}),Object(r.jsx)("button",{type:"submit",children:"\ucd94\uac00"})]}),Object(r.jsx)(g,{tags:j,onRemove:O})]})},ot=function(){var n=Object(s.b)(),e=Object(s.c)((function(n){return{tags:n.write.tags}})).tags,t=Object(a.useCallback)((function(e){n(Je({key:"tags",value:e}))}),[n]);return Object(r.jsx)(ct,{onChangeTags:t,tags:e})},ut=function(){return Object(r.jsxs)(S,{children:[Object(r.jsx)($e,{}),Object(r.jsx)(ot,{}),Object(r.jsx)(ke,{}),Object(r.jsx)(me,{})]})},it=function(){return Object(r.jsx)("div",{children:"\ud3ec\uc2a4\ud2b8 \uc77d\uae30"})},st=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{component:xn,path:["/@:username","/"],exact:!0}),Object(r.jsx)(i.a,{component:be,path:"/login"}),Object(r.jsx)(i.a,{component:je,path:"/register"}),Object(r.jsx)(i.a,{component:ut,path:"/write"}),Object(r.jsx)(i.a,{component:it,path:"/@:username/:postId"})]})},bt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))},lt=t(22),jt=t(62),dt=t(65),ft=U.a.mark(Ot);function Ot(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.a)([Kn(),gn(),Ze()]);case 2:case"end":return n.stop()}}),ft)}var pt=Object(lt.combineReducers)({auth:Qn,loading:$,user:mn,write:Ke}),ht=Object(dt.a)(),gt=Object(lt.createStore)(pt,Object(jt.composeWithDevTools)(Object(lt.applyMiddleware)(ht)));ht.run(Ot),function(){try{var n=localStorage.getItem("user");if(!n)return;gt.dispatch(jn(n)),gt.dispatch(dn())}catch(e){console.log("localStorage is not working")}}(),u.a.render(Object(r.jsx)(s.a,{store:gt,children:Object(r.jsx)(f.a,{children:Object(r.jsx)(st,{})})}),document.getElementById("root")),bt()},73:function(n,e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.6a322f99.chunk.js.map