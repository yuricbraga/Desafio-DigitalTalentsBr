(this["webpackJsonpclient-dev"]=this["webpackJsonpclient-dev"]||[]).push([[0],{235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),s=a.n(o),l=a(6),c=a.n(l),i=a(9),u=a(10),m=a(12),p=a(11),d=a(13),h=a(260),E=a(20),g=a(257),f=a(237),b=a(238),v=a(239),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={lastEvent:null,activeTab:"admin"},a.changeUrl=function(e){e.preventDefault(),a.setState({activeTab:e.target.name}),a.props.history.push("/"+e.target.name)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{tabs:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,{href:"/admin",name:"admin",onClick:this.changeUrl,active:"admin"===this.state.activeTab},"Administra\xe7\xe3o")),r.a.createElement(b.a,null,r.a.createElement(v.a,{href:"/sensores",name:"sensores",onClick:this.changeUrl,active:"sensores"===this.state.activeTab},"Relat\xf3rios"))))}}]),t}(n.Component),y=a(258),O=a(252),w=a(253),j=a(254),k=a(242),x=a(240),S=a(241);var M=function(e){return 0===e.sensores.length?r.a.createElement(x.a,null):r.a.createElement(S.a,{responsive:!0,striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Codenome"),r.a.createElement("th",null,"Tens\xe3o da Bateria"),r.a.createElement("th",null,"Marca"),r.a.createElement("th",null,"Tipo de sensore"),r.a.createElement("th",null,"Altura"),r.a.createElement("th",null,"Largura"),r.a.createElement("th",null,"Comprimento"),r.a.createElement("th",null,"Latitude"),r.a.createElement("th",null,"Longitude"))),r.a.createElement("tbody",null,e.sensores.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement(k.a,{name:t.id,color:"danger",onClick:e.onDeleteSensor},"Excluir")),r.a.createElement("td",null,r.a.createElement(k.a,{name:"edit",color:"primary",onClick:e.onEditSensor(t)},"Editar")),r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.codename),r.a.createElement("td",null,e.tensoes.find((function(e){return e.id===t.tensao_id})).valor,"v"),r.a.createElement("td",null,e.marcas.find((function(e){return e.id===t.marca_id})).nome),r.a.createElement("td",null,e.tipos.find((function(e){return e.id===t.tipo_id})).nome),r.a.createElement("td",null,t.Tamanho.altura),r.a.createElement("td",null,t.Tamanho.largura),r.a.createElement("td",null,t.Tamanho.comprimento),r.a.createElement("td",null,t.Localizacao.latitude),r.a.createElement("td",null,t.Localizacao.longitude))}))))};var T=function(e){if(0===e.tableType.length)return r.a.createElement(x.a,null);var t=Object.keys(e.tableType[0]);return r.a.createElement(S.a,{responsive:!0,striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,e.tableType.map((function(e,a){return r.a.createElement("tr",{key:a},t.map((function(t,a){return r.a.createElement("td",{key:a},e[t])})))}))))},I=a(16),_=a(243),L=a(244),B=a(245),z=a(246),D=a(247),A=a(248),F=a(249),N=a(250),H=a(251),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={codename:"",altura:0,largura:0,comprimento:0,latitude:0,longitude:0,tipo_id:1,marca_id:1,tensao_id:1},a.submitForm=function(e){a.props.sensor?a.props.action(a.state,a.props.sensor.id).then((function(e){window.location.reload()})):a.props.action(a.state).then((function(e){window.location.reload()}))},a.onChangeInput=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.sensor&&this.setState({codename:this.props.sensor.codename,altura:this.props.sensor.Tamanho.altura,largura:this.props.sensor.Tamanho.largura,comprimento:this.props.sensor.Tamanho.comprimento,latitude:this.props.sensor.Localizacao.latitude,longitude:this.props.sensor.Localizacao.longitude,tipo_id:this.props.sensor.tipo_id,marca_id:this.props.sensor.marca_id,tensao_id:this.props.sensor.tensao_id})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{toggle:this.props.toggleModal},"Cadastro de sensor"),r.a.createElement(L.a,null,r.a.createElement(B.a,null,r.a.createElement(z.a,{form:!0},r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"codename"},"Codenome"),r.a.createElement(N.a,{type:"text",name:"codename",id:"codename",placeholder:"Insira um apelido",value:this.state.codename,onChange:this.onChangeInput})))),r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"altura"},"Dimens\xf5es"),r.a.createElement(N.a,{id:"altura",name:"altura",type:"number",placeholder:"Altura",value:this.state.altura,onChange:this.onChangeInput}))),r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"largura"},"\u200e\u200e\u200e\u200e\u200e"),r.a.createElement(N.a,{id:"largura",name:"largura",type:"number",placeholder:"Largura",value:this.state.largura,onChange:this.onChangeInput}))),r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"comprimento"},"\u200e\u200e\u200e\u200e\u200e\u200e"),r.a.createElement(N.a,{id:"comprimento",name:"comprimento",type:"number",placeholder:"Comprimento",value:this.state.comprimento,onChange:this.onChangeInput})))),r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"latitude"},"Localiza\xe7\xe3o"),r.a.createElement(N.a,{id:"latitude",name:"latitude",type:"number",placeholder:"Latitude",value:this.state.latitude,onChange:this.onChangeInput}))),r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"latitude"},"\u200e"),r.a.createElement(N.a,{id:"longitude",name:"longitude",type:"number",placeholder:"Longitude",value:this.state.longitude,onChange:this.onChangeInput})))),r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"marca"},"Marca"),r.a.createElement(N.a,{id:"marca",name:"marca_id",type:"select",value:this.state.marca_id,onChange:this.onChangeInput},0!==this.props.marcas.length?this.props.marcas.map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.nome)})):null)))),r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"tensao"},"Tens\xe3o da bateria"),r.a.createElement(N.a,{id:"tensao",name:"tensao_id",type:"select",value:this.state.tensao_id,onChange:this.onChangeInput},0!==this.props.tensoes.length?this.props.tensoes.map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.valor)})):null)))),r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"tipo"},"Tipo de sensor"),r.a.createElement(N.a,{id:"tipo",name:"tipo_id",type:"select",value:this.state.tipo_id,onChange:this.onChangeInput},0!==this.props.tipos.length?this.props.tipos.map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.nome)})):null)))))),r.a.createElement(H.a,null,r.a.createElement(k.a,{color:"success",onClick:this.submitForm},"Salvar")))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={nome:""},a.onInputChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.submitForm=function(e){a.props.action(a.state).then((function(e){window.location.reload()}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{toggle:this.props.toggleModal},"Cadastro de marca"),r.a.createElement(L.a,null,r.a.createElement(B.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"nome"},"Nome"),r.a.createElement(N.a,{name:"nome",type:"text",value:this.state.nome,onChange:this.onInputChange})))),r.a.createElement(H.a,null,r.a.createElement(k.a,{color:"success",onClick:this.submitForm},"Salvar")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={nome:"",sulfixo:""},a.onInputChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.submitForm=function(e){a.props.action(a.state).then((function(e){window.location.reload()}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{toggle:this.props.toggleModal},"Cadastro de tipo de sensor"),r.a.createElement(L.a,null,r.a.createElement(B.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"nome"},"Nome"),r.a.createElement(N.a,{name:"nome",type:"text",value:this.state.nome,onChange:this.onInputChange})),r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"sulfixo"},"Sufixo"),r.a.createElement(N.a,{name:"sulfixo",type:"text",value:this.state.sulfixo,onChange:this.onInputChange})))),r.a.createElement(H.a,null,r.a.createElement(k.a,{color:"success",onClick:this.submitForm},"Salvar")))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={valor:""},a.onInputChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.submitForm=function(e){a.props.action(a.state).then((function(e){window.location.reload()}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{toggle:this.props.toggleModal},"Cadastro de tensao de bateria"),r.a.createElement(L.a,null,r.a.createElement(B.a,null,r.a.createElement(A.a,null,r.a.createElement(F.a,{for:"valor"},"valor"),r.a.createElement(N.a,{name:"valor",type:"text",value:this.state.valor,onChange:this.onInputChange})))),r.a.createElement(H.a,null,r.a.createElement(k.a,{color:"success",onClick:this.submitForm},"Salvar")))}}]),t}(n.Component),V=a(14),q=a.n(V),G=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.post("/api/sensor/add",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},K=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.delete("/api/sensor/remove/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},P=function(e,t){return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(q.a.put("/api/sensor/edit/".concat(t),e));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}))},Q=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.post("/api/marca/add",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},X=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.post("/api/tensao/add",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},Y=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.post("/api/tipo/add",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={open:"",modalOpen:!1,sensorModalMode:"",toBeEdited:null},a.toggleCollapse=function(e){e.target.id===a.state.open?a.setState({open:""}):a.setState({open:e.target.id})},a.toggleModal=function(e){"add"===e.target.name&&a.setState({toBeEdited:null}),a.setState({modalOpen:!a.state.modalOpen,sensorModalMode:e.target.name})},a.modalContent=function(){var e;switch(a.state.open){case"sensores":e=r.a.createElement(R,{sensor:a.state.toBeEdited,marcas:a.props.marcas,tipos:a.props.tipos,tensoes:a.props.tensoes,action:"add"===a.state.sensorModalMode?G:P,toggleModal:a.toggleModal});break;case"marcas":e=r.a.createElement(J,{toggleModal:a.toggleModal,action:Q});break;case"tipos":e=r.a.createElement(U,{toggleModal:a.toggleModal,action:Y});break;case"tensoes":e=r.a.createElement(W,{toggleModal:a.toggleModal,action:X})}return e},a.onDeleteSensor=function(e){K(e.target.name).then((function(e){window.location.reload()}))},a.onEditSensor=function(e){return function(t){a.setState({toBeEdited:e}),a.toggleModal(t)}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{isOpen:this.state.modalOpen},this.modalContent()),r.a.createElement(O.a,null,r.a.createElement(w.a,{id:"sensores",tag:"button",action:!0,onClick:this.toggleCollapse},"Sensores"),r.a.createElement(j.a,{isOpen:"sensores"===this.state.open},r.a.createElement(k.a,{name:"add",color:"success",onClick:this.toggleModal},"Novo"),r.a.createElement(M,{onDeleteSensor:this.onDeleteSensor,onEditSensor:this.onEditSensor,sensores:this.props.sensores,marcas:this.props.marcas,tipos:this.props.tipos,tensoes:this.props.tensoes})),r.a.createElement(w.a,{id:"marcas",tag:"button",action:!0,onClick:this.toggleCollapse},"Marcas e Fornecedores"),r.a.createElement(j.a,{isOpen:"marcas"===this.state.open},r.a.createElement(k.a,{name:"add",color:"success",onClick:this.toggleModal},"Novo"),r.a.createElement(T,{tableType:this.props.marcas})),r.a.createElement(w.a,{id:"tipos",tag:"button",action:!0,onClick:this.toggleCollapse},"Tipos de sensor"),r.a.createElement(j.a,{isOpen:"tipos"===this.state.open},r.a.createElement(k.a,{name:"add",color:"success",onClick:this.toggleModal},"Novo"),r.a.createElement(T,{tableType:this.props.tipos})),r.a.createElement(w.a,{id:"tensoes",tag:"button",action:!0,onClick:this.toggleCollapse},"Tens\xf3es de bateria"),r.a.createElement(j.a,{isOpen:"tensoes"===this.state.open},r.a.createElement(k.a,{name:"add",color:"success",onClick:this.toggleModal},"Novo"),r.a.createElement(T,{tableType:this.props.tensoes}))))}}]),t}(n.Component),$=a(256),ee=a(259),te=a(86),ae=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(null===this.props.sensor)return r.a.createElement(x.a,null);var e={labels:this.props.sensor.Medidas.map((function(e,t){return t+1})),datasets:[{label:this.props.sulfixo,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.props.sensor.Medidas.map((function(e){return e.valor}))}]};return r.a.createElement("div",null,r.a.createElement("h2",null,"Dados de ",this.props.sensor.codename),r.a.createElement(te.a,{data:e}))}}]),t}(n.Component),ne=a(255),re=a(88),oe=a.n(re),se=function(e,t){var a={lat:0,lng:0};for(var n in e)a.lat+=n;for(var r in a.lat=a.lat/e.length,t)a.lng+=r;return a.lng=a.lng/t.length,a},le=function(e){var t=e.sensores.map((function(e){return e.Localizacao.latitude})),a=e.sensores.map((function(e){return e.Localizacao.longitude}));return r.a.createElement(oe.a,{center:se(t,a),zoom:e.zoom},e.sensores.map((function(t,a){return r.a.createElement(ne.a,{lat:t.Localizacao.latitude,lng:t.Localizacao.longitude,href:"#",color:"danger",pill:!0,key:a,id:a,onClick:e.onSensorClick},t.codename)})))},ce=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(q.a.post("/api/medida/add",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selectedSensor:null,newMedida:"",isOpen:!1},a.onSensorClick=function(e){e.preventDefault(),a.setState({selectedSensor:a.props.sensores[parseInt(e.target.id)],isOpen:!0})},a.onInputChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.submitNewMedida=function(e){ce({valor:a.state.newMedida,sensor_id:a.state.selectedSensor.id}).then((function(e){window.location.reload()}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return 0===this.props.sensores.length?r.a.createElement(x.a,null):r.a.createElement(z.a,{style:{paddingBottom:"10px"}},r.a.createElement(D.a,{xs:"12",sm:"9"},r.a.createElement("div",{style:{height:"90vh",width:"100%"}},r.a.createElement(le,{zoom:2,sensores:this.props.sensores,onSensorClick:this.onSensorClick}))),r.a.createElement(D.a,{xs:"12",sm:"3"},r.a.createElement(O.a,null,this.props.sensores.map((function(t,a){return r.a.createElement(w.a,{id:a,key:a,tag:"button",action:!0,onClick:e.onSensorClick},t.codename)})))),r.a.createElement(D.a,{xs:"12"},r.a.createElement(j.a,{isOpen:this.state.isOpen},r.a.createElement(ae,{sensor:this.state.selectedSensor,sulfixo:null!==this.state.selectedSensor?this.props.tipos.find((function(t){return t.id===e.state.selectedSensor.tipo_id})).sulfixo:null}),r.a.createElement($.a,null,r.a.createElement(N.a,{type:"number",placeholder:"Valor",name:"newMedida",value:this.state.newMedidaField,onChange:this.onInputChange}),r.a.createElement(ee.a,{addonType:"append"},r.a.createElement(k.a,{onClick:this.submitNewMedida},"Nova Medi\xe7\xe3o"))))))}}]),t}(n.Component),ue=Object(E.a)(),me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={sensores:[],marcas:[],tipos:[],tensoes:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.awrap(c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(q.a.get("/api/sensor/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 2:return e=r.sent,r.next=5,c.a.awrap(c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(q.a.get("/api/marca/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 5:return t=r.sent,r.next=8,c.a.awrap(c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(q.a.get("/api/tipo/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 8:return a=r.sent,r.next=11,c.a.awrap(c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(q.a.get("/api/tensao/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 11:n=r.sent,this.setState({marcas:t.data}),this.setState({tipos:a.data}),this.setState({tensoes:n.data}),this.setState({sensores:e.data.sensor});case 16:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.c,{history:ue},r.a.createElement(C,{history:ue}),r.a.createElement(g.a,{fluid:!0},r.a.createElement(h.b,{path:"/admin",render:function(t){return r.a.createElement(Z,Object.assign({},t,{sensores:e.state.sensores,marcas:e.state.marcas,tipos:e.state.tipos,tensoes:e.state.tensoes}))}}),r.a.createElement(h.b,{path:"/sensores",render:function(t){return r.a.createElement(ie,Object.assign({},t,{sensores:e.state.sensores,tipos:e.state.tipos}))}})),r.a.createElement(h.a,{from:"/",to:"/admin"}))}}]),t}(n.Component);a(234);s.a.render(r.a.createElement(me,null),document.getElementById("root"))},91:function(e,t,a){e.exports=a(235)}},[[91,1,2]]]);
//# sourceMappingURL=main.380f72dd.chunk.js.map