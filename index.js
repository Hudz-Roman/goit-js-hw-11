import{S as y,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="44417625-4fee654a3e06908df7f1d6188",h="https://pixabay.com/api/";async function u(o,t=1,a=12){const s=await fetch(`${h}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`);if(!s.ok)throw new Error("Failed to fetch images");return await s.json()}function f(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:d,comments:m,downloads:p})=>`
    <a href="${e}" class="gallery-item">
      <img src="${s}" alt="${r}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b><br>${n}</p>
        <p><b>Views:</b><br>${d}</p>
        <p><b>Comments:</b><br>${m}</p>
        <p><b>Downloads:</b><br>${p}</p>
      </div>
    </a>
  `).join("");t.innerHTML=a,new y(".gallery a").refresh()}function b(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector(".search-form"),$=document.querySelector(".search-input"),q=document.querySelector("#load-more");let c="",l=1;L.addEventListener("submit",async o=>{if(o.preventDefault(),c=$.value.trim(),!c){i.error({title:"Error",message:"Please enter a search query"});return}l=1,b();try{const t=await u(c,l);t.hits.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t.hits)}catch(t){i.error({title:"Error",message:t.message})}});q.addEventListener("click",async()=>{l+=1;try{const o=await u(c,l);f(o.hits)}catch(o){i.error({title:"Error",message:o.message})}});
//# sourceMappingURL=index.js.map
