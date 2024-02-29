(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{1101:function(e,s,t){Promise.resolve().then(t.bind(t,6581))},7156:function(e,s,t){"use strict";var a=t(4473);let l={[a.Z.Empty]:"Can't be empty",[a.Z.CheckAgain]:"Please check again",[a.Z.InvalidLoginCredentials]:"Invalid login credentials"};s.Z=l},4473:function(e,s){"use strict";var t,a;(a=t||(t={}))[a.Empty=0]="Empty",a[a.CheckAgain=1]="CheckAgain",a[a.InvalidLoginCredentials=2]="InvalidLoginCredentials",a[a.Typing=3]="Typing",s.Z=t},8803:function(e,s,t){"use strict";let a=(0,t(9930).eI)("https://dmajjnkdsmsgvcpshifr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYWpqbmtkc21zZ3ZjcHNoaWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMzM0OTgsImV4cCI6MjAyMzYwOTQ5OH0.ZWeLW4fTz5R9d8vpO2yxl-n2Wc3q_YVetDNZ9QNM9fk");s.Z=a},6581:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var a=t(7437),l=t(6691),n=t.n(l),i=t(2545),r=t(2265),c=t(4473),o=t(8803),d=t(4033),u=t(7156);function p(){let e=(0,r.useRef)([]),s=(0,d.useRouter)(),[t,l]=(0,r.useState)(!1),[p,m]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[x,w]=(0,r.useState)(c.Z.Typing),[g,y]=(0,r.useState)(c.Z.Typing),[b,j]=(0,r.useState)(!1),v=()=>{p.length<8?w(c.Z.CheckAgain):p!==f?y(c.Z.CheckAgain):j(!0)};return(0,r.useEffect)(()=>{b&&(console.log("submitNow"),o.Z.auth.onAuthStateChange(async e=>{if("PASSWORD_RECOVERY"==e){l(!0);let{data:e,error:t}=await o.Z.auth.updateUser({password:p});e.user&&(alert("Password updated successfully!"),s.push("/main")),t&&(w(c.Z.InvalidLoginCredentials),l(!1),alert("There was an error updating your password.")),j(!1)}}))},[p,s,b]),(0,r.useEffect)(()=>{let s=s=>{"Escape"===s.key&&e.current.forEach(e=>{e.blur()})};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[]),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center bg-white p-[32px] font-instrumentSans sm:bg-[#FAFAFA]",children:[t&&(0,a.jsx)(i.s5,{width:"180",strokeColor:"cornflowerblue",ariaLabel:"loading"}),(0,a.jsxs)("div",{className:"".concat(t?"hidden":"flex"," flex w-full flex-col justify-between gap-[60px] sm:h-[573px] sm:w-[476px] sm:items-center sm:gap-0"),children:[(0,a.jsx)(n(),{className:"h-fit w-fit",width:10,height:10,src:"../assets/images/logo-devlinks-large.svg",alt:"devlinks logo",priority:!0}),(0,a.jsxs)("div",{className:"flex w-full flex-col justify-between gap-[24px] rounded-[12px] bg-[white] sm:h-[482px] sm:gap-0 sm:px-[40px] sm:py-[40px]",children:[(0,a.jsxs)("section",{className:"flex h-[80px] w-full flex-col justify-between",children:[(0,a.jsx)("h1",{className:"headingM",children:"Password Recovery"}),(0,a.jsx)("p",{className:"bodyM text-[#737373]",children:"Please enter new password."})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("submit"),v()},className:"flex h-[282px] w-full flex-col justify-between",children:[(0,a.jsxs)("div",{className:"flex h-[70px] flex-col justify-between gap-[4px]",children:[(0,a.jsx)("label",{className:"bodyS h-[18px]",htmlFor:"password",children:"Create password"}),(0,a.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,a.jsx)(n(),{className:"z-10 ml-[1em] mr-[-2em] h-fit w-fit",src:"../assets/images/icon-password.svg",alt:"email",width:16,height:16}),(0,a.jsx)("input",{ref:s=>null!==s?e.current[1]=s:null,value:p,onChange:e=>{m(e.target.value)},className:"".concat(x!==c.Z.Typing&&"textFieldError"," textField bodyM h-full w-full pl-[44px]"),placeholder:"Enter your password",type:"password",name:"password",id:"password","aria-required":"true",required:!0,onKeyDown:()=>{w(c.Z.Typing)}})]}),x!==c.Z.Typing&&(0,a.jsx)("div",{className:"pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end",children:(0,a.jsx)("span",{className:"bodyS self-end bg-white px-2 py-1 text-[#FF3939]",children:u.Z[x]})})]}),(0,a.jsxs)("div",{className:"flex h-[70px] flex-col justify-between gap-[4px]",children:[(0,a.jsx)("label",{className:"bodyS h-[18px]",htmlFor:"passwordConfirm",children:"Confirm password"}),(0,a.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,a.jsx)(n(),{className:"z-10 ml-[1em] mr-[-2em] h-fit w-fit",src:"../assets/images/icon-password.svg",alt:"email",width:16,height:16}),(0,a.jsx)("input",{ref:s=>null!==s?e.current[2]=s:null,value:f,onChange:e=>{h(e.target.value)},className:"".concat(g!==c.Z.Typing&&"textFieldError"," textField bodyM h-full w-full pl-[44px]"),placeholder:"At least 8 characters",type:"password",name:"passwordConfirm",id:"passwordConfirm","aria-required":"true",required:!0,onKeyDown:()=>{y(c.Z.Typing)}})]}),g!==c.Z.Typing&&(0,a.jsx)("div",{className:"pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end",children:(0,a.jsx)("span",{className:"bodyS self-end bg-white px-2 py-1 text-[#FF3939]",children:u.Z[g]})})]}),(0,a.jsx)("span",{className:"bodyS text-[#737373]",children:"Password must contain at least 8 characters"}),(0,a.jsx)("button",{onClick:()=>{v()},className:"buttonPrimary headingS h-[46px] w-full",type:"submit",children:"Change Password"}),(0,a.jsx)("div",{className:"bodyM flex justify-center gap-1"})]})]})]})]})}}},function(e){e.O(0,[571,813,971,938,744],function(){return e(e.s=1101)}),_N_E=e.O()}]);