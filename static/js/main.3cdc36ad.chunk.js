(this.webpackJsonptask_2=this.webpackJsonptask_2||[]).push([[0],{107:function(e,t,a){},138:function(e,t,a){e.exports=a(151)},143:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(143),a(107),a(211)),i=a(210),u=a(76),s=a(31),m=a(40),d=a(25),f=a(196),h=a(215),E=a(201),p=a(202),b=a(198),g=a(200),v=a(50),C=a(110),y=a.n(C),O=Object(f.a)({list:{width:250},fullList:{width:"auto"}});function j(){var e,t=O(),a=r.a.useState({left:!1}),n=Object(d.a)(a,2),o=n[0],l=n[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(m.a)(Object(m.a)({},o),{},Object(s.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(E.a,{onClick:c("left",!0),style:{float:"left",margin:20},color:"primary"}," ",r.a.createElement(y.a,{fontSize:"large"})," "),r.a.createElement(h.a,{BackdropProps:{invisible:!0},open:o.left,onClose:c("left",!1)},(e=p.a,r.a.createElement("div",{className:t.list,role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{button:!0,component:v.b,to:"/",className:R},r.a.createElement(g.a,{primary:"Customers"})),r.a.createElement(b.a,{button:!0,component:v.b,to:"/trainings",className:R},r.a.createElement(g.a,{primary:"Trainings"})),r.a.createElement(b.a,{button:!0,component:v.b,to:"/trainings",className:R},r.a.createElement(g.a,{primary:"Calendar"}))))))))}var k=a(83),S=(a(109),a(214)),w=a(213),W=a(203),N=a(209),T=a(205),H=a(204);function F(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],o=a[1],l=r.a.useState({firstname:"",lastname:"",email:"",phone:"",streetaddress:"",postcode:"",city:""}),c=Object(d.a)(l,2),i=c[0],u=c[1],f=function(){o(!1)},h=function(e){u(Object(m.a)(Object(m.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(E.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Add Customer"),r.a.createElement(W.a,{open:n,onClose:f,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"},"Add Customer"),r.a.createElement(T.a,null,r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"firstname",value:i.firstname,onChange:function(e){return h(e)},label:"First Name",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"lastname",value:i.lastname,onChange:function(e){return h(e)},label:"Last Name",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"email",value:i.email,onChange:function(e){return h(e)},label:"Email",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"phone",value:i.phone,onChange:function(e){return h(e)},label:"Phone",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"streetaddress",value:i.streetaddress,onChange:function(e){return h(e)},label:"Street address",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"postcode",value:i.postcode,onChange:function(e){return h(e)},label:"Postcode",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"city",value:i.city,onChange:function(e){return h(e)},label:"City",fullWidth:!0})),r.a.createElement(N.a,null,r.a.createElement(E.a,{onClick:f,color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){e.saveCustomer(i),f()},color:"primary"},"Save"))))}var D=a(111),A=a.n(D);function P(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],o=a[1],l=r.a.useState({brand:"",model:"",email:"",phone:"",streetaddress:"",postcode:"",city:""}),c=Object(d.a)(l,2),i=c[0],u=c[1],f=function(){o(!1)},h=function(e){u(Object(m.a)(Object(m.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",onClick:function(){u({firstname:e.customer.firstname,lastname:e.customer.lastname,email:e.customer.email,phone:e.customer.phone,streetaddress:e.customer.streetaddress,postcode:e.customer.postcode,city:e.customer.city}),o(!0)}}," ",r.a.createElement(A.a,null)),r.a.createElement(W.a,{open:n,onClose:f,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"},"Edit Customer"),r.a.createElement(T.a,null,r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"firstname",value:i.firstname,onChange:function(e){return h(e)},label:"First Name",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"lastname",value:i.lastname,onChange:function(e){return h(e)},label:"Last Name",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"email",value:i.email,onChange:function(e){return h(e)},label:"Email",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"phone",value:i.phone,onChange:function(e){return h(e)},label:"Phone",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"streetaddress",value:i.streetaddress,onChange:function(e){return h(e)},label:"Street address",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"postcode",value:i.postcode,onChange:function(e){return h(e)},label:"Postcode",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"city",value:i.city,onChange:function(e){return h(e)},label:"city",fullWidth:!0})),r.a.createElement(N.a,null,r.a.createElement(E.a,{onClick:f,color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){e.updateCustomer(i,e.customer.links[0].href),f()},color:"primary"},"Save"))))}var L=a(112),x=a.n(L);function z(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],o=a[1],l=r.a.useState({date:"",duration:"",activity:"",customer:""}),c=Object(d.a)(l,2),i=c[0],u=c[1],f=function(){o(!1)},h=function(e){u(Object(m.a)(Object(m.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(E.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},r.a.createElement(x.a,null)),r.a.createElement(W.a,{open:n,onClose:f,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"},"Add Training"),r.a.createElement(T.a,null,r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"date",value:i.date,onChange:function(e){return h(e)},label:"Date",fullWidth:!0}),r.a.createElement(w.a,{margin:"dense",name:"duration",value:i.duration,onChange:function(e){return h(e)},label:"Duration",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"activity",value:i.activity,onChange:function(e){return h(e)},label:"Activity",fullWidth:!0}),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",name:"customer",value:i.customer,onChange:function(e){return h(e)},label:"Customer",fullWidth:!0})),r.a.createElement(N.a,null,r.a.createElement(E.a,{onClick:f,color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){e.saveTraining(i),f()},color:"primary"},"Save"))))}var B=a(58),J=a.n(B);function U(){var e,t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){return p()}),[]);var c=r.a.useState(!1),i=Object(d.a)(c,2),u=i[0],m=i[1],f=function(){m(!0)},h=function(e,t){"clickaway"!==t&&m(!1)},p=function(){fetch(" https://customerrest.herokuapp.com/api/customers").then((function(e){return e.json()})).then((function(e){return l(e.content)}))},b=function(e,t){fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return p()})).catch((function(e){return console.error(e)}))},g=function(e){fetch("https://customerrest.herokuapp.com/api/trainings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return p()})).catch((function(e){return console.error(e)}))},v=[(e={Header:"Actions",accessor:"actions",sortable:!1,filterable:!1,width:80},Object(s.a)(e,"accessor","links[0].href"),Object(s.a)(e,"Cell",(function(e){return r.a.createElement(E.a,{onClick:function(){return t=e.value,console.log(t),void(window.confirm("Are you sure")&&fetch(t,{method:"DELETE"}).then((function(e){return p()})).catch((function(e){return console.error(e)})).then(f));var t}},r.a.createElement(J.a,null))})),e),{sortable:!1,filterable:!1,width:80,Cell:function(e){return r.a.createElement(P,{updateCustomer:b,customer:e.original})}},{sortable:!1,filterable:!1,width:80,Cell:function(e){return r.a.createElement(z,{saveTraining:g,customer:e.original})}},{Header:"First name",accessor:"firstname"},{Header:"Last name",accessor:"lastname"},{Header:"Email",accessor:"email"},{Header:"Phone",accessor:"phone"},{Header:"Street address",accessor:"streetaddress"},{Header:"Postcode",accessor:"postcode"},{Header:"City",accessor:"city"}];return r.a.createElement("div",null,r.a.createElement(F,{saveCustomer:function(e){fetch(" https://customerrest.herokuapp.com/api/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return p()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(z,{saveTraining:g}),r.a.createElement(k.a,{filterable:!0,data:o,columns:v}),r.a.createElement(S.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:u,autoHideDuration:6e3,onClose:h,message:"Note archived",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{color:"secondary",size:"small",onClick:h},"UNDO"))}))}var _=a(8),q=a.n(_);function I(e){var t,a=Object(n.useState)([]),o=Object(d.a)(a,2),l=o[0],c=o[1];Object(n.useEffect)((function(){return b()}),[]);var i=r.a.useState(!1),u=Object(d.a)(i,2),m=u[0],f=u[1],h=function(){f(!0)},p=function(e,t){},b=function(){fetch("https://customerrest.herokuapp.com/api/trainings").then((function(e){return e.json()})).then((function(e){return c(e.content)}))},g=[(t={Header:"Actions",accessor:"actions",sortable:!1,filterable:!1,width:80},Object(s.a)(t,"accessor","links[1].href"),Object(s.a)(t,"Cell",(function(e){return r.a.createElement(E.a,{onClick:function(){return t=e.value,void(window.confirm("Are you sure")&&fetch(t,{method:"DELETE"}).then((function(e){return b()})).catch((function(e){return console.error(e)})).then(h));var t}},r.a.createElement(J.a,null))})),t),{Header:"Activity",accessor:"activity"},{Header:"Date",accessor:"date",Cell:function(e){return e.value?q()(e.value).format("LLL"):"Not complete"}},{Header:"Duration (min)",accessor:"duration"},{Header:"Customer",accessor:"links[2].href"}];return r.a.createElement("div",null,r.a.createElement(k.a,{filterable:!0,data:l,columns:g}),r.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:m,autoHideDuration:6e3,onClose:p,message:"Note archived",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{color:"secondary",size:"small",onClick:p},"UNDO"))}))}var K=a(21),M=a(99),$=a(22),G=a(65);function Q(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){return l()}),[]);var l=function(){fetch("https://customerrest.herokuapp.com/api/trainings").then((function(e){return e.json()})).then((function(e){return o(e.content)}))};return console.log(a),r.a.createElement(M.a,null,r.a.createElement(G.c,null,r.a.createElement($.q,{defaultCurrentDate:"2020-08-17"}),r.a.createElement(G.b,null),r.a.createElement(G.e,null),r.a.createElement(G.a,null),r.a.createElement(G.d,null)))}var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{position:"static",AppBar:!0,style:{background:"#2E3B55",margin:"0 0 20px 0 "}},r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"h6"},"PersonalTrainer")),r.a.createElement(j,null)),r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{button:!0,component:v.b,to:"/"},r.a.createElement(g.a,{primary:"Customers"})),r.a.createElement(b.a,{button:!0,component:v.b,to:"/trainings"},r.a.createElement(g.a,{primary:"Trainings"})),r.a.createElement(b.a,{button:!0,component:v.b,to:"/calendar"},r.a.createElement(g.a,{primary:"Calendar"})),r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/",component:U}),r.a.createElement(K.a,{exact:!0,path:"/trainings",component:I}),r.a.createElement(K.a,{exact:!0,path:"/calendar",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.3cdc36ad.chunk.js.map