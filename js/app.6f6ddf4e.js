(function(){"use strict";var e={2966:function(e,t,n){var r=n(9242),o=n(3396),i=n(7139);const a={class:"container my-3"},c={class:"row"},s=(0,o._)("h1",null,"Cryptos API",-1),l={class:"table table-dark"},u={class:"text-muted me-3 p-3"},p=["src","alt"],d={class:"me-3"},f={class:"me-3 text-uppercase text-muted"};function h(e,t,n,h,_,m){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",c,[s,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control bg-dark text-light rounded-0 border-0 my-4 p-2",placeholder:"Search cryptocurrencies",onKeyup:t[0]||(t[0]=e=>m.searchCoin()),"onUpdate:modelValue":t[1]||(t[1]=e=>_.textSearch=e)},null,544),[[r.nr,_.textSearch]]),(0,o._)("table",l,[(0,o._)("thead",null,[(0,o._)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.titles,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e,class:"p-3"},(0,i.zw)(e),1)))),128))])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.filteredCoins,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",u,(0,i.zw)(t+1),1),(0,o._)("td",null,[(0,o._)("img",{src:e.image,alt:e.id,width:"50",class:"me-3"},null,8,p),(0,o._)("span",d,(0,i.zw)(e.name),1),(0,o._)("span",f,(0,i.zw)(e.symbol),1)]),(0,o._)("td",null," $ "+(0,i.zw)(e.current_price),1),(0,o._)("td",{class:(0,i.C_)([e.price_change_percentage_24h>0?"text-success":"text-danger"])},(0,i.zw)(e.price_change_percentage_24h)+" % ",3),(0,o._)("td",null," $ "+(0,i.zw)(e.total_volume.toLocaleString()),1),(0,o._)("td",null," $ "+(0,i.zw)(e.market_cap.toLocaleString()),1)])))),128))])])])])}n(6699);var _={name:"App",data(){return{coins:[],filteredCoins:[],titles:["#","Coin","Price","Price change","24h volume","Market cap"],textSearch:""}},async mounted(){const e=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"),t=await e.json();console.log(t),this.coins=t,this.filteredCoins=t},methods:{searchCoin(){this.filteredCoins=this.coins.filter((e=>e.name.toLowerCase().includes(this.textSearch.toLowerCase())||e.symbol.toLowerCase().includes(this.textSearch.toLowerCase())))}}},m=n(89);const v=(0,m.Z)(_,[["render",h]]);var w=v;(0,r.ri)(w).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkvue_app_cryptos"]=self["webpackChunkvue_app_cryptos"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2966)}));r=n.O(r)})();
//# sourceMappingURL=app.6f6ddf4e.js.map