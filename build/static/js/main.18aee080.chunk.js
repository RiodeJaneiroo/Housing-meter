(this["webpackJsonpplan-work"]=this["webpackJsonpplan-work"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=a(4),o=a(19),m=a(1),u=a.n(m),i=a(6),d=a(7),h=a(10),v=a(9),p=a(8),f=a(11),E=a(5),g=function(e){var t=e.onHandleChange,a=e.data,n=e.prevValue,l=a.title,c=a.type,s=a.name,o=a.value-n;return r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"mb-2"},l),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",value:n,disabled:!0}),r.a.createElement("small",{className:"form-text text-muted"},"\u043f\u0440\u043e\u0448\u043b\u044b\u0439 \u043c\u0435\u0441\u044f\u0446"))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"mb-2 text-secondary"},o>0?o:"..."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:c,name:s,onChange:function(e){return t(s,e.target.value)},className:"form-control"}),r.a.createElement("small",{className:"form-text text-muted"},"\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446")))))};g.defaultProps={prevValue:0};var b=g,N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={iceWater:{title:"\u0425\u043e\u043b\u043e\u0434\u043d\u0430 \u0432\u043e\u0434\u0430",name:"iceWater",value:""},hotWaterBack:{title:"\u0413.\u0412.\u0412",name:"hotWaterBack",value:""},hotWater:{title:"\u0413\u043e\u0440\u044f\u0447\u0430\u044f \u0432\u043e\u0434\u0430",name:"hotWater",value:""},gas:{title:"\u0413\u0430\u0437",name:"gas",value:""},light:{title:"\u0421\u0432\u0435\u0442",name:"light",value:""}},a.onSubmit=function(e){e.preventDefault();var t=a.props.onItemAdded,n=e.target;t({iceWater:Number(n.iceWater.value),hotWater:Number(n.hotWater.value),hotWaterBack:Number(n.hotWaterBack.value),light:Number(n.light.value),gas:Number(n.gas.value),month:new Date(n.month.value)}),n.reset()},a.handleChange=function(e,t){a.setState((function(a){var n=a[e];return Object(E.a)({},e,Object(s.a)({},n,{value:t}))}))},a.getTwoDigitDateFormat=function(e){return e<10?"0"+e:e},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.onSubmit,t=this.handleChange,a=this.getTwoDigitDateFormat,n=this.props.lastCounters,l=this.state,c=l.iceWater,s=l.hotWaterBack,o=l.hotWater,m=l.gas,u=l.light,i=new Date,d="".concat(i.getFullYear(),"-").concat(a(i.getMonth()+1));return r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",{onSubmit:e},r.a.createElement("div",{className:"form-row"},r.a.createElement(b,{onHandleChange:t,data:c,prevValue:n.iceWater}),r.a.createElement(b,{onHandleChange:t,data:s,prevValue:n.hotWaterBack}),r.a.createElement(b,{onHandleChange:t,data:o,prevValue:n.hotWater}),r.a.createElement(b,{onHandleChange:t,data:m,prevValue:n.gas}),r.a.createElement(b,{onHandleChange:t,data:u,prevValue:n.light}),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("span",{className:"text-success"},"\u041c\u0435\u0441\u044f\u0446")),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,type:"month",name:"month",defaultValue:d,className:"form-control"})))))),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component);N.defaultProps={lastCounters:{}};var w=N,y=function(){return r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"spinner-border text-secondary",role:"status"},r.a.createElement("span",{className:"sr-only"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")))},x=function(e){var t=e.items,a=e.onItemDelete;if(null===t)return r.a.createElement("div",{className:"col-md-8 mx-auto mt-4"},r.a.createElement(y,null));if(!Object.keys(t).length)return r.a.createElement("div",{className:"col-md-8 mx-auto mt-4"},r.a.createElement("p",null,"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."));t.sort((function(e,t){return t.month.seconds-e.month.seconds}));var n=Object.values(t).map((function(e){var t=e.id,n=e.iceWater,l=e.hotWater,c=e.hotWaterBack,s=e.light,o=e.gas,m=e.month.toDate().toLocaleDateString("ua-UA",{month:"numeric",year:"numeric"});return r.a.createElement("tr",{key:t},r.a.createElement("td",null,m),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,s),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(t)},className:"btn btn-danger btn-sm"},r.a.createElement("i",{className:"far fa-trash-alt"}))))}));return r.a.createElement("div",{className:"col-md-8 mx-auto mt-4"},r.a.createElement("h2",{className:"text-center"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),r.a.createElement("div",{className:"table-responsive-xl"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0425\u043e\u043b\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u0434\u0430"),r.a.createElement("th",null,"\u0413\u043e\u0440\u044f\u0447\u0430\u044f \u0432\u043e\u0434\u0430"),r.a.createElement("th",null,"\u0413.\u0412.\u0412"),r.a.createElement("th",null,"\u0421\u0432\u0435\u0442"),r.a.createElement("th",null,"\u0413\u0430\u0437"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n))))},I=(a(26),function(e){var t=e.type,a=e.text;if(!a)return null;return r.a.createElement("div",{className:"bMessage"},r.a.createElement("div",{className:"alert alert-".concat(["danger","success","warning"][t]),role:"alert"},a))}),j=function(e){var t=e.onSignIn;return r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target;t(a.password.value),a.reset()}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success"},"\u0412\u043e\u0439\u0442\u0438")))))},W=a(2),k=a.n(W);a(27),a(31);k.a.initializeApp({apiKey:"AIzaSyCfM0byadtN0hT5NHZic-iIXuNByceebBM",authDomain:"housing-meter.firebaseapp.com",databaseURL:"https://housing-meter.firebaseio.com",projectId:"housing-meter",storageBucket:"housing-meter.appspot.com",messagingSenderId:"1004021485217",appId:"1:1004021485217:web:d6d4d3057749769353eae0"});k.a;var C=k.a.firestore(),D=k.a.auth(),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).maxId=100,a.dataRef=C.collection("apartment/ODbPGN3kqlmPiQUhjc9Z/months/"),a.state={lastCounters:{},msgType:0,months:null,userAuth:null},a.componentDidMount=function(){var e,t,n;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.awrap(a.dataRef.get());case 2:return e=r.sent,t=e.docs.map(a.collectIdsAndDocs),n=t.slice().pop(),r.next=7,u.a.awrap(D.onAuthStateChanged((function(e){var t=e?e.uid:null;a.setState({userAuth:t})})));case 7:a.setState({months:t,lastCounters:n});case 8:case"end":return r.stop()}}))},a.showMsg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;a.setState({msgType:t,msgText:e}),setTimeout((function(){a.setState({msgText:""})}),n)},a.ItemAdd=function(e){var t,n,r,l,c,s;return u.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return t=Object(p.a)(a),n=t.dataRef,r=t.showMsg,m.next=3,u.a.awrap(n.add(e));case 3:return l=m.sent,m.next=6,u.a.awrap(l.get());case 6:c=m.sent,s=a.collectIdsAndDocs(c),a.setState((function(e){var t=e.months;return{months:[s].concat(Object(o.a)(t))}})),r("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u043e\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b!");case 10:case"end":return m.stop()}}))},a.ItemDelete=function(e){var t,n;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c?")){r.next=3;break}return r.abrupt("return");case 3:return console.log(e),r.next=6,u.a.awrap(a.dataRef.doc(e).delete());case 6:t=a.state.months,n=t.filter((function(t){return t.id!==e})),a.setState({months:n}),a.showMsg("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u043e\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u044b!");case 10:case"end":return r.stop()}}))},a.onSignIn=function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(D.signInWithEmailAndPassword("prainua@gmail.com",e).then((function(e){var t=e.user.uid;a.setState({userAuth:t}),a.showMsg("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!")})).catch((function(e){this.showMsg(e.message,0)})));case 2:case"end":return t.stop()}}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"collectIdsAndDocs",value:function(e){return Object(s.a)({id:e.id},e.data())}},{key:"render",value:function(){var e=this.state,t=e.months,a=e.msgType,n=e.msgText,l=e.lastCounters;return e.userAuth?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(I,{type:a,text:n}),r.a.createElement(w,{onItemAdded:this.ItemAdd,lastCounters:l}),r.a.createElement(x,{items:t,onItemDelete:this.ItemDelete}))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(I,{type:a,text:n}),r.a.createElement(j,{onSignIn:this.onSignIn})))}}]),t}(n.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.18aee080.chunk.js.map