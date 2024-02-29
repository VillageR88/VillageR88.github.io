(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{1056:function(e,s,t){Promise.resolve().then(t.bind(t,7149))},9744:function(e,s,t){"use strict";var l=t(7437),a=t(8803);s.Z=e=>{let{emailValue:s,showModal:t,setShowModal:i}=e,n=async()=>{let{data:e,error:t}=await a.Z.auth.resetPasswordForEmail(s);t?console.log("error",t):console.log("data",e)};return(0,l.jsx)("div",{className:"".concat(t?"opacity-100":"pointer-events-none select-none opacity-0"," absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center transition duration-200"),children:(0,l.jsxs)("div",{className:"headingS border-1 max-w-screen flex w-[500px] flex-col gap-4 rounded-[12px] border border-[#beadff] bg-white p-[30px] text-center shadow-[0_0px_30px_3px_#beadff]",children:[(0,l.jsxs)("h2",{className:"leading-6",children:["The provided email address is already in use. ",(0,l.jsx)("br",{}),"Would you like us to send a password reset link to this email: ",(0,l.jsx)("br",{})," ",s,"?"]}),(0,l.jsxs)("div",{className:"flex w-full items-center justify-center gap-[10px]",children:[(0,l.jsx)("button",{type:"button",className:"buttonSecondary h-9 w-20",onClick:()=>{i(!1)},children:"No"}),(0,l.jsx)("button",{type:"button",className:"buttonPrimary h-9 w-20",onClick:()=>{n(),alert("Password reset link will be sent to your email. Please check your email. Due to server limitations, time to receive the email may vary. Thank you!"),i(!1)},children:"Yes"})]})]})})}},7149:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var l=t(7437),a=t(6691),i=t.n(a),n=t(8803),r=t(4033),c=t(2265),o=t(1396),d=t.n(o),m=t(4473),u=t(7156),p=t(9744),x=e=>{let{passLoadingState:s}=e,t=(0,r.useRouter)(),[a,o]=(0,c.useState)(""),[x,h]=(0,c.useState)(""),[f,y]=(0,c.useState)(""),[g,w]=(0,c.useState)(m.Z.Typing),[j,b]=(0,c.useState)(m.Z.Typing),[v,N]=(0,c.useState)(m.Z.Typing),[Z,C]=(0,c.useState)(!1),[k,F]=(0,c.useState)(!1),S=(0,c.useRef)([]);return(0,c.useEffect)(()=>{x===f&&N(m.Z.Typing)},[x,f]),(0,c.useEffect)(()=>{Z&&((async()=>{j===m.Z.Typing&&g===m.Z.Typing&&v===m.Z.Typing&&s(!0);{let{error:e}=await n.Z.auth.signUp({email:a,password:x});e?(w(m.Z.InvalidLoginCredentials),b(m.Z.InvalidLoginCredentials),s(!1),console.error("error",e),F(!0)):t.push("/main")}})(),C(!1))},[g,a,s,v,j,x,t,Z]),(0,c.useEffect)(()=>{let e=e=>{"Escape"===e.key&&S.current.forEach(e=>{e.blur()})};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{showModal:k,setShowModal:F,emailValue:a}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x.length<8?b(m.Z.CheckAgain):x!==f?N(m.Z.CheckAgain):C(!0)},onInvalid:e=>{let s=e.target;"email"===s.id&&s.validity.valueMissing&&w(m.Z.Empty),"password"===s.id&&s.validity.valueMissing&&b(m.Z.Empty)},className:"flex h-[442px] w-full flex-col justify-between sm:h-[418px]",children:[(0,l.jsxs)("div",{className:"flex h-[70px] flex-col justify-between gap-[4px]",children:[(0,l.jsx)("label",{className:"bodyS h-[18px]",htmlFor:"email",children:"Email address"}),(0,l.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,l.jsx)(i(),{className:"z-10 ml-[1em] mr-[-2em] h-fit w-fit",src:"/assets/images/icon-email.svg",alt:"email",width:16,height:16}),(0,l.jsx)("input",{ref:e=>null!==e?S.current[0]=e:null,value:a,onChange:e=>{o(e.target.value)},className:"".concat(g!==m.Z.Typing&&"textFieldError"," textField bodyM h-full w-full pl-[44px] pr-[2em]"),placeholder:"e.g. alex@email.com",type:"email",name:"email",id:"email","aria-required":"true",autoComplete:"email",required:!0,onKeyDown:()=>{w(m.Z.Typing),b(m.Z.Typing)}})]}),g!==m.Z.Typing&&(0,l.jsx)("div",{className:"pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end",children:(0,l.jsx)("span",{className:"bodyS self-end bg-white px-2 py-1 text-[#FF3939]",children:u.Z[g]})})]}),(0,l.jsxs)("div",{className:"flex h-[70px] flex-col justify-between gap-[4px]",children:[(0,l.jsx)("label",{className:"bodyS h-[18px]",htmlFor:"password",children:"Create password"}),(0,l.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,l.jsx)(i(),{className:"z-10 ml-[1em] mr-[-2em] h-fit w-fit",src:"/assets/images/icon-password.svg",alt:"email",width:16,height:16}),(0,l.jsx)("input",{ref:e=>null!==e?S.current[1]=e:null,value:x,onChange:e=>{h(e.target.value)},className:"".concat(j!==m.Z.Typing&&"textFieldError"," textField bodyM h-full w-full pl-[44px]"),placeholder:"Enter your password",type:"password",name:"password",id:"password","aria-required":"true",required:!0,onKeyDown:()=>{b(m.Z.Typing)}})]}),j!==m.Z.Typing&&(0,l.jsx)("div",{className:"pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end",children:(0,l.jsx)("span",{className:"bodyS self-end bg-white px-2 py-1 text-[#FF3939]",children:u.Z[j]})})]}),(0,l.jsxs)("div",{className:"flex h-[70px] flex-col justify-between gap-[4px]",children:[(0,l.jsx)("label",{className:"bodyS h-[18px]",htmlFor:"passwordConfirm",children:"Confirm password"}),(0,l.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,l.jsx)(i(),{className:"z-10 ml-[1em] mr-[-2em] h-fit w-fit",src:"/assets/images/icon-password.svg",alt:"email",width:16,height:16}),(0,l.jsx)("input",{ref:e=>null!==e?S.current[2]=e:null,value:f,onChange:e=>{y(e.target.value)},className:"".concat(v!==m.Z.Typing&&"textFieldError"," textField bodyM h-full w-full pl-[44px]"),placeholder:"At least 8 characters",type:"password",name:"passwordConfirm",id:"passwordConfirm","aria-required":"true",required:!0,onKeyDown:()=>{N(m.Z.Typing)}})]}),v!==m.Z.Typing&&(0,l.jsx)("div",{className:"pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end",children:(0,l.jsx)("span",{className:"bodyS self-end bg-white px-2 py-1 text-[#FF3939]",children:u.Z[v]})})]}),(0,l.jsx)("span",{className:"bodyS text-[#737373]",children:"Password must contain at least 8 characters"}),(0,l.jsx)("button",{className:"buttonPrimary headingS h-[46px] w-full text-white",type:"submit",children:"Create new account"}),(0,l.jsxs)("div",{className:"bodyM flex flex-col items-center justify-center gap-1 sm:flex-row",children:[(0,l.jsx)("span",{className:"text-[#737373]",children:"Already have an account?"}),(0,l.jsx)(d(),{href:"/login",children:(0,l.jsx)("span",{className:"text-[#633CFF]",children:"Login"})})]})]})]})},h=t(2545);function f(){let[e,s]=(0,c.useState)(!1);return(0,l.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center bg-white p-[32px] sm:bg-[#FAFAFA]",children:[e&&(0,l.jsx)(h.s5,{width:"180",strokeColor:"cornflowerblue",ariaLabel:"loading"}),(0,l.jsxs)("div",{className:"".concat(e?"hidden":"flex"," w-full flex-col justify-between gap-[64px] sm:h-[709px] sm:w-[476px] sm:items-center sm:gap-0"),children:[(0,l.jsx)(i(),{className:"h-fit w-fit",width:10,height:10,src:"../assets/images/logo-devlinks-large.svg",alt:"devlinks logo",priority:!0}),(0,l.jsxs)("div",{className:"flex h-[550px] w-full flex-col justify-between rounded-[12px] bg-[white] sm:h-[618px] sm:px-[40px] sm:py-[40px]",children:[(0,l.jsxs)("section",{className:"flex h-[80px] w-full flex-col justify-between",children:[(0,l.jsx)("h1",{className:"headingM",children:"Create account"}),(0,l.jsx)("p",{className:"bodyM text-[#737373]",children:"Let’s get you started sharing your links!"})]}),(0,l.jsx)(x,{passLoadingState:e=>{s(e)}})]})]})]})}},7156:function(e,s,t){"use strict";var l=t(4473);let a={[l.Z.Empty]:"Can't be empty",[l.Z.CheckAgain]:"Please check again",[l.Z.InvalidLoginCredentials]:"Invalid login credentials"};s.Z=a},4473:function(e,s){"use strict";var t,l;(l=t||(t={}))[l.Empty=0]="Empty",l[l.CheckAgain=1]="CheckAgain",l[l.InvalidLoginCredentials=2]="InvalidLoginCredentials",l[l.Typing=3]="Typing",s.Z=t},8803:function(e,s,t){"use strict";let l=(0,t(9930).eI)("https://dmajjnkdsmsgvcpshifr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYWpqbmtkc21zZ3ZjcHNoaWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMzM0OTgsImV4cCI6MjAyMzYwOTQ5OH0.ZWeLW4fTz5R9d8vpO2yxl-n2Wc3q_YVetDNZ9QNM9fk");s.Z=l}},function(e){e.O(0,[571,813,396,971,938,744],function(){return e(e.s=1056)}),_N_E=e.O()}]);