var e,t=Object.assign;import{cw as s,cx as a,d as o,r,S as n,U as i,t as l,aa as d,c,Z as u,br as m,z as p,A as f,a5 as w,C as y,a2 as b}from"./index.a849d25d.js";import{_ as g}from"./dynamic-table.1541e347.js";import{f as h}from"./common.188731eb.js";import{u as S}from"./index.e9c887e1.js";import{g as x}from"./index.645dfe91.js";import{Q as A}from"./QuestionCircleOutlined.481e9ed4.js";import"./vendor.23df63bb.js";import"./schema-form.7d1285f9.js";function T(t){return s.request({url:e.adminAccount,method:a.GET,params:t},{isShowErrorMessage:!0})}function j(t){return s.request({url:[e.adminAccount,t].join("/"),method:a.DELETE},{isShowErrorMessage:!0,successMessageText:"删除成功"})}(e||(e={})).adminAccount="/admin/account";const R=()=>({formItem:[{type:"input",label:"用户名",field:"username",value:"",props:{placeholder:"请输入用户名"},rules:[{required:!0,message:"用户名不能为空"}]},{type:"input",label:"密码",field:"password",hidden:!1,value:"",props:{type:"password",placeholder:"请输入密码"},rules:[{required:!0,message:"密码不能为空"}]},{type:"checkbox",label:"角色",field:"roles",value:[],options:[],loading:!0,rules:[{required:!0,message:"请选择角色",type:"array"}],asyncOptions:async()=>{const{data:e}=await x({});return e.map((e=>({label:e.title,value:e.id})))}}]}),v=[{title:"用户名",dataIndex:"username"},{title:"所属角色",dataIndex:"roles",slots:{customRender:"roles"},slotsType:"format",slotsFunc:e=>e.map((e=>e.title)).join(", ")},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:e=>h(e)},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:e=>h(e)},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:async({record:e},t)=>await j(e.id).then((()=>t()))},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:({record:o},r)=>S({title:"编辑账号",fields:t(t({},o),{roles:null==o?void 0:o.roles.map((e=>e.id))}),hiddenFields:["password"],formSchema:R(),handleOk:async(t,n)=>{const{username:i,password:l,roles:d}=t,c={username:i,password:l,roles:d.toString()};return await function(t,o){return s.request({url:[e.adminAccount,t].join("/"),method:a.PATCH,params:o},{isShowErrorMessage:!0,successMessageText:"修改成功"})}(o.id,c).then((()=>r()))}})}]}];var I=o({name:"system-account",components:{DynamicTable:g},setup(){const o=r(null),u=n({tableLoading:!1,rowSelection:{onChange:(e,t)=>{u.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),m=i((()=>0==u.rowSelection.selectedRowKeys.length));return t(t({},l(u)),{columns:v,tableRef:o,getAdminAccount:T,isDisabled:m,addItem:()=>{S({title:"添加账号",formSchema:R(),handleOk:async(t,r)=>{const{username:n,password:i,roles:l}=t,d={username:n,password:i,roles:l.toString()};await function(t){return s.request({url:e.adminAccount,method:a.POST,params:t},{isShowErrorMessage:!0,successMessageText:"新建成功"})}(d),o.value.refreshTableData()}})},deleteItems:()=>{d.confirm({title:"提示",icon:c(A),content:"您确定要删除所有选中吗？",onOk:async()=>{await j(u.rowSelection.selectedRowKeys.toString()),o.value.refreshTableData(),u.rowSelection.selectedRowKeys=[]}})}})}});const k=b(" 添加 "),C=b(" 删除 ");I.render=function(e,t,s,a,o,r){const n=u("a-button"),i=u("dynamic-table"),l=m("permission");return p(),f(i,{ref:"tableRef",columns:e.columns,"get-list-func":e.getAdminAccount,rowKey:"id","row-selection":e.rowSelection},{title:w((()=>[y(c(n,{onClick:e.addItem,type:"primary"},{default:w((()=>[k])),_:1},8,["onClick"]),[[l,{action:"create",effect:"disabled"}]]),y(c(n,{onClick:e.deleteItems,disabled:e.isDisabled,type:"primary"},{default:w((()=>[C])),_:1},8,["onClick","disabled"]),[[l,{action:"delete"}]])])),_:1},8,["columns","get-list-func","row-selection"])};export default I;
