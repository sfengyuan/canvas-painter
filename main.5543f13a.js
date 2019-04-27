!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function a(e,t={},...n){const a=document.createElement(e);return Object.keys(t).forEach(e=>{a.setAttribute(e,t[e])}),n.forEach(e=>{"string"==typeof e&&(e=document.createTextNode(e)),a.appendChild(e)}),a}function s(e,t){const n=t.getBoundingClientRect();let{x:a,y:s}=function(e){if(e.clientX)return{x:e.clientX,y:e.clientY};return{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}}(e);return{x:Math.floor(a-n.left),y:Math.floor(s-n.top)}}function o(e,t=(e=>{})){var n;!function(e){window.addEventListener("mousemove",e),window.addEventListener("touchmove",e)}(e),n=function n(a){!function(e){window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e)}(e),function(e){window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}(n),t(a)},window.addEventListener("mouseup",n),window.addEventListener("touchend",n)}function i(e=window,t){let n="";function a(e){n||(n=e.type),e.type===n&&t(e)}e.addEventListener("mousedown",a),e.addEventListener("touchstart",a)}function r(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function c(e){for(;;){var t=2*Math.random()-1,n=2*Math.random()-1;if(t*t+n*n<=1)return{x:t*e,y:n*e}}}const l={};l.el=a("canvas",{style:""}),i(l.el,e=>{T.tools[T.selected].fn(e,l.el.getContext("2d")),e.preventDefault(),e.stopPropagation()});var u=l;const d={color:function(e){const t=a("input",{type:"color",class:"color-input",value:"#000000"});return t.addEventListener("change",()=>{e.fillStyle=t.value,e.strokeStyle=t.value}),a("div",{class:"color-control"},t)},brushSize:function(e){const t=a("span",{class:"range-output"},"2"),n=a("input",{class:"range-input",type:"range",min:"1",max:"10",value:"2"});return e.canvas.dataset.brushsize=2,n.addEventListener("input",()=>{switch(t.innerText=n.value,parseInt(n.value)){case 1:e.canvas.dataset.brushsize=1;break;case 2:e.canvas.dataset.brushsize=2;break;case 3:e.canvas.dataset.brushsize=3;break;case 4:e.canvas.dataset.brushsize=4;break;case 5:e.canvas.dataset.brushsize=5;break;case 6:e.canvas.dataset.brushsize=6;break;case 7:e.canvas.dataset.brushsize=7;break;case 8:e.canvas.dataset.brushsize=8;break;case 9:e.canvas.dataset.brushsize=9;break;case 10:e.canvas.dataset.brushsize=10;break;default:e.canvas.dataset.brushsize=1}}),n.addEventListener("change",()=>{e.lineWidth=n.value}),a("div",{class:"range-control size-range"},n,t)},brushLength:function(){const e=a("span",{class:"range-output"},"1"),t=a("input",{class:"range-input",type:"range",min:"1",max:"50",value:"1"});return t.addEventListener("input",()=>{e.innerText=t.value}),a("div",{class:"range-control length-range hide"},t,e)}},h=a("div",{class:"property-bar"});Object.keys(d).forEach(e=>{h.appendChild(d[e](u.el.getContext("2d")))});var v={el:h,modify:function(e){const t=document.querySelector(".length-range .range-input"),n=document.querySelector(".length-range");switch(e){case"pencil":n.classList.add("hide");break;case"sprayer":t.setAttribute("max","3");const a=document.querySelector(".length-range .range-output");a.innerText>3&&(a.innerText=3);break;default:n.classList.remove("hide"),t.setAttribute("max","50")}}};class p{constructor(e,t){var n;e=e.toLowerCase(),this.name=e,this.fn=t,this.el=a("button",{class:`btn tools tool-${e}`,"data-name":e},(n=e).charAt(0).toUpperCase()+n.slice(1))}}var b={max:5,state:[],step:-1,save:function(e){var t=document.querySelector(".btn-undo"),n=document.querySelector(".btn-redo");this.step<this.max-1&&this.step++,this.step>0&&t.setAttribute("class","btn btn-undo available"),this.step<this.state.length-1&&(this.state.length=this.step),this.state.length>=this.max&&this.state.shift(),this.state.push(e.canvas.toDataURL()),n.setAttribute("class","btn btn-redo unavailable")},undo:function(e){var t=document.querySelector(".btn-undo"),n=document.querySelector(".btn-redo");if(0===this.step&&(this.step--,e.clearRect(0,0,e.canvas.width,e.canvas.height)),this.step>0){this.step--,this.step<=this.max&&n.setAttribute("class","btn btn-redo available"),this.step<1&&t.setAttribute("class","btn btn-undo unavailable");let s=this.state[this.step];var a=document.createElement("img");a.src=s,a.onload=function(){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0)}}},redo:function(e){var t=document.querySelector(".btn-redo"),n=document.querySelector(".btn-undo");if(this.step<this.state.length-1){this.step++,this.step>=this.state.length-1&&t.setAttribute("class","btn btn-redo unavailable"),this.step>=0&&n.setAttribute("class","btn btn-undo available");let s=this.state[this.step];var a=document.createElement("img");a.src=s,a.onload=function(){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0)}}}},f=new p("pencil",(e,t,n=(()=>{}))=>{t.lineCap="round";let a=s(e,t.canvas);console.log("pos",a),o(e=>{t.beginPath(),t.moveTo(a.x,a.y),a=s(e,t.canvas),t.lineTo(a.x,a.y),t.stroke()},e=>{n(),b.save(t)})}),m=new p("fence",(e,t,n)=>{t.lineCap="round";let a=s(e,t.canvas);o(function(e){const n=document.querySelector(".length-range .range-input").value;t.beginPath(),t.moveTo(a.x,a.y),a=s(e,t.canvas),t.lineTo(a.x,a.y+t.lineWidth*n+20),t.stroke()},e=>{b.save(t)})}),g=new p("radial",(e,t,n)=>{t.lineCap="round";let a=s(e,t.canvas);o(function(e){t.beginPath(),t.moveTo(a.x,a.y);let n=s(e,t.canvas);t.lineTo(n.x,n.y),t.stroke()},e=>b.save(t))}),y=new p("hatching",(e,t,n)=>{t.lineCap="round",t.lineJoin="round";let a=s(e,t.canvas);o(function(e){const n=document.querySelector(".length-range .range-input").value;t.beginPath(),t.moveTo(a.x,a.y),a=s(e,t.canvas),t.lineTo(a.x+r(0,t.lineWidth*n+5),a.y-r(0,t.lineWidth*n+10)),t.lineTo(a.x-r(0,t.lineWidth*n+5),a.y+r(0,t.lineWidth*n+10)),t.lineTo(a.x+r(0,t.lineWidth*n+5),a.y+r(0,t.lineWidth*n+10)),t.stroke()},e=>{b.save(t)})}),x=new p("strips",(e,t,n)=>{t.lineCap="round";let a=s(e,t.canvas);o(function(e){t.beginPath(),t.moveTo(a.x,a.y),a=s(e,t.canvas),t.lineTo(a.x+t.lineWidth*document.querySelector(".length-range .range-input").value+10,a.y),t.stroke()},e=>{b.save(t)})}),w=new p("Eraser",(e,t,n)=>{t.globalCompositeOperation="destination-out",f.fn(e,t,e=>{t.globalCompositeOperation="source-over"})}),E=new p("sprayer",(e,t,n)=>{const a=2*t.lineWidth+4,i=a*a*Math.PI,r=Math.ceil(i/30);let l=s(e,t.canvas);const u=setInterval(e=>{for(let e=0;e<r;e++){const e=c(a),n=document.querySelector(".length-range .range-input").value;t.fillRect(l.x+e.x,l.y+e.y,n,n)}},25);o(e=>{l=s(e,t.canvas)},e=>{clearInterval(u)})}),k=new p("text",(e,t)=>{var n=a("input",{type:"text",class:"text-field"}),o=s(e,t.canvas);n.style.position="absolute",n.style.top=o.y+95+"px",n.style.left=o.x+"px",t.canvas.parentNode.appendChild(n),n.focus(),n.addEventListener("keydown",function(e){13===e.keyCode&&(t.font=Math.max(12,t.lineWidth)+"px sans-serif",t.fillText(n.value,o.x,o.y+5),n.blur(),b.save(t)),27===e.keyCode&&n.blur()},!1),n.addEventListener("blur",function(){n.parentNode.removeChild(n)})});const L={pencil:f,fence:m,strips:x,hatching:y,sprayer:E,radial:g,text:k,eraser:w},C=a("ul",{class:"toolbar"});Object.keys(L).forEach(e=>{C.appendChild(a("li",{},L[e].el))});const S={tools:L,el:C,selected:"pencil"};i(C,e=>{e.preventDefault(),e.target.dataset.name&&(S.selected=e.target.dataset.name,u.el.dataset.tool=S.selected,v.modify(S.selected))});var T=S;const z={};z.edit=function(e){const t=a("button",{class:"btn btn-undo unavailable",href:"###"},"Undo"),n=a("button",{class:"btn btn-redo unavailable",href:"###"},"Redo");return i(t,t=>b.undo(e)),i(n,t=>b.redo(e)),a("div",{class:"menu-item redo-undo"},t,n)},z.reset=function(e){const t=a("button",{class:"btn btn-reset",href:"###"},"Clear");return i(t,function(t){e.clearRect(0,0,e.canvas.width,e.canvas.height)}),a("div",{class:"menu-item reset"},t)},z.save=function(e){const t=a("button",{class:"btn btn-download"},"Download");return i(t,t=>{let n=a("a",{href:e.canvas.toDataURL("image/png"),download:"painting"+Date.now(),target:"_blank"});document.body.appendChild(n),n.click()}),a("div",{class:"menu-item menu-download"},t)};const M=function(){const e=new window.FileReader;return(t,n)=>{e.readAsDataURL(t),e.addEventListener("load",t=>n(e.result))}}();z.openFile=function(e){const t=a("input",{accept:"image/*",class:"input-file",type:"file"});return t.addEventListener("change",n=>{M(t.files[0],t=>(function(e,t){const n=document.createElement("img");n.addEventListener("load",t=>{const a=e.fillStyle,s=e.lineWidth;e.canvas.width=n.width,e.canvas.height=n.height,e.drawImage(n,0,0),e.fillStyle=a,e.strokeStyle=a,e.lineWidth=s}),n.src=t})(e,t))}),a("div",{class:"menu-item menu-file"},t)};const W=a("div",{class:"menu"});Object.keys(z).forEach(e=>{W.appendChild(z[e](u.el.getContext("2d")))});var q={el:W};document.body.appendChild(function(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight){return u.el.width=e,u.el.height=t-80,a("div",{class:"paint-wrapper"},T.el,q.el,v.el,u.el)}());let O=a("a",{href:"http://ziox.xyz"},"Home"),j=a("a",{href:"https://github.com/jacobsun/canvas-painter"},"Source"),P=a("div",{class:"link"},O,j);document.body.appendChild(P)}]);