(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{5634:function(e,s,a){Promise.resolve().then(a.bind(a,8948))},8948:function(e,s,a){"use strict";var n=a(7437),r=a(2265),t=a(2197),o=a(270),i=a(4696),l=a(1326),c=a(5462),d=a(511),m=a(2961),u=a(4908),h=a(5786),p=a(6548),x=a(8433),g=a(9618),j=a(5764),Z=a(4050),b=a(335),f=a(2326),w=a(6463),y=a(7776),S=a(7138);s.default=()=>{let[e,s]=r.useState(!1),[a,v]=r.useState({email:"",password:""}),[C,k]=r.useState(!1),I=(0,w.useRouter)(),P=async e=>{e.preventDefault();try{let e=await fetch("/api/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),s=await e.json();s.success?(y.Am.success(s.message),s.user&&(localStorage.setItem("user",JSON.stringify(s.user)),C?(localStorage.setItem("email",a.email),localStorage.setItem("password",a.password)):(localStorage.removeItem("email"),localStorage.removeItem("password")),v({email:"",password:""}),I.push("/blogs/".concat(s.user.id)))):y.Am.error(s.message)}catch(e){console.error("Error during sign in:",e),y.Am.error("Failed to sign in. Please try again.")}},A=e=>{let{name:s,value:a}=e.target;v(e=>({...e,[s]:a}))};return(0,n.jsx)(t.Z,{component:"main",maxWidth:"xs",children:(0,n.jsx)(o.Z,{sx:{mt:8,boxShadow:"0px 10px 20px rgba(0,0,0,0.1)"},children:(0,n.jsx)(i.Z,{children:(0,n.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(c.Z,{sx:{m:1,bgcolor:"primary.main"},children:(0,n.jsx)(g.Z,{})}),(0,n.jsx)(d.Z,{component:"h1",variant:"h5",children:"Welcome!"}),(0,n.jsx)(d.Z,{component:"h2",variant:"subtitle1",children:"Sign in to your account"}),(0,n.jsxs)(l.Z,{component:"form",noValidate:!0,sx:{mt:1},onSubmit:P,children:[(0,n.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:a.email,onChange:A}),(0,n.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:e?"text":"password",id:"password",autoComplete:"current-password",value:a.password,onChange:A,InputProps:{endAdornment:(0,n.jsx)(f.Z,{position:"end",children:(0,n.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:()=>s(e=>!e),edge:"end",children:e?(0,n.jsx)(Z.Z,{}):(0,n.jsx)(j.Z,{})})})}}),(0,n.jsx)(u.Z,{control:(0,n.jsx)(h.Z,{checked:C,onChange:e=>{k(e.target.checked)},color:"primary"}),label:"Remember me"}),(0,n.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,n.jsx)(x.ZP,{container:!0,children:(0,n.jsx)(x.ZP,{item:!0,xs:!0,children:(0,n.jsxs)(d.Z,{variant:"body2",children:["Dont have an Account? ",(0,n.jsx)(S.default,{href:"/signup",children:"Sign Up"})]})})})]})]})})})})}}},function(e){e.O(0,[316,776,517,231,72,660,971,23,744],function(){return e(e.s=5634)}),_N_E=e.O()}]);