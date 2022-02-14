(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{53:function(e,t,a){e.exports={is_done:"Task_is_done__11lm1",container:"Task_container__AJ20M"}},68:function(e,t,a){e.exports={main:"AddTodoList_main__1sS9z",error:"AddTodoList_error__HVlf8",error_message:"AddTodoList_error_message__dtX-2"}},77:function(e,t,a){e.exports=a(90)},82:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),l=a.n(r),c=(a(82),a(14)),o=a(16),u=a(4),d=a(12),s=(a(83),a(43)),m=a(126),f=["title"];function b(e){var t=e.title,a=Object(s.a)(e,f),r=Object(n.useState)(t),l=Object(d.a)(r,2),c=l[0],o=l[1],u=Object(n.useState)(!1),b=Object(d.a)(u,2),v=b[0],O=b[1];return v?i.a.createElement(m.a,{variant:"standard",value:c,onChange:function(e){return o(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a.editTitleTodolist(c),O(!v)}}):i.a.createElement("span",{onDoubleClick:function(){return O(!v)}},t)}var v=a(131);var O=function(e){var t=e.title,a=e.onClickHandler,n=e.activeButton;return i.a.createElement(v.a,{color:"primary",variant:n===t?"contained":"outlined",onClick:a},t)},j=a(123),T=a(133);var E=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(null),o=Object(d.a)(c,2),u=o[0],s=o[1],f=function(){""!==r.trim()?(e.addTask(e.id,r.trim()),l("")):s("Title is required !")};return i.a.createElement("div",null,i.a.createElement(m.a,{helperText:u,error:!!u,variant:"standard",label:"Name of your task",id:"outlined-basic",value:r,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){s(null),(e.ctrlKey||"Enter"===e.key)&&f()}}),i.a.createElement(T.a,{onClick:f},i.a.createElement(j.a,null)))},k=a(53),h=a.n(k),g=a(124),p=a(128),S=function(e){var t=e.id,a=e.title,n=e.isDone,r=e.removeTask,l=e.changeTaskStatus,c=e.todolistId,o=e.editTitleTask;return i.a.createElement("div",{className:h.a.container},i.a.createElement("li",{key:t,className:n?h.a.is_done:""},i.a.createElement(p.a,{defaultChecked:!0,color:"default",checked:n,onChange:function(e){return l(c,t,e.currentTarget.checked)}}),i.a.createElement(b,{title:a,editTitleTodolist:function(e){o(e)}}),i.a.createElement(T.a,{onClick:function(){return r(c,t)}},i.a.createElement(g.a,null))))};var C=function(e){var t=e.tasks.map((function(t){return i.a.createElement(S,{key:t.id,id:t.id,todolistId:e.id,title:t.title,isDone:t.isDone,removeTask:e.removeTask,changeTaskStatus:e.changeTaskStatus,editTitleTask:function(a){return function(t,a){e.editTitleTask(e.id,t,a)}(t.id,a)}})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(T.a,{style:{float:"right"},onClick:function(){return e.removeTodolist(e.id)}},i.a.createElement(g.a,null)),i.a.createElement("h3",null,i.a.createElement(b,{title:e.titleOfTodo,editTitleTodolist:function(t){return e.editTitleTodolist(e.id,t)}})),i.a.createElement(E,{addTask:e.addTask,id:e.id}),i.a.createElement("ul",null,t),i.a.createElement("div",null,i.a.createElement(O,{activeButton:e.filterBS,onClickHandler:function(){return e.changeFilter(e.id,"All")},title:"All"}),i.a.createElement(O,{activeButton:e.filterBS,onClickHandler:function(){return e.changeFilter(e.id,"Active")},title:"Active"}),i.a.createElement(O,{activeButton:e.filterBS,onClickHandler:function(){return e.changeFilter(e.id,"Completed")},title:"Completed"}))))},_=a(20),D=a(134),y=a(135),A=a(129),B=a(136),x=a(132),w=a(125),F=a(68),H=a.n(F),N=["addTodolist"],L=function(e){var t=e.addTodolist,a=(Object(s.a)(e,N),Object(n.useState)("")),r=Object(d.a)(a,2),l=r[0],c=r[1],o=Object(n.useState)(null),u=Object(d.a)(o,2),f=u[0],b=u[1],v=function(){""!==l.trim()?(t(l),c("")):b("Title is required !")};return i.a.createElement("div",{className:H.a.main},i.a.createElement("div",null,i.a.createElement(m.a,{helperText:f,error:!!f,variant:"standard",label:"Add Name to Todolist",id:"outlined-basic",value:l,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){b(null),(e.ctrlKey||"Enter"===e.key)&&v()}}),i.a.createElement(T.a,{onClick:v},i.a.createElement(j.a,null))))},W=function(){var e,t=Object(_.v1)(),a=Object(_.v1)(),r=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(_.v1)(),title:"HTML&CSS",isDone:!0},{id:Object(_.v1)(),title:"JS/ES6",isDone:!0},{id:Object(_.v1)(),title:"React",isDone:!0},{id:Object(_.v1)(),title:"Redux",isDone:!1},{id:Object(_.v1)(),title:"Bootstrap",isDone:!1}]),Object(u.a)(e,a,[{id:Object(_.v1)(),title:"Milk",isDone:!0},{id:Object(_.v1)(),title:"Chips",isDone:!0},{id:Object(_.v1)(),title:"Bread",isDone:!0},{id:Object(_.v1)(),title:"Beer",isDone:!1},{id:Object(_.v1)(),title:"Meat",isDone:!1}]),e)),l=Object(d.a)(r,2),s=l[0],m=l[1],f=Object(n.useState)([{id:t,title:"What to learn",filter:"All"},{id:a,title:"What to buy",filter:"All"}]),b=Object(d.a)(f,2),O=b[0],j=b[1],E=function(e){j(O.filter((function(t){return t.id!==e?delete s[e]:m(Object(o.a)({},s))})))},k=function(e,t){m(Object(o.a)(Object(o.a)({},s),{},Object(u.a)({},e,s[e].filter((function(e){return e.id!==t})))))},h=function(e,t){j(O.map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{filter:t}):a})))},g=function(e,t){var a={id:Object(_.v1)(),title:t,isDone:!1};m(Object(o.a)(Object(o.a)({},s),{},Object(u.a)({},e,[a].concat(Object(c.a)(s[e])))))},p=function(e,t,a){m(Object(o.a)(Object(o.a)({},s),{},Object(u.a)({},e,Object(c.a)(s[e].map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{isDone:a}):e}))))))},S=function(e,t){j(O.map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{title:t}):a})))},F=function(e,t,a){m(Object(o.a)(Object(o.a)({},s),{},Object(u.a)({},e,s[e].map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{title:a}):e})))))};return i.a.createElement(D.a,{maxWidth:"xl",className:"App"},i.a.createElement(y.a,{position:"static"},i.a.createElement(A.a,{container:!0},i.a.createElement(B.a,null,i.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(w.a,null)),i.a.createElement(L,{addTodolist:function(e){var t=Object(_.v1)();j([{id:t,title:e,filter:"All"}].concat(Object(c.a)(O))),m(Object(o.a)(Object(u.a)({},t,[]),s))}}),i.a.createElement(v.a,{variant:"outlined",color:"inherit"},"Login")))),i.a.createElement(A.a,{container:!0,spacing:3},O.map((function(e){var t=s[e.id];return"Active"===e.filter?t=t.filter((function(e){return!e.isDone})):"Completed"===e.filter&&(t=t.filter((function(e){return e.isDone}))),i.a.createElement(A.a,{item:!0,key:e.id},i.a.createElement(x.a,{style:{marginTop:"30px",padding:"30px",alignItems:"center"},elevation:3},i.a.createElement(C,{key:e.id,id:e.id,titleOfTodo:e.title,tasks:t,removeTask:k,changeFilter:h,addTask:g,changeTaskStatus:p,filterBS:e.filter,removeTodolist:E,editTitleTodolist:S,editTitleTask:F})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.4515ff1c.chunk.js.map