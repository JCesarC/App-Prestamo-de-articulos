"use strict";(self.webpackChunklaboratorio=self.webpackChunklaboratorio||[]).push([[834],{4901:(J,x,s)=>{s.d(x,{K:()=>d});var m=s(2340),I=s(205),e=s(5304),T=s(7716),M=s(1841);let d=(()=>{class c{constructor(u){this.http=u,this.api="http://localhost:3000"}getAll(){return this.http.get(`${m.N.API_URL}/users`).pipe()}getById(u){return this.http.get(`${m.N.API_URL}/users/${u}`).pipe((0,e.K)(this.handleError))}newUser(u){return this.http.post(`${m.N.API_URL}/users`,u).pipe((0,e.K)(this.handleError))}updateUser(u,a){return this.http.patch(`${m.N.API_URL}/users/${u}`,a).pipe((0,e.K)(this.handleError))}deleteUser(u){return this.http.delete(`${m.N.API_URL}/users/${u}`).pipe((0,e.K)(this.handleError))}handleError(u){let a="Error unknow";return u&&(a=`Error ${u.message}`),window.alert(a),(0,I._)(a)}}return c.\u0275fac=function(u){return new(u||c)(T.LFG(M.eN))},c.\u0275prov=T.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2834:(J,x,s)=>{s.r(x),s.d(x,{UsuariosModule:()=>ot});var m=s(8583),I=s(4655),e=s(7716),T=s(1769),M=s(5939),d=s(8239),c=s(2789),_=s(1494),u=s(9692),a=s(3679),Z=s(9517),E=s(3738),N=s(2613),g=s(8295),A=s(9983),C=s(1679);function P(t,n){if(1&t&&(e.TgZ(0,"mat-radio-button",20),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.s9C("value",o.rol),e.xp6(1),e.hij("",o.rol," ")}}function Y(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function S(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 5 caracteres en este campo"),e.qZA())}function Q(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}function D(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function k(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 3 caracteres en este campo"),e.qZA())}function F(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}function B(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function L(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 3 caracteres en este campo"),e.qZA())}function z(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}const K=function(){return{title:"Actualizar usuario",text:"\xbfEst\xe1s seguro de actualizar los datos del usuario?",icon:"warning",confirmButtonText:"Confirmar",showCancelButton:!0,cancelButtonText:"Cancelar"}};let G=(()=>{class t{constructor(o,r){this.activeModal=o,this.fb=r,this.userInfo=this.fb.group({userMatricula:["",a.kI.compose([a.kI.required,a.kI.minLength(6),a.kI.maxLength(60)])],userNombres:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])],userApellidos:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])]})}ngOnInit(){this.userInfo.get("userMatricula").setValue(this.dataUser.MatriculaCodigo),this.userInfo.get("userNombres").setValue(this.dataUser.Nombres),this.userInfo.get("userApellidos").setValue(this.dataUser.Apellidos)}updateUser(){let o=this.userInfo.get("userMatricula").value,p={nombres:this.userInfo.get("userNombres").value,apellidos:this.userInfo.get("userApellidos").value,matriculaCodigo:o,rol:this.dataRol.find(f=>f.rol===this.rol)};console.log(p),this.activeModal.close(p)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(Z.Kz),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-edit"]],inputs:{rol:"rol",dataUser:"dataUser",dataRol:"dataRol"},decls:38,vars:16,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"moda-body"],[1,"user-formul"],[1,"rol-class"],[1,"rol-section"],[3,"ngModel","ngModelChange"],["class","rol-margin",3,"value",4,"ngFor","ngForOf"],["autocomplete","off",3,"name","formGroup"],[1,"inputData"],[1,"form-registro"],["formControlName","userMatricula","matInput","","placeholder","Matricula o c\xf3digo del usuario","type","text"],[4,"ngIf"],["formControlName","userNombres","matInput","","placeholder","Nombre(s)s","type","text"],["matInput","","formControlName","userApellidos","placeholder","Apellidos","type","text"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button","ngbAutofocus","",1,"btn","btn-primary",3,"disabled","swal","confirm"],[1,"rol-margin",3,"value"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",1),e._uU(2,"Editar Usuario"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return r.activeModal.dismiss("Cross click")}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"mat-card",5),e.TgZ(8,"div",6),e.TgZ(9,"span"),e._uU(10,"Seleccione el Rol del usuario"),e.qZA(),e.TgZ(11,"section",7),e.TgZ(12,"mat-radio-group",8),e.NdJ("ngModelChange",function(l){return r.rol=l}),e.YNc(13,P,2,2,"mat-radio-button",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"form",10),e.TgZ(15,"div",11),e.TgZ(16,"mat-form-field",12),e._UZ(17,"input",13),e.YNc(18,Y,2,0,"mat-error",14),e.YNc(19,S,2,0,"mat-error",14),e.YNc(20,Q,2,0,"mat-error",14),e.qZA(),e.qZA(),e.TgZ(21,"div",11),e.TgZ(22,"mat-form-field",12),e._UZ(23,"input",15),e.YNc(24,D,2,0,"mat-error",14),e.YNc(25,k,2,0,"mat-error",14),e.YNc(26,F,2,0,"mat-error",14),e.qZA(),e.qZA(),e.TgZ(27,"div",11),e.TgZ(28,"mat-form-field",12),e._UZ(29,"input",16),e.YNc(30,B,2,0,"mat-error",14),e.YNc(31,L,2,0,"mat-error",14),e.YNc(32,z,2,0,"mat-error",14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",17),e.TgZ(34,"button",18),e.NdJ("click",function(){return r.activeModal.dismiss()}),e._uU(35," Cancelar "),e.qZA(),e.TgZ(36,"button",19),e.NdJ("confirm",function(){return r.updateUser()}),e._uU(37," Actualizar "),e.qZA(),e.qZA()),2&o&&(e.xp6(12),e.Q6J("ngModel",r.rol),e.xp6(1),e.Q6J("ngForOf",r.dataRol),e.xp6(1),e.Q6J("name",r.userInfo)("formGroup",r.userInfo),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("maxlength")),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("maxlength")),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("maxlength")),e.xp6(4),e.Q6J("disabled",!r.userInfo.valid)("swal",e.DdM(15,K)))},directives:[E.a8,N.VQ,a.JJ,a.On,m.sg,a._Y,a.JL,a.sg,g.KE,a.Fj,A.Nt,a.u,m.O5,C.iL,N.U0,g.TO],styles:[".rol-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.rol-class[_ngcontent-%COMP%]{margin:20px}.rol-margin[_ngcontent-%COMP%]{margin:0 10px}.form-registro[_ngcontent-%COMP%]{width:90%;size:10%}.inputData[_ngcontent-%COMP%]{width:100%;margin:20px}"]}),t})();var j=s(8259),O=s.n(j),R=s(4901),v=s(2340),H=s(205),q=s(5304),W=s(1841);let y=(()=>{class t{constructor(o){this.http=o,this.api="http://localhost:3000"}getAll(){return this.http.get(`${v.N.API_URL}/rol`).pipe()}newRol(o){return this.http.post(`${v.N.API_URL}/rol`,o).pipe((0,q.K)(this.handleError))}getById(o){return this.http.get(`${v.N.API_URL}/rol/${o}`).pipe((0,q.K)(this.handleError))}updateRol(o,r){return this.http.patch(`${v.N.API_URL}/rol/${o}`,r).pipe((0,q.K)(this.handleError))}deleteRol(o){return this.http.delete(`${v.N.API_URL}/rol/${o}`).pipe((0,q.K)(this.handleError))}handleError(o){let r="Error unknow";return o&&(r=`Error ${o.message}`),window.alert(r),(0,H._)(r)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(W.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=s(1095),w=s(6627);function V(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){return e.CHM(o),e.oxw().onSearchClear()}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA(),e.qZA()}}function X(t,n){1&t&&(e.TgZ(0,"th",20),e._uU(1,"Id"),e.qZA())}function ee(t,n){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Oqu(o.id)}}function te(t,n){1&t&&(e.TgZ(0,"th",20),e._uU(1,"Nombres"),e.qZA())}function oe(t,n){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Oqu(o.Nombres)}}function re(t,n){1&t&&(e.TgZ(0,"th",20),e._uU(1,"Apellidos"),e.qZA())}function ne(t,n){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Oqu(o.Apellidos)}}function ae(t,n){1&t&&(e.TgZ(0,"th",20),e._uU(1," Matricula o Codigo "),e.qZA())}function ie(t,n){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.hij(" ",o.MatriculaCodigo," ")}}function se(t,n){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Rol"),e.qZA())}function le(t,n){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Oqu(o.rol.rol)}}function ce(t,n){1&t&&(e.TgZ(0,"th",22),e._uU(1,"Accion"),e.qZA())}const me=function(t){return{title:t,text:"Al eliminar \xe9ste usuario se eliminaran inmediatemente los prestamos a nombre de este usuario",icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,cancelButtonText:"Cancelar"}};function pe(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"td",21),e.TgZ(1,"div",23),e.TgZ(2,"button",24),e.NdJ("click",function(){const l=e.CHM(o).$implicit;return e.oxw().editModal(l)}),e.TgZ(3,"mat-icon"),e._uU(4,"edit"),e.qZA(),e.qZA(),e.TgZ(5,"button",25),e.NdJ("confirm",function(){const l=e.CHM(o).$implicit;return e.oxw().deleteUser(l)}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(5),e.Q6J("swal",e.VKq(1,me,"\xbfEst\xe1s seguro de eliminar al usuario "+o.Nombres+" "+o.Apellidos+"?"))}}function de(t,n){1&t&&e._UZ(0,"tr",26)}function fe(t,n){1&t&&e._UZ(0,"tr",27)}function ge(t,n){if(1&t&&(e.TgZ(0,"tr",28),e.TgZ(1,"td",29),e._uU(2),e.qZA(),e.qZA()),2&t){const o=e.oxw();e.xp6(2),e.hij(' No hay resultados para "',o.searchKey,'" ')}}const _e=function(){return[10,15,25,100]};let he=(()=>{class t{constructor(o,r,i){this.userSvc=o,this.modalService=r,this.rolSvc=i,this.displayedColumns=["id","Nombres","Apellidos","Matricula","Rol","Accion"],this.dataSource=new c.by,this.sort=new _.YE,this.userSvc.getAll().subscribe(l=>{this.dataSource=new c.by(l),this.Sort()})}ngOnInit(){}ngAfterViewInit(){this.Sort()}Sort(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;const o={active:"id",direction:"desc"};this.sort.active=o.active,this.sort.direction=o.direction,this.sort.sortChange.emit(o)}applyFilter(){this.dataSource.filter=this.searchKey.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}onSearchClear(){this.searchKey="",this.applyFilter()}editModal(o){var r=this;return(0,d.Z)(function*(){let i=yield r.rolSvc.getAll().toPromise();if(i){const l=r.modalService.open(G,{scrollable:!0,size:"lg"});l.componentInstance.dataRol=i,l.componentInstance.dataUser=o,l.componentInstance.rol=o.rol.rol,l.result.then(function(){var p=(0,d.Z)(function*(f){if(f){let U=yield r.userSvc.updateUser(o.id,f).toPromise();U&&r.showConfirmado(U.message)}});return function(f){return p.apply(this,arguments)}}())}})()}deleteUser(o){var r=this;return(0,d.Z)(function*(){console.log(o);let i=yield r.userSvc.deleteUser(o.id).toPromise();i&&(console.log(i),r.showConfirmado("Se ha eliminado un usuario"))})()}showConfirmado(o){O().fire({icon:"success",title:o,didClose:this.reloadPage,showConfirmButton:!0})}reloadPage(){window.location.reload()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(R.K),e.Y36(Z.FF),e.Y36(y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-all-usuarios"]],viewQuery:function(o,r){if(1&o&&(e.Gf(_.YE,5),e.Gf(u.NW,5)),2&o){let i;e.iGM(i=e.CRH())&&(r.sort=i.first),e.iGM(i=e.CRH())&&(r.paginator=i.first)}},decls:28,vars:7,consts:[[1,"search-div"],[1,"search-form-field"],["matInput","","placeholder","Buscar","autocomplete","off",3,"ngModel","ngModelChange","keyup"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Nombres"],["matColumnDef","Apellidos"],["matColumnDef","Matricula"],["matColumnDef","Rol"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","Accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"table-button-row"],["mat-mini-fab","","color","primary",1,"btn-action",3,"click"],["mat-mini-fab","","color","warn",1,"btn-action",3,"swal","confirm"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","8",1,"mat-cell"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-form-field",1),e.TgZ(2,"input",2),e.NdJ("ngModelChange",function(l){return r.searchKey=l})("keyup",function(){return r.applyFilter()}),e.qZA(),e.YNc(3,V,3,0,"button",3),e.qZA(),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"table",5),e.ynx(6,6),e.YNc(7,X,2,0,"th",7),e.YNc(8,ee,2,1,"td",8),e.BQk(),e.ynx(9,9),e.YNc(10,te,2,0,"th",7),e.YNc(11,oe,2,1,"td",8),e.BQk(),e.ynx(12,10),e.YNc(13,re,2,0,"th",7),e.YNc(14,ne,2,1,"td",8),e.BQk(),e.ynx(15,11),e.YNc(16,ae,2,0,"th",7),e.YNc(17,ie,2,1,"td",8),e.BQk(),e.ynx(18,12),e.YNc(19,se,2,0,"th",13),e.YNc(20,le,2,1,"td",8),e.BQk(),e.ynx(21,14),e.YNc(22,ce,2,0,"th",13),e.YNc(23,pe,8,3,"td",8),e.BQk(),e.YNc(24,de,1,0,"tr",15),e.YNc(25,fe,1,0,"tr",16),e.YNc(26,ge,3,1,"tr",17),e.qZA(),e._UZ(27,"mat-paginator",18),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngModel",r.searchKey),e.xp6(1),e.Q6J("ngIf",r.searchKey),e.xp6(2),e.Q6J("dataSource",r.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",r.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",r.displayedColumns),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(6,_e)))},directives:[g.KE,A.Nt,a.Fj,a.JJ,a.On,m.O5,c.BZ,_.YE,c.w1,c.fO,c.Dz,c.as,c.nj,c.Ee,u.NW,b.lW,g.R9,w.Hw,c.ge,_.nU,c.ev,C.iL,c.XQ,c.Gk],styles:[".search-div[_ngcontent-%COMP%]{margin:20px}.search-form-field[_ngcontent-%COMP%]{width:80%;margin-left:10px;padding:5px 10px;background-color:#f5f5f5;border-radius:5px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%]{display:none}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{border-top:0px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:32px;width:32px}table[_ngcontent-%COMP%]{width:100%}.btn-action[_ngcontent-%COMP%]{margin:10px}"]}),t})();function Ze(t,n){if(1&t&&(e.TgZ(0,"mat-radio-button",17),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.s9C("value",o.rol),e.xp6(1),e.hij("",o.rol," ")}}function Ce(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"section",14),e.TgZ(1,"mat-radio-group",15),e.NdJ("ngModelChange",function(i){return e.CHM(o),e.oxw().rol=i}),e.YNc(2,Ze,2,2,"mat-radio-button",16),e.qZA(),e.qZA()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngModel",o.rol),e.xp6(1),e.Q6J("ngForOf",o.dataRol)}}function Te(t,n){1&t&&(e.TgZ(0,"p"),e.TgZ(1,"ngb-alert",18),e.TgZ(2,"strong"),e._uU(3,"No se han agregado roles. "),e.qZA(),e._uU(4," Agregalos desde el apartado de operaciones. "),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("dismissible",!1))}function Ae(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function ve(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"No hay roles disponibles para asignar"),e.qZA())}function Ue(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 5 caracteres en este campo"),e.qZA())}function xe(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}function Ie(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function Me(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 3 caracteres en este campo"),e.qZA())}function Ne(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}function qe(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function be(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 3 caracteres en este campo"),e.qZA())}function Ee(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}const ye=function(){return{title:"Registro de nuevo usuario",text:"\xbfEst\xe1s seguro de guardar un nuevo registro con los datos proporcionados?",icon:"warning",confirmButtonText:"Confirmar",showCancelButton:!0,cancelButtonText:"Cancelar"}};let Re=(()=>{class t{constructor(o,r,i){this.rolSvc=o,this.userSvc=r,this.fb=i,this.dataRol=[],this.userInfo=this.fb.group({userMatricula:["",a.kI.compose([a.kI.required,a.kI.minLength(6),a.kI.maxLength(60)])],userNombres:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])],userApellidos:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])]})}ngOnInit(){this.getDataRol()}validRols(){return o=>0===this.dataRol.length?{emptyRols:"not rols"}:null}getDataRol(){var o=this;return(0,d.Z)(function*(){let r=yield o.rolSvc.getAll().toPromise();r&&(o.dataRol=r,o.rol=o.dataRol[0].rol)})()}saveUser(){var o=this;return(0,d.Z)(function*(){let r=o.userInfo.get("userMatricula").value,i=o.userInfo.get("userNombres").value,f={nombres:i,apellidos:o.userInfo.get("userApellidos").value,matriculaCodigo:r,rol:o.dataRol.find(rt=>rt.rol===o.rol)};console.log(f);let U=yield o.userSvc.newUser(f).toPromise();"Usuario creado"===U.message?(o.showConfirmado("Usuario creado correctamente"),console.log(U)):console.log("errorrrrs"),console.log(i)})()}showConfirmado(o){O().fire({icon:"success",title:o,didClose:this.reloadPage,showConfirmButton:!0})}reloadPage(){window.location.reload()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y),e.Y36(R.K),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nuevo-usuario"]],decls:37,vars:17,consts:[[1,"user-formul"],[1,"rol-class"],["class","rol-section",4,"ngIf","ngIfElse"],["emptyRols",""],["autocomplete","off",3,"name","formGroup"],[1,"inputData"],[1,"form-registro"],["formControlName","userMatricula","matInput","","placeholder","Matricula o c\xf3digo del usuario","type","text"],[4,"ngIf"],["matInput","","formControlName","userNombres","placeholder","Nombre(s)","type","text"],["matInput","","formControlName","userApellidos","placeholder","Apellidos","type","text"],[1,"btn-actions"],["mat-raised-button","","color","warn",1,"btn-delete",3,"click"],["mat-raised-button","","color","primary",1,"btn-save",3,"swal","disabled","confirm"],[1,"rol-section"],[3,"ngModel","ngModelChange"],["class","rol-margin",3,"value",4,"ngFor","ngForOf"],[1,"rol-margin",3,"value"],[3,"dismissible"]],template:function(o,r){if(1&o&&(e.TgZ(0,"div"),e.TgZ(1,"mat-card",0),e._UZ(2,"br"),e.TgZ(3,"h1"),e._uU(4,"Registrar nuevo usuario"),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"div",1),e.TgZ(7,"span"),e._uU(8,"Seleccione el Rol del usuario"),e.qZA(),e.YNc(9,Ce,3,2,"section",2),e.YNc(10,Te,5,1,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(12,"form",4),e.TgZ(13,"div",5),e.TgZ(14,"mat-form-field",6),e._UZ(15,"input",7),e.YNc(16,Ae,2,0,"mat-error",8),e.YNc(17,ve,2,0,"mat-error",8),e.YNc(18,Ue,2,0,"mat-error",8),e.YNc(19,xe,2,0,"mat-error",8),e.qZA(),e.qZA(),e.TgZ(20,"div",5),e.TgZ(21,"mat-form-field",6),e._UZ(22,"input",9),e.YNc(23,Ie,2,0,"mat-error",8),e.YNc(24,Me,2,0,"mat-error",8),e.YNc(25,Ne,2,0,"mat-error",8),e.qZA(),e.qZA(),e.TgZ(26,"div",5),e.TgZ(27,"mat-form-field",6),e._UZ(28,"input",10),e.YNc(29,qe,2,0,"mat-error",8),e.YNc(30,be,2,0,"mat-error",8),e.YNc(31,Ee,2,0,"mat-error",8),e.qZA(),e.qZA(),e.TgZ(32,"div",11),e.TgZ(33,"button",12),e.NdJ("click",function(){return r.reloadPage()}),e._uU(34," Cancelar "),e.qZA(),e.TgZ(35,"button",13),e.NdJ("confirm",function(){return r.saveUser()}),e._uU(36," Guardar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const i=e.MAs(11);e.xp6(9),e.Q6J("ngIf",r.dataRol.length>=1)("ngIfElse",i),e.xp6(3),e.Q6J("name",r.userInfo)("formGroup",r.userInfo),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("emptyRols")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userMatricula").hasError("maxlength")),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userNombres").hasError("maxlength")),e.xp6(4),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.userInfo.get("userApellidos").hasError("maxlength")),e.xp6(4),e.Q6J("swal",e.DdM(16,ye))("disabled",!r.userInfo.valid||r.dataRol.length<1)}},directives:[E.a8,T.d,m.O5,a._Y,a.JL,a.sg,g.KE,a.Fj,A.Nt,a.JJ,a.u,b.lW,C.iL,N.VQ,a.On,m.sg,N.U0,Z.xm,g.TO],styles:[".rol-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.rol-class[_ngcontent-%COMP%]{margin:20px}.rol-margin[_ngcontent-%COMP%]{margin:0 10px}.form-registro[_ngcontent-%COMP%]{width:90%;size:10%}.btn-actions[_ngcontent-%COMP%]{margin-right:20px}.btn-save[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:20px}.inputData[_ngcontent-%COMP%]{width:100%;margin:20px}"]}),t})();var h=s(171);function we(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function Je(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 5 caracteres en este campo"),e.qZA())}function Pe(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}const Ye=function(){return{title:"Actualizar rol",text:"\xbfEst\xe1s seguro de actualizar los datos del rol?",icon:"warning",confirmButtonText:"Actualizar",showCancelButton:!0,cancelButtonText:"Cancelar"}};let Se=(()=>{class t{constructor(o,r){this.activeModal=o,this.fb=r,this.rolInfo=this.fb.group({rolDescripcion:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])]})}ngOnInit(){this.rolInfo.get("rolDescripcion").setValue(this.dataRol.rol)}updateRol(){let o={rol:this.rolInfo.get("rolDescripcion").value};this.activeModal.close(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(Z.Kz),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-rol"]],inputs:{dataRol:"dataRol"},decls:20,vars:8,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["autocomplete","off",3,"name","formGroup"],[1,"inputData"],[1,"form-rol"],["type","text","formControlName","rolDescripcion","matInput","","placeholder","Descripcion del rol"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["mat-raised-button","","color","primary",1,"btn-save",3,"disabled","swal","confirm"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Actualizar Rol"),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return r.activeModal.dismiss("Cross click")}),e.TgZ(4,"span",2),e._uU(5,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"mat-card"),e.TgZ(8,"form",4),e.TgZ(9,"div",5),e.TgZ(10,"mat-form-field",6),e._UZ(11,"input",7),e.YNc(12,we,2,0,"mat-error",8),e.YNc(13,Je,2,0,"mat-error",8),e.YNc(14,Pe,2,0,"mat-error",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"button",10),e.NdJ("click",function(){return r.activeModal.dismiss()}),e._uU(17," Cancelar "),e.qZA(),e.TgZ(18,"button",11),e.NdJ("confirm",function(){return r.updateRol()}),e._uU(19," Actualizar "),e.qZA(),e.qZA()),2&o&&(e.xp6(8),e.Q6J("name",r.rolInfo)("formGroup",r.rolInfo),e.xp6(4),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("maxlength")),e.xp6(4),e.Q6J("disabled",!r.rolInfo.valid)("swal",e.DdM(7,Ye)))},directives:[E.a8,a._Y,a.JL,a.sg,g.KE,a.Fj,A.Nt,a.JJ,a.u,m.O5,b.lW,C.iL,g.TO],styles:[".inputData[_ngcontent-%COMP%]{width:100%;margin:20px}.form-rol[_ngcontent-%COMP%]{width:90%;size:10%}"]}),t})();function Qe(t,n){1&t&&(e.TgZ(0,"ul",12),e.TgZ(1,"li",13),e.TgZ(2,"h2"),e._uU(3,"A\xfan no se han agregado roles al sistema"),e.qZA(),e.qZA(),e.qZA())}const ke=function(t){return{title:t,text:"Al eliminarlo se eliminaran inmediatamente todos los usuarios con ese Rol",icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,cancelButtonText:"Cancelar"}};function Fe(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"li",13),e.TgZ(1,"div",15),e.TgZ(2,"button",16),e.NdJ("click",function(){const l=e.CHM(o).$implicit;return e.oxw(2).editRol(l)}),e.TgZ(3,"mat-icon"),e._uU(4,"edit"),e.qZA(),e.qZA(),e.TgZ(5,"button",17),e.NdJ("confirm",function(){const l=e.CHM(o).$implicit;return e.oxw(2).deleteRol(l)}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA(),e.qZA(),e._uU(8),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(5),e.Q6J("swal",e.VKq(2,ke,"\xbfEst\xe1s seguro eliminar el rol: "+o.rol+"?")),e.xp6(3),e.hij(" ",o.rol," ")}}function Be(t,n){if(1&t&&(e.TgZ(0,"ul",12),e.YNc(1,Fe,9,4,"li",14),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.rolsArray)}}function Le(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Es necesario rellenar este campo"),e.qZA())}function ze(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se requieren minimo 5 caracteres en este campo"),e.qZA())}function $e(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Se alcanz\xf3 el limite de caracteres permitidos para este campo"),e.qZA())}const Ke=function(){return{title:"Registro de nuevo rol",text:"\xbfEst\xe1s seguro de crear un nuevo rol?",icon:"warning",confirmButtonText:"Confirmar",showCancelButton:!0,cancelButtonText:"Cancelar"}};let Ge=(()=>{class t{constructor(o,r,i){this.rolSvc=o,this.fb=r,this.modalService=i,this.rolInfo=this.fb.group({rolDescripcion:["",a.kI.compose([a.kI.required,a.kI.minLength(3),a.kI.maxLength(60)])]}),this.rolsArray=[]}ngOnInit(){this.getRols()}ngAfterViewInit(){this.accordion.openAll()}getRols(){var o=this;return(0,d.Z)(function*(){let r=yield o.rolSvc.getAll().toPromise();r&&(o.rolsArray=r),yield o.accordion.openAll()})()}saveRol(){var o=this;return(0,d.Z)(function*(){let i={rol:o.rolInfo.get("rolDescripcion").value},l=yield o.rolSvc.newRol(i).toPromise();l&&(o.showConfirmado(l.message),o.rolInfo.get("rolDescripcion").setValue(""),yield o.getRols())})()}showConfirmado(o){O().fire({icon:"success",title:o,showConfirmButton:!0})}editRol(o){var r=this;return(0,d.Z)(function*(){const i=r.modalService.open(Se,{scrollable:!0,size:"lg"});i.componentInstance.dataRol=o,i.result.then(function(){var l=(0,d.Z)(function*(p){if(p){console.log(p);let f=yield r.rolSvc.updateRol(o.id,p).toPromise();f&&(r.showConfirmado(f.message),yield r.getRols())}});return function(p){return l.apply(this,arguments)}}())})()}deleteRol(o){var r=this;return(0,d.Z)(function*(){let i=yield r.rolSvc.deleteRol(o.id).toPromise();i&&(r.showConfirmado(i.message),yield r.getRols())})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y),e.Y36(a.qu),e.Y36(Z.FF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-operaciones-usuario"]],viewQuery:function(o,r){if(1&o&&e.Gf(h.pp,5),2&o){let i;e.iGM(i=e.CRH())&&(r.accordion=i.first)}},decls:34,vars:10,consts:[["multi","",1,"headers-align"],["emptyRol",""],[1,"row"],[1,"col-md-12"],["class","list-group",4,"ngIf","ngIfElse"],["autocomplete","off",3,"name","formGroup"],[1,"inputData"],[1,"form-rol"],["type","text","formControlName","rolDescripcion","matInput","","placeholder","Descripcion del rol"],[4,"ngIf"],[1,"btn-actions"],["mat-raised-button","","color","primary",1,"btn-save",3,"disabled","swal","confirm"],[1,"list-group"],[1,"list-group-item","list-group-item-action"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"rols-title"],["mat-button","",1,"operation-button",3,"click"],["mat-button","","color","warn",1,"operation-button",3,"swal","confirm"]],template:function(o,r){if(1&o&&(e.TgZ(0,"mat-accordion",0),e.TgZ(1,"mat-expansion-panel"),e.TgZ(2,"mat-expansion-panel-header"),e.TgZ(3,"mat-panel-title"),e._uU(4," Rols "),e.qZA(),e.TgZ(5,"mat-panel-description"),e._uU(6,"Detalles de los roles registrados "),e.TgZ(7,"mat-icon"),e._uU(8,"account_circle"),e.qZA(),e.qZA(),e.qZA(),e.YNc(9,Qe,4,0,"ng-template",null,1,e.W1O),e.TgZ(11,"div",2),e.TgZ(12,"div",3),e.YNc(13,Be,2,1,"ul",4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"mat-expansion-panel"),e.TgZ(15,"mat-expansion-panel-header"),e.TgZ(16,"mat-panel-title"),e._uU(17," Nuevo Rol "),e.qZA(),e.TgZ(18,"mat-panel-description"),e._uU(19,"Registrar nuevo rol en el sistema "),e.TgZ(20,"mat-icon"),e._uU(21,"add"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div"),e.TgZ(23,"form",5),e.TgZ(24,"div",6),e.TgZ(25,"mat-form-field",7),e._UZ(26,"input",8),e.YNc(27,Le,2,0,"mat-error",9),e.YNc(28,ze,2,0,"mat-error",9),e.YNc(29,$e,2,0,"mat-error",9),e.qZA(),e.qZA(),e._UZ(30,"div",10),e.qZA(),e.qZA(),e.TgZ(31,"mat-action-row"),e.TgZ(32,"button",11),e.NdJ("confirm",function(){return r.saveRol()}),e._uU(33," Guardar "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const i=e.MAs(10);e.xp6(13),e.Q6J("ngIf",r.rolsArray.length>=1)("ngIfElse",i),e.xp6(10),e.Q6J("name",r.rolInfo)("formGroup",r.rolInfo),e.xp6(4),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",r.rolInfo.get("rolDescripcion").hasError("maxlength")),e.xp6(3),e.Q6J("disabled",!r.rolInfo.valid)("swal",e.DdM(9,Ke))}},directives:[h.pp,h.ib,h.yz,h.yK,h.u4,w.Hw,m.O5,a._Y,a.JL,a.sg,g.KE,a.Fj,A.Nt,a.JJ,a.u,h.VG,b.lW,C.iL,m.sg,g.TO],styles:[".headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.inputData[_ngcontent-%COMP%]{width:100%;margin:20px}.form-rol[_ngcontent-%COMP%]{width:90%;size:10%}"]}),t})();function je(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"a",4),e.NdJ("click",function(){const l=e.CHM(o).$implicit;return e.oxw().activo=l}),e._uU(1),e.qZA()}if(2&t){const o=n.$implicit,r=e.oxw();e.Q6J("active",r.activo==o),e.xp6(1),e.hij("",o," ")}}function He(t,n){1&t&&e._UZ(0,"app-all-usuarios")}function We(t,n){1&t&&e._UZ(0,"app-nuevo-usuario")}function Ve(t,n){1&t&&e._UZ(0,"app-operaciones-usuario")}const Xe=[{path:"",component:(()=>{class t{constructor(){this.links=["Usuarios","Nuevo","Operaciones"],this.activo=this.links[0]}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-usuarios"]],decls:9,vars:4,consts:[[1,"container"],["mat-tab-nav-bar","","mat-align-tabs","center"],["style","text-decoration:none","mat-tab-link","",3,"active","click",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-tab-link","",2,"text-decoration","none",3,"active","click"]],template:function(o,r){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Control de Usuarios"),e.qZA(),e._UZ(2,"mat-divider"),e.TgZ(3,"div",0),e.TgZ(4,"nav",1),e.YNc(5,je,2,2,"a",2),e.qZA(),e.qZA(),e.YNc(6,He,1,0,"app-all-usuarios",3),e.YNc(7,We,1,0,"app-nuevo-usuario",3),e.YNc(8,Ve,1,0,"app-operaciones-usuario",3)),2&o&&(e.xp6(5),e.Q6J("ngForOf",r.links),e.xp6(1),e.Q6J("ngIf","Usuarios"==r.activo),e.xp6(1),e.Q6J("ngIf","Nuevo"==r.activo),e.xp6(1),e.Q6J("ngIf","Operaciones"==r.activo))},directives:[T.d,M.BU,m.sg,m.O5,M.Nj,he,Re,Ge],styles:[".search-div[_ngcontent-%COMP%]{margin:10px}.search-form-field[_ngcontent-%COMP%]{width:60%;margin-left:10px;padding:5px 10px;background-color:#f5f5f5;border-radius:5px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%]{display:none}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{border-top:0px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:32px;width:32px}table[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let et=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[I.Bz.forChild(Xe)],I.Bz]}),t})();var tt=s(484);let ot=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,et,u.TU,_.JX,tt.q,a.u5,a.UX,Z.IJ,C.ii.forRoot()]]}),t})()}}]);