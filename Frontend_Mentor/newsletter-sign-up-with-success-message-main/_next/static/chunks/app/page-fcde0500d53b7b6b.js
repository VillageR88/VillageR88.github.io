(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8994:function(e,s,t){Promise.resolve().then(t.bind(t,3897))},3897:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Home}});var n=t(7437),i=t(2265),a=t(6691),l=t.n(a),r={src:"/Frontend_Mentor/newsletter-sign-up-with-success-message-main//_next/static/media/icon-list.e08955df.svg",height:21,width:21,blurWidth:0,blurHeight:0},c={src:"/Frontend_Mentor/newsletter-sign-up-with-success-message-main//_next/static/media/icon-success.61715faa.svg",height:64,width:64,blurWidth:0,blurHeight:0},d={src:"/Frontend_Mentor/newsletter-sign-up-with-success-message-main//_next/static/media/illustration-sign-up-desktop.04371c02.svg",height:593,width:400,blurWidth:0,blurHeight:0},o={src:"/Frontend_Mentor/newsletter-sign-up-with-success-message-main//_next/static/media/illustration-sign-up-mobile.5d302d8c.svg",height:284,width:375,blurWidth:0,blurHeight:0};function SignUpForm(e){let{onValidEmail:s}=e,[t,a]=(0,i.useState)(""),[l,r]=(0,i.useState)(null),[c,d]=(0,i.useState)(!1);function checkEmail(){let e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t);r(e),d(!1),e&&s(t)}return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("div",{className:"flex justify-between pb-2 pt-10 font-semibold tracking-tighter md:text-xs",children:[(0,n.jsx)("span",{children:"Email address"}),!0===l&&!c&&(0,n.jsx)("span",{className:"label flex text-green-700",children:"Thank You!"}),!1===l&&!c&&(0,n.jsx)("span",{className:"label flex text-tomato",children:"Valid email required"})]}),(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),checkEmail()},children:(0,n.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,n.jsx)("input",{onKeyUp:e=>{"Enter"!==e.key&&d(!0)},className:"solid rounded-lg border px-6 py-4 hover:cursor-pointer hover:border-dark-slate-grey",type:"text",name:"emailInput",placeholder:"email@company.com",value:t,onChange:e=>{a(e.target.value)}}),(0,n.jsx)("button",{type:"submit",className:"solid rounded-lg border bg-[#232742] from-[#FF5378] to-[#FF693E] px-6 py-4 text-white after:bg-white hover:bg-gradient-to-r",onClick:checkEmail,children:"Subscribe to monthly newsletter"})]})})]})}function Home(){let[e,s]=(0,i.useState)("stage1"),[t,a]=(0,i.useState)("");return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center",children:["stage2"===e&&(0,n.jsxs)("div",{className:"wrapper2 flex h-screen flex-col bg-white px-6 pt-32 text-dark-slate-grey md:h-auto md:w-[32em] md:rounded-[2em] md:px-14 md:py-14 md:pt-10",children:[(0,n.jsx)(l(),{className:"flex",src:c,alt:"icon"}),(0,n.jsx)("span",{className:"pt-8 text-[2.5rem] font-bold leading-[1em] tracking-tighter md:text-[3.5rem]",children:"Thanks for subscribing!"}),(0,n.jsxs)("span",{className:"pb-52 pt-6 md:pb-10",children:["A confirmation email has been sent to"," ",(0,n.jsx)("span",{className:"pt-6 font-bold",children:t||"ash@loremcompany.com"}),". Please open it and click the button inside to confirm your subscription."]}),(0,n.jsx)("button",{className:"solid rounded-lg border bg-[#232742] from-[#FF5378] to-[#FF693E] px-6 py-4 text-white after:bg-white hover:bg-gradient-to-r",onClick:function(){s("stage1")},children:"Dismiss message"})]}),"stage1"===e&&(0,n.jsxs)("div",{className:"wrapper1 flex flex-col-reverse rounded-[2em] bg-white pb-12 tracking-tight text-dark-slate-grey md:flex-row md:pb-6 md:pl-6 md:pr-6 md:pt-6",children:[(0,n.jsxs)("div",{className:"flex w-full flex-col pl-10 pr-14 md:w-[30em]",children:[(0,n.jsx)("span",{className:"pt-16 text-[2.5rem] font-bold tracking-tighter md:text-[3.5rem]",children:"Stay updated!"}),(0,n.jsx)("span",{className:"w-[20em] pt-4 font-medium md:w-full",children:"Join 60,000+ product managers receiving monthly updates on:"}),(0,n.jsxs)("div",{className:"flex gap-4 pt-4 font-medium",children:[(0,n.jsx)(l(),{className:"",src:r,alt:"icon of list"}),(0,n.jsx)("span",{children:"Product discovery and building what matters"})]}),(0,n.jsxs)("div",{className:"flex gap-4 pt-2 font-medium",children:[(0,n.jsx)(l(),{className:"",src:r,alt:"icon of list"}),(0,n.jsx)("span",{children:"Measuring to ensure updates are a success"})]}),(0,n.jsxs)("div",{className:"flex gap-4 pt-2 font-medium",children:[(0,n.jsx)(l(),{className:"",src:r,alt:"icon of list"}),(0,n.jsx)("span",{children:"And much more!"})]}),(0,n.jsx)(SignUpForm,{onValidEmail:function(e){a(e),s("stage2")}})]}),(0,n.jsx)(l(),{className:"hidden md:flex",src:d,alt:"illustration"}),(0,n.jsx)(l(),{className:"flex w-screen self-center md:hidden",src:o,alt:"illustration"})]})]})}}},function(e){e.O(0,[986,971,472,744],function(){return e(e.s=8994)}),_N_E=e.O()}]);