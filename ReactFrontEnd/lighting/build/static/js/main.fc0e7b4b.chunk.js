(this.webpackJsonplighting=this.webpackJsonplighting||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),o=(n(70),n(14)),s=n(15),l=n(33),j=n(18),u=n(43),d=n(42),h=(n.p,n(71),n(134)),b=n(127),O=n(138),f=n(140),m=n(139),p=n(133),g=n(137),x=n(135),v=n(81),k=n(132),y=n(136),C=(n(131),n(54)),N=n.n(C),B=n(51),S=n.n(B),T=n(52),P=n.n(T),E=n(53),I=n.n(E),F=n(55),L=n.n(F),W=n(56),w=n.n(W),z=n(57),A=n(142),D=n(141),G=n(5),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch("/toggle").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(G.jsx)("div",{id:"Toggle",children:Object(G.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(G.jsx)(S.a,{})})})}}]),n}(c.Component),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch("/skip").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(G.jsx)("div",{id:"Toggle",children:Object(G.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(G.jsx)(P.a,{})})})}}]),n}(c.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"handleClick",value:function(){fetch("/back").then((function(e){return e.json()}))}},{key:"render",value:function(){return Object(G.jsx)("div",{id:"Toggle",children:Object(G.jsx)(b.a,{onClick:this.handleClick,fullWidth:!0,variant:"contained",color:"primary",className:"submit",children:Object(G.jsx)(I.a,{})})})}}]),n}(c.Component);var U=Object(k.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},toolbarButtons:{marginLeft:"auto"}}})),q=function(e){var t=a.a.useState(null),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(null),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(null),h=Object(s.a)(d,2),O=h[0],f=h[1];Object(c.useEffect)((function(){fetch("/getanimations").then((function(e){return e.json()})).then((function(e){u(e.animations)}))}),[]);var m=Boolean(i);if(Object(c.useEffect)((function(){f(e.currItem)}),[]),null==j)return Object(G.jsx)("div",{children:" loading "});var p=function(e){r(null),"click"!==e.type&&f(e)};return Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{onClick:function(){return e.addItem(O)},children:Object(G.jsx)(N.a,{})}),Object(G.jsx)(b.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:O}),Object(G.jsx)(z.a,{id:"long-menu",anchorEl:i,keepMounted:!0,open:m,onClose:p,PaperProps:{style:{maxHeight:216,width:"40ch"}},children:j.map((function(e){return Object(G.jsx)(A.a,{selected:e===O,onClick:function(){return p(e)},children:e},e)}))})]})};function H(){var e=U(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),i=n[0],r=n[1],l=Object(c.useState)(0),j=Object(s.a)(l,2),u=j[0],d=j[1];if(Object(c.useEffect)((function(){fetch("/getcurrentani").then((function(e){return e.json()})).then((function(e){d(e.animations),r(!1)}))}),[]),i)return Object(G.jsx)("div",{className:"App",children:"Loading..."});return Object(G.jsxs)(a.a.Fragment,{children:[Object(G.jsx)(p.a,{}),Object(G.jsx)(h.a,{position:"relative",children:Object(G.jsxs)(x.a,{children:[Object(G.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Lighting control"}),Object(G.jsx)(q,{currItem:"test",addItem:function(e){fetch("/addanimation/"+e).then((function(e){e.json(),fetch("/getcurrentani").then((function(e){return e.json()})).then((function(e){d(e.animations),r(!1),console.log(e.animations)}))})),d(Object(o.a)(u))}}),Object(G.jsx)("div",{className:e.toolbarButtons,children:Object(G.jsxs)(b.a,{children:[" ",Object(G.jsx)(L.a,{})," "]})})]})}),Object(G.jsxs)("main",{children:[Object(G.jsx)("a",{children:" \xa0"}),Object(G.jsx)("div",{className:e.heroContent,children:Object(G.jsxs)(y.a,{maxWidth:"sm",children:[Object(G.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Lighting control"}),Object(G.jsx)("div",{className:e.heroButtons,children:Object(G.jsxs)(g.a,{container:!0,spacing:2,justify:"center",children:[Object(G.jsx)(g.a,{item:!0,children:Object(G.jsx)(R,{})}),Object(G.jsx)(g.a,{item:!0,children:Object(G.jsx)(J,{})}),Object(G.jsx)(g.a,{item:!0,children:Object(G.jsx)(M,{})})]})})]})}),Object(G.jsx)(y.a,{className:e.cardGrid,maxWidth:"md",children:Object(G.jsx)(g.a,{container:!0,spacing:4,children:u.map((function(t,n){return Object(G.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(G.jsxs)(O.a,{className:e.card,children:[Object(G.jsx)(m.a,{className:e.cardContent,children:Object(G.jsxs)("form",{noValidate:!0,id:"card"+n,children:[Object(G.jsxs)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Position: ",n]}),Object.keys(t).map((function(e,c){return Object(G.jsxs)(v.a,{children:["type"!==e?Object(G.jsx)(D.a,{name:e,flag:e+c,id:"outlined-basic",size:"small",label:e.charAt(0).toUpperCase()+e.slice(1),variant:"outlined",onChange:function(t){return function(e,t,n){console.log(e.target.value);var c=u;c[n][t]=e.target.value,d(Object(o.a)(c))}(t,e,n)},value:Object.values(t)[c]}):Object(G.jsx)(D.a,{name:e,flag:e+c,InputProps:{readOnly:!0},id:"outlined-basic",readOnly:!0,size:"small",label:e.charAt(0).toUpperCase()+e.slice(1),variant:"outlined",value:Object.values(t)[c]}),Object(G.jsx)("a",{children:" \xa0"})]})}))]})}),Object(G.jsxs)(f.a,{children:[Object(G.jsx)(b.a,{size:"small",color:"primary",onClick:function(){return function(e){if(u.length>1){fetch("removeanimation/"+e).then((function(e){return e.json()}));var t=u;t.splice(e,1)[0],d(Object(o.a)(t))}}(n)},children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(b.a,{size:"small",color:"primary",onClick:function(){return function(e){var t=document.querySelector("#card"+e),n=new FormData(t),c=u[e],a={};Object.keys(c).map((function(e,t){return a[e]=n.get(e)}));var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:a})};fetch("/editanimation/"+e,i).then((function(e){return e.json()}))}(n)},children:"Edit"})]})]})},n)}))})})]}),Object(G.jsxs)("footer",{className:e.footer,children:[Object(G.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"do later"}),Object(G.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Ethan Ray"})]})]})}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(H,{})}),document.getElementById("root")),V()}},[[79,1,2]]]);
//# sourceMappingURL=main.fc0e7b4b.chunk.js.map