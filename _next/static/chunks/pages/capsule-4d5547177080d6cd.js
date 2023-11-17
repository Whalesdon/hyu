(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2646],{78750:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/capsule",function(){return n(85601)}])},70941:function(e,t,n){"use strict";n.d(t,{K:function(){return d}});var a=n(85893),s=n(61227),i=n(33206),u=n(94184),l=n.n(u),p=n(67294),r=n(63328);let d=e=>{let{excludeId:t,showMessage:n,className:u,validChains:d}=e,{isLoading:o,switchNetwork:y}=(0,r.g0)(),c=(0,p.useMemo)(()=>d&&d.length>0?d:i._I,[d]);return(0,a.jsxs)("div",{className:l()("flex flex-col justify-center gap-5",u),children:[n&&(0,a.jsx)("div",{className:"text-center text-2xl",children:"You are connected to the wrong network"}),(0,a.jsx)("div",{className:"flex flex-row flex-wrap items-center justify-center gap-3",children:c.map((e,n)=>null!=t&&t===e?null:(0,a.jsxs)(s.Z,{size:"md",disabled:o,onClick:()=>null==y?void 0:y(e),borderFullyRounded:!0,children:["Switch to ",(0,i.pp)(e)]},n))})]})}},77268:function(e,t,n){"use strict";var a=n(85893),s=n(33206),i=n(63496),u=n(94184),l=n.n(u),p=n(67294),r=n(63328),d=n(70941),o=n(73890),y=n(17831);let c=e=>{let{className:t,children:n,validChains:u=s._I,showMessage:c=!0}=e,m=(0,i.s)(),{isConnected:b,address:x}=(0,r.mA)(),f=(0,r.xx)(),T=(0,p.useMemo)(()=>{if(f&&m)return u.includes(f)},[f,m,u]);return(0,a.jsx)("div",{className:l()("w-full flex flex-col items-center",t),children:m?(0,a.jsx)(a.Fragment,{children:b?(0,a.jsxs)(a.Fragment,{children:[void 0===T&&!!x&&(0,a.jsx)(y.Z,{}),!1==T&&(0,a.jsx)(d.K,{showMessage:c,validChains:u}),!0===T&&n]}):(0,a.jsx)(o.R,{})}):(0,a.jsx)(y.Z,{})})};t.Z=c},6996:function(e,t,n){"use strict";var a=n(85893),s=n(94184),i=n.n(s),u=n(25675),l=n.n(u);let p=e=>{let{src:t,className:n}=e;return(0,a.jsx)("div",{className:i()("pointer-events-none absolute",n),children:(0,a.jsx)(l(),{src:t,alt:"capsule",className:"object-contain object-center",width:500,height:474})})};t.Z=p},85601:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(85893),s=n(66906),i=n(77268),u=n(33206),l=n(6996),p=n(61227),r=n(17831),d=n(51680),o=n(87521),y=n(48583),c=n(41664),m=n.n(c),b=n(67294),x=n(61436),f=n(82054),T=n(5590),h=n(17e3),v=n(24574),g=n(32697),w=n(63328);let _=[{inputs:[{internalType:"address",name:"_capsuleAddress",type:"address"},{internalType:"address",name:"_treasury",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!0,internalType:"address",name:"paymentToken",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Buy",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oldAddress",type:"address"},{indexed:!1,internalType:"address",name:"newAddress",type:"address"}],name:"CapsuleAddressChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tier",type:"uint256"}],name:"CapsuleMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[],name:"PaymentTokensUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[],name:"TierWeightsUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"treasury",type:"address"}],name:"TreasuryUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"NATIVE_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_paymentToken",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"capsuleAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"},{internalType:"address",name:"_to",type:"address"}],name:"emergencyWithdrawERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_to",type:"address"}],name:"emergencyWithdrawNative",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_nonce",type:"uint256"},{internalType:"uint256",name:"_deadline",type:"uint256"}],name:"getMessageHash",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[],name:"getPaymentTokens",outputs:[{components:[{internalType:"address",name:"address_",type:"address"},{internalType:"uint256",name:"price_",type:"uint256"}],internalType:"struct CapsuleMinter.PaymentToken[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTierCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTierWeights",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mintMultipleTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_nonce",type:"uint256"},{internalType:"uint256",name:"_deadline",type:"uint256"},{internalType:"bytes",name:"_signature",type:"bytes"}],name:"mintWithSignature",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"paymentTokens",outputs:[{internalType:"address",name:"address_",type:"address"},{internalType:"uint256",name:"price_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"priceInToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_capsuleAddress",type:"address"}],name:"setCapsuleAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_paymentTokens",type:"address[]"},{internalType:"uint256[]",name:"_prices",type:"uint256[]"}],name:"setPaymentTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_tierWeights",type:"uint256[]"}],name:"setTierWeights",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_treasury",type:"address"}],name:"setTreasury",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tierWeights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDraws",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalWeights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"treasury",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"}];var M=n(13392);let j="".concat(M.O.NEXT_PUBLIC_VERCEL_API,"/api/v2/capsules"),C={getCapsulesMint:e=>{let{address:t}=e;return fetch("".concat(j,"/mint?address=").concat(t),{method:"GET"}).then(e=>e.json()).catch(e=>{throw e})},mintSignature:e=>{let{count:t,signature:n}=e;return n&&t?fetch("".concat(j,"/mint_signature"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:t,signature:n})}).then(e=>e.json()).catch(e=>{throw e}):Promise.reject()},mintCapsule:e=>{let{count:t,signature:n}=e;return n&&t?fetch("".concat(j,"/mint"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:t,signature:n})}).then(e=>e.json()).catch(e=>{throw e}):Promise.reject()},getCapsulesActive:e=>{let{address:t}=e;return fetch("".concat(j,"/active?address=").concat(t),{method:"GET"}).then(e=>e.json()).catch(e=>{throw e})}},N=e=>"Redeem ".concat(e," capsules"),k=()=>{var e;let t=(0,y.b9)(o.Qu),{count:n,fractionsData:s,fractionsDataLoading:i,mintCapsules:u,mintWeb3:l,mintWeb3Loading:c,countLeft:M,mintSignLoading:j,deadlineRemaining:k,hadRequestedCapsules:E}=function(){var e,t;let n=(0,w.xx)(),{address:a}=(0,w.mA)(),s=(0,y.b9)(o.HP),i=(0,y.b9)(o.Q6),[u,l]=(0,b.useState)(0),[p,r]=(0,b.useState)(0),{data:d,isLoading:c,refetch:m}=(0,h.a)(["get_available_fractions",a,n],()=>C.getCapsulesMint({address:a}),{enabled:!!a&&!!n});(0,b.useEffect)(()=>{d&&d.capsules_mint_available&&l(d.capsules_mint_available)},[d]),(0,b.useEffect)(()=>{r(Math.min(20,u))},[u]);let{data:M,isLoading:j}=(0,h.a)(["capsules-active",a],()=>C.getCapsulesActive({address:a}),{enabled:!!a&&!1}),{mutateAsync:k,isLoading:E}=(0,v.D)({mutationKey:["capsule-mint",{address:a,count:p}],mutationFn:e=>{let{signature:t}=e;return C.mintSignature({count:p,signature:t})}}),[R,S]=(0,b.useState)(void 0),[A,P]=(0,b.useState)(0),Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],[n,a]=(0,b.useState)(null),[s,i]=(0,b.useState)(Date.now()),u=(0,b.useCallback)(()=>{i(Date.now())},[i]),l=(0,b.useCallback)(()=>{if(null==e||!(0,x.Z)(e)){a(null);return}let t=Date.now(),n=new Date(e),s=(0,f.Z)({start:t,end:n});a(s)},[e]),p=(0,b.useMemo)(()=>null==e||s>=e?null:t||e-s<12e4?1e3:6e4,[e,s,t]);return(0,b.useEffect)(()=>{null==e||s>=e||l()},[s,e,l]),(0,b.useEffect)(()=>{if(!p){a(null);return}let e=setTimeout(()=>{u()},p);return()=>{e&&clearTimeout(e)}},[s,e,p,u]),n}(A,!0);(0,b.useEffect)(()=>{var e;P((null!==(e=null==R?void 0:R.deadline)&&void 0!==e?e:0)*1e3)},[null==R?void 0:R.deadline]);let[L,W]=(0,b.useState)(!1),{config:I}=(0,w.PJ)({address:null==R?void 0:R.target,abi:_,functionName:"mintWithSignature",args:[null==R?void 0:R.amount,null==R?void 0:R.nonce,null==R?void 0:R.deadline,null==R?void 0:R.signature],enabled:!!R&&!!R.target&&!!Z}),{writeAsync:F,data:D,isLoading:O}=(0,w.GG)({...I,request:(null==I?void 0:I.request)?{...null==I?void 0:I.request,gasLimit:null==I?void 0:null===(e=I.request)||void 0===e?void 0:null===(t=e.gasLimit)||void 0===t?void 0:t.mul(15).div(10)}:void 0,onSuccess:()=>{m()},onError:e=>{var t;m();let n=null!==(t=(0,T.W)(e))&&void 0!==t?t:"";s({open:!0,message:"".concat(n," Minted capsules count will be recalculated in 15-20 minutes.")})}}),{isLoading:q}=(0,w.BX)({hash:null==D?void 0:D.hash,enabled:!!D&&!!D.hash,onSuccess:()=>{P(0),W(!1),m(),i({open:!0,message:"Minted ".concat(p," ").concat(1===p?"Capsule":"Capsules","!")})},onError:e=>{m(),s({open:!0,message:(0,T.W)(e)})}}),[z,U]=(0,b.useState)(!1),G=(0,b.useCallback)(async()=>{U(!0);try{let e=await (0,g.l)({message:N(p)}),t=await k({signature:e});W(!0),S(t),U(!1)}catch(e){m(),s({open:!0,message:(0,T.W)(e)}),U(!1)}},[k,p,s,m]);return{fractionsData:d,fractionsDataLoading:c,capsulesActive:M,capsulesActiveLoading:j,mintAsync:k,mintAsyncLoading:E,count:p,totalCount:u,countLeft:u-p,mintSignLoading:E||z,mintCapsules:G,mintWeb3:F,mintWeb3Loading:O||q,deadlineRemaining:Z,hadRequestedCapsules:L}}(),[R,S]=(0,b.useState)(!1);(0,b.useEffect)(()=>{if(!l){S(!1);return}S(!0)},[l]),(0,b.useEffect)(()=>{R&&(null==l||l().catch(e=>{console.error(e)}))},[R]);let A=(0,b.useCallback)(()=>{t({open:!0,message:"Please do not refresh the page until transaction is sent. <br/>\n      If you refresh before transaction is sent you might need to wait for 15minutes to try again.",successCb:()=>{t({open:!1}),u()}})},[u,t]);return(0,a.jsxs)("div",{className:"relative w-full flex flex-col items-center justify-center",children:[(0,a.jsxs)("div",{className:"relative flex flex-col items-center",children:[l&&k?(0,a.jsx)(p.Z,{onClick:l,disabled:!l||!k,loading:c,bottomText:k?(0,a.jsxs)(a.Fragment,{children:[k.hours,"h ",k.minutes,"min"," ",k.seconds,"s"]}):(0,a.jsx)(a.Fragment,{children:"Time ended, request again."}),children:i?"Checking":n<1?"No Capsules to Mint":"Mint ".concat(n," ").concat(1===n?"Capsule":"Capsules")}):(0,a.jsx)(p.Z,{onClick:A,disabled:0===n||i||!u,loading:j||i,bottomText:!k&&E&&(0,a.jsx)(a.Fragment,{children:"Time ended, request again."}),children:i?"Checking":n<1?"No Capsules to Mint":"Mint ".concat(n," ").concat(1===n?"Capsule":"Capsules")}),(0,a.jsx)("p",{className:"text-center max-w-[280px] mt-[10px] mx-auto",children:"There will be two wallet requests: Signature request and mint transaction."}),M>0&&(0,a.jsxs)("p",{className:"text-center mt-[10px]",children:["".concat(M," ").concat(1===M?"Capsule":"Capsules")," to mint later"]})]}),(0,a.jsxs)("div",{className:"text-center mt-[40px] mb-[-20px] relative",children:[i&&(0,a.jsx)(r.Z,{}),!i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Minted: ",null==s?void 0:s.capsules_minted," ",(null==s?void 0:s.capsules_minted)===1?"Capsule":"Capsules"]}),s&&(null==s?void 0:s.total_fractions_available)<40&&(0,a.jsxs)("p",{children:["Fractions needed to mint new capsule:"," ",40-(null!==(e=null==s?void 0:s.total_fractions_available)&&void 0!==e?e:0)]}),(0,a.jsx)(m(),{href:d.f9.Redeem.href,children:(0,a.jsxs)(p.Z,{size:"md",borderFullyRounded:!0,className:"mt-[20px]",children:[d.f9.Redeem.title," to get Fractions"]})})]})]})]})},E=()=>(0,a.jsxs)("div",{className:"bg-[#101012] py-20 relative w-full overflow-hidden",children:[(0,a.jsx)("div",{className:"sm:bg-fixed absolute z-10 left-0 top-0 right-0 bottom-0 opacity-10 bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(/images/Vault-Preview.webp)"}}),(0,a.jsxs)("div",{className:"container text-white relative min-h-[60vh] flex flex-col items-center justify-center",children:[(0,a.jsx)(l.Z,{src:"/images/capsules/03.webp",className:"top-[-120px] lg:top-[-150px] w-[150px] md:w-[200px] left-[10px] lg:left-[100px] rotate-[85deg] z-10"}),(0,a.jsx)(l.Z,{src:"/images/capsules/01.webp",className:"top-[110px] w-[150px] md:w-[250px] left-[-100px] lg:top-[80px] lg:left-[-220px] rotate-[-20deg] z-10"}),(0,a.jsx)(l.Z,{src:"/images/capsules/04.webp",className:"top-[430px] w-[100px] md:w-[150px] right-[-20px] md:right-[-60px] lg:right-[-120px] rotate-[75deg] z-10"}),(0,a.jsx)(l.Z,{src:"/images/capsules/05.webp",className:"top-[800px] md:top-[700px] w-[200px] md:w-[300px] left-[-50px] lg:left-[-100px] rotate-[10deg] z-10"}),(0,a.jsx)("h3",{className:"mb-10 text-[40px] text-center h2 font-black relative",children:"Mint Capsules"}),(0,a.jsx)("div",{className:"container relative z-10",children:(0,a.jsx)(i.Z,{className:"flex flex-col items-center",validChains:u.uu,children:(0,a.jsx)(k,{})})})]})]}),R=()=>(0,a.jsx)(s.Z,{children:(0,a.jsx)(E,{})});var S=R}},function(e){e.O(0,[5048,1218,6906,9774,2888,179],function(){return e(e.s=78750)}),_N_E=e.O()}]);