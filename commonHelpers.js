import{S as p,a as w,i as q}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery-o"),L=document.querySelector(".search-form");new p(".gallery-o");const $={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function x(s){const n=s.map(({largeImageURL:o,webformatURL:e,tags:r,likes:a,views:l,comments:c,downloads:d})=>`
        <div class="gallery">
            <a href="${o}">
            <img src="${e}" alt="${r}" title="${r}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${a}</span></li>
                <li class="info-cards-elements">views<span>${l}</span></li>
                <li class="info-cards-elements">comments<span>${c}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.innerHTML=n;const t=new p(".gallery-o a",$);t.on("show.simplelightbox"),t.refresh(),L.reset()}function P(s){const t=s.hits.map(({largeImageURL:r,webformatURL:a,tags:l,likes:c,views:d,comments:E,downloads:M})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${a}" alt="${l}" title="${l}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${c}</span></li>
                <li class="info-cards-elements">views<span>${d}</span></li>
                <li class="info-cards-elements">comments<span>${E}</span></li>
                <li class="info-cards-elements">downloads<span>${M}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.insertAdjacentHTML("beforeend",t);const o=new p(".gallery-o a",$);o.on("show.simplelightbox"),o.refresh(),L.reset();const e=m.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}async function B(s,n){try{const t="42424645-ecd3f1048329df1dec069e6a8",o=await w.get("https://pixabay.com/api/",{params:{key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:"15"}});if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}async function O(s,n){try{const t=new URLSearchParams({key:"42424645-ecd3f1048329df1dec069e6a8",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:n});let o=await w.get(`https://pixabay.com/api/?${t}`);if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}const h=document.querySelector(".search-form"),y=document.querySelector(".gallery-o"),b=document.querySelector(".loader");document.querySelector(".more-loader");const f=document.querySelector(".more-btn");let u,i,v;document.addEventListener("DOMContentLoaded",()=>{g(),h.addEventListener("submit",s);async function s(t){t.preventDefault(),T(),y.innerHTML="",i=1,u=h.querySelector(".input-search").value;try{const o=await B(u,i);x(o.hits),v=Math.ceil(o.totalHits/15)}catch(o){n(o)}finally{g(),S()}}function n(t){y.innerHTML="",q.show({message:`❌ "${t.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function T(){b.style.display="block"}function g(){b.style.display="none"}f.addEventListener("click",async()=>{try{const s=await O(u,i);P(s),i+=1,i>1&&S()}catch(s){console.log(s)}});function H(){f.classList.remove("hidden")}function N(){f.classList.add("hidden")}function S(){i>=v?N():H()}
//# sourceMappingURL=commonHelpers.js.map
