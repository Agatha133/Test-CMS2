(()=>{"use strict";const e=window.wc.__experimentalInteractivity;function t(e,t,r){const a=new URL(window.location.href),{searchParams:l}=a;return e.length>0?(l.set(`filter_${t}`,e.join(",")),l.set(`query_type_${t}`,r)):(l.delete(`filter_${t}`),l.delete(`query_type_${t}`)),a.href}(0,e.store)("woocommerce/collection-attribute-filter",{actions:{navigate:()=>{const r=(0,e.getContext)("woocommerce/interactivity-dropdown"),a=(0,e.getContext)();r.selectedItem.value&&(0,e.navigate)(t([r.selectedItem.value],a.attributeSlug,a.queryType))},updateProducts:r=>{if(!r.target.value)return;const a=(0,e.getContext)();let l=(i=a.attributeSlug,(new URL(window.location.href).searchParams.get(`filter_${i}`)||"").split(",").filter(Boolean));var i;r.target.checked&&!l.includes(r.target.value)?("multiple"===a.selectType&&l.push(r.target.value),"single"===a.selectType&&(l=[r.target.value])):l=l.filter((e=>e!==r.target.value)),(0,e.navigate)(t(l,a.attributeSlug,a.queryType))}}})})();