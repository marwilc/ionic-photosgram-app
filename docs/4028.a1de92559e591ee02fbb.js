(self.webpackChunkphotosgram=self.webpackChunkphotosgram||[]).push([[4028],{4028:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CameraWeb:()=>n,Camera:()=>s});var r=a(8384),o=a(4021);class n extends r.Uw{async getPhoto(e){return new Promise(async(t,a)=>{if(e.webUseInput||e.source===o.oK.Photos)this.fileInputExperience(e,t);else if(e.source===o.oK.Prompt){let r=document.querySelector("pwa-action-sheet");r||(r=document.createElement("pwa-action-sheet"),document.body.appendChild(r)),r.header=e.promptLabelHeader||"Photo",r.cancelable=!1,r.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],r.addEventListener("onSelection",async r=>{0===r.detail?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)})}else this.cameraExperience(e,t,a)})}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const n=document.createElement("pwa-camera-modal");document.body.appendChild(n);try{await n.componentOnReady(),n.addEventListener("onPhoto",async o=>{const s=o.detail;null===s?a(new r.xz("User cancelled photos app")):s instanceof Error?a(s):t(await this._getCameraPhoto(s,e)),n.dismiss(),document.body.removeChild(n)}),n.present()}catch(o){this.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const r=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",o=>{const n=a.files[0];let s="jpeg";if("image/png"===n.type?s="png":"image/gif"===n.type&&(s="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const a=new FileReader;a.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:a.result,format:s});else if("base64"===e.resultType){const e=a.result.split(",")[1];t({base64String:e,format:s})}r()}),a.readAsDataURL(n)}else t({webPath:URL.createObjectURL(n),format:s}),r()})),a.accept="image/*",a.capture=!0,e.source===o.oK.Photos||e.source===o.oK.Prompt?a.removeAttribute("capture"):e.direction===o.GW.Front?a.capture="user":e.direction===o.GW.Rear&&(a.capture="environment"),a.click()}_getCameraPhoto(e,t){return new Promise((a,r)=>{const o=new FileReader,n=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:n}):(o.readAsDataURL(e),o.onloadend=()=>{const e=o.result;a("dataUrl"===t.resultType?{dataUrl:e,format:n}:{base64String:e.split(",")[1],format:n})},o.onerror=e=>{r(e)})})}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const s=new n}}]);