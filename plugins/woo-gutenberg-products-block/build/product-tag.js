(()=>{var e,t={3861:(e,t,r)=>{"use strict";r.r(t);var l=r(9196);const o=window.wp.blocks,n=window.wc.wcSettings;var c=r(1984),a=r(7625);const s=JSON.parse('{"name":"woocommerce/product-tag","title":"Products by Tag","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products with selected tags.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"tags":{"type":"array","default":[]},"tagOperator":{"type":"string","default":"any"},"orderby":{"type":"string","default":"date"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),i=window.wp.blockEditor,d=window.wp.serverSideRender;var u=r.n(d),m=r(5736);const g=window.wp.components;var h=r(9307);const E=({onChange:e,settings:t})=>{const{image:r,button:o,price:n,rating:c,title:a}=t,s=!1!==r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Product image","woo-gutenberg-products-block"),checked:s,onChange:()=>e({...t,image:!s})}),(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Product title","woo-gutenberg-products-block"),checked:a,onChange:()=>e({...t,title:!a})}),(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Product price","woo-gutenberg-products-block"),checked:n,onChange:()=>e({...t,price:!n})}),(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Product rating","woo-gutenberg-products-block"),checked:c,onChange:()=>e({...t,rating:!c})}),(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Add to Cart button","woo-gutenberg-products-block"),checked:o,onChange:()=>e({...t,button:!o})}))},p=(e,t,r)=>r?Math.min(e,t)===e?t:Math.max(e,r)===e?r:e:Math.max(e,t)===t?e:t,b=({columns:e,rows:t,setAttributes:r,alignButtons:o,minColumns:n=1,maxColumns:c=6,minRows:a=1,maxRows:s=6})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.RangeControl,{label:(0,m.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:e=>{const t=p(e,n,c);r({columns:Number.isNaN(t)?"":t})},min:n,max:c}),(0,l.createElement)(g.RangeControl,{label:(0,m.__)("Rows","woo-gutenberg-products-block"),value:t,onChange:e=>{const t=p(e,a,s);r({rows:Number.isNaN(t)?"":t})},min:a,max:s}),(0,l.createElement)(g.ToggleControl,{label:(0,m.__)("Align the last block to the bottom","woo-gutenberg-products-block"),help:o?(0,m.__)("Align the last block to the bottom.","woo-gutenberg-products-block"):(0,m.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:o,onChange:()=>r({alignButtons:!o})}));var w=r(5430),_=r(4184),k=r.n(_),f=r(4333);const y={clear:(0,m.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:(0,m.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:(0,m.__)("No results for %s","woo-gutenberg-products-block"),search:(0,m.__)("Search for items","woo-gutenberg-products-block"),selected:e=>(0,m.sprintf)(/* translators: Number of items selected from list. */
(0,m._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:(0,m.__)("Search results updated.","woo-gutenberg-products-block")},x=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),l=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const o=["0"],n=(e={})=>e.parent?[...n(l[e.parent]),e.name]:e.name?[e.name]:[],c=e=>e.map((e=>{const t=r[e.id];return o.push(""+e.id),{...e,breadcrumbs:n(l[e.parent]),children:t&&t.length?c(t):[]}})),a=c(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{o.includes(e)||a.push(...c(t||[]))})),a},v=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,l.createElement)("strong",{key:t},e):(0,l.createElement)(h.Fragment,{key:t},e)))};function C(e,t,r){const l=new Set(t.map((e=>e[r])));return e.filter((e=>!l.has(e[r])))}const S=window.wp.htmlEntities,N=({label:e})=>(0,l.createElement)("span",{className:"woocommerce-search-list__item-count"},e),P=e=>{const{item:t,search:r}=e,o=t.breadcrumbs&&t.breadcrumbs.length;return(0,l.createElement)("span",{className:"woocommerce-search-list__item-label"},o?(0,l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(n=t.breadcrumbs).length?n.slice(0,1).toString():2===n.length?n.slice(0,1).toString()+" › "+n.slice(-1).toString():n.slice(0,1).toString()+" … "+n.slice(-1).toString()):null,(0,l.createElement)("span",{className:"woocommerce-search-list__item-name"},v((0,S.decodeEntities)(t.name),r)));var n},O=({countLabel:e,className:t,depth:r=0,controlId:o="",item:n,isSelected:c,isSingle:a,onSelect:s,search:i="",selected:d,useExpandedPanelId:u,...m})=>{var E,p;const[b,w]=u,_=null!=e&&void 0!==n.count&&null!==n.count,f=!(null===(E=n.breadcrumbs)||void 0===E||!E.length),y=!(null===(p=n.children)||void 0===p||!p.length),x=b===n.id,O=k()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":f,"has-children":y,"has-count":_,"is-expanded":x,"is-radio-button":a}),T=m.name||`search-list-item-${o}`,I=`${T}-${n.id}`,B=(0,h.useCallback)((()=>{w(x?-1:Number(n.id))}),[x,n.id,w]);return y?(0,l.createElement)("div",{className:O,onClick:B,onKeyDown:e=>"Enter"===e.key||" "===e.key?B():null,role:"treeitem",tabIndex:0},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"radio",id:I,name:T,value:n.value,onChange:s(n),onClick:e=>e.stopPropagation(),checked:c,className:"woocommerce-search-list__item-input",...m}),(0,l.createElement)(P,{item:n,search:i}),_?(0,l.createElement)(N,{label:e||n.count}):null):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:c,...!c&&n.children.some((e=>d.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:v((0,S.decodeEntities)(n.name),i),onChange:()=>{c?s(C(d,n.children,"id"))():s(function(e,t,r){const l=C(t,e,"id");return[...e,...l]}(d,n.children))()},onClick:e=>e.stopPropagation()}),_?(0,l.createElement)(N,{label:e||n.count}):null)):(0,l.createElement)("label",{htmlFor:I,className:O},a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{...m,type:"radio",id:I,name:T,value:n.value,onChange:s(n),checked:c,className:"woocommerce-search-list__item-input"}),(0,l.createElement)(P,{item:n,search:i})):(0,l.createElement)(g.CheckboxControl,{...m,id:I,name:T,className:"woocommerce-search-list__item-input",value:(0,S.decodeEntities)(n.value),label:v((0,S.decodeEntities)(n.name),i),onChange:s(n),checked:c}),_?(0,l.createElement)(N,{label:e||n.count}):null)},T=O;var I=r(906);r(5932);const B=({id:e,label:t,popoverContents:r,remove:o,screenReaderLabel:n,className:a=""})=>{const[s,i]=(0,h.useState)(!1),d=(0,f.useInstanceId)(B);if(n=n||t,!t)return null;t=(0,S.decodeEntities)(t);const u=k()("woocommerce-tag",a,{"has-remove":!!o}),E=`woocommerce-tag__label-${d}`,p=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"screen-reader-text"},n),(0,l.createElement)("span",{"aria-hidden":"true"},t));return(0,l.createElement)("span",{className:u},r?(0,l.createElement)(g.Button,{className:"woocommerce-tag__text",id:E,onClick:()=>i(!0)},p):(0,l.createElement)("span",{className:"woocommerce-tag__text",id:E},p),r&&s&&(0,l.createElement)(g.Popover,{onClose:()=>i(!1)},r),o&&(0,l.createElement)(g.Button,{className:"woocommerce-tag__remove",onClick:o(e),label:(0,m.sprintf)(
// Translators: %s label.
(0,m.__)("Remove %s","woo-gutenberg-products-block"),t),"aria-describedby":E},(0,l.createElement)(c.Z,{icon:I.Z,size:20,className:"clear-icon",role:"img"})))},R=B;r(8462);const A=e=>(0,l.createElement)(T,{...e}),F=e=>{const{list:t,selected:r,renderItem:o,depth:n=0,onSelect:c,instanceId:a,isSingle:s,search:i,useExpandedPanelId:d}=e,[u]=d;return t?(0,l.createElement)(h.Fragment,null,t.map((t=>{var m,g;const E=null!==(m=t.children)&&void 0!==m&&m.length&&!s?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),p=(null===(g=t.children)||void 0===g?void 0:g.length)&&u===t.id;return(0,l.createElement)(h.Fragment,{key:t.id},(0,l.createElement)("li",null,o({item:t,isSelected:E,onSelect:c,isSingle:s,selected:r,search:i,depth:n,useExpandedPanelId:d,controlId:a})),p?(0,l.createElement)(F,{...e,list:t.children,depth:n+1}):null)}))):null},$=({isLoading:e,isSingle:t,selected:r,messages:o,onChange:n,onRemove:c})=>{if(e||t||!r)return null;const a=r.length;return(0,l.createElement)("div",{className:"woocommerce-search-list__selected"},(0,l.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,l.createElement)("strong",null,o.selected(a)),a>0?(0,l.createElement)(g.Button,{isLink:!0,isDestructive:!0,onClick:()=>n([]),"aria-label":o.clear},(0,m.__)("Clear all","woo-gutenberg-products-block")):null),a>0?(0,l.createElement)("ul",null,r.map(((e,t)=>(0,l.createElement)("li",{key:t},(0,l.createElement)(R,{label:e.name,id:e.id,remove:c}))))):null)},j=({filteredList:e,search:t,onSelect:r,instanceId:o,useExpandedPanelId:n,...a})=>{const{messages:s,renderItem:i,selected:d,isSingle:u}=a,g=i||A;return 0===e.length?(0,l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,l.createElement)(c.Z,{icon:w.Z,role:"img"})),(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,m.sprintf)(s.noResults,t):s.noItems)):(0,l.createElement)("ul",{className:"woocommerce-search-list__list"},(0,l.createElement)(F,{useExpandedPanelId:n,list:e,selected:d,renderItem:g,onSelect:r,instanceId:o,isSingle:u,search:t}))},M=e=>{const{className:t="",isCompact:r,isHierarchical:o,isLoading:n,isSingle:c,list:a,messages:s=y,onChange:i,onSearch:d,selected:u,type:E="text",debouncedSpeak:p}=e,[b,w]=(0,h.useState)(""),_=(0,h.useState)(-1),v=(0,f.useInstanceId)(M),C=(0,h.useMemo)((()=>({...y,...s})),[s]),S=(0,h.useMemo)((()=>((e,t,r)=>{if(!t)return r?x(e):e;const l=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),o=e.map((e=>!!l.test(e.name)&&e)).filter(Boolean);return r?x(o,e):o})(a,b,o)),[a,b,o]);(0,h.useEffect)((()=>{p&&p(C.updated)}),[p,C]),(0,h.useEffect)((()=>{"function"==typeof d&&d(b)}),[b,d]);const N=(0,h.useCallback)((e=>()=>{c&&i([]);const t=u.findIndex((({id:t})=>t===e));i([...u.slice(0,t),...u.slice(t+1)])}),[c,u,i]),P=(0,h.useCallback)((e=>()=>{Array.isArray(e)?i(e):-1===u.findIndex((({id:t})=>t===e.id))?i(c?[e]:[...u,e]):N(e.id)()}),[c,N,i,u]),O=(0,h.useCallback)((e=>{const[t]=u.filter((t=>!e.find((e=>t.id===e.id))));N(t.id)()}),[N,u]);return(0,l.createElement)("div",{className:k()("woocommerce-search-list",t,{"is-compact":r,"is-loading":n,"is-token":"token"===E})},"text"===E&&(0,l.createElement)($,{...e,onRemove:N,messages:C}),(0,l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===E?(0,l.createElement)(g.TextControl,{label:C.search,type:"search",value:b,onChange:e=>w(e)}):(0,l.createElement)(g.FormTokenField,{disabled:n,label:C.search,onChange:O,onInputChange:e=>w(e),suggestions:[],__experimentalValidateInput:()=>!1,value:n?[(0,m.__)("Loading…","woo-gutenberg-products-block")]:u.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),n?(0,l.createElement)("div",{className:"woocommerce-search-list__list"},(0,l.createElement)(g.Spinner,null)):(0,l.createElement)(j,{...e,search:b,filteredList:S,messages:C,onSelect:P,instanceId:v,useExpandedPanelId:_}))};(0,g.withSpokenMessages)(M);var Z=r(4697);const L=({item:e,search:t,depth:r=0,...o})=>{const n=e.breadcrumbs.length?`${e.breadcrumbs.join(", ")}, ${e.name}`:e.name;return(0,l.createElement)(O,{className:k()("woocommerce-product-tags__item","has-count",{"is-searching":t.length>0,"is-skip-level":0===r&&0!==e.parent}),item:e,search:t,depth:r,...o,ariaLabel:(0,m.sprintf)(/* translators: %1$d is the count of products, %2$s is the name of the tag. */
(0,m._n)("%1$d product tagged as %2$s","%1$d products tagged as %2$s",e.count,"woo-gutenberg-products-block"),e.count,n)})},D=window.wp.url,W=window.wp.apiFetch;var V=r.n(W);const H=({selected:e=[],search:t})=>{const r=(({selected:e=[],search:t})=>{const r=(0,n.getSetting)("limitTags",!1),l=[(0,D.addQueryArgs)("wc/store/v1/products/tags",{per_page:r?100:0,orderby:r?"count":"name",order:r?"desc":"asc",search:t})];return r&&e.length&&l.push((0,D.addQueryArgs)("wc/store/v1/products/tags",{include:e})),l})({selected:e,search:t});return Promise.all(r.map((e=>V()({path:e})))).then((e=>((e,t)=>{const r=new Map;return e.filter((e=>{const l=t(e);return!r.has(l)&&(r.set(l,e),!0)}))})(e.flat(),(e=>e.id))))};r(9197);const J=({isCompact:e=!1,onChange:t,onOperatorChange:r,operator:o="any",selected:c})=>{const[a,s]=(0,h.useState)([]),[i,d]=(0,h.useState)(!0),[u,E]=(0,h.useState)(!1),p=(0,n.getSetting)("limitTags",!1),b=(0,h.useMemo)((()=>a.filter((e=>c.includes(e.id)))),[a,c]),w=(0,h.useCallback)((e=>{d(!0),H({selected:c,search:e}).then((e=>{s(e),d(!1)})).catch((()=>{d(!1)}))}),[c]);(0,h.useEffect)((()=>{u||(w(""),E(!0))}),[w,u]);const _=(0,Z.y1)(w,400),k={clear:(0,m.__)("Clear all product tags","woo-gutenberg-products-block"),list:(0,m.__)("Product Tags","woo-gutenberg-products-block"),noItems:(0,m.__)("You have not set up any product tags on your store.","woo-gutenberg-products-block"),search:(0,m.__)("Search for product tags","woo-gutenberg-products-block"),selected:e=>(0,m.sprintf)(/* translators: %d is the count of selected tags. */
(0,m._n)("%d tag selected","%d tags selected",e,"woo-gutenberg-products-block"),e),updated:(0,m.__)("Tag search results updated.","woo-gutenberg-products-block")};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(M,{className:"woocommerce-product-tags",list:a,isLoading:i,selected:b,onChange:t,onSearch:p?_:void 0,renderItem:L,messages:k,isCompact:e,isHierarchical:!0,isSingle:!1}),!!r&&(0,l.createElement)("div",{hidden:c.length<2},(0,l.createElement)(g.SelectControl,{className:"woocommerce-product-tags__operator",label:(0,m.__)("Display products matching","woo-gutenberg-products-block"),help:(0,m.__)("Pick at least two tags to use this setting.","woo-gutenberg-products-block"),value:o,onChange:r,options:[{label:(0,m.__)("Any selected tags","woo-gutenberg-products-block"),value:"any"},{label:(0,m.__)("All selected tags","woo-gutenberg-products-block"),value:"all"}]})))},G=({value:e,setAttributes:t})=>(0,l.createElement)(g.SelectControl,{label:(0,m.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:(0,m.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:(0,m.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:(0,m.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:(0,m.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:(0,m.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:(0,m.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:(0,m.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:e=>t({orderby:e})}),Q=(0,n.getSetting)("hideOutOfStockItems",!1),z=(0,n.getSetting)("stockStatusOptions",{}),K=({value:e,setAttributes:t})=>{const{outofstock:r,...o}=z,n=Q?o:z,c=Object.entries(n).map((([e,t])=>({value:e,label:t}))).filter((e=>!!e.label)),a=Object.keys(n).filter((e=>!!e)),[s,i]=(0,h.useState)(e||a);(0,h.useEffect)((()=>{t({stockStatus:["",...s]})}),[s,t]);const d=(0,h.useCallback)((e=>{const t=s.includes(e),r=s.filter((t=>t!==e));t||(r.push(e),r.sort()),i(r)}),[s]);return(0,l.createElement)(l.Fragment,null,c.map((e=>{const t=s.includes(e.value)?/* translators: %s stock status. */(0,m.__)('Stock status "%s" visible.',"woo-gutenberg-products-block"):/* translators: %s stock status. */(0,m.__)('Stock status "%s" hidden.',"woo-gutenberg-products-block");return(0,l.createElement)(g.ToggleControl,{label:e.label,key:e.value,help:(0,m.sprintf)(t,e.label),checked:s.includes(e.value),onChange:()=>d(e.value)})})))},Y=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,l.createElement)("title",null,"Grid Block Preview"),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"})),q=e=>"number"==typeof e,U=(0,g.withSpokenMessages)((({attributes:e,name:t,setAttributes:r,debouncedSpeak:o})=>{const[s,d]=(0,h.useState)({}),[p,w]=(0,h.useState)(!1);(0,h.useEffect)((()=>{e.tags.length||w(!0)}),[e.tags.length]);const _=()=>{w(!1),d({})};return e.isPreview?Y:(0,n.getSetting)("hasTags",!0)?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.BlockControls,null,(0,l.createElement)(g.ToolbarGroup,{controls:[{icon:"edit",title:(0,m.__)("Edit selected tags","woo-gutenberg-products-block"),onClick:()=>p?_():(w(!0),void d({})),isActive:p}]})),(()=>{const{columns:t,tagOperator:o,contentVisibility:c,orderby:a,rows:s,alignButtons:d,stockStatus:u}=e;return(0,l.createElement)(i.InspectorControls,{key:"inspector"},(0,l.createElement)(g.PanelBody,{title:(0,m.__)("Product Tag","woo-gutenberg-products-block"),initialOpen:!e.tags.length&&!p},(0,l.createElement)(J,{selected:e.tags,onChange:(e=[])=>{const t=e.map((({id:e})=>e));r({tags:t})},operator:o,onOperatorChange:(e="any")=>r({tagOperator:e}),isCompact:!0})),(0,l.createElement)(g.PanelBody,{title:(0,m.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},(0,l.createElement)(b,{columns:t,rows:s,alignButtons:d,setAttributes:r,minColumns:(0,n.getSettingWithCoercion)("minColumns",1,q),maxColumns:(0,n.getSettingWithCoercion)("maxColumns",6,q),minRows:(0,n.getSettingWithCoercion)("minRows",6,q),maxRows:(0,n.getSettingWithCoercion)("maxRows",6,q)})),(0,l.createElement)(g.PanelBody,{title:(0,m.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},(0,l.createElement)(E,{settings:c,onChange:e=>r({contentVisibility:e})})),(0,l.createElement)(g.PanelBody,{title:(0,m.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},(0,l.createElement)(G,{setAttributes:r,value:a})),(0,l.createElement)(g.PanelBody,{title:(0,m.__)("Filter by stock status","woo-gutenberg-products-block"),initialOpen:!1},(0,l.createElement)(K,{setAttributes:r,value:u})))})(),p?(()=>{const t={...e,...s};return(0,l.createElement)(g.Placeholder,{icon:(0,l.createElement)(c.Z,{icon:a.Z,className:"block-editor-block-icon"}),label:(0,m.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},(0,m.__)("Display a grid of products from your selected tags.","woo-gutenberg-products-block"),(0,l.createElement)("div",{className:"wc-block-product-tag__selection"},(0,l.createElement)(J,{selected:t.tags,onChange:(e=[])=>{const t=e.map((({id:e})=>e));d({...s,tags:t})},operator:t.tagOperator,onOperatorChange:(e="any")=>d({...s,tagOperator:e})}),(0,l.createElement)(g.Button,{isPrimary:!0,onClick:()=>{r(s),_(),o((0,m.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},(0,m.__)("Done","woo-gutenberg-products-block")),(0,l.createElement)(g.Button,{className:"wc-block-product-tag__cancel-button",isTertiary:!0,onClick:()=>{_(),o((0,m.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},(0,m.__)("Cancel","woo-gutenberg-products-block"))))})():(()=>{const r=e.tags.length;return(0,l.createElement)(g.Disabled,null,r?(0,l.createElement)(u(),{block:t,attributes:e}):(0,l.createElement)(g.Placeholder,{icon:(0,l.createElement)(c.Z,{icon:a.Z,className:"block-editor-block-icon"}),label:(0,m.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},(0,m.__)("This block displays products from selected tags. Select at least one tag to display its products.","woo-gutenberg-products-block")))})()):(0,l.createElement)(g.Placeholder,{icon:(0,l.createElement)(c.Z,{icon:a.Z,className:"block-editor-block-icon"}),label:(0,m.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},(0,m.__)("This block displays products from selected tags. To use it you first need to create products and assign tags to them.","woo-gutenberg-products-block"))}));r(9594),(0,o.registerBlockType)(s,{icon:{src:(0,l.createElement)(c.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...s.attributes,columns:{type:"number",default:(0,n.getSetting)("defaultColumns",3)},rows:{type:"number",default:(0,n.getSetting)("defaultRows",3)},tags:{type:"array",default:[]},stockStatus:{type:"array",default:Object.keys((0,n.getSetting)("stockStatusOptions",[]))}},edit:e=>{const t=(0,i.useBlockProps)();return(0,l.createElement)("div",{...t},(0,l.createElement)(U,{...e}))},save:()=>null})},9594:()=>{},9197:()=>{},8462:()=>{},5932:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,r,o,n)=>{if(!r){var c=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],a=!0,s=0;s<r.length;s++)(!1&n||c>=n)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(a=!1,n<c&&(c=n));if(a){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=3508,(()=>{var e={3508:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[c,a,s]=r,i=0;if(c.some((t=>0!==e[t]))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(s)var d=s(l)}for(t&&t(r);i<c.length;i++)n=c[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=l.O(void 0,[2869],(()=>l(3861)));o=l.O(o),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-tag"]=o})();