(self.webpackChunkphotosgram=self.webpackChunkphotosgram||[]).push([[5249],{5249:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Tab3PageModule:()=>h});var o=i(8583),n=i(665),a=i(8739),r=i(3083),s=i(4762),c=i(639),l=i(7660),u=i(9846),g=i(752);const m=function(e){return{"pick-avatar-seleccionado":e}};function p(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-slide"),c.TgZ(1,"ion-img",15),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().selectAvatar(t)}),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(1),c.MGl("src","assets/avatars/",e.img,""),c.Q6J("ngClass",c.VKq(2,m,e.seleccionado))}}let Z=(()=>{class e{constructor(e,t,i,o){this.userService=e,this.fb=t,this.uiService=i,this.post=o,this.avatars=[{img:"av-1.png",seleccionado:!0},{img:"av-2.png",seleccionado:!1},{img:"av-3.png",seleccionado:!1},{img:"av-4.png",seleccionado:!1},{img:"av-5.png",seleccionado:!1},{img:"av-6.png",seleccionado:!1},{img:"av-7.png",seleccionado:!1},{img:"av-8.png",seleccionado:!1}],this.avatarSlide={slidesPerView:3.5},this.userForm=this.createUserForm(),this.user={}}ngOnInit(){this.user=this.userService.getUser(),this.user&&this.patchValueUser()}patchValueUser(){const{avatar:e,email:t,name:i}=this.user;this.userForm.patchValue({avatar:e,email:t,name:i});const o=this.avatars.find(t=>t.img===e);this.selectAvatar(o)}logout(){return(0,s.mG)(this,void 0,void 0,function*(){this.post.pagePost=0,yield this.userService.logout()})}selectAvatar(e){this.avatars.forEach(e=>e.seleccionado=!1),e.seleccionado=!0,this.user.avatar=e.img,this.userForm.get("avatar").setValue(e.img)}updateUser(){return(0,s.mG)(this,void 0,void 0,function*(){if(this.userForm.invalid)return;const{email:e,name:t,avatar:i}=this.userForm.value,o=yield this.userService.updateUser({email:e,name:t,avatar:i});this.uiService.presentToast(o?"Updated Register":"Updated error")})}createUserForm(){return this.fb.group({email:["",n.kI.required],name:["",n.kI.required],avatar:[""]})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.K),c.Y36(n.qu),c.Y36(u.F),c.Y36(g.P))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-tab3"]],decls:39,vars:4,consts:[["no-border",""],["slot","end"],["color","danger",3,"click"],["slot","icon-only","name","exit"],["fxLayout","column","fxLayoutAlign","center center"],[1,"top-20"],["size","12",1,"ion-text-center"],[1,"img-avatar",3,"src"],[3,"options"],[4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["name","email","type","email","formControlName","email","required",""],["name","nombre","type","text","formControlName","name","required",""],[1,"ion-text-center"],["type","submit","color","tertiary","shape","round"],[1,"pick-avatar",3,"src","ngClass","click"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",1),c.TgZ(3,"ion-button",2),c.NdJ("click",function(){return t.logout()}),c._UZ(4,"ion-icon",3),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"ion-content"),c.TgZ(6,"div",4),c.TgZ(7,"ion-row",5),c.TgZ(8,"ion-col",6),c._UZ(9,"img",7),c.qZA(),c.qZA(),c.TgZ(10,"ion-row",5),c.TgZ(11,"ion-col",6),c.TgZ(12,"ion-label"),c.TgZ(13,"h1"),c._uU(14,"Actualizar perfil"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"ion-row"),c.TgZ(16,"ion-col"),c.TgZ(17,"h3"),c._uU(18,"Seleccione Avatar"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"ion-row"),c.TgZ(20,"ion-col"),c.TgZ(21,"ion-slides",8),c.YNc(22,p,2,4,"ion-slide",9),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"form",10),c.NdJ("ngSubmit",function(){return t.updateUser()}),c.TgZ(24,"ion-row"),c.TgZ(25,"ion-col"),c.TgZ(26,"ion-list"),c.TgZ(27,"ion-item"),c.TgZ(28,"ion-label"),c._uU(29,"Email"),c.qZA(),c._UZ(30,"ion-input",11),c.qZA(),c.TgZ(31,"ion-item"),c.TgZ(32,"ion-label"),c._uU(33,"Nombre"),c.qZA(),c._UZ(34,"ion-input",12),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"ion-row"),c.TgZ(36,"ion-col",13),c.TgZ(37,"ion-button",14),c._uU(38," Actualizar "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(9),c.Q6J("src","assets/avatars/"+t.user.avatar,c.LSH),c.xp6(12),c.Q6J("options",t.avatarSlide),c.xp6(1),c.Q6J("ngForOf",t.avatars),c.xp6(1),c.Q6J("formGroup",t.userForm))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.W2,r.Nd,r.wI,r.Q$,r.Hr,o.sg,n._Y,n.JL,n.sg,r.q_,r.Ie,r.pK,r.j9,n.JJ,n.u,n.Q7,r.A$,r.Xz,o.mk],styles:[".img-avatar[_ngcontent-%COMP%]{width:150px}.top-20[_ngcontent-%COMP%]{margin-top:20px}img[_ngcontent-%COMP%]{width:120px}.pick-avatar[_ngcontent-%COMP%]{width:80px;opacity:.3}.pick-avatar-seleccionado[_ngcontent-%COMP%]{transition:opacity .5s linear;opacity:1!important}"]}),e})();const d=[{path:"",component:Z}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Pc,o.ez,n.u5,a.Bz.forChild([{path:"",component:Z}]),v,n.UX]]}),e})()}}]);