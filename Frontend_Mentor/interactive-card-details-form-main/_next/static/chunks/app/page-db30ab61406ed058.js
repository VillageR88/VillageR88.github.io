(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8994:function(e,t,a){Promise.resolve().then(a.bind(a,3356))},3356:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var l,s,n,r,m,d,i,o,x,c,u,h,g=a(7437),p=a(2265);a(4058),a(5087),a(2325),a(8359);var f=a(6691),w=a.n(f);(l=i||(i={}))[l.isName=0]="isName",l[l.isNumber=1]="isNumber",l[l.isNumberMM=2]="isNumberMM",l[l.isNumberYY=3]="isNumberYY",(s=o||(o={})).cardNumber="CARD NUMBER",s.cardOwner="CARDHOLDER NAME",s.cardMM="MM",s.cardYY="YY",s.cardCVC="CVC",(n=x||(x={})).JaneAppleseedShort="JANE APPLESEED",n.JaneAppleseedLong="e.g. Jane Appleseed",n.MM="MM",n.YY="YY",n.eg123Short="e.g. 123",n.eg123Long="e.g. 1234 5678 9123 0000",n.zerosShort="00",n.zerosMedium="000",n.zerosLong="0000 0000 0000 0000",n.exp="EXP. DATE (MM/YY)",(r=c||(c={}))._4n5="md:w-[4.5em]",r._10="md:w-[10em]",r.full="md:w-full",(m=u||(u={})).blank="Can't be blank",m.incomplete="Incomplete",m.nameIncomplete="Require first name (max 8 letters) and last name (max 11 letters)",(d=h||(h={})).error="border-redInputErrors",d.normal="focus:border-violet-900",d.initial="border-current";let b=e=>{let{idText:t,showStandardLabel:a,placeholderText:l,width:s,maxInputLength:n,groupDigits:r,type:m,onValueChange:d,justOnChange:i,showText:o,onWarningTextChange:x}=e,[c,u]=(0,p.useState)(""),h=j(),f=new Date().getFullYear(),w=e=>{let t=1===m||2===m||3===m?e.replace(/[^0-9]/g,""):e;2===m&&(Number(t)>12&&(t="12"),"00"===t&&(t="01")),console.log(t),3===m&&(t.startsWith("0")||t.startsWith("1")?t="23":Number(t)>9&&Number(t)<Number(f.toString().slice(-2))&&(t="23"));let a=r?b(t):t;u(a),d(a),i()},b=e=>{let t=1===m?e.match(new RegExp(/.{0,4}/g)):e.match(new RegExp(/(?! )[A-Za-z\-.'"]{1,8}(?![A-Za-z\-.'"]) {0,1}[A-Za-z\-.'"]{0,11}/));return t&&(1===m||2===m||3===m)?t.join(" ").trim():t&&0==m?t.join(" "):""};function j(){let e=""===c?"Can't be blank":c.length<n&&(1===m||2===m||3===m)?"Incomplete":c.length<n&&!c.match(/ ./)?"Require first name (max 8 letters) and last name (max 11 letters)":"";return"function"==typeof x&&x(e),e}return(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{className:"mb-2 block w-full pt-2 text-[0.8rem] font-bold tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]",htmlFor:t,children:a?t:""}),(0,g.jsx)("input",{id:t,type:"text",value:c,onChange:e=>{w(e.target.value),j()},className:"flex w-full ".concat(s," ").concat(o&&""!==h?"border-redInputErrors":"focus:border-violet-900"," rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium text-veryDarkViolet placeholder-[#C8C4C9] outline-0 "),maxLength:n,placeholder:l}),(0,g.jsx)("span",{className:"flex pt-2 text-xs font-medium text-redInputErrors",children:o?h:""})]})};function j(){let[e,t]=(0,p.useState)(""),[a,l]=(0,p.useState)(""),[s,n]=(0,p.useState)(""),[r,m]=(0,p.useState)(""),[d,i]=(0,p.useState)(""),[o,x]=(0,p.useState)(!1),[c,u]=(0,p.useState)(!1),[h,f]=(0,p.useState)(!1),[j,N]=(0,p.useState)(!1),[C,v]=(0,p.useState)(!1),[y,S]=(0,p.useState)("YY"),[M,Y]=(0,p.useState)(!1),[E,k]=(0,p.useState)(""),[T,D]=(0,p.useState)(""),[A,L]=(0,p.useState)(""),[V,R]=(0,p.useState)(""),[_,I]=(0,p.useState)("");return(0,g.jsx)("main",{className:"main flex h-full max-w-full font-spaceGrotesk md:min-h-screen md:pb-[1.7em] md:pt-[1.72em]",children:(0,g.jsxs)("div",{className:"flex max-h-full w-full flex-col gap-4 bg-white md:flex-row md:pr-8",children:[(0,g.jsx)("div",{className:"flex h-[20em] w-full justify-center bg-bgMainDesktop bg-[length:100%_80%] bg-no-repeat md:h-full md:w-1/2 md:bg-[length:30.2em_100%] md:px-0",children:(0,g.jsxs)("div",{className:"mx-4 flex h-full w-full flex-col items-center justify-center md:mx-0 md:h-full md:max-w-full md:gap-[2.3em]",children:[(0,g.jsxs)("div",{className:"container absolute z-10 mb-7 mt-32 flex h-[10em] max-w-[19em] flex-col justify-around self-start rounded-[0.8em] bg-bgCardFront bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:relative md:mb-0 md:mt-0 md:h-[15.5em] md:w-[27.9em] md:max-w-full md:self-auto xl:ml-[6em]",children:[(0,g.jsx)(w(),{className:" ml-8 flex h-auto w-[3em] md:w-[5em]",src:"./images/card-logo.svg",alt:"card logo",width:10,height:10}),(0,g.jsxs)("div",{className:"space-y-[0.5em] md:space-y-[1.5em]",children:[(0,g.jsx)("div",{className:"flex w-full justify-center gap-[2.5%] px-[1em] text-white md:tracking-[0.12em]",children:(0,g.jsx)("span",{className:"text-[1.4rem] md:whitespace-nowrap md:text-[1.75rem]",children:""!=a?a:"0000 0000 0000 0000"})}),(0,g.jsxs)("div",{className:"flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]",children:[(0,g.jsx)("span",{children:""!=e?e.toUpperCase():"JANE APPLESEED"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{children:""!==s?s:"00"}),(0,g.jsx)("span",{children:"/"}),(0,g.jsx)("span",{children:""!==r?r:"00"})]})]})]})]}),(0,g.jsx)("div",{className:"absolute mb-20 flex h-[10em] w-9/12 max-w-[19em] items-center justify-end self-end  rounded-[0.8em] bg-bgCardBack bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:relative md:mb-0 md:h-[15.5em] md:w-[27.9em] md:max-w-full md:self-auto xl:ml-[17em]",children:(0,g.jsx)("span",{className:"mt mb-1 mr-9 text-sm tracking-widest text-white md:mr-16",children:""!==d?d:"000"})})]})}),(0,g.jsx)("div",{className:"max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] px-6 md:mr-[5.5em] md:w-1/2",children:M?(0,g.jsx)("form",{className:"max-h-auto flex items-center gap-3 text-center",children:(0,g.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,g.jsx)(w(),{className:"flex h-auto w-[5em] self-center",src:"./images/icon-complete.svg",alt:"card logo",width:10,height:10}),(0,g.jsx)("span",{className:"mt-6 text-[1.8rem] font-medium  tracking-widest text-veryDarkViolet",children:"THANK YOU!"}),(0,g.jsx)("span",{className:"mb-6 text-[1.1rem] font-medium text-darkGrayishViolet",children:"We've added your card details"}),(0,g.jsx)("button",{type:"button",onClick:()=>{x(!1),u(!1),f(!1),N(!1),v(!1),Y(!1),t(""),l(""),n(""),m(""),i("")},className:"mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white md:w-[21.6em]",children:"Continue"})]})}):(0,g.jsxs)("form",{className:"max-h-auto flex flex-col gap-3",children:[(0,g.jsx)("div",{children:(0,g.jsx)(b,{idText:"CARDHOLDER NAME",showStandardLabel:!0,placeholderText:"e.g. Jane Appleseed",width:"md:w-full",maxInputLength:24,groupDigits:!0,type:0,onValueChange:t,justOnChange:()=>{x(!1)},showText:o,onWarningTextChange:k})}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)(b,{idText:"CARD NUMBER",showStandardLabel:!0,placeholderText:"e.g. 1234 5678 9123 0000",width:"md:w-full",maxInputLength:19,groupDigits:!0,type:1,onValueChange:l,justOnChange:()=>{u(!1)},showText:c,onWarningTextChange:D})}),(0,g.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("label",{onClick:()=>{S("YY"===y?"MM":"YY")},htmlFor:y,className:"mt-[0.56em] w-full pt-2 text-[0.8rem] font-bold leading-[4px] tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]",children:"EXP. DATE (MM/YY)"}),(0,g.jsxs)("div",{className:"inline-flex space-x-3",children:[(0,g.jsx)("div",{children:(0,g.jsx)(b,{idText:"MM",showStandardLabel:!1,placeholderText:"MM",width:"md:w-[4.5em]",maxInputLength:2,groupDigits:!1,type:2,onValueChange:n,justOnChange:()=>{f(!1)},showText:h,onWarningTextChange:L})}),(0,g.jsx)("div",{children:(0,g.jsx)(b,{idText:"YY",showStandardLabel:!1,placeholderText:"YY",width:"md:w-[4.5em]",maxInputLength:2,groupDigits:!1,type:3,onValueChange:m,justOnChange:()=>{N(!1)},showText:j,onWarningTextChange:R})})]})]}),(0,g.jsx)("div",{children:(0,g.jsx)("div",{children:(0,g.jsx)(b,{idText:"CVC",showStandardLabel:!0,placeholderText:"e.g. 123",width:"md:w-[10em]",maxInputLength:3,groupDigits:!1,type:1,onValueChange:i,justOnChange:()=>{v(!1)},showText:C,onWarningTextChange:I})})})]}),(0,g.jsx)("button",{type:"button",onClick:()=>{x(!0),u(!0),f(!0),N(!0),v(!0),E||T||A||V||_||Y(!0)},className:"mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white md:w-[21.6em]",children:"Confirm"})]})})]})})}}},function(e){e.O(0,[157,971,472,744],function(){return e(e.s=8994)}),_N_E=e.O()}]);