"use strict";(self.webpackChunkves=self.webpackChunkves||[]).push([[87],{87:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var l=r(9439),t=r(4533),i=r(2835),a=r(7309),s=r(1046),d=r(5820),o=r(2341),c=r(2791),u=r(8675),x=r(9434),h=function(e){return e.persons.items},m=function(e){return e.persons.isLoading},p=r(1413),j=r(5171),v=r(3051),f=r(5337),g=r(2014),y=r(184),Z=j.Z.Option,w=function(){var e=c.useRef(null),n=(0,x.I0)(),r=(0,x.v9)(m);(0,c.useEffect)((function(){"success added"===r&&e.current.resetFields()}),[r]);return(0,y.jsxs)(v.Z,{ref:e,name:"control-ref",onFinish:function(e){var r;console.log(e),n((0,u.e)((0,p.Z)((0,p.Z)({},e),{},{employed:null!==(r=e.employed)&&void 0!==r&&r})))},layout:"vertical",size:"small",children:[(0,y.jsx)(v.Z.Item,{name:"firstName",label:"First name",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"lastName",label:"Last name",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"age",label:"Age",rules:[{required:!0}],children:(0,y.jsx)(f.Z,{min:0,max:99,style:{width:"100%"}})}),(0,y.jsx)(v.Z.Item,{name:"email",label:"E-mail",rules:[{required:!0},{type:"email"}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"phone",label:"Phone",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"profession",label:"Profession",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"countryBackground",label:"Country background",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"city",label:"City",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"gender",label:"Gender",rules:[{required:!0}],children:(0,y.jsxs)(j.Z,{placeholder:"Select a option and change input text above",allowClear:!0,children:[(0,y.jsx)(Z,{value:"male",children:"male"}),(0,y.jsx)(Z,{value:"female",children:"female"}),(0,y.jsx)(Z,{value:"other",children:"other"})]})}),(0,y.jsx)(v.Z.Item,{name:"diversityLevel",label:"Diversity level",rules:[{required:!0}],children:(0,y.jsxs)(j.Z,{placeholder:"Select a option and change input text above",allowClear:!0,children:[(0,y.jsx)(Z,{value:"monocultural",children:"monocultural"}),(0,y.jsx)(Z,{value:"multicultural",children:"multicultural"}),(0,y.jsx)(Z,{value:"cross-cultural",children:"cross-cultural"})]})}),(0,y.jsx)(v.Z.Item,{name:"civilStatus",label:"Civil Status",rules:[{required:!0}],children:(0,y.jsxs)(j.Z,{placeholder:"Select a option and change input text above",allowClear:!0,children:[(0,y.jsx)(Z,{value:"single",children:"single"}),(0,y.jsx)(Z,{value:"married",children:"married"}),(0,y.jsx)(Z,{value:"widow/widower",children:"widow/widower"}),(0,y.jsx)(Z,{value:"divorced",children:"divorced"}),(0,y.jsx)(Z,{value:"separated",children:"separated"}),(0,y.jsx)(Z,{value:"registered partner",children:"registered partner"}),(0,y.jsx)(Z,{value:"separated partner",children:"separated partner"}),(0,y.jsx)(Z,{value:"divorced partner",children:"divorced partner"})]})}),(0,y.jsx)(v.Z.Item,{name:"educationalLevel",label:"Educational Level",rules:[{required:!0}],children:(0,y.jsxs)(j.Z,{placeholder:"Select a option and change input text above",allowClear:!0,children:[(0,y.jsx)(Z,{value:"no formal education",children:"no formal education"}),(0,y.jsx)(Z,{value:"primary education",children:"primary education"}),(0,y.jsx)(Z,{value:"secondary education",children:"secondary education"}),(0,y.jsx)(Z,{value:"lower secondary",children:"lower secondary"}),(0,y.jsx)(Z,{value:"upper secondary",children:"upper secondary"}),(0,y.jsx)(Z,{value:"vocational or technical education",children:"vocational or technical education"}),(0,y.jsx)(Z,{value:"tertiary education or higher education",children:"tertiary education or higher education"}),(0,y.jsx)(Z,{value:"associate degree",children:"associate degree"}),(0,y.jsx)(Z,{value:"bachelor's degree",children:"bachelor's degree"}),(0,y.jsx)(Z,{value:"master's degree",children:"master's degree"}),(0,y.jsx)(Z,{value:"doctorate or Ph.D.",children:"doctorate or Ph.D."}),(0,y.jsx)(Z,{value:"professional degrees",children:"professional degrees"}),(0,y.jsx)(Z,{value:"post-doctoral or advanced professional training",children:"post-doctoral or advanced professional training"}),(0,y.jsx)(Z,{value:"continuing education",children:"continuing education"}),(0,y.jsx)(Z,{value:"other certifications or qualifications",children:"other certifications or qualifications"})]})}),(0,y.jsx)(v.Z.Item,{name:"languageProficiency",label:"Language Proficiency",rules:[{required:!0}],children:(0,y.jsx)(i.Z,{})}),(0,y.jsx)(v.Z.Item,{name:"employed",valuePropName:"checked",children:(0,y.jsx)(g.Z,{children:"Employed/Unemployed"})}),(0,y.jsx)(v.Z.Item,{name:"comments",label:"Comments",children:(0,y.jsx)(i.Z.TextArea,{})}),(0,y.jsxs)(v.Z.Item,{children:[(0,y.jsx)(a.ZP,{type:"primary",htmlType:"submit",loading:"add person"===r,children:"Submit"}),(0,y.jsx)(a.ZP,{htmlType:"button",onClick:function(){var n;null===(n=e.current)||void 0===n||n.resetFields()},children:"Reset"}),(0,y.jsx)(a.ZP,{type:"link",htmlType:"button",onClick:function(){var n;null===(n=e.current)||void 0===n||n.setFieldsValue({firstName:"Jon",lastName:"Smith",email:"jon.smith@gmail.com",phone:"+4793949394",age:29,city:"Bergen",profession:"Translator",gender:"man",countryBackground:"England",diversityLevel:"cross-cultural",civilStatus:"single",languageProficiency:"english",educationalLevel:"vocational or technical education",employed:!1,comments:"It's a good guy"})},children:"Fill form (test data)"})]})]})},I=r(4289),b=t.Z.Column,C=function(){var e=(0,x.I0)(),n=(0,x.v9)(h),r=(0,x.v9)(m),p=(0,x.v9)(I.dy);(0,c.useEffect)((function(){"success added"===r&&g(!1)}),[r]),(0,c.useEffect)((function(){e((0,u.n)())}),[e]),console.log(n);var j=(0,c.useState)(!1),v=(0,l.Z)(j,2),f=v[0],g=v[1],Z=(0,c.useState)(!1),C=(0,l.Z)(Z,2),P=C[0],S=C[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",padding:"24px"},children:[(0,y.jsx)(i.Z.Search,{placeholder:"input search text",onSearch:function(e){return console.log(e)},enterButton:!0,style:{marginRight:"24px"}}),"admin"===p.role&&(0,y.jsx)(a.ZP,{type:"primary",onClick:function(){return g(!0)},children:"Add person"})]}),(0,y.jsxs)(t.Z,{bordered:!0,rowKey:"_id",style:{padding:"0 24px"},dataSource:n,size:"small",pagination:{pageSize:10},scroll:{x:1500,y:300},expandable:{expandedRowRender:function(e){return(0,y.jsx)("p",{style:{margin:0},children:e.comments})}},children:[(0,y.jsx)(b,{title:"First Name",dataIndex:"firstName",width:"100px",render:function(e,n){return"presenter"===p.role?(0,y.jsx)("p",{children:"----"}):n.firstName}},"firstName"),(0,y.jsx)(b,{title:"Last Name",dataIndex:"lastName",width:"100px",render:function(e,n){return"presenter"===p.role?(0,y.jsx)("p",{children:"----"}):n.lastName}},"lastName"),(0,y.jsx)(b,{title:"Age",dataIndex:"age",width:"60px"},"age"),(0,y.jsx)(b,{title:"E-mail",dataIndex:"email",width:"200px",render:function(e,n){return"presenter"===p.role?(0,y.jsx)("p",{children:"----"}):n.email}},"email"),(0,y.jsx)(b,{title:"Phone",dataIndex:"phone",width:"150px",render:function(e,n){return"presenter"===p.role?(0,y.jsx)("p",{children:"----"}):n.phone}},"phone"),(0,y.jsx)(b,{title:"Profession",dataIndex:"profession",width:"150px"},"profession"),(0,y.jsx)(b,{title:"Country background",dataIndex:"countryBackground",width:"150px"},"countryBackground"),(0,y.jsx)(b,{title:"City",dataIndex:"city",width:"120px"},"city"),(0,y.jsx)(b,{title:"Gender",dataIndex:"gender",width:"100px"},"gender"),(0,y.jsx)(b,{title:"Diversity level",dataIndex:"diversityLevel",width:"150px"},"diversityLevel"),(0,y.jsx)(b,{title:"Civil Status",dataIndex:"civilStatus",width:"150px"},"civilStatus"),(0,y.jsx)(b,{title:"Language Proficiency",dataIndex:"languageProficiency",width:"100px"},"languageProficiency"),(0,y.jsx)(b,{title:"Educational Level",dataIndex:"educationalLevel",width:"200px"},"educationalLevel"),(0,y.jsx)(b,{title:"Employed",dataIndex:"employed",width:"100px",render:function(e,n){return(0,y.jsx)("p",{children:n.employed?"yes":"no"})}},"employed"),(0,y.jsx)(b,{title:"Action",width:"100px",render:function(e,n){return(0,y.jsx)(s.Z,{size:"middle",children:(0,y.jsxs)(a.ZP,{type:"link",children:["Invite ","presenter"!==p.role?n.firstName:"----"]})})}},"action")]}),(0,y.jsx)(d.Z,{title:"Are you sure you want to close this modal?",open:P,onConfirm:function(){g(!1),S(!1)},onCancel:function(){S(!1)},okText:"Yes",cancelText:"No"}),(0,y.jsx)(o.Z,{centered:!0,title:"Add Person",open:f,footer:null,onCancel:function(){S(!0)},style:{margin:"20px 0"},children:(0,y.jsx)(w,{})})]})}}}]);
//# sourceMappingURL=87.47ebfef8.chunk.js.map