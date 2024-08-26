(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{6666:function(e,t,a){Promise.resolve().then(a.bind(a,357))},357:function(e,t,a){"use strict";a.d(t,{default:function(){return E}});var s=a(7437),r=a(2265),n=a(1281),i=a(7025),o=a(9354);let l=n.fC;n.xz;let d=n.h_;n.x8;let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});c.displayName=n.aV.displayName;let g=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[r,(0,s.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=n.VY.displayName;let u=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};u.displayName="DialogHeader";let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};x.displayName="DialogFooter";let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});p.displayName=n.Dx.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})}).displayName=n.dk.displayName;let f=r.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});f.displayName="Input";var m=a(8364);let h=(0,a(2218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),b=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(m.f,{ref:t,className:(0,o.cn)(h(),a),...r})});b.displayName=m.f.displayName;var v=a(9733),y=e=>{let{openBlogDialog:t,setOpenBlogDialog:a,loading:r,blogFormData:n,setBlogFormData:i,handleSaveBlogData:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"add-blog-box",style:{width:"20%",textAlign:"center",padding:"10px",boxShadow:"0px 0px 4px gray",height:"calc(100vh - 85px)",overflowY:"auto"},children:(0,s.jsx)(v.z,{onClick:()=>a(!0),children:"Add New Blog"})}),(0,s.jsx)(l,{open:t,onOpenChange:a,children:(0,s.jsxs)(g,{className:"sm:max-w-[425px]",children:[(0,s.jsx)(u,{children:(0,s.jsx)(p,{children:"Add New Blog"})}),(0,s.jsxs)("div",{className:"grid gap-4 py-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,s.jsx)(b,{htmlFor:"title",className:"text-right",children:"Title"}),(0,s.jsx)(f,{nanme:"title",value:n.title,onChange:e=>i({...n,title:e.target.value}),id:"title",className:"col-span-3"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,s.jsx)(b,{htmlFor:"description",className:"text-right",children:"Description"}),(0,s.jsx)(f,{nanme:"description",value:n.description,onChange:e=>i({...n,description:e.target.value}),id:"description",className:"col-span-3"})]})]}),(0,s.jsx)(x,{children:(0,s.jsx)(v.z,{onClick:o,type:"submit",children:"Save changes"})})]})})]})},j=a(511),N=a(1326),w=a(270),S=a(5982),k=a(4696);let D=e=>new Date(e).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});var A=e=>{let{blogs:t}=e;return(0,s.jsx)(N.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"10px",padding:"5px",justifyContent:"flex-start"},children:t.map(e=>(0,s.jsx)(w.Z,{className:"card-box",sx:{height:"200px",width:"300px",boxShadow:"1px 1px 4px 1px #8080806b",position:"relative"},children:(0,s.jsxs)(S.Z,{sx:{position:"revert"},children:[(0,s.jsx)(j.Z,{sx:{position:"absolute",right:"10px",bottom:"10px"},variant:"body2",color:"text.secondary",children:D(e.createdAt)}),(0,s.jsxs)(k.Z,{sx:{textAlign:"left"},children:[(0,s.jsxs)(j.Z,{sx:{fontWeight:600,color:"#423f3f"},gutterBottom:!0,variant:"h5",component:"div",children:["Title - ",e.title]}),(0,s.jsxs)(j.Z,{variant:"body2",color:"text.secondary",children:[(0,s.jsx)("b",{children:"Description"})," - ",e.description]})]})]})},e._id))})},C=e=>{let{blogs:t,blogLoading:a,error:r}=e;return(0,s.jsxs)("div",{className:"blog-list-box",style:{width:"80%",textAlign:"center",padding:"10px",boxShadow:"0px 0px 4px gray",height:"calc(100vh - 85px)",overflowY:"auto"},children:[a&&(0,s.jsx)("p",{children:"Loading..."})," ",r&&(0,s.jsxs)("p",{children:["Error: ",r]})," ",t.length>0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(A,{blogs:t})}):(0,s.jsx)(j.Z,{children:"No Blogs Available"})]})},Z=a(7776),B=a(1733),F=a(9806),z=a(6548),R=a(6463),O=()=>{let e=(0,R.useRouter)();return(0,s.jsx)(B.Z,{position:"static",sx:{background:"#FFF",color:"#b79c8a"},children:(0,s.jsxs)(F.Z,{children:[(0,s.jsx)(j.Z,{variant:"h6",sx:{flexGrow:1},children:"Blog Saver"}),(0,s.jsx)(N.Z,{children:(0,s.jsx)(z.Z,{color:"inherit",onClick:()=>{localStorage.removeItem("user"),e.push("/"),Z.Am.success("Successfully logout")},children:"Logout"})})]})})};let _={title:"",description:""};var E=e=>{let{userId:t}=e,[a,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),[l,d]=(0,r.useState)(_),c=e=>new Date(e).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),g=async()=>{try{let e=JSON.parse(localStorage.getItem("user"));if(!e){(0,Z.Am)("User is not logged in. Please log in to create a blog."),o(!1);return}let t={...l,user:e.id},a=await fetch("/api/add-blog",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),s=await a.json();if(console.log(s),s.success){let e=new Date;(0,Z.Am)(s.message,{description:"Created at: ".concat(c(e))}),n(!1),d(_),b()}else(0,Z.Am)(s.message,{description:"Failed to create blog"})}catch(e){console.log(e),o(!1),d(_),(0,Z.Am)("An error occurred while saving the blog")}},[u,x]=(0,r.useState)([]),[p,f]=(0,r.useState)(!1),[m,h]=(0,r.useState)(null),b=async()=>{f(!0),h(null);let e=JSON.parse(localStorage.getItem("user"));if(e)try{let t=await fetch("/api/get-blogs?userId=".concat(e.id)),a=await t.json();a.success?x(a.data):h(a.message)}catch(e){console.error("Error fetching blogs:",e),h("An error occurred while fetching blogs.")}finally{f(!1)}};return(0,r.useEffect)(()=>{b()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O,{}),(0,s.jsxs)("div",{classname:"blog-mainBox",style:{display:"flex",gap:"10px",margin:"10px",justifyContent:"flex-end"},children:[(0,s.jsx)(C,{blogs:u,blogLoading:p,error:m}),(0,s.jsx)(y,{openBlogDialog:a,setOpenBlogDialog:n,loading:i,blogFormData:l,setBlogFormData:d,handleSaveBlogData:g})]})]})}},9733:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(7437),r=a(2265),n=a(1538),i=a(2218),o=a(9354);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:d=!1,...c}=e,g=d?n.g7:"button";return(0,s.jsx)(g,{className:(0,o.cn)(l({variant:r,size:i,className:a})),ref:t,...c})});d.displayName="Button"},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(4839),r=a(6164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}}]);