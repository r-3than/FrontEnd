(this.webpackJsonplighting=this.webpackJsonplighting||[]).push([[0],{84:function(e,t,n){},85:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),o=(n(84),n(15)),s=n(16),l=n(35),j=n(18),u=n(48),d=n(47),h=(n(85),n(144)),b=n(137),O=n(148),f=n(150),m=n(149),x=n(143),p=n(147),g=n(154),v=n(145),y=n(141),C=n(140),k=n(146),S=n(62),N=n.n(S),B=n(59),T=n.n(B),W=n(60),w=n.n(W),I=n(61),E=n.n(I),F=n(63),P=n.n(F),G=n(66),z=n.n(G),A=n(68),L=n(153),M=n(152),D=n(151),J=n(64),R=n.n(J),U=n(65),q=n.n(U),H=n(67),V=n(142),K=n(4),Q="http://ethanpi:5000",X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch(Q+"/toggle").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(K.jsx)("div",{id:"Toggle",children:Object(K.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(K.jsx)(T.a,{})})})}}]),n}(c.Component),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch(Q+"/skip").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(K.jsx)("div",{id:"Toggle",children:Object(K.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(K.jsx)(w.a,{})})})}}]),n}(c.Component),Z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch(Q+"/back").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(K.jsx)("div",{id:"Toggle",children:Object(K.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(K.jsx)(E.a,{})})})}}]),n}(c.Component),$=Object(C.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:"#3b3b3b",color:"#efefff",padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:"#3b3b3b",padding:e.spacing(6)},toolbarButtons:{marginLeft:"auto"}}})),_=function(e){var t=a.a.useState(null),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(null),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(null),h=Object(s.a)(d,2),O=h[0],f=h[1];Object(c.useEffect)((function(){fetch(Q+"/getanimations").then((function(e){return e.json()})).then((function(e){u(e.animations)}))}),[]);var m=Boolean(i);if(Object(c.useEffect)((function(){f(e.currItem)}),[]),null==j)return Object(K.jsx)("div",{children:" loading "});var x=function(e){r(null),"click"!==e.type&&f(e)};return Object(K.jsxs)("div",{children:[Object(K.jsx)(b.a,{onClick:function(){return e.addItem(O)},children:Object(K.jsx)(N.a,{})}),Object(K.jsx)(b.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:Object(K.jsx)(M.a,{overflow:"hidden",children:O})}),Object(K.jsx)(A.a,{id:"long-menu",anchorEl:i,keepMounted:!0,open:m,onClose:x,PaperProps:{style:{maxHeight:216,width:"40ch"}},children:j.map((function(e){return Object(K.jsx)(L.a,{noWrap:!0,selected:e===O,onClick:function(){return x(e)},children:Object(K.jsx)(y.a,{variant:"inherit",noWrap:!0,children:e})},e)}))})]})};function ee(){var e=$(),t=a.a.useState(255),n=Object(s.a)(t,2),i=n[0],r=n[1],l=Object(c.useState)([{}]),j=Object(s.a)(l,2),u=j[0],d=j[1];Object(c.useEffect)((function(){fetch(Q+"/getcurrentani").then((function(e){return e.json()})).then((function(e){d(e.animations)}))}),[]);var C=Object(H.a)({palette:{type:"dark"}});return Object(K.jsx)(V.a,{theme:C,children:Object(K.jsxs)(a.a.Fragment,{children:[Object(K.jsx)(x.a,{}),Object(K.jsx)(h.a,{position:"relative",children:Object(K.jsxs)(v.a,{children:[Object(K.jsx)(_,{currItem:"Animation",addItem:function(e){fetch(Q+"/addanimation/"+e).then((function(e){e.json(),fetch(Q+"/getcurrentani").then((function(e){return e.json()})).then((function(e){d(e.animations),console.log(e.animations)}))})),d(Object(o.a)(u))},className:!0}),Object(K.jsx)("div",{className:e.toolbarButtons,children:Object(K.jsxs)(b.a,{children:[" ",Object(K.jsx)(P.a,{})," "]})})]})}),Object(K.jsxs)("main",{children:[Object(K.jsx)("a",{children:" \xa0"}),Object(K.jsx)("div",{className:e.heroContent,children:Object(K.jsxs)(k.a,{maxWidth:"sm",children:[Object(K.jsx)(y.a,{component:"h1",variant:"h2",align:"center",gutterBottom:!0,children:"Lighting control"}),Object(K.jsx)("div",{className:e.heroButtons,children:Object(K.jsxs)(p.a,{container:!0,spacing:2,justify:"center",children:[Object(K.jsxs)(p.a,{container:!0,spacing:2,justify:"center",children:[Object(K.jsx)(p.a,{item:!0,children:Object(K.jsx)(R.a,{})}),Object(K.jsxs)(p.a,{item:!0,children:[Object(K.jsx)(g.a,{hidden:!0,disableStylesGeneration:!0,value:i,max:255,min:0,onChange:function(e,t){console.log("hmm"),r(t)},style:{width:200,display:"none"}}),Object(K.jsx)(g.a,{disableStylesGeneration:!0,max:255,min:0,onChangeCommitted:function(e,t){r(t),fetch(Q+"/setbrightness/"+t)},style:{width:200}})]}),Object(K.jsx)(p.a,{item:!0,children:Object(K.jsx)(q.a,{})})]}),Object(K.jsx)(p.a,{item:!0,children:Object(K.jsx)(Z,{})}),Object(K.jsx)(p.a,{item:!0,children:Object(K.jsx)(X,{})}),Object(K.jsx)(p.a,{item:!0,children:Object(K.jsx)(Y,{})})]})})]})}),Object(K.jsx)(k.a,{className:e.cardGrid,maxWidth:"md",alignItems:"center",children:Object(K.jsx)(p.a,{container:!0,spacing:2,justifyContent:"center",justify:"center",children:u.map((function(t,n){return Object(K.jsx)(p.a,{item:!0,xs:6,class:"cancelFlex",children:Object(K.jsxs)(O.a,{className:e.card,children:[Object(K.jsx)(m.a,{className:e.cardContent,style:{textAlign:"center"},children:Object(K.jsxs)("form",{noValidate:!0,id:"card"+n,children:[Object(K.jsxs)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Position: ",n]}),Object.keys(t).map((function(e,c){return Object(K.jsx)(y.a,{class:"extraMarg",children:"type"!==e?Object(K.jsx)(D.a,{fullWidth:!0,name:e,flag:e+c,id:"outlined-basic",size:"small",label:e.charAt(0).toUpperCase()+e.slice(1),variant:"outlined",onChange:function(t){return function(e,t,n){var c=u;c[n][t]=e.target.value,d(Object(o.a)(c))}(t,e,n)},value:Object.values(t)[c]}):Object(K.jsx)(D.a,{fullWidth:!0,name:e,flag:e+c,InputProps:{readOnly:!0},id:"outlined-basic",readOnly:!0,size:"small",label:e.charAt(0).toUpperCase()+e.slice(1),variant:"outlined",value:Object.values(t)[c]})})}))]})}),Object(K.jsxs)(f.a,{children:[Object(K.jsx)(b.a,{size:"small",color:"primary",onClick:function(){return function(e){if(u.length>1){fetch(Q+"/removeanimation/"+e).then((function(e){return e.json()}));var t=u;t.splice(e,1)[0],d(Object(o.a)(t))}}(n)},children:Object(K.jsx)(z.a,{})}),Object(K.jsx)(b.a,{size:"small",color:"primary",onClick:function(){return function(e){var t=document.querySelector("#card"+e),n=new FormData(t),c=u[e],a={};Object.keys(c).map((function(e,t){return a[e]=n.get(e)}));var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:a})};fetch(Q+"/editanimation/"+e,i).then((function(e){return e.json()}))}(n)},children:"Edit"})]})]})},n)}))})})]}),Object(K.jsxs)("footer",{className:e.footer,children:[Object(K.jsx)(y.a,{variant:"h6",align:"center",gutterBottom:!0,children:"do later"}),Object(K.jsx)(y.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Ethan Ray"})]})]})})}var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(ee,{})}),document.getElementById("root")),te()}},[[94,1,2]]]);
//# sourceMappingURL=main.2721db47.chunk.js.map