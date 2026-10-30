import{Dr as e,Fo as t,L as n,Mo as r,Qi as i,U as a,ar as o,ea as s,ja as c,jo as l,jr as u,no as d,rr as f,ta as p}from"./three.core-cIDU-vzT.js";import{n as m}from"./three.module-PQpIiK0c.js";import{a as h,c as g,i as _,n as v,o as y,r as b,s as x}from"./index-CooNd1TG.js";var S=t(r(),1),C=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;C[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}var w=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function T(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function E(e){let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`Canvas 2D unavailable`);return t}function D(e,t){e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e.fill()}var O=e=>{let t=e.slice().sort((e,t)=>e-t);return t[Math.floor(t.length/2)]??0};function k(e,t,n,r,i){let a=T(n,r),o=T(n,r),s=new ImageData(n,r),c=new ImageData(n,r);for(let i=0;i<n*r;i++)s.data[i*4]=Math.round(e[i]*t[i]*255),s.data[i*4+3]=255,c.data[i*4]=Math.round(t[i]*255),c.data[i*4+3]=255;let l=new Float32Array(n*r),u=[a,o].map((e,t)=>{E(e).putImageData(t?c:s,0,0);let a=E(T(n,r));return a.filter=`blur(${i}px)`,a.drawImage(e,0,0),a.getImageData(0,0,n,r).data});for(let t=0;t<n*r;t++){let n=u[1][t*4];l[t]=n>2?u[0][t*4]/n:e[t]}return l}function A(e,t,n){let r=e.naturalWidth,i=e.naturalHeight,a=E(T(r,i));a.drawImage(e,0,0);let o=a.getImageData(0,0,r,i).data,s=E(T(r,i));s.fillStyle=`#000`,s.fillRect(0,0,r,i),s.fillStyle=`#fff`,D(s,t),s.fillStyle=`#000`,n.forEach(e=>D(s,e));let c=s.getImageData(0,0,r,i).data,l=[],u=[],d=[];for(let e=0;e<r*i;e+=7){if(c[e*4]<250)continue;let t=C[o[e*4]],n=C[o[e*4+1]],r=C[o[e*4+2]],i=t+n+r+1e-6;l.push(.2126*t+.7152*n+.0722*r),u.push(t/i),d.push(n/i)}let f=O(l)||.5,p=O(u),m=O(d),h=r*i,g=new Float32Array(h),_=new Float32Array(h);for(let e=0;e<h;e++){let t=c[e*4]/255,n=C[o[e*4]],r=C[o[e*4+1]],i=C[o[e*4+2]],a=(.2126*n+.7152*r+.0722*i)/f;if(_[e]=Math.min(2,a)/2,t===0)continue;let s=n+r+i+1e-6,l=1-w(.07,.11,Math.hypot(n/s-p,r/s-m)),u=w(.09,.17,a);g[e]=t*l*u}let v=k(_,g,r,i,.8),y=k(_,g,r,i,12),b=T(r,i),x=T(r,i),S=new ImageData(r,i),A=new ImageData(r,i);for(let e=0;e<h;e++)S.data[e*4]=Math.round(g[e]*255),S.data[e*4+3]=255,A.data[e*4]=Math.round(v[e]*255),A.data[e*4+1]=Math.round(y[e]*255),A.data[e*4+3]=255;let j=T(r,i);E(j).putImageData(S,0,0);let M=E(b);return M.filter=`blur(1px)`,M.drawImage(j,0,0),E(x).putImageData(A,0,0),{mask:b,shade:x}}var j=l();function M({width:e,height:t,config:n,onChange:r,onCommit:i,onReset:a}){let o=(0,S.useRef)(null),[s,c]=(0,S.useState)(null),l=(0,S.useRef)(n);l.current=n;let u=(0,S.useMemo)(()=>{let e=n.refSize,t=g(x(e),n.quad),r=[],i=Math.round(e/.5);for(let n=0;n<=i;n++){let a=n/i*e;r.push([y(t,[a,0]),y(t,[a,e])]),r.push([y(t,[0,a]),y(t,[e,a])])}return r},[n.quad,n.refSize]),d=n=>{let r=o.current,i=r?.getScreenCTM();if(!r||!i)return null;let a=new DOMPoint(n.clientX,n.clientY).matrixTransform(i.inverse());return[Math.round(Math.min(e,Math.max(0,a.x))),Math.round(Math.min(t,Math.max(0,a.y)))]},f=e=>{if(!s)return;let t=d(e);if(!t)return;let n=l.current;if(s.kind===`quad`){let e=n.quad.map((e,n)=>n===s.index?t:e);r({...n,quad:e})}else{let e=n.floor.map((e,n)=>n===s.index?t:e);r({...n,floor:e})}},p=()=>{s&&(c(null),i(l.current))},m=(e,t)=>n=>{n.preventDefault(),n.currentTarget.setPointerCapture?.(n.pointerId),c({kind:e,index:t})},h=Math.round(e/110);return(0,j.jsxs)(`div`,{className:`floor-editor`,children:[(0,j.jsxs)(`svg`,{ref:o,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`xMidYMid slice`,onPointerMove:f,onPointerUp:p,onPointerCancel:p,"aria-label":`ویرایشگر تنظیم کف`,children:[(0,j.jsx)(`polygon`,{points:n.floor.map(e=>e.join(`,`)).join(` `),className:`fe-floor`}),u.map(([e,t],n)=>(0,j.jsx)(`line`,{x1:e[0],y1:e[1],x2:t[0],y2:t[1],className:`fe-grid`},n)),(0,j.jsx)(`polygon`,{points:n.quad.map(e=>e.join(`,`)).join(` `),className:`fe-quad`}),n.floor.map(([e,t],n)=>(0,j.jsx)(`circle`,{cx:e,cy:t,r:h*.75,className:`fe-handle floor`,onPointerDown:m(`floor`,n)},`f${n}`)),n.quad.map(([e,t],n)=>(0,j.jsx)(`circle`,{cx:e,cy:t,r:h,className:`fe-handle quad`,onPointerDown:m(`quad`,n)},`q${n}`))]}),(0,j.jsxs)(`div`,{className:`fe-panel`,children:[(0,j.jsx)(`strong`,{children:`تنظیم کف عکس`}),(0,j.jsxs)(`p`,{children:[(0,j.jsx)(`i`,{className:`fe-dot quad`}),` نقاط طلایی را روی گوشه‌های یک مربع ۲×۲ متری کف بگذارید تا خطوط شبکه با خطوط دیوار هم‌راستا شوند.`]}),(0,j.jsxs)(`p`,{children:[(0,j.jsx)(`i`,{className:`fe-dot floor`}),` نقاط سفید محدوده کف را مشخص می‌کنند؛ پایه‌های تیره و مبلمان رنگی خودکار حذف می‌شوند.`]}),(0,j.jsx)(`button`,{type:`button`,className:`btn btn-outline btn-sm`,onClick:a,children:`بازگشت به تنظیم پیش‌فرض`})]})]})}var N={horizontal:0,vertical:Math.PI/2,diagonal:Math.PI/4},P=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,F=`
  uniform sampler2D uPhoto;
  uniform sampler2D uMask;
  uniform sampler2D uShade;
  uniform sampler2D uTileA;
  uniform sampler2D uTileB;
  uniform mat3 uH;
  uniform vec2 uImg;
  uniform float uRot;
  uniform float uScale;
  uniform vec2 uBlockA;
  uniform vec2 uBlockB;
  uniform float uGlossA;
  uniform float uGlossB;
  uniform float uHasA;
  uniform float uHasB;
  uniform vec3 uSwatchA;
  uniform float uSplit;
  uniform vec3 uSwatchB;
  varying vec2 vUv;

  vec3 tileColor(sampler2D tex, vec2 block, float has, vec3 swatch, vec2 r) {
    vec3 c = texture2D(tex, r / (block * uScale)).rgb;
    return mix(swatch, c, has);
  }

  void main() {
    vec3 photo = texture2D(uPhoto, vUv).rgb;
    float m = texture2D(uMask, vUv).r;
    vec2 px = vec2(vUv.x, 1.0 - vUv.y) * uImg;
    vec3 w = uH * vec3(px, 1.0);
    vec2 f = w.xy / (abs(w.z) < 1e-6 ? 1e-6 : w.z);
    float cs = cos(uRot);
    float sn = sin(uRot);
    vec2 r = vec2(f.x * cs + f.y * sn, -f.x * sn + f.y * cs);

    vec3 a = tileColor(uTileA, uBlockA, uHasA, uSwatchA, r);
    vec3 b = tileColor(uTileB, uBlockB, uHasB, uSwatchB, r);
    float useB = uSplit >= 0.0 ? step(vUv.x, uSplit) : 0.0;
    vec3 tile = mix(a, b, useB);
    float gloss = mix(uGlossA, uGlossB, useB);

    // سایه‌روشن عکس اصلی: دقیق برای سطح براق، نرم و بدون انعکاس واضح برای سطح مات
    vec2 sh = texture2D(uShade, vUv).rg * 2.0;
    float s = mix(min(sh.g, 1.3), sh.r, gloss);
    // نور پخش (آفتاب، سایه) رنگ کاشی را ضرب می‌کند؛ فقط درخشش‌های شدید روی سطح براق افزوده می‌شوند
    vec3 col = tile * min(s, 1.6) + vec3(max(s - 1.3, 0.0)) * 0.5 * gloss;

    if (uSplit >= 0.0) {
      float d = abs(vUv.x - uSplit) * uImg.x;
      col = mix(col, vec3(0.48, 0.33, 0.15), 1.0 - smoothstep(1.0, 2.2, d));
    }
    gl_FragColor = vec4(mix(photo, col, m), 1.0);
    #include <colorspace_fragment>
  }
`;function I(e){return new Promise((t,n)=>{let r=new Image;r.decoding=`async`,r.onload=()=>t(r),r.onerror=()=>n(Error(`load failed: ${e}`)),r.src=e})}function L(e){return new a(e)}function R({roomId:t,primary:r,secondary:l,orientation:y,scale:C,editing:w,captureRef:T,onContextLost:E,onStatus:D,labels:O}){let k=v[t],R=(0,S.useRef)(null),[z,B]=(0,S.useState)(()=>b(t)),[V,H]=(0,S.useState)(null),[U,W]=(0,S.useState)(null),[G,K]=(0,S.useState)(!1),q=(0,S.useRef)({onStatus:D,onContextLost:E});q.current={onStatus:D,onContextLost:E};let J=(0,S.useMemo)(()=>{let t={uPhoto:{value:null},uMask:{value:null},uShade:{value:null},uTileA:{value:null},uTileB:{value:null},uH:{value:new f},uImg:{value:new d(k.width,k.height)},uRot:{value:0},uScale:{value:1},uBlockA:{value:new d(2.4,2.4)},uBlockB:{value:new d(2.4,2.4)},uGlossA:{value:0},uGlossB:{value:0},uHasA:{value:0},uHasB:{value:0},uSwatchA:{value:new a},uSwatchB:{value:new a},uSplit:{value:-1}},n=new p({uniforms:t,vertexShader:P,fragmentShader:F,depthTest:!1,depthWrite:!1}),r=new u(2,2),i=new s;return i.add(new o(r,n)),{uniforms:t,material:n,geometry:r,scene:i,camera:new e(-1,1,1,-1,0,1),renderer:null,dirty:!0,versions:``}},[]);(0,S.useEffect)(()=>{let e=R.current;if(!e)return;let t;try{t=new m({antialias:!1,powerPreference:`high-performance`})}catch{K(!0),q.current.onStatus?.(`error`);return}t.outputColorSpace=i,t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.setSize(k.width,k.height,!1),t.domElement.className=`photo-canvas`,e.prepend(t.domElement),J.renderer=t;let n=e=>{e.preventDefault(),q.current.onContextLost?.()};t.domElement.addEventListener(`webglcontextlost`,n);let r=0,a=()=>{r=requestAnimationFrame(a);let e=J.uniforms,n=`${e.uTileA.value?.version??0}-${e.uTileB.value?.version??0}`;(J.dirty||n!==J.versions)&&e.uPhoto.value&&e.uMask.value&&(J.versions=n,J.dirty=!1,t.render(J.scene,J.camera))};return a(),T&&(T.current=()=>(t.render(J.scene,J.camera),t.domElement.toDataURL(`image/png`))),()=>{cancelAnimationFrame(r),T&&(T.current=null),t.domElement.removeEventListener(`webglcontextlost`,n),t.domElement.remove(),t.dispose(),J.renderer=null}},[J,k.width,k.height,T]),(0,S.useEffect)(()=>()=>{J.material.dispose(),J.geometry.dispose()},[J]),(0,S.useEffect)(()=>{let e=!0;return H(null),W(null),K(!1),B(b(t)),q.current.onStatus?.(`loading`),I(k.src).then(t=>e&&H(t)).catch(()=>{e&&(K(!0),q.current.onStatus?.(`error`))}),()=>{e=!1}},[t,k.src]),(0,S.useEffect)(()=>{if(!V)return;let e=new c(V);return e.colorSpace=i,e.needsUpdate=!0,J.uniforms.uPhoto.value=e,J.dirty=!0,()=>{e.dispose(),J.uniforms.uPhoto.value===e&&(J.uniforms.uPhoto.value=null)}},[V,J]);let Y=JSON.stringify(z.floor);(0,S.useEffect)(()=>{if(!V)return;let e=!0,t=window.setTimeout(()=>{try{let t=A(V,z.floor,z.exclude);e&&W(t)}catch{e&&(K(!0),q.current.onStatus?.(`error`))}},0);return()=>{e=!1,window.clearTimeout(t)}},[V,Y]),(0,S.useEffect)(()=>{if(!U)return;let e=new n(U.mask),t=new n(U.shade);for(let n of[e,t])n.colorSpace=``,n.generateMipmaps=!1;return J.uniforms.uMask.value=e,J.uniforms.uShade.value=t,J.dirty=!0,q.current.onStatus?.(`ready`),()=>{e.dispose(),t.dispose()}},[U,J]),(0,S.useEffect)(()=>{let e=g(z.quad,x(z.refSize));J.uniforms.uH.value.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]),J.dirty=!0},[z.quad,z.refSize,J]),(0,S.useEffect)(()=>{let e=J.uniforms,t=(t,n,r,i,a,o)=>{let s=t?.maps??null;e[n].value=s?.color??null,e[a].value=+!!s,s&&e[r].value.set(s.layout.cols*s.layout.tileU/100,s.layout.rows*s.layout.tileV/100),e[i].value=+(t?.product.finish===`gloss`),e[o].value.copy(L(t?.product.swatch??`#cccccc`))};t(r,`uTileA`,`uBlockA`,`uGlossA`,`uHasA`,`uSwatchA`),t(l??r,`uTileB`,`uBlockB`,`uGlossB`,`uHasB`,`uSwatchB`),e.uSplit.value=l?.5:-1,e.uRot.value=N[y],e.uScale.value=C,J.dirty=!0},[r,l,y,C,J]);let X=(e,n)=>{B(e),n&&h(t,e)};return(0,j.jsxs)(`div`,{className:`photo-scene`,ref:R,children:[G&&(0,j.jsxs)(`div`,{className:`viewport-message`,children:[(0,j.jsx)(`strong`,{children:`بارگذاری عکس فضا ناموفق بود`}),(0,j.jsx)(`p`,{children:`اتصال را بررسی کنید یا فضای دیگری را انتخاب کنید.`})]}),l&&O&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`span`,{className:`ab-tag photo-tag left`,children:O.secondary}),(0,j.jsx)(`span`,{className:`ab-tag photo-tag right`,children:O.primary})]}),w&&(0,j.jsx)(M,{width:k.width,height:k.height,config:z,onChange:e=>X(e,!1),onCommit:e=>X(e,!0),onReset:()=>B(_(t))})]})}export{R as default};