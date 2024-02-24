import{S as d,a as f,i as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=document.querySelector(".gallery-o"),y=document.querySelector(".search-form");new d(".gallery-o");const g={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function b(n){const t=n.map(({largeImageURL:s,webformatURL:e,tags:r,likes:a,views:i,comments:l,downloads:c})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${e}" alt="${r}" title="${r}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${a}</span></li>
                <li class="info-cards-elements">views<span>${i}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${c}</span></li>
            </ul>
            </a>
        </div>
        `).join("");h.innerHTML=t;const o=new d(".gallery-o a",g);o.on("show.simplelightbox"),o.refresh(),y.reset()}function S(n){const t=n.map(({largeImageURL:s,webformatURL:e,tags:r,likes:a,views:i,comments:l,downloads:c})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${e}" alt="${r}" title="${r}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${a}</span></li>
                <li class="info-cards-elements">views<span>${i}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${c}</span></li>
            </ul>
            </a>
        </div>
        `).join("");h.insertAdjacentHTML("beforeend",t);const o=new d(".gallery-o a",g);o.on("show.simplelightbox"),o.refresh(),y.reset()}async function v(n){try{const t="42424645-ecd3f1048329df1dec069e6a8",o=await f.get("https://pixabay.com/api/",{params:{key:t,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:"1",per_page:"15"}});if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}let E=1,q=15;async function x(n){try{const t=new URLSearchParams({key:"42424645-ecd3f1048329df1dec069e6a8",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",_limit:q,_page:E}),o=await f.get(`https://pixabay.com/api/?${t}`);if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}const M=document.querySelector(".search-form"),m=document.querySelector(".gallery-o"),w=document.querySelector(".loader");document.querySelector(".more-loader");const P=document.querySelector(".more-btn"),$=document.querySelector(".input-search").value;document.addEventListener("DOMContentLoaded",()=>{p(),M.addEventListener("submit",n);function n(o){o.preventDefault(),O(),m.innerHTML="",v($).then(s=>{b(s.hits)}).catch(s=>{t(s)}).finally(()=>{p()})}function t(o){m.innerHTML="",L.show({message:`❌ "${o.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function O(){w.style.display="block"}function p(){w.style.display="none"}let u=1;P.addEventListener("click",async()=>{try{const n=await x($);S(),u+=1,u>1}catch(n){console.log(n)}});
//# sourceMappingURL=commonHelpers.js.map
