(self.webpackChunkphotosgram=self.webpackChunkphotosgram||[]).push([[968],{968:(e,t,s)=>{"use strict";s.r(t),s.d(t,{StorageWeb:()=>i});var r=s(8384);class i extends r.Uw{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"==typeof e&&(this.group=e)}async get(e){return{value:this.impl.getItem(this.applyPrefix(e.key))}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){return{keys:this.rawKeys().map(e=>e.substring(this.prefix.length))}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],s=[],r="_cap_",i=Object.keys(this.impl).filter(e=>0===e.indexOf(r));for(const a of i){const i=a.substring(r.length),p=null!==(e=this.impl.getItem(a))&&void 0!==e?e:"",{value:n}=await this.get({key:i});"string"==typeof n?s.push(i):(await this.set({key:i,value:p}),t.push(i))}return{migrated:t,existing:s}}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter(e=>0===e.indexOf(this.prefix))}applyPrefix(e){return this.prefix+e}}}}]);