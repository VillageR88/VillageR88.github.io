"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{179:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r,u,l=t(7437),o=t(2265);let c=(0,o.createContext)(null),i=c.Provider;function a(){let e=(0,o.useContext)(c);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var f=t(447);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let p=(0,o.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:r,className:u,id:l,placeholder:c,style:a,whenReady:p,zoom:d,...g},m){let[b]=(0,o.useState)({className:u,id:l,style:a}),[v,y]=(0,o.useState)(null);(0,o.useImperativeHandle)(m,()=>v?.map??null,[v]);let h=(0,o.useCallback)(r=>{if(null!==r&&null===v){let u=new f.Map(r,g);null!=t&&null!=d?u.setView(t,d):null!=e&&u.fitBounds(e,n),null!=p&&u.whenReady(p),y(Object.freeze({__version:1,map:u}))}},[]);(0,o.useEffect)(()=>()=>{v?.map.remove()},[v]);let w=v?o.createElement(i,{value:v},r):c??null;return o.createElement("div",s({},b,{ref:h}),w)});function d(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function g(e,n){return null==n?function(n,t){let r=(0,o.useRef)();return r.current||(r.current=e(n,t)),r}:function(t,r){let u=(0,o.useRef)();u.current||(u.current=e(t,r));let l=(0,o.useRef)(t),{instance:c}=u.current;return(0,o.useEffect)(function(){l.current!==t&&(n(c,t,l.current),l.current=t)},[c,t,r]),u}}function m(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function b(e){return function(n){var t;let r=a(),u=e(m(n,r),r);return!function(e,n){let t=(0,o.useRef)(n);(0,o.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}(r.map,n.attribution),!function(e,n){let t=(0,o.useRef)();(0,o.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}(u.current,n.eventHandlers),t=u.current,(0,o.useEffect)(function(){return(r.layerContainer??r.map).addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),u}}t(4887);let v=(r=b(g(function({url:e,...n},t){return d(new f.TileLayer(e,m(n,t)),t)},function(e,n,t){!function(e,n,t){let{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);let{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)})),(0,o.forwardRef)(function(e,n){let{instance:t}=r(e).current;return(0,o.useImperativeHandle)(n,()=>t),null})),y=(u=b(g(function({position:e,...n},t){let r=new f.Marker(e,n);return d(r,Object.freeze({...t,overlayContainer:r}))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),(0,o.forwardRef)(function(e,n){let{instance:t,context:r}=u(e).current;return(0,o.useImperativeHandle)(n,()=>t),null==e.children?null:o.createElement(i,{value:r},e.children)}));function h(e){let{center:n}=e,[t,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{r(new f.Icon({iconUrl:"./icon-location.svg",iconSize:[45,58]}))},[]),(0,l.jsxs)(p,{center:n,zoom:13,scrollWheelZoom:!1,dragging:!1,doubleClickZoom:!1,touchZoom:!1,zoomControl:!1,children:[(0,l.jsx)(v,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t&&(0,l.jsx)(y,{icon:t,position:n}),(0,l.jsx)(e=>{let{center:n}=e,t=a().map;return(0,o.useEffect)(()=>{t.panTo(n)},[n,t]),null},{center:n})]})}}}]);