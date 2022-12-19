"use strict";(self.webpackChunkx_career_reactjs=self.webpackChunkx_career_reactjs||[]).push([[388],{24574:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(72791),o=n(16871),a=n(63366),s=n(87462),i=n(28182),c=n(94419),d=n(31402),l=n(66934),m=n(21217);function h(e){return(0,m.Z)("MuiCardMedia",e)}(0,n(75878).Z)("MuiCardMedia",["root","media","img"]);var u=n(80184);const x=["children","className","component","image","src","style"],p=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:r,isImageComponent:o}=n;return[t.root,r&&t.media,o&&t.img]}})((e=>{let{ownerState:t}=e;return(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],Z=["picture","img"];var j=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:o,component:l="div",image:m,src:j,style:b}=n,v=(0,a.Z)(n,x),f=-1!==g.indexOf(l),w=!f&&m?(0,s.Z)({backgroundImage:'url("'.concat(m,'")')},b):b,C=(0,s.Z)({},n,{component:l,isMediaComponent:f,isImageComponent:-1!==Z.indexOf(l)}),y=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:r}=e,o={root:["root",n&&"media",r&&"img"]};return(0,c.Z)(o,h,t)})(C);return(0,u.jsx)(p,(0,s.Z)({className:(0,i.Z)(y.root,o),as:l,role:!f&&m?"img":void 0,ref:t,style:w,ownerState:C,src:f?m||j:void 0},v,{children:r}))})),b=n(61889),v=n(20890),f=n(57621),w=n(45074),C=n(89554),y=n(44428),I=n(39910);const k=new w.Z,S=(0,y.ZP)(I.h);var M=e=>{let{id:t,page:n}=e;const a=(0,o.s0)(),s=sessionStorage.getItem("id"),[i,c]=(0,r.useState)([]),[d,l]=(0,r.useState)(!1),[m,h]=(0,r.useState)(),x=e=>{k.getByID(e).then((e=>{let t=[],n=0;e.data[0].boards.map((e=>{e.member.map((r=>{r._id===s&&(t.push(e),n++)}))})),c(t),h(n)}))};return(0,r.useEffect)((()=>{x(t),S.on("board",(()=>{x(t)}))}),[t]),(0,u.jsxs)(u.Fragment,{children:[0===m&&"dashboard"===n?(0,u.jsxs)(b.ZP,{container:!0,alignItems:"center",children:[(0,u.jsx)(v.Z,{variant:"h4",fontWeight:300,sx:{my:2,mr:1},children:"You don't have any panels in this Workspace yet. The boards you create or join will show up here."}),(0,u.jsx)(v.Z,{variant:"subtitle1",sx:{cursor:"pointer",textDecoration:"underline","&:hover":{color:"#90CAF9"}},onClick:()=>{l(!0)},children:"Create Table"})]}):(0,u.jsx)(u.Fragment,{children:i.map((e=>(0,u.jsxs)(b.ZP,{item:!0,xs:3,sm:3,md:3,sx:{position:"relative"},children:[(0,u.jsx)(f.Z,{children:(0,u.jsx)(j,{height:130,sx:{cursor:"pointer"},component:"img",alt:"board",src:e.bgImg.data,onClick:()=>a("/b/".concat(e._id),{replace:!0})})}),(0,u.jsx)(v.Z,{sx:{position:"absolute",top:40,left:40,color:"white"},variant:"h3",children:e.name})]},e._id)))}),(0,u.jsx)(C.Z,{open:d,onClose:()=>{l(!1)},wsId:t,dialogForm:0})]})}},93388:function(e,t,n){n.r(t);var r=n(72791),o=n(16871),a=n(61889),s=n(93044),i=n(20890),c=n(24518),d=n(58956),l=n(16999),m=n(45074),h=n(62915),u=n(98064),x=n(89554),p=n(73243),g=n(24574),Z=n(44428),j=n(39910),b=n(80184);const v=new m.Z,f=(0,Z.ZP)(j.h);t.default=()=>{const{workSpaceId:e}=(0,o.UO)(),t=(0,o.s0)(),[n,m]=(0,r.useState)(!1),[Z,j]=(0,r.useState)(!1),[w,C]=(0,r.useState)({}),[y,I]=(0,r.useState)(),k=e=>{v.getByID(e).then((e=>{C(e.data[0]),I(e.data[0].member.length)}))},S=()=>{m(!1),j(!1)};return(0,r.useEffect)((()=>{k(e),f.on("workspace",(()=>{k(e)}))}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(a.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{px:16,py:6},children:[(0,b.jsxs)(a.ZP,{item:!0,display:"flex",alignItems:"center",children:[w.logo&&(0,b.jsx)(b.Fragment,{children:""===w.logo.data?(0,b.jsx)(h.Z,{name:w.name,h:80,w:80,f:50}):(0,b.jsx)(s.Z,{src:w.logo.data,variant:"rounded",sx:{height:80,width:80}})}),(0,b.jsx)(i.Z,{variant:"h1",sx:{width:300,ml:2},children:w.name})]}),(0,b.jsxs)(a.ZP,{item:!0,display:"flex",alignItems:"center",children:[(0,b.jsxs)(i.Z,{variant:"h2",sx:{fontWeight:500,mr:2},children:[(0,b.jsx)(d.SrG,{})," Member (",y,")"]}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(c.Z,{sx:{mr:2},disableElevation:!0,onClick:()=>{m(!0)},variant:"contained",color:"primary",startIcon:(0,b.jsx)(d.TRY,{size:20}),children:"Edit"})}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(c.Z,{disableElevation:!0,onClick:()=>{var n;n=e,swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover.",icon:"warning",buttons:[!0,"Delete"],dangerMode:!0}).then((e=>{e&&v.deleteByID(n).then((e=>{200===e.status&&(f.emit("workspace",e.data),swal({text:"Successfully delete work space.",buttons:!1,timer:2e3,icon:"success"}),t("/",{replace:!0}))})).catch((()=>{swal({text:"Sorry, something went wrong. Please contact to admin for support.",buttons:!1,timer:5e3,icon:"error"})}))}))},variant:"contained",color:"primary",startIcon:(0,b.jsx)(d.IT9,{size:20}),children:"Delete"})})]})]}),(0,b.jsxs)(l.Z,{sx:{height:"100%"},children:[(0,b.jsx)(i.Z,{variant:"h2",sx:{mb:4,fontWeight:500},children:"Your Boards"}),(0,b.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(i.Z,{variant:"h3",sx:{cursor:"pointer",bgcolor:"rgba(128, 0, 128, 0.4)",ml:4,mt:4,px:2,borderRadius:4},height:100,display:"flex",alignItems:"center",onClick:()=>{j(!0)},children:"Create a new board"}),(0,b.jsx)(g.Z,{id:e})]})]}),(0,b.jsx)(u.Z,{open:n,onClose:S,formData:w,dialogForm:1}),(0,b.jsx)(x.Z,{open:Z,onClose:S,wsId:e,dialogForm:0})]})}}}]);
//# sourceMappingURL=388.fdabb710.chunk.js.map