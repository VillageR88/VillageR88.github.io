(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8994:function(e,t,l){Promise.resolve().then(l.bind(l,3356))},3356:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Home}});var a=l(7437),n=l(2265);l(3470),l(6590),l(1269),l(9016);var o=l(6691),s=l.n(o);function MyComponent(){let[e,t]=(0,n.useState)(null),[l,o]=(0,n.useState)(null),[r,i]=(0,n.useState)(null),[c,d]=(0,n.useState)(!1),u=null!=l?l:null;(0,n.useState)(()=>{fetch("./data.json").then(e=>e.json()).then(e=>{t(e.messages);let l=e.messages.filter(e=>e.boolean1).length;o(l-1),console.log("test")}).catch(e=>{console.error("Error loading JSON: ",e)})}),(0,n.useEffect)(()=>{let e=setTimeout(()=>{d(!0),o(e=>null!==e?e+1:0)},3e3);return()=>{clearTimeout(e)}},[]);let m=new Date("2023-11-01T10:00:00Z").getTime();function timeDiff(e){var t,l,a,n;let o=Math.floor((m-new Date(e).getTime())/864e5),s=Math.floor((m-new Date(e).getTime())/36e5),r=(m-new Date(e).getTime())%36e5/6e4;return[o<7?null===(t=o||null)||void 0===t?void 0:t.toString().concat(1===o?" day ago":" days ago"):null===(l=Math.floor(o/7)||null)||void 0===l?void 0:l.toString().concat(1===Math.floor(o/7)?" week ago":" weeks ago"),s<24?null===(a=s||null)||void 0===a?void 0:a.toString().concat("h ago"):null,r<1?"now":s<1&&r<60?null===(n=r||null)||void 0===n?void 0:n.toString().concat("m ago"):null]}return e?(0,a.jsxs)("div",{className:"flex flex-col gap-2 pb-6 pt-8 md:pb-0",children:[(0,a.jsxs)("div",{className:"flex justify-between pb-4 md:w-[42em]",children:[(0,a.jsxs)("span",{className:"text-[1.5rem] font-bold text-veryDarkBlue hover:cursor-default",children:["Notifications"," ",(0,a.jsx)("span",{className:"ml-1.5 rounded-md bg-blue px-[0.7em] py-0.5 align-[3px] text-[1rem] font-semibold text-white",children:u})]}),(0,a.jsx)("button",{onClick:()=>{o(u=0),e.map((e,t)=>(!!c||t>0)&&(e.boolean1=!1))},className:"font-[600] text-darkGrayishBlue hover:text-blue",children:"Mark all as read"})]}),e.map((e,t)=>(t>0||c)&&(0,a.jsxs)("div",{onClick:()=>{e.boolean1&&(o(u?u-=1:0),i(t))},className:"".concat(e.boolean1?"cursor-pointer bg-lightGrayishBlue1 md:bg-veryLightGrayishBlue":null,"\n              ").concat(r===t?e.boolean1=!1:null,"\n            } flex gap-2.5 rounded-[0.5em] px-2 py-4 md:w-[42em] md:px-5"),children:[(0,a.jsx)(s(),{className:"h-11 w-auto",src:"./images/".concat(e.person),alt:"Image of ".concat(e.person),width:45,height:10}),(0,a.jsxs)("div",{className:"ml-1 flex w-full flex-col md:ml-2",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)("div",{className:"w-full flex-grow",children:[(0,a.jsx)("span",{className:"font-semibold hover:cursor-pointer hover:text-blue",children:e.text1}),(0,a.jsx)("span",{className:"ml-1.5 font-medium text-darkGrayishBlue ".concat(e.boolean1?"hover:cursor-pointer":"hover:cursor-default"),children:e.text2}),(0,a.jsx)("span",{className:"".concat(e.alternateText1&&"text-blue"," ").concat(e.text3&&"ml-1.5 font-semibold text-darkGrayishBlue hover:cursor-pointer hover:text-blue"),children:e.text3}),(0,a.jsx)("span",{className:"".concat(e.boolean1&&"ml-1.5 rounded-full bg-red px-1 align-middle text-[6.5px]")})]})}),(0,a.jsx)("span",{className:"".concat(e.boolean1?"hover:cursor-pointer":"hover:cursor-default"," 'font-medium ' text-grayishBlue"),children:timeDiff(e.timestamp1)})]}),e.pictureRated&&(0,a.jsx)(s(),{className:"ml-6 flex h-14 w-auto cursor-pointer rounded-xl border-4 border-solid border-transparent hover:border-lightGrayishBlue1",src:"./images/".concat(e.pictureRated),alt:"Image of ".concat(e.pictureRated),width:45,height:10})]}),(0,a.jsx)("span",{className:"".concat(e.text4&&"mb-3 mt-[0.6em] rounded-md border border-solid px-5 pb-4 pt-4 font-medium leading-5 text-darkGrayishBlue"," hover:cursor-pointer hover:bg-lightGrayishBlue1"),children:e.text4})]})]},t))]}):(0,a.jsx)("p",{className:"static p-2 text-[1.5rem] font-bold text-veryDarkBlue",children:"Loading database..."})}function Home(){return(0,a.jsx)("main",{className:"flex min-h-screen max-w-full flex-col items-center font-plusJakartaSans md:py-[4em]",children:(0,a.jsx)("div",{className:"flex flex-col items-center rounded-xl bg-white px-4 md:px-8",children:(0,a.jsx)("div",{children:(0,a.jsx)(MyComponent,{})})})})}}},function(e){e.O(0,[705,971,472,744],function(){return e(e.s=8994)}),_N_E=e.O()}]);