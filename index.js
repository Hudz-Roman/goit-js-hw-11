import{S as h,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="44417625-4fee654a3e06908df7f1d6188",y="https://pixabay.com/api/";function u(n,t=1,i=12){return fetch(`${y}?key=${g}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${i}`).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()}).then(o=>o).catch(o=>{throw console.error("Error fetching images:",o),o})}function f(n){const t=document.querySelector(".gallery"),i=n.map(({webformatURL:o,largeImageURL:e,tags:r,likes:s,views:m,comments:d,downloads:p})=>`
    <a href="${e}" class="gallery-item">
      <img src="${o}" alt="${r}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b><br>${s}</p>
        <p><b>Views:</b><br>${m}</p>
        <p><b>Comments:</b><br>${d}</p>
        <p><b>Downloads:</b><br>${p}</p>
      </div>
    </a>
  `).join("");t.innerHTML=i,new h(".gallery a").refresh()}function b(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector(".search-form"),$=document.querySelector(".search-input"),q=document.querySelector("#load-more");let c="",l=1;L.addEventListener("submit",function(n){if(n.preventDefault(),c=$.value.trim(),!c){a.error({title:"Error",message:"Please enter a search query"});return}l=1,b(),u(c,l).then(t=>{t.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t.hits)}).catch(t=>{a.error({title:"Error",message:t.message})})});q.addEventListener("click",function(){l+=1,u(c,l).then(n=>{f(n.hits)}).catch(n=>{a.error({title:"Error",message:n.message})})});
//# sourceMappingURL=index.js.map
