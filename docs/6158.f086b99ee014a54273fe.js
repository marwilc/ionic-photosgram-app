(self.webpackChunkphotosgram=self.webpackChunkphotosgram||[]).push([[6158],{6158:(i,o,e)=>{"use strict";e.r(o),e.d(o,{LoginPageModule:()=>h});var n=e(8583),t=e(665),s=e(3083),r=e(8739),a=e(4762),l=e(5319),c=e(639),g=e(7660),d=e(9846);const u=["slideMain"],m=function(i){return{"pick-avatar-seleccionado":i}};function Z(i,o){if(1&i){const i=c.EpF();c.TgZ(0,"ion-slide"),c.TgZ(1,"ion-img",13),c.NdJ("click",function(){const o=c.CHM(i).$implicit;return c.oxw().selectAvatar(o)}),c.qZA(),c.qZA()}if(2&i){const i=o.$implicit;c.xp6(1),c.MGl("src","/assets/avatars/",i.img,""),c.Q6J("ngClass",c.VKq(2,m,i.seleccionado))}}const p=[{path:"",component:(()=>{class i{constructor(i,o,e,n){this.fb=i,this.user=o,this.navCtrl=e,this.ui=n,this.loginForm=this.createLoginForm(),this.registerForm=this.createRegisterForm(),this.avatars=[{img:"av-1.png",seleccionado:!0},{img:"av-2.png",seleccionado:!1},{img:"av-3.png",seleccionado:!1},{img:"av-4.png",seleccionado:!1},{img:"av-5.png",seleccionado:!1},{img:"av-6.png",seleccionado:!1},{img:"av-7.png",seleccionado:!1},{img:"av-8.png",seleccionado:!1}],this.avatarSlide={slidesPerView:3.5},this.sub=new l.w}ngOnInit(){setTimeout(()=>{this.slides.lockSwipes(!0)},100)}login(){if(this.loginForm.invalid)return;const{email:i,password:o}=this.loginForm.value;this.sub.add(this.user.login(i,o).subscribe(i=>(0,a.mG)(this,void 0,void 0,function*(){i.ok?this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0}):yield this.ui.informAlert("User And Password incorrects")}),i=>(0,a.mG)(this,void 0,void 0,function*(){yield this.ui.informAlert("User And Password incorrects")})))}register(){if(this.registerForm.invalid)return;const{email:i,password:o,avatar:e,name:n}=this.registerForm.value;this.sub.add(this.user.register({email:i,password:o,avatar:e,name:n}).subscribe(i=>(0,a.mG)(this,void 0,void 0,function*(){i.ok?this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0}):yield this.ui.informAlert("User And Password incorrects")}),i=>(0,a.mG)(this,void 0,void 0,function*(){yield this.ui.informAlert("User And Password incorrects")})))}goToLogin(){this.slides.lockSwipes(!1),this.slides.slideTo(0),this.slides.lockSwipes(!0)}goToRegister(){this.slides.lockSwipes(!1),this.slides.slideTo(1),this.slides.lockSwipes(!0)}selectAvatar(i){this.avatars.forEach(i=>i.seleccionado=!1),i.seleccionado=!0,this.registerForm.get("avatar").setValue(i.img)}createLoginForm(){return this.fb.group({email:["",t.kI.required],password:["",t.kI.required]})}createRegisterForm(){return this.fb.group({email:["",t.kI.required],password:["",t.kI.required],name:["",t.kI.required],avatar:["av-1.png",t.kI.required]})}}return i.\u0275fac=function(o){return new(o||i)(c.Y36(t.qu),c.Y36(g.K),c.Y36(s.SH),c.Y36(d.F))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-login"]],viewQuery:function(i,o){if(1&i&&c.Gf(u,5),2&i){let i;c.iGM(i=c.CRH())&&(o.slides=i.first)}},decls:60,vars:4,consts:[[1,"mainSlide"],["slideMain",""],[3,"formGroup","ngSubmit"],["fixed",""],["src","/assets/avatars/av-1.png"],["name","email","type","email","formControlName","email","required",""],["name","password","type","password","formControlName","password","required",""],["size","12"],["type","submit","expand","full","color","tertiary","shape","round"],["shape","round","expand","full","fill","outline","color","tertiary",3,"click"],[3,"options"],[4,"ngFor","ngForOf"],["name","nombre","type","text","formControlName","name","required",""],[1,"pick-avatar",3,"src","ngClass","click"]],template:function(i,o){1&i&&(c.TgZ(0,"ion-content"),c.TgZ(1,"ion-slides",0,1),c.TgZ(3,"ion-slide"),c.TgZ(4,"form",2),c.NdJ("ngSubmit",function(){return o.login()}),c.TgZ(5,"ion-grid",3),c.TgZ(6,"ion-row"),c.TgZ(7,"ion-col"),c._UZ(8,"img",4),c.qZA(),c.qZA(),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col"),c.TgZ(11,"ion-list"),c.TgZ(12,"ion-item"),c.TgZ(13,"ion-label"),c._uU(14,"Email"),c.qZA(),c._UZ(15,"ion-input",5),c.qZA(),c.TgZ(16,"ion-item"),c.TgZ(17,"ion-label"),c._uU(18,"Password"),c.qZA(),c._UZ(19,"ion-input",6),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"ion-row"),c.TgZ(21,"ion-col",7),c.TgZ(22,"ion-button",8),c._uU(23," Login "),c.qZA(),c.qZA(),c.TgZ(24,"ion-col",7),c.TgZ(25,"ion-button",9),c.NdJ("click",function(){return o.goToRegister()}),c._uU(26," Registrarme "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(27,"ion-slide"),c.TgZ(28,"ion-grid",3),c.TgZ(29,"ion-row"),c.TgZ(30,"ion-col"),c.TgZ(31,"h3"),c._uU(32,"Seleccione Avatar"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(33,"ion-row"),c.TgZ(34,"ion-col"),c.TgZ(35,"ion-slides",10),c.YNc(36,Z,2,4,"ion-slide",11),c.qZA(),c.qZA(),c.qZA(),c.TgZ(37,"form",2),c.NdJ("ngSubmit",function(){return o.register()}),c.TgZ(38,"ion-row"),c.TgZ(39,"ion-col"),c.TgZ(40,"ion-list"),c.TgZ(41,"ion-item"),c.TgZ(42,"ion-label"),c._uU(43,"Email"),c.qZA(),c._UZ(44,"ion-input",5),c.qZA(),c.TgZ(45,"ion-item"),c.TgZ(46,"ion-label"),c._uU(47,"Nombre"),c.qZA(),c._UZ(48,"ion-input",12),c.qZA(),c.TgZ(49,"ion-item"),c.TgZ(50,"ion-label"),c._uU(51,"Password"),c.qZA(),c._UZ(52,"ion-input",6),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(53,"ion-row"),c.TgZ(54,"ion-col",7),c.TgZ(55,"ion-button",8),c._uU(56," Crear usuario "),c.qZA(),c.qZA(),c.TgZ(57,"ion-col",7),c.TgZ(58,"ion-button",9),c.NdJ("click",function(){return o.goToLogin()}),c._uU(59," Ingresar "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&i&&(c.xp6(4),c.Q6J("formGroup",o.loginForm),c.xp6(31),c.Q6J("options",o.avatarSlide),c.xp6(1),c.Q6J("ngForOf",o.avatars),c.xp6(1),c.Q6J("formGroup",o.registerForm))},directives:[s.W2,s.Hr,s.A$,t._Y,t.JL,t.sg,s.jY,s.Nd,s.wI,s.q_,s.Ie,s.Q$,s.pK,s.j9,t.JJ,t.u,t.Q7,s.YG,n.sg,s.Xz,n.mk],styles:[".mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%]{width:120px}.pick-avatar[_ngcontent-%COMP%]{width:80px;opacity:.3}.pick-avatar-seleccionado[_ngcontent-%COMP%]{transition:opacity .5s linear;opacity:1!important}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),i})(),h=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[n.ez,t.u5,s.Pc,A,t.UX,t.u5]]}),i})()}}]);