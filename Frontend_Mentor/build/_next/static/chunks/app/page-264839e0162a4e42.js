(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8994:function(e,t,l){Promise.resolve().then(l.bind(l,5372))},5372:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return a}});var n=l(7437),s=l(6691),r=l.n(s),c={src:"/Frontend_Mentor/build//_next/static/media/icon-check.5b02c047.svg",height:9,width:11,blurWidth:0,blurHeight:0},i={src:"/Frontend_Mentor/build//_next/static/media/icon-cross.0653d954.svg",height:18,width:18,blurWidth:0,blurHeight:0},o={src:"/Frontend_Mentor/build//_next/static/media/icon-sun.ec906563.svg",height:26,width:26,blurWidth:0,blurHeight:0},u=l(2265);function a(){var e;let t;let[l,s]=(0,u.useState)([]),a=(0,u.useRef)(null),[d,m]=(0,u.useState)(null),[h,f]=(0,u.useState)(!1),[x,p]=(0,u.useState)(""),b=(0,u.useRef)(null),[v,g]=(0,u.useState)(!1),[C,j]=(0,u.useState)(!1);(0,u.useEffect)(()=>{a.current===d?j(!0):j(!1)},[d]),(0,u.useEffect)(()=>{null!==a.current&&null!==d&&(d===a.current||C||(d<a.current?s([...l.slice(0,d),l[a.current],...l.slice(d,a.current),...l.slice(a.current+1)]):s([...l.slice(0,a.current),...l.slice(a.current+1,d+1),l[a.current],...l.slice(d+1)])),a.current=d)},[l,C,d]),(0,u.useEffect)(()=>(window.addEventListener("mouseup",()=>{g(!1)}),()=>{window.removeEventListener("mouseup",()=>{g(!1)})}),[v]),(0,u.useEffect)(()=>{if(v){let e=e=>{b.current&&(b.current.style.top="".concat(e.clientY,"px"),b.current.style.left="".concat(e.clientX,"px"))};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e),b.current&&document.body.removeChild(b.current),a.current=null}}},[v]),(0,u.useEffect)(()=>{fetch("./data.json").then(e=>e.json()).then(e=>{s(e)}).catch(e=>{console.error(e)})},[]),(0,u.useEffect)(()=>{l.length>0&&!h&&f(!0)},[l.length,h]),(e=t||(t={})).All="All",e.Active="Active",e.Completed="Completed";let[w,N]=(0,u.useState)("All"),E=e=>{let{completed:t,task:l,buttonCheckClick:s,buttonCrossCLick:o,classExtension:h,index:f}=e,x=(0,u.useRef)(null);return(0,n.jsxs)("div",{style:{visibility:v&&a.current===f?"hidden":"visible"},ref:x,draggable:!0,onDragStart:e=>{e.preventDefault(),a.current=f,x.current&&(b.current=x.current.cloneNode(!0),b.current.style.position="fixed",b.current.style.width="30.8em",b.current.style.height="full",b.current.style.boxShadow="0 0 0.5em 0.1em #000000",b.current.style.color="#CACCE3",b.current.style.fontFamily="Josefin Sans",b.current.style.fontSize="1.1rem",b.current.style.fontWeight="normal",document.body.appendChild(b.current),g(!0))},onMouseEnter:()=>{m(f)},onMouseLeave:()=>{m(null)},className:"".concat(h," h-[4em] w-full items-center gap-[1em] bg-[#25273C] px-[1.5em]"),children:[(0,n.jsx)("button",{className:" select-none",onClick:s,children:(0,n.jsx)("div",{className:"".concat(t&&"bg-gradient-to-br hover:outline-offset-2 hover:outline-[#CACCE3]"," flex h-[1.45em]  w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br"),children:t?(0,n.jsx)(r(),{src:c,alt:"check",priority:!0}):(0,n.jsx)("div",{className:"h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"})})}),(0,n.jsx)("span",{className:"".concat(t?"text-[#4E5065] line-through":"text-[#CACCE3]"," w-[25em] select-none bg-transparent px-2 text-[1.1rem] placeholder-[#73758A]"),children:l}),d===f&&(0,n.jsx)("button",{className:"select-none",onClick:o,children:(0,n.jsx)(r(),{src:i,alt:"delete Task"})})]})};return h&&(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center font-josefinSans",children:[(0,n.jsx)("div",{className:"h-[18.8em] w-full items-center bg-[url('./images/bg-desktop-dark.jpg')] bg-top bg-no-repeat"}),(0,n.jsx)("div",{className:"flex min-h-[31.2em] w-full flex-col items-center bg-[#181824] text-[#FEFFFE]",children:(0,n.jsxs)("div",{className:"mt-[-14.4em] w-[33.8em] flex-col justify-center",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-[2.45rem] font-[700] tracking-[0.4em]",children:"TODO"}),(0,n.jsx)("button",{children:(0,n.jsx)(r(),{className:"h-fit pb-[0.5em]",src:o,alt:"icon-sun"})})]}),(0,n.jsxs)("div",{className:"mt-[1.9em] flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] pl-[1.5em]",children:[(0,n.jsx)("button",{onClick:()=>{""!==x&&(l.push({completed:!1,task:x}),p(""))},children:(0,n.jsx)("div",{className:"flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br ",children:(0,n.jsx)("div",{className:"h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"})})}),(0,n.jsx)("input",{value:x,className:"mt-[0.3em] w-[25em] bg-transparent px-2 text-[1.1rem] text-[#CACCE3] placeholder-[#73758A]",placeholder:"Create a new todo...",type:"text",onChange:e=>{p(e.target.value)}})]}),(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:"mt-[1.5em] flex w-full flex-col",children:[l.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(E,{index:t,classExtension:"All"===w?"flex":"Active"===w?l[t].completed?"hidden":"flex":l[t].completed?"flex":"hidden",buttonCheckClick:()=>{s(e=>{let l=[...e];return l[t]={...l[t],completed:!l[t].completed},l})},buttonCrossCLick:()=>{s(e=>{let l=[...e];return l.splice(t,1),l})},completed:e.completed,task:e.task}),(0,n.jsx)("div",{className:"h-[1px] w-full bg-[#34364C]"})]},t)),(0,n.jsxs)("div",{className:"flex h-[3em] w-full items-center justify-between bg-[#25273C]  px-6 text-[#62647D]",children:[(0,n.jsxs)("span",{className:"text-[0.9rem]",children:[l.filter(e=>!e.completed).length," items left"]}),(0,n.jsxs)("div",{className:"flex gap-[3.3em]",children:[(0,n.jsx)("div",{className:"flex gap-[1em]",children:["All","Active","Completed"].map(e=>(0,n.jsx)("button",{onClick:()=>{N(e)},className:"".concat(e===w?"text-[#5480D8]":"hover:text-[#CACCE3]"," text-[0.9rem] font-[600] "),children:e},e))}),(0,n.jsx)("button",{onClick:()=>{s(e=>[...e.filter(e=>!e.completed)])},className:"text-[0.9rem] hover:text-[#CACCE3]",children:"Clear Completed"})]})]})]})]})})]})}}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=8994)}),_N_E=e.O()}]);