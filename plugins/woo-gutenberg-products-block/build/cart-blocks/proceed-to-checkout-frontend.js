(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[1084],{4877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9196),o=n(9685),i=n(4184),s=n.n(i),c=(n(5482),n(4705));const l=({className:e,showSpinner:t=!1,children:n,variant:i="contained",...l})=>{const a=s()("wc-block-components-button","wp-element-button",e,i,{"wc-block-components-button--loading":t});return(0,r.createElement)(o.Z,{className:a,...l},t&&(0,r.createElement)(c.Z,null),(0,r.createElement)("span",{className:"wc-block-components-button__text"},n))}},6654:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(721),o=n(9196),i=n(4184),s=n.n(i),c=n(9307),l=n(4877),a=n(5271);const u={bottom:0,left:0,opacity:0,pointerEvents:"none",position:"absolute",right:0,top:0,zIndex:-1};var d=n(4617),p=n(9818),m=n(4801),f=n(3554),h=n(6423),g=n(3691);const v=(0,n(5736).__)("Proceed to Checkout","woo-gutenberg-products-block"),b={checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}},buttonLabel:{type:"string",default:v}},w=(0,r.withFilteredAttributes)(b)((({checkoutPageId:e,className:t,buttonLabel:r})=>{const i=(0,d.getSetting)("page-"+e,!1),b=(0,p.useSelect)((e=>e(m.CHECKOUT_STORE_KEY).isCalculating())),[w,E]=(()=>{const[e,t]=(0,c.useState)(""),n=(0,c.useRef)(null),r=(0,c.useRef)(new IntersectionObserver((e=>{e[0].isIntersecting?t("visible"):t(e[0].boundingClientRect.top>0?"below":"above")}),{threshold:1}));return(0,c.useLayoutEffect)((()=>{const e=n.current,t=r.current;return e&&t.observe(e),()=>{t.unobserve(e)}}),[]),[(0,o.createElement)("div",{"aria-hidden":!0,ref:n,style:u}),e]})(),[y,C]=(0,c.useState)(!1);(0,c.useEffect)((()=>{if("function"!=typeof n.g.addEventListener||"function"!=typeof n.g.removeEventListener)return;const e=()=>{C(!1)};return n.g.addEventListener("pageshow",e),()=>{n.g.removeEventListener("pageshow",e)}}),[]);const S=(0,p.useSelect)((e=>e(m.CART_STORE_KEY).getCartData())),k=(0,f.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLabel",defaultValue:r||v,arg:{cart:S}}),Z=(0,f.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLink",defaultValue:i||a.sE,arg:{cart:S}}),{dispatchOnProceedToCheckout:L}=(0,g.b)(),_=(0,o.createElement)(l.Z,{className:"wc-block-cart__submit-button",href:Z,disabled:b,onClick:e=>{L().then((t=>{t.some(h.qm)?e.preventDefault():C(!0)}))},showSpinner:y},k),R=(0,c.useMemo)((()=>getComputedStyle(document.body).backgroundColor),[]);return(0,o.createElement)("div",{className:s()("wc-block-cart__submit",t)},w,(0,o.createElement)("div",{className:"wc-block-cart__submit-container"},_),"below"===E&&(0,o.createElement)("div",{className:"wc-block-cart__submit-container wc-block-cart__submit-container--sticky",style:{backgroundColor:R}},_))}))},4705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9196);n(129);const o=()=>(0,r.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},5482:()=>{},129:()=>{},2444:(e,t,n)=>{"use strict";n.d(t,{T:()=>s});var r=n(4184),o=n.n(r);function i(e){return"appear"===e?"top":"left"}function s(e){if("loading"===e.type)return o()("components-animate__loading");const{type:t,origin:n=i(t)}=e;if("appear"===t){const[e,t="center"]=n.split(" ");return o()("components-animate__appear",{["is-from-"+t]:"center"!==t,["is-from-"+e]:"middle"!==e})}return"slide-in"===t?o()("components-animate__slide-in","is-from-"+n):void 0}},9685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7462),o=n(9307),i=n(4184),s=n.n(i),c=n(2819),l=n(7180),a=n.n(l),u=n(9178),d=n(7392),p=n(7593);const m=["onMouseDown","onClick"],f=(0,o.forwardRef)((function(e,t){const{href:n,target:i,isSmall:l,isPressed:f,isBusy:h,isDestructive:g,className:v,disabled:b,icon:w,iconPosition:E="left",iconSize:y,showTooltip:C,tooltipPosition:S,shortcut:k,label:Z,children:L,text:_,variant:R,__experimentalIsFocusable:F,describedBy:x,...N}=function({isDefault:e,isPrimary:t,isSecondary:n,isTertiary:r,isLink:o,variant:i,...s}){let c=i;var l,u,d,p,m;return t&&(null!==(l=c)&&void 0!==l||(c="primary")),r&&(null!==(u=c)&&void 0!==u||(c="tertiary")),n&&(null!==(d=c)&&void 0!==d||(c="secondary")),e&&(a()("Button isDefault prop",{since:"5.4",alternative:'variant="secondary"'}),null!==(p=c)&&void 0!==p||(c="secondary")),o&&(null!==(m=c)&&void 0!==m||(c="link")),{...s,variant:c}}(e),D=s()("components-button",v,{"is-secondary":"secondary"===R,"is-primary":"primary"===R,"is-small":l,"is-tertiary":"tertiary"===R,"is-pressed":f,"is-busy":h,"is-link":"link"===R,"is-destructive":g,"has-text":!!w&&!!L,"has-icon":!!w}),T=b&&!F,M=void 0===n||T?"button":"a",O="a"===M?{href:n,target:i}:{type:"button",disabled:T,"aria-pressed":f};if(b&&F){O["aria-disabled"]=!0;for(const e of m)N[e]=e=>{e.stopPropagation(),e.preventDefault()}}const P=!T&&(C&&Z||k||!!Z&&(!L||(0,c.isArray)(L)&&!L.length)&&!1!==C),W=x?(0,c.uniqueId)():null,B=N["aria-describedby"]||W,A=(0,o.createElement)(M,(0,r.Z)({},O,N,{className:D,"aria-label":N["aria-label"]||Z,"aria-describedby":B,ref:t}),w&&"left"===E&&(0,o.createElement)(d.Z,{icon:w,size:y}),_&&(0,o.createElement)(o.Fragment,null,_),w&&"right"===E&&(0,o.createElement)(d.Z,{icon:w,size:y}),L);return P?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.Z,{text:x||Z,shortcut:k,position:S},A),x&&(0,o.createElement)(p.Z,null,(0,o.createElement)("span",{id:W},x))):(0,o.createElement)(o.Fragment,null,A,x&&(0,o.createElement)(p.Z,null,(0,o.createElement)("span",{id:W},x)))}))},6658:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7462),o=n(9307);const i=function({icon:e,className:t,...n}){const i=["dashicon","dashicons","dashicons-"+e,t].filter(Boolean).join(" ");return(0,o.createElement)("span",(0,r.Z)({className:i},n))}},7392:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7462),o=n(9307),i=n(444),s=n(6658);const c=function({icon:e=null,size:t=24,...n}){if("string"==typeof e)return(0,o.createElement)(s.Z,(0,r.Z)({icon:e},n));if((0,o.isValidElement)(e)&&s.Z===e.type)return(0,o.cloneElement)(e,{...n});if("function"==typeof e)return e.prototype instanceof o.Component?(0,o.createElement)(e,{size:t,...n}):e({size:t,...n});if(e&&("svg"===e.type||e.type===i.SVG)){const r={width:t,height:t,...e.props,...n};return(0,o.createElement)(i.SVG,r)}return(0,o.isValidElement)(e)?(0,o.cloneElement)(e,{size:t,...n}):e}},4638:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(7462),o=n(9307),i=n(4184),s=n.n(i),c=n(5904),l=n(7180),a=n.n(l),u=n(4333),d=n(4787),p=n(4103),m=n(9685),f=n(9753),h=n(1515),g=n(6580),v=n(2444);const b="Popover";function w(e,t){const{paddingTop:n,paddingBottom:r,paddingLeft:o,paddingRight:i}=(s=t).ownerDocument.defaultView.getComputedStyle(s);var s;const c=n?parseInt(n,10):0,l=r?parseInt(r,10):0,a=o?parseInt(o,10):0,u=i?parseInt(i,10):0;return{x:e.left+a,y:e.top+c,width:e.width-a-u,height:e.height-c-l,left:e.left+a,right:e.right-u,top:e.top+c,bottom:e.bottom-l}}function E(e,t,n){n?e.getAttribute(t)!==n&&e.setAttribute(t,n):e.hasAttribute(t)&&e.removeAttribute(t)}function y(e,t,n=""){e.style[t]!==n&&(e.style[t]=n)}function C(e,t,n){n?e.classList.contains(t)||e.classList.add(t):e.classList.contains(t)&&e.classList.remove(t)}const S=(0,o.forwardRef)((({headerTitle:e,onClose:t,children:n,className:i,noArrow:l=!0,isAlternate:S,position:k="bottom right",range:Z,focusOnMount:L="firstElement",anchorRef:_,shouldAnchorIncludePadding:R,anchorRect:F,getAnchorRect:x,expandOnMobile:N,animate:D=!0,onClickOutside:T,onFocusOutside:M,__unstableStickyBoundaryElement:O,__unstableSlotName:P=b,__unstableObserveElement:W,__unstableBoundaryParent:B,__unstableForcePosition:A,__unstableForceXAlignment:H,...V},I)=>{const z=(0,o.useRef)(null),U=(0,o.useRef)(null),j=(0,o.useRef)(),q=(0,u.useViewportMatch)("medium","<"),[G,K]=(0,o.useState)(),J=(0,h.Z)(P),Y=N&&q,[X,Q]=(0,u.useResizeObserver)();l=Y||l,(0,o.useLayoutEffect)((()=>{if(Y)return C(j.current,"is-without-arrow",l),C(j.current,"is-alternate",S),E(j.current,"data-x-axis"),E(j.current,"data-y-axis"),y(j.current,"top"),y(j.current,"left"),y(U.current,"maxHeight"),void y(U.current,"maxWidth");const e=()=>{if(!j.current||!U.current)return;let e=function(e,t,n,r=!1,o,i){if(t)return t;if(n){if(!e.current)return;const t=n(e.current);return(0,p.cS)(t,t.ownerDocument||e.current.ownerDocument,i)}if(!1!==r){if(!(r&&window.Range&&window.Element&&window.DOMRect))return;if("function"==typeof(null==r?void 0:r.cloneRange))return(0,p.cS)((0,c.getRectangleFromRange)(r),r.endContainer.ownerDocument,i);if("function"==typeof(null==r?void 0:r.getBoundingClientRect)){const e=(0,p.cS)(r.getBoundingClientRect(),r.ownerDocument,i);return o?e:w(e,r)}const{top:e,bottom:t}=r,n=e.getBoundingClientRect(),s=t.getBoundingClientRect(),l=(0,p.cS)(new window.DOMRect(n.left,n.top,n.width,s.bottom-n.top),e.ownerDocument,i);return o?l:w(l,r)}if(!e.current)return;const{parentNode:s}=e.current,l=s.getBoundingClientRect();return o?l:w(l,s)}(z,F,x,_,R,j.current);if(!e)return;const{offsetParent:t,ownerDocument:n}=j.current;let r,o=0;if(t&&t!==n.body){const n=t.getBoundingClientRect();o=n.top,e=new window.DOMRect(e.left-n.left,e.top-n.top,e.width,e.height)}var i;B&&(r=null===(i=j.current.closest(".popover-slot"))||void 0===i?void 0:i.parentNode);const s=Q.height?Q:U.current.getBoundingClientRect(),{popoverTop:a,popoverLeft:u,xAxis:d,yAxis:m,contentHeight:f,contentWidth:h}=(0,p.sw)(e,s,k,O,j.current,o,r,A,H);"number"==typeof a&&"number"==typeof u&&(y(j.current,"top",a+"px"),y(j.current,"left",u+"px")),C(j.current,"is-without-arrow",l||"center"===d&&"middle"===m),C(j.current,"is-alternate",S),E(j.current,"data-x-axis",d),E(j.current,"data-y-axis",m),y(U.current,"maxHeight","number"==typeof f?f+"px":""),y(U.current,"maxWidth","number"==typeof h?h+"px":""),K(({left:"right",right:"left"}[d]||"center")+" "+({top:"bottom",bottom:"top"}[m]||"middle"))};e();const{ownerDocument:t}=j.current,{defaultView:n}=t,r=n.setInterval(e,500);let o;const i=()=>{n.cancelAnimationFrame(o),o=n.requestAnimationFrame(e)};n.addEventListener("click",i),n.addEventListener("resize",e),n.addEventListener("scroll",e,!0);const s=function(e){if(e)return e.endContainer?e.endContainer.ownerDocument:e.top?e.top.ownerDocument:e.ownerDocument}(_);let a;return s&&s!==t&&(s.defaultView.addEventListener("resize",e),s.defaultView.addEventListener("scroll",e,!0)),W&&(a=new n.MutationObserver(e),a.observe(W,{attributes:!0})),()=>{n.clearInterval(r),n.removeEventListener("resize",e),n.removeEventListener("scroll",e,!0),n.removeEventListener("click",i),n.cancelAnimationFrame(o),s&&s!==t&&(s.defaultView.removeEventListener("resize",e),s.defaultView.removeEventListener("scroll",e,!0)),a&&a.disconnect()}}),[Y,F,x,_,R,k,Q,O,W,B]);const $=(e,n)=>{if("focus-outside"===e&&M)M(n);else if("focus-outside"===e&&T){const e=new window.MouseEvent("click");Object.defineProperty(e,"target",{get:()=>n.relatedTarget}),a()("Popover onClickOutside prop",{since:"5.3",alternative:"onFocusOutside"}),T(e)}else t&&t()},[ee,te]=(0,u.__experimentalUseDialog)({focusOnMount:L,__unstableOnClose:$,onClose:$}),ne=(0,u.useMergeRefs)([j,ee,I]),re=Boolean(D&&G)&&(0,v.T)({type:"appear",origin:G});let oe=(0,o.createElement)("div",(0,r.Z)({className:s()("components-popover",i,re,{"is-expanded":Y,"is-without-arrow":l,"is-alternate":S})},V,{ref:ne},te,{tabIndex:"-1"}),Y&&(0,o.createElement)(f.Z,null),Y&&(0,o.createElement)("div",{className:"components-popover__header"},(0,o.createElement)("span",{className:"components-popover__header-title"},e),(0,o.createElement)(m.Z,{className:"components-popover__close",icon:d.Z,onClick:t})),(0,o.createElement)("div",{ref:U,className:"components-popover__content"},(0,o.createElement)("div",{style:{position:"relative"}},X,n)));return J.ref&&(oe=(0,o.createElement)(g.de,{name:P},oe)),_||F?oe:(0,o.createElement)("span",{ref:z},oe)}));S.Slot=(0,o.forwardRef)((function({name:e=b},t){return(0,o.createElement)(g.g7,{bubblesVirtually:!0,name:e,className:"popover-slot",ref:t})}));const k=S},4103:(e,t,n)=>{"use strict";n.d(t,{cS:()=>s,sw:()=>i});var r=n(5736);const o=10;function i(e,t,n="top",i,s,c,l,a,u){const[d,p="center",m]=n.split(" "),f=function(e,t,n,r,i,s,c,l){const{height:a}=t;if(i){const t=i.getBoundingClientRect().top+a-c;if(e.top<=t)return{yAxis:n,popoverTop:Math.min(e.bottom,t)}}let u=e.top+e.height/2;"bottom"===r?u=e.bottom:"top"===r&&(u=e.top);const d={popoverTop:u,contentHeight:(u-a/2>0?a/2:u)+(u+a/2>window.innerHeight?window.innerHeight-u:a/2)},p={popoverTop:e.top,contentHeight:e.top-o-a>0?a:e.top-o},m={popoverTop:e.bottom,contentHeight:e.bottom+o+a>window.innerHeight?window.innerHeight-o-e.bottom:a};let f,h=n,g=null;if(!i&&!l)if("middle"===n&&d.contentHeight===a)h="middle";else if("top"===n&&p.contentHeight===a)h="top";else if("bottom"===n&&m.contentHeight===a)h="bottom";else{h=p.contentHeight>m.contentHeight?"top":"bottom";const e="top"===h?p.contentHeight:m.contentHeight;g=e!==a?e:null}return f="middle"===h?d.popoverTop:"top"===h?p.popoverTop:m.popoverTop,{yAxis:h,popoverTop:f,contentHeight:g}}(e,t,d,m,i,0,c,a),h=function(e,t,n,o,i,s,c,l,a){const{width:u}=t;"left"===n&&(0,r.isRTL)()?n="right":"right"===n&&(0,r.isRTL)()&&(n="left"),"left"===o&&(0,r.isRTL)()?o="right":"right"===o&&(0,r.isRTL)()&&(o="left");const d=Math.round(e.left+e.width/2),p={popoverLeft:d,contentWidth:(d-u/2>0?u/2:d)+(d+u/2>window.innerWidth?window.innerWidth-d:u/2)};let m=e.left;"right"===o?m=e.right:"middle"===s||a||(m=d);let f=e.right;"left"===o?f=e.left:"middle"===s||a||(f=d);const h={popoverLeft:m,contentWidth:m-u>0?u:m},g={popoverLeft:f,contentWidth:f+u>window.innerWidth?window.innerWidth-f:u};let v,b=n,w=null;if(!i&&!l)if("center"===n&&p.contentWidth===u)b="center";else if("left"===n&&h.contentWidth===u)b="left";else if("right"===n&&g.contentWidth===u)b="right";else{b=h.contentWidth>g.contentWidth?"left":"right";const e="left"===b?h.contentWidth:g.contentWidth;u>window.innerWidth&&(w=window.innerWidth),e!==u&&(b="center",p.popoverLeft=window.innerWidth/2)}if(v="center"===b?p.popoverLeft:"left"===b?h.popoverLeft:g.popoverLeft,c){const e=c.getBoundingClientRect();v=Math.min(v,e.right-u),(0,r.isRTL)()||(v=Math.max(v,0))}return{xAxis:b,popoverLeft:v,contentWidth:w}}(e,t,p,m,i,f.yAxis,l,a,u);return{...h,...f}}function s(e,t,n){const{defaultView:r}=t,{frameElement:o}=r;if(!o||t===n.ownerDocument)return e;const i=o.getBoundingClientRect();return new r.DOMRect(e.left+i.left,e.top+i.top,e.width,e.height)}},9753:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(9307);let o=0;function i(e){const t=document.scrollingElement||document.body;e&&(o=t.scrollTop);const n=e?"add":"remove";t.classList[n]("lockscroll"),document.documentElement.classList[n]("lockscroll"),e||(t.scrollTop=o)}let s=0;function c(){return(0,r.useEffect)((()=>(0===s&&i(!0),++s,()=>{1===s&&i(!1),--s})),[]),null}},3586:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9307),o=n(2819);const i=function({shortcut:e,className:t}){if(!e)return null;let n,i;return(0,o.isString)(e)&&(n=e),(0,o.isObject)(e)&&(n=e.display,i=e.ariaLabel),(0,r.createElement)("span",{className:t,"aria-label":i},n)}},4160:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9307),o=n(1515);function i(){const[,e]=(0,r.useState)({}),t=(0,r.useRef)(!0);return(0,r.useEffect)((()=>()=>{t.current=!1}),[]),()=>{t.current&&e({})}}function s({name:e,children:t}){const n=(0,o.Z)(e),s=(0,r.useRef)({rerender:i()});return(0,r.useEffect)((()=>(n.registerFill(s),()=>{n.unregisterFill(s)})),[n.registerFill,n.unregisterFill]),n.ref&&n.ref.current?("function"==typeof t&&(t=t(n.fillProps)),(0,r.createPortal)(t,n.ref.current)):null}},159:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9307);n(2560);const o=(0,r.createContext)({slots:{},fills:{},registerSlot:()=>{"undefined"!=typeof process&&process.env},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{}})},9934:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7462),o=n(9307),i=n(4333),s=n(159);const c=(0,o.forwardRef)((function({name:e,fillProps:t={},as:n="div",...c},l){const a=(0,o.useContext)(s.Z),u=(0,o.useRef)();return(0,o.useLayoutEffect)((()=>(a.registerSlot(e,u,t),()=>{a.unregisterSlot(e,u)})),[a.registerSlot,a.unregisterSlot,e]),(0,o.useLayoutEffect)((()=>{a.updateSlot(e,t)})),(0,o.createElement)(n,(0,r.Z)({ref:(0,i.useMergeRefs)([l,u])},c))}))},1515:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9307),o=n(159);function i(e){const t=(0,r.useContext)(o.Z),n=t.slots[e]||{},i=t.fills[e],s=(0,r.useMemo)((()=>i||[]),[i]);return{...n,updateSlot:(0,r.useCallback)((n=>{t.updateSlot(e,n)}),[e,t.updateSlot]),unregisterSlot:(0,r.useCallback)((n=>{t.unregisterSlot(e,n)}),[e,t.unregisterSlot]),fills:s,registerFill:(0,r.useCallback)((n=>{t.registerFill(e,n)}),[e,t.registerFill]),unregisterFill:(0,r.useCallback)((n=>{t.unregisterFill(e,n)}),[e,t.unregisterFill])}}},566:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(9307).createContext)({registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>{},subscribe:()=>{}})},8198:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7462),o=n(9307),i=n(2819),s=n(566),c=n(2009);function l({name:e,children:t,registerFill:n,unregisterFill:r}){const s=(0,c.Z)(e),l=(0,o.useRef)({name:e,children:t});return(0,o.useLayoutEffect)((()=>(n(e,l.current),()=>r(e,l.current))),[]),(0,o.useLayoutEffect)((()=>{l.current.children=t,s&&s.forceUpdate()}),[t]),(0,o.useLayoutEffect)((()=>{e!==l.current.name&&(r(l.current.name,l.current),l.current.name=e,n(e,l.current))}),[e]),s&&s.node?((0,i.isFunction)(t)&&(t=t(s.props.fillProps)),(0,o.createPortal)(t,s.node)):null}const a=e=>(0,o.createElement)(s.Z.Consumer,null,(({registerFill:t,unregisterFill:n})=>(0,o.createElement)(l,(0,r.Z)({},e,{registerFill:t,unregisterFill:n}))))},6580:(e,t,n)=>{"use strict";n.d(t,{de:()=>a,g7:()=>u});var r=n(7462),o=n(9307),i=n(8198),s=n(8612),c=n(4160),l=n(9934);function a(e){return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.Z,e),(0,o.createElement)(c.Z,e))}const u=(0,o.forwardRef)((({bubblesVirtually:e,...t},n)=>e?(0,o.createElement)(l.Z,(0,r.Z)({},t,{ref:n})):(0,o.createElement)(s.Z,t)))},8612:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7462),o=n(9307),i=n(2819),s=n(566);class c extends o.Component{constructor(){super(...arguments),this.isUnmounted=!1,this.bindNode=this.bindNode.bind(this)}componentDidMount(){const{registerSlot:e}=this.props;e(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:e}=this.props;this.isUnmounted=!0,e(this.props.name,this)}componentDidUpdate(e){const{name:t,unregisterSlot:n,registerSlot:r}=this.props;e.name!==t&&(n(e.name),r(t,this))}bindNode(e){this.node=e}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){const{children:e,name:t,fillProps:n={},getFills:r}=this.props,s=(0,i.map)(r(t,this),(e=>{const t=(0,i.isFunction)(e.children)?e.children(n):e.children;return o.Children.map(t,((e,t)=>{if(!e||(0,i.isString)(e))return e;const n=e.key||t;return(0,o.cloneElement)(e,{key:n})}))})).filter((0,i.negate)(o.isEmptyElement));return(0,o.createElement)(o.Fragment,null,(0,i.isFunction)(e)?e(s):s)}}const l=e=>(0,o.createElement)(s.Z.Consumer,null,(({registerSlot:t,unregisterSlot:n,getFills:i})=>(0,o.createElement)(c,(0,r.Z)({},e,{registerSlot:t,unregisterSlot:n,getFills:i}))))},2009:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9307),o=n(566);const i=e=>{const{getSlot:t,subscribe:n}=(0,r.useContext)(o.Z),[i,s]=(0,r.useState)(t(e));return(0,r.useEffect)((()=>(s(t(e)),n((()=>{s(t(e))})))),[e]),i}},9178:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(9307),o=n(2819),i=n(4333),s=n(4638),c=n(3586);const l=(0,r.createElement)("div",{className:"event-catcher"}),a=({eventHandlers:e,child:t,childrenWithPopover:n})=>(0,r.cloneElement)((0,r.createElement)("span",{className:"disabled-element-wrapper"},(0,r.cloneElement)(l,e),(0,r.cloneElement)(t,{children:n}),","),e),u=({child:e,eventHandlers:t,childrenWithPopover:n})=>(0,r.cloneElement)(e,{...t,children:n}),d=(e,t,n)=>{if(1!==r.Children.count(e))return;const o=r.Children.only(e);"function"==typeof o.props[t]&&o.props[t](n)},p=function({children:e,position:t,text:n,shortcut:l}){const[p,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),g=(0,i.useDebounce)(h,700),v=t=>{d(e,"onMouseDown",t),document.addEventListener("mouseup",E),m(!0)},b=t=>{d(e,"onMouseUp",t),document.removeEventListener("mouseup",E),m(!1)},w=e=>"mouseUp"===e?b:"mouseDown"===e?v:void 0,E=w("mouseUp"),y=(t,n)=>r=>{if(d(e,t,r),r.currentTarget.disabled)return;if("focus"===r.type&&p)return;g.cancel();const i=(0,o.includes)(["focus","mouseenter"],r.type);i!==f&&(n?g(i):h(i))},C=()=>{g.cancel(),document.removeEventListener("mouseup",E)};if((0,r.useEffect)((()=>C),[]),1!==r.Children.count(e))return e;const S={onMouseEnter:y("onMouseEnter",!0),onMouseLeave:y("onMouseLeave"),onClick:y("onClick"),onFocus:y("onFocus"),onBlur:y("onBlur"),onMouseDown:w("mouseDown")},k=r.Children.only(e),{children:Z,disabled:L}=k.props,_=L?a:u,R=(({grandchildren:e,isOver:t,position:n,text:o,shortcut:i})=>(0,r.concatChildren)(e,t&&(0,r.createElement)(s.Z,{focusOnMount:!1,position:n,className:"components-tooltip","aria-hidden":"true",animate:!1,noArrow:!0},o,(0,r.createElement)(c.Z,{className:"components-tooltip__shortcut",shortcut:i}))))({grandchildren:Z,isOver:f,position:t,text:n,shortcut:l});return _({child:k,eventHandlers:S,childrenWithPopover:R})}},7593:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(4184),o=n.n(r),i=n(9307),s=n(2004);const c=(0,i.forwardRef)((function({as:e="div",className:t,...n},r){return(0,s.k)({as:e,className:o()("components-visually-hidden",t),...n,ref:r})}))},2004:(e,t,n)=>{"use strict";n.d(t,{k:()=>o});var r=n(9307);function o({as:e="div",...t}){return"function"==typeof t.children?t.children(t):(0,r.createElement)(e,t)}},4787:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9307),o=n(444);const i=(0,r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},7462:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})}}]);