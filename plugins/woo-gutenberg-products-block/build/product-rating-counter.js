"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[2918],{5042:(e,t,o)=>{o.r(t),o.d(t,{Block:()=>f,default:()=>m});var n=o(9196),r=o(5736),l=o(4184),s=o.n(l),c=o(2864),a=o(3611),i=o(721),u=o(1478),d=o(5609);const v=e=>{const{reviews:t}=e,o=t?(0,r.sprintf)(/* translators: %s is referring to the total of reviews for a product */
(0,r._n)("(%s customer review)","(%s customer reviews)",t,"woo-gutenberg-products-block"),t):(0,r.__)("(X customer reviews)","woo-gutenberg-products-block");return(0,n.createElement)("span",{className:"wc-block-components-product-rating-counter__reviews_count"},(0,n.createElement)(d.Disabled,null,(0,n.createElement)("a",{href:"/"},o)))},f=e=>{const{textAlign:t,shouldDisplayMockedReviewsWhenProductHasNoReviews:o}=e,r=(0,a.F)(e),{parentClassName:l}=(0,c.useInnerBlockLayoutContext)(),{product:i}=(0,c.useProductDataContext)(),d=(e=>{const t=(0,u.h)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(i),f=s()(r.className,"wc-block-components-product-rating-counter",{[`${l}__product-rating`]:l,[`has-text-align-${t}`]:t});if(d||o)return(0,n.createElement)("div",{className:f,style:r.style},(0,n.createElement)("div",{className:"wc-block-components-product-rating-counter__container"},(0,n.createElement)(v,{reviews:d})))},m=(0,i.withProductDataContext)(f)},3611:(e,t,o)=>{o.d(t,{F:()=>i});var n=o(4184),r=o.n(n),l=o(7884),s=o(2646),c=o(1473),a=o(2661);const i=e=>{const t=(e=>{const t=(0,l.Kn)(e)?e:{style:{}};let o=t.style;return(0,s.H)(o)&&(o=JSON.parse(o)||{}),(0,l.Kn)(o)||(o={}),{...t,style:o}})(e),o=(0,a.vc)(t),n=(0,a.l8)(t),i=(0,a.su)(t),u=(0,c.f)(t);return{className:r()(u.className,o.className,n.className,i.className),style:{...u.style,...o.style,...n.style,...i.style}}}},1473:(e,t,o)=>{o.d(t,{f:()=>l});var n=o(7884),r=o(2646);const l=e=>{const t=(0,n.Kn)(e.style.typography)?e.style.typography:{},o=(0,r.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},2661:(e,t,o)=>{o.d(t,{l8:()=>d,su:()=>v,vc:()=>u});var n=o(4184),r=o.n(n),l=o(9784),s=o(2289),c=o(7884);function a(e={}){const t={};return(0,s.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${(0,l.o)(t)}-${e}`:""}function u(e){var t,o,n,l,s,u,d;const{backgroundColor:v,textColor:f,gradient:m,style:y}=e,p=i("background-color",v),g=i("color",f),b=function(e){if(e)return`has-${e}-gradient-background`}(m),k=b||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:r()(g,b,{[p]:!k&&!!p,"has-text-color":f||(null==y||null===(o=y.color)||void 0===o?void 0:o.text),"has-background":v||(null==y||null===(n=y.color)||void 0===n?void 0:n.background)||m||(null==y||null===(l=y.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,c.Kn)(null==y||null===(s=y.elements)||void 0===s?void 0:s.link)?null==y||null===(u=y.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==y?void 0:y.color)||{}})}}function d(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:n}=e,l=o?i("border-color",o):"";return r()({"has-border-color":!!o||!(null==n||null===(t=n.border)||void 0===t||!t.color),[l]:!!l})}(e),style:a({border:o})}}function v(e){var t;return{className:void 0,style:a({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},8519:(e,t,o)=>{o.d(t,{F:()=>n});const n=e=>null===e},1478:(e,t,o)=>{o.d(t,{h:()=>n});const n=e=>"number"==typeof e},7884:(e,t,o)=>{o.d(t,{$n:()=>l,Kn:()=>r,Qr:()=>s});var n=o(8519);const r=e=>!(0,n.F)(e)&&e instanceof Object&&e.constructor===Object;function l(e,t){return r(e)&&t in e}const s=e=>0===Object.keys(e).length},2646:(e,t,o)=>{o.d(t,{H:()=>n});const n=e=>"string"==typeof e}}]);