(self.webpackChunkphotosgram=self.webpackChunkphotosgram||[]).push([[1265],{4021:(o,t,e)=>{"use strict";e.d(t,{oK:()=>n,GW:()=>i,dk:()=>s});var n=(()=>(function(o){o.Prompt="PROMPT",o.Camera="CAMERA",o.Photos="PHOTOS"}(n||(n={})),n))(),i=(()=>(function(o){o.Rear="REAR",o.Front="FRONT"}(i||(i={})),i))(),s=(()=>(function(o){o.Uri="uri",o.Base64="base64",o.DataUrl="dataUrl"}(s||(s={})),s))()},1265:(o,t,e)=>{"use strict";e.r(t),e.d(t,{Tab2PageModule:()=>A});var n=e(8583),i=e(665),s=e(3083),r=e(8739),a=e(4762),c=e(8384),l=e(4021);const u=(0,c.fo)("Camera",{web:()=>e.e(4028).then(e.bind(e,4028)).then(o=>new o.CameraWeb)}),g=(0,c.fo)("Geolocation",{web:()=>e.e(3384).then(e.bind(e,3384)).then(o=>new o.GeolocationWeb)});var d=e(639),p=e(752),m=e(9075);function h(o,t){1&o&&d._UZ(0,"ion-spinner",14)}function Z(o,t){if(1&o&&(d.TgZ(0,"ion-col",15),d.TgZ(1,"ion-card"),d._UZ(2,"img",16),d.qZA(),d.qZA()),2&o){const o=t.$implicit,e=d.oxw();d.xp6(2),d.Q6J("src",e.sanitize(o),d.LSH)}}const f=[{path:"",component:(()=>{class o{constructor(o,t,e,n){this.postService=o,this.route=t,this.domSanitizer=e,this.platform=n,this.tempImages=[],this.post={coords:null,imgs:[],message:"",position:!1},this.loadingGeo=!1}getGeo(){return(0,a.mG)(this,void 0,void 0,function*(){if(!this.post.position)return void(this.post.coords=null);this.loadingGeo=!0;const o=yield g.getCurrentPosition();this.loadingGeo=!1,this.post.coords=`${o.coords.latitude},${o.coords.longitude}`})}createPost(){return(0,a.mG)(this,void 0,void 0,function*(){yield this.postService.createPost(this.post),this.post={message:"",coords:null,position:!1},this.tempImages=[],this.route.navigateByUrl("/main/tabs/tab1")})}imageProcess(o){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield u.getPhoto(o),e=t.webPath;this.postService.uploadImage(this.platform.is("cordova")?t.path:e),this.tempImages.push(e)})}showCamera(){return(0,a.mG)(this,void 0,void 0,function*(){this.imageProcess({resultType:l.dk.Uri,quality:60,correctOrientation:!0,source:l.oK.Camera})})}openGallery(){return(0,a.mG)(this,void 0,void 0,function*(){this.imageProcess({resultType:l.dk.Uri,quality:60,correctOrientation:!0,source:l.oK.Photos})})}sanitize(o){return this.domSanitizer.bypassSecurityTrustUrl(o)}}return o.\u0275fac=function(t){return new(t||o)(d.Y36(p.P),d.Y36(r.F0),d.Y36(m.H7),d.Y36(s.t4))},o.\u0275cmp=d.Xpm({type:o,selectors:[["app-tab2"]],decls:31,vars:5,consts:[["no-border",""],["slot","end"],["color","primary",3,"disabled","click"],["name","checkmark-outline"],["padding",""],["position","floating"],[3,"ngModel","ngModelChange"],["name","lines-small",4,"ngIf"],["slot","end",3,"ngModel","ngModelChange","ionChange"],["size","6"],["expand","full","shape","round",3,"click"],["slot","start","name","camera"],["slot","start","name","images"],["size","3",4,"ngFor","ngForOf"],["name","lines-small"],["size","3"],[3,"src"]],template:function(o,t){1&o&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-title"),d._uU(3," Nuevo Post "),d.qZA(),d.TgZ(4,"ion-buttons",1),d.TgZ(5,"ion-button",2),d.NdJ("click",function(){return t.createPost()}),d._uU(6," Compartir "),d._UZ(7,"ion-icon",3),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(8,"ion-content",4),d.TgZ(9,"ion-list"),d.TgZ(10,"ion-item"),d.TgZ(11,"ion-label",5),d._uU(12," Mensaje"),d.qZA(),d.TgZ(13,"ion-textarea",6),d.NdJ("ngModelChange",function(o){return t.post.message=o}),d.qZA(),d.qZA(),d.TgZ(14,"ion-list"),d.TgZ(15,"ion-item"),d.TgZ(16,"ion-label"),d._uU(17,"Posici\xf3n actual"),d.qZA(),d.YNc(18,h,1,0,"ion-spinner",7),d.TgZ(19,"ion-toggle",8),d.NdJ("ngModelChange",function(o){return t.post.position=o})("ionChange",function(){return t.getGeo()}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(20,"ion-row"),d.TgZ(21,"ion-col",9),d.TgZ(22,"ion-button",10),d.NdJ("click",function(){return t.showCamera()}),d._UZ(23,"ion-icon",11),d._uU(24," C\xe1mara "),d.qZA(),d.qZA(),d.TgZ(25,"ion-col",9),d.TgZ(26,"ion-button",10),d.NdJ("click",function(){return t.openGallery()}),d._UZ(27,"ion-icon",12),d._uU(28," Galer\xeda "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(29,"ion-row"),d.YNc(30,Z,3,1,"ion-col",13),d.qZA(),d.qZA()),2&o&&(d.xp6(5),d.Q6J("disabled",t.post.message.length<1||t.loadingGeo),d.xp6(8),d.Q6J("ngModel",t.post.message),d.xp6(5),d.Q6J("ngIf",t.loadingGeo),d.xp6(1),d.Q6J("ngModel",t.post.position),d.xp6(11),d.Q6J("ngForOf",t.tempImages))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.YG,s.gu,s.W2,s.q_,s.Ie,s.Q$,s.g2,s.j9,i.JJ,i.On,n.O5,s.ho,s.w,s.Nd,s.wI,n.sg,s.PQ,s.PM],styles:[""]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[s.Pc,n.ez,i.u5,T]]}),o})()}}]);