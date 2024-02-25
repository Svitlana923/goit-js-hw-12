import{S as u,a as g,i as E}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const M=document.querySelector(".gallery-o"),q=document.querySelector(".search-form");new u(".gallery-o");const w={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function x(a){const n=a.map(({largeImageURL:o,webformatURL:e,tags:r,likes:s,views:c,comments:l,downloads:d})=>`
        <div class="gallery">
            <a href="${o}">
            <img src="${e}" alt="${r}" title="${r}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${s}</span></li>
                <li class="info-cards-elements">views<span>${c}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");M.innerHTML=n;const t=new u(".gallery-o a",w);t.on("show.simplelightbox"),t.refresh(),q.reset()}function P(a,n,t){const o=a.map(({largeImageURL:r,webformatURL:s,tags:c,likes:l,views:d,comments:S,downloads:v})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${s}" alt="${c}" title="${c}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${l}</span></li>
                <li class="info-cards-elements">views<span>${d}</span></li>
                <li class="info-cards-elements">comments<span>${S}</span></li>
                <li class="info-cards-elements">downloads<span>${v}</span></li>
            </ul>
            </a>
        </div>
        `).join("");n.insertAdjacentHTML("beforeend",o);const e=new u(".gallery-o a",w);e.on("show.simplelightbox"),e.refresh(),t.reset()}async function O(a,n){try{const t="42424645-ecd3f1048329df1dec069e6a8",o=await g.get("https://pixabay.com/api/",{params:{key:t,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:"15"}});if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}async function T(a,n){try{const t=new URLSearchParams({key:"42424645-ecd3f1048329df1dec069e6a8",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:n});let o=await g.get(`https://pixabay.com/api/?${t}`);if(o.data.total===0)throw new Error("No images found");return o.data}catch(t){throw t}}const f=document.querySelector(".search-form"),h=document.querySelector(".gallery-o"),L=document.querySelector(".loader");document.querySelector(".more-loader");const p=document.querySelector(".more-btn");let m,i,$;document.addEventListener("DOMContentLoaded",()=>{y(),f.addEventListener("submit",a);async function a(t){t.preventDefault(),B(),h.innerHTML="",i=1,m=f.querySelector(".input-search").value;try{const o=await O(m,i);x(o.hits),$=Math.ceil(o.totalHits/15)}catch(o){n(o)}finally{y(),b()}}function n(t){h.innerHTML="",E.show({message:`❌ "${t.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function B(){L.style.display="block"}function y(){L.style.display="none"}p.addEventListener("click",async()=>{try{const a=await T(m,i);P(a),i+=1,b(),i>1}catch(a){console.log(a)}});function H(){p.classList.remove("hidden")}function N(){p.classList.add("hidden")}function b(){i>=$?N():H()}
//# sourceMappingURL=commonHelpers.js.map
