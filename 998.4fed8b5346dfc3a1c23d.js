"use strict";(self.webpackChunkApp_Prestamo_de_articulos=self.webpackChunkApp_Prestamo_de_articulos||[]).push([[998],{2998:(jt,y,s)=>{s.r(y),s.d(y,{PrestamosModule:()=>zt});var u=s(8583),N=s(4655),f=s(8239),l=s(3679),m=s(2789),p=s(9517),w=s(8052),O=s(8259),h=s.n(O),t=s(7716),S=s(2238),F=s(7358),E=s(4901),U=s(4699),Q=s(3738),A=s(1769),_=s(8295),T=s(9983),v=s(1095),x=s(6627),P=s(3220),M=s(1679);function k(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",20),t.TgZ(1,"div",21),t.TgZ(2,"button",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).addArticulo(r)}),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA(),t.qZA(),t.TgZ(5,"button",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).removeArticulo(r)}),t.TgZ(6,"mat-icon"),t._uU(7,"remove"),t.qZA(),t.qZA(),t.TgZ(8,"span",23),t._uU(9),t.qZA(),t._uU(10),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(9),t.hij(" ",e.Cantidad,""),t.xp6(1),t.hij(" ",e.Descripcion," ")}}function Y(o,i){if(1&o&&(t.TgZ(0,"div",17),t.TgZ(1,"ul",18),t.YNc(2,k,11,2,"li",19),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.articulosArray)}}function B(o,i){1&o&&(t.TgZ(0,"div",24),t.TgZ(1,"div",25),t.TgZ(2,"ul",18),t.TgZ(3,"li",20),t.TgZ(4,"h2"),t._uU(5,"A\xfan no se han agregado articulos"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())}const H=function(){return{title:"Confirmar prestamo",text:"\xbfEstas seguro de guardar este prestamo?",icon:"warning",confirmButtonText:"Confirmar",showCancelButton:!0,cancelButtonText:"Cancelar"}};let I=(()=>{class o{constructor(e,n,a,r,c,d,g){this.modalService=n,this.dialog=a,this.artSvc=r,this.userSvc=c,this.activeModal=d,this.prestamoSvc=g,this.inputUsuario=new l.NI({value:"",disabled:!0}),this.inputApellidos=new l.NI({value:"",disabled:!0}),this.inputComentarios=new l.NI,this.inputMatricula=new l.NI({value:"",disabled:!0}),this.date=new l.NI(new Date),this.userSearch="",this.articuloSearch="",this.userSelected={id:0,Nombres:"",Apellidos:"",MatriculaCodigo:"",rol:void 0},this.dataSource=new m.by,this.articulosArray=[],e.backdrop="static",e.keyboard=!1}ngOnInit(){this.inputUsuario.disable(),this.artSvc.getAll().subscribe(e=>{this.dataArticulos=e}),this.userSvc.getAll().subscribe(e=>{this.dataUsers=e})}getDate(e){return e.toLocaleDateString("en-GB")}openModal(e){const n=this.modalService.open(w.e,{size:"lg",scrollable:!0});"users"==e?(n.componentInstance.data=this.dataUsers,n.componentInstance.type="users",n.componentInstance.search=this.userSearch,n.result.then(a=>{a&&(console.log(a),this.userSelected=a)})):"articulos"==e&&(n.componentInstance.data=this.dataArticulos,n.componentInstance.type="articulos",n.componentInstance.search=this.articuloSearch,n.result.then(a=>{a&&(console.log(a),a.Cantidad=1,this.articulosArray.some(c=>c.id===a.id)||this.articulosArray.push(a))}))}openModalArticulos(){const e=this.modalService.open(w.e,{scrollable:!0,size:"lg"});e.componentInstance.dataArticulos=this.dataArticulos,e.componentInstance.type="articulos"}addArticulo(e){e.Cantidad<e.Stock&&(e.Cantidad=e.Cantidad+1)}removeArticulo(e){e.Cantidad>1?e.Cantidad=e.Cantidad-1:this.articulosArray=this.articulosArray.filter(n=>n!=e)}savePrestamo(){var e=this;return(0,f.Z)(function*(){const n=e.validateErrors();if(""===n){console.log("No hay errores");try{let a={articulosId:e.getIdArticulos(),cantidadArticulos:e.getCantidadArticulos(),userId:e.userSelected.id,fecha_limite:e.getDate(e.date.value),comentarios:e.inputComentarios.value},r=yield e.prestamoSvc.newPrestamo(a).toPromise();console.log("-----",r),"Prestamo creado"===r.message?(e.showConfirmado("Prestamo guardado correctamente"),console.log(r)):(e.showError("Algo ha salido mal"),console.log(r))}catch(a){e.showError("Algo ha salido mal al guardar el prestamo"),console.log(a)}}else e.showErrors(n)})()}validateErrors(){let e="",a=this.getDate(this.date.value).split("/"),c=this.getTodayDate().split("/"),d=new Date(parseInt(a[2]),parseInt(a[1])-1,parseInt(a[0])),g=new Date(parseInt(c[2]),parseInt(c[1])-1,parseInt(c[0]));return d.getTime()<g.getTime()?(e="Por favor no selecciones una fecha anterior al dia de hoy",e):0===this.userSelected.id?(e="No se ha seleccionado un usuario",e):(this.articulosArray.length<1&&(e="No se han agregado articulos"),e)}getTodayDate(){return(new Date).toLocaleDateString("en-GB")}showConfirmado(e){h().fire({icon:"success",title:e,didClose:this.reloadPage,showConfirmButton:!0})}reloadPage(){window.location.reload()}showError(e){h().fire({icon:"error",title:"Oops...",text:e})}showErrors(e){h().fire({icon:"error",title:"Ha ocurrido el siguiente error:",text:e})}getIdArticulos(){let e=[];for(let a=0;a<this.articulosArray.length;a++)e.push(this.articulosArray[a].id);return e.join()}getCantidadArticulos(){let e=[];for(const a of this.articulosArray)e.push(a.Cantidad);return e.join()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.NM),t.Y36(p.FF),t.Y36(S.uw),t.Y36(F.J),t.Y36(E.K),t.Y36(p.Kz),t.Y36(U.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-nuevo-prestamo"]],viewQuery:function(e,n){if(1&e&&t.Gf(m.BZ,5),2&e){let a;t.iGM(a=t.CRH())&&(n.table=a.first)}},features:[t._Bn([p.NM,p.FF])],decls:64,vars:16,consts:[[1,"inputData"],["appearance","fill",1,"form-fields"],["matInput","","autocomplete","off",3,"ngModel","ngModelChange","keyup.enter"],["mat-button","","matSuffix","","mat-stroked-button","","aria-label","search",3,"click"],[1,"form-fields"],["matInput","",3,"ngModel","formControl","ngModelChange"],["matInput","",3,"ngModel","ngModelChange","keyup.enter"],["class","listArticulos",4,"ngIf","ngIfElse"],["matInput","",3,"matDatepicker","formControl"],["matSuffix","",3,"for"],["disabled","false"],["dp3",""],["matInput","","rows","5",3,"formControl"],[1,"btn-actions"],["type","button",1,"btn","btn-danger",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-save",3,"swal","confirm"],["emptyArticulos",""],[1,"listArticulos"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"],[1,"articulos-title"],["mat-button","",1,"operation-button",3,"click"],[1,"badge","badge-primary"],[1,"row"],[1,"col-md-8"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card"),t.TgZ(1,"h1"),t._uU(2,"Nuevo prestamo de articulos"),t.qZA(),t._UZ(3,"mat-divider"),t._UZ(4,"br"),t.TgZ(5,"div",0),t.TgZ(6,"mat-form-field",1),t.TgZ(7,"mat-label"),t._uU(8,"Buscar usuario"),t.qZA(),t.TgZ(9,"input",2),t.NdJ("ngModelChange",function(r){return n.userSearch=r})("keyup.enter",function(){return n.openModal("users")}),t.qZA(),t.TgZ(10,"button",3),t.NdJ("click",function(){return n.openModal("users")}),t.TgZ(11,"mat-icon"),t._uU(12,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",0),t.TgZ(14,"mat-form-field",4),t.TgZ(15,"mat-label"),t._uU(16,"Nombre"),t.qZA(),t.TgZ(17,"input",5),t.NdJ("ngModelChange",function(r){return n.userSelected.Nombres=r}),t.qZA(),t.qZA(),t.TgZ(18,"mat-form-field",4),t.TgZ(19,"mat-label"),t._uU(20,"Apellidos"),t.qZA(),t.TgZ(21,"input",5),t.NdJ("ngModelChange",function(r){return n.userSelected.Apellidos=r}),t.qZA(),t.qZA(),t.TgZ(22,"mat-form-field",4),t.TgZ(23,"mat-label"),t._uU(24,"Matricula o Codigo"),t.qZA(),t.TgZ(25,"input",5),t.NdJ("ngModelChange",function(r){return n.userSelected.MatriculaCodigo=r}),t.qZA(),t.qZA(),t.qZA(),t._UZ(26,"mat-divider"),t._UZ(27,"br"),t.TgZ(28,"div",0),t.TgZ(29,"mat-form-field",1),t.TgZ(30,"mat-label"),t._uU(31,"Buscar articulo"),t.qZA(),t.TgZ(32,"input",6),t.NdJ("ngModelChange",function(r){return n.articuloSearch=r})("keyup.enter",function(){return n.openModal("articulos")}),t.qZA(),t.TgZ(33,"button",3),t.NdJ("click",function(){return n.openModal("articulos")}),t.TgZ(34,"mat-icon"),t._uU(35,"search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",0),t.YNc(37,Y,3,1,"div",7),t.qZA(),t._UZ(38,"br"),t.TgZ(39,"div",0),t.TgZ(40,"mat-form-field",1),t.TgZ(41,"mat-label"),t._uU(42,"Fecha de devolucion"),t.qZA(),t._UZ(43,"input",8),t._UZ(44,"mat-datepicker-toggle",9),t._UZ(45,"mat-datepicker",10,11),t.qZA(),t.qZA(),t._UZ(47,"mat-divider"),t._UZ(48,"br"),t.TgZ(49,"div",0),t.TgZ(50,"mat-form-field",1),t.TgZ(51,"mat-label"),t._uU(52,"Comentarios"),t.qZA(),t._UZ(53,"textarea",12),t.qZA(),t.qZA(),t._UZ(54,"mat-divider"),t._UZ(55,"br"),t.TgZ(56,"div",13),t.TgZ(57,"button",14),t.NdJ("click",function(){return n.reloadPage()}),t._uU(58," Cancelar "),t.qZA(),t.TgZ(59,"button",15),t.NdJ("confirm",function(){return n.savePrestamo()}),t._uU(60," Confirmar "),t.qZA(),t.qZA(),t.qZA(),t._UZ(61,"br"),t.YNc(62,B,6,0,"ng-template",null,16,t.W1O)),2&e){const a=t.MAs(46),r=t.MAs(63);t.xp6(9),t.Q6J("ngModel",n.userSearch),t.xp6(8),t.Q6J("ngModel",n.userSelected.Nombres)("formControl",n.inputUsuario),t.xp6(4),t.Q6J("ngModel",n.userSelected.Apellidos)("formControl",n.inputApellidos),t.xp6(4),t.Q6J("ngModel",n.userSelected.MatriculaCodigo)("formControl",n.inputMatricula),t.xp6(7),t.Q6J("ngModel",n.articuloSearch),t.xp6(5),t.Q6J("ngIf",n.articulosArray.length>=1)("ngIfElse",r),t.xp6(6),t.Q6J("matDatepicker",a)("formControl",n.date),t.xp6(1),t.Q6J("for",a),t.xp6(9),t.Q6J("formControl",n.inputComentarios),t.xp6(6),t.Q6J("swal",t.DdM(15,H))}},directives:[Q.a8,A.d,_.KE,_.hX,T.Nt,l.Fj,l.JJ,l.On,v.lW,_.R9,x.Hw,l.oH,u.O5,P.hl,P.nW,P.Mq,M.iL,u.sg],styles:[".search-form-field[_ngcontent-%COMP%]{width:60%;size:10%;margin-left:10px;padding:5px 10px;background-color:#f5f5f5;border-radius:5px}.content-form[_ngcontent-%COMP%]{justify-content:center;align-items:center}.form-fields[_ngcontent-%COMP%]{width:90%;size:10%}.inputData[_ngcontent-%COMP%]{width:100%;margin:20px}.form-modal[_ngcontent-%COMP%]{width:100%}.demo-table[_ngcontent-%COMP%]{width:100%}.demo-button-container[_ngcontent-%COMP%]{padding-bottom:16px}.demo-button[_ngcontent-%COMP%] + .demo-button[_ngcontent-%COMP%]{margin-left:8px}.btn-end[_ngcontent-%COMP%]{float:right}.btn-end[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}.operation-button[_ngcontent-%COMP%]{width:30px;height:30px;line-height:30px}.operation-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}.articulos-title[_ngcontent-%COMP%]{width:100%;font-size:medium}.listArticulos[_ngcontent-%COMP%]{width:100%}.btn-actions[_ngcontent-%COMP%]{margin-left:20px;margin-right:30px}.btn-save[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:40px}"]}),o})();var D=s(5939),b=s(9692),C=s(1494),z=s(5758),Z=s(171);function j(o,i){1&o&&t.GkF(0)}function R(o,i){if(1&o&&(t.TgZ(0,"mat-form-field",14),t.TgZ(1,"mat-label"),t._uU(2,"Fecha de devoluci\xf3n"),t.qZA(),t._UZ(3,"input",15),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("formControl",e.inputFechaDevolucion)}}function $(o,i){if(1&o&&(t.TgZ(0,"mat-form-field",14),t.TgZ(1,"mat-label"),t._uU(2,"Comentarios"),t.qZA(),t._UZ(3,"textarea",24),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("formControl",e.inputComentarios)}}function G(o,i){1&o&&t.GkF(0)}function L(o,i){1&o&&(t.TgZ(0,"ngb-alert",25),t.TgZ(1,"strong"),t._uU(2,"Se han eliminado los articulos"),t.qZA(),t.qZA()),2&o&&t.Q6J("dismissible",!1)}function K(o,i){if(1&o&&(t.TgZ(0,"li",26),t.TgZ(1,"div"),t.TgZ(2,"span",27),t._uU(3),t.qZA(),t._uU(4),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.cantidad),t.xp6(1),t.hij(" ",e.Articulo.Descripcion," ")}}function W(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"h2",6),t._uU(2,"Detalles de prestamo"),t.qZA(),t.TgZ(3,"button",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().activeModal.dismiss("Cross click")}),t.TgZ(4,"span",8),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",9),t.TgZ(7,"mat-accordion",10),t.TgZ(8,"mat-expansion-panel",11),t.NdJ("opened",function(){return t.CHM(e),t.oxw().setStep(0)}),t.TgZ(9,"mat-expansion-panel-header"),t.TgZ(10,"mat-panel-title"),t._uU(11," Datos del Prestamo "),t.qZA(),t.TgZ(12,"mat-panel-description"),t._uU(13," Detalles del usuario y del prestamo "),t.TgZ(14,"mat-icon"),t._uU(15,"account_circle"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"div",13),t.TgZ(18,"mat-form-field",14),t.TgZ(19,"mat-label"),t._uU(20,"Usuario"),t.qZA(),t._UZ(21,"input",15),t.qZA(),t.TgZ(22,"mat-form-field",14),t.TgZ(23,"mat-label"),t._uU(24,"Matricula o c\xf3digo"),t.qZA(),t._UZ(25,"input",15),t.qZA(),t.TgZ(26,"mat-form-field",14),t.TgZ(27,"mat-label"),t._uU(28,"Estatus"),t.qZA(),t._UZ(29,"input",15),t.qZA(),t.TgZ(30,"mat-form-field",14),t.TgZ(31,"mat-label"),t._uU(32,"Fecha de prestamo"),t.qZA(),t._UZ(33,"input",15),t.qZA(),t.TgZ(34,"mat-form-field",14),t.TgZ(35,"mat-label"),t._uU(36,"Hora"),t.qZA(),t._UZ(37,"input",15),t.qZA(),t.TgZ(38,"mat-form-field",14),t.TgZ(39,"mat-label"),t._uU(40,"Fecha limite"),t.qZA(),t._UZ(41,"input",15),t.qZA(),t.YNc(42,R,4,1,"mat-form-field",16),t.YNc(43,$,4,1,"mat-form-field",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"mat-expansion-panel",11),t.NdJ("opened",function(){return t.CHM(e),t.oxw().setStep(1)}),t.TgZ(45,"mat-expansion-panel-header"),t.TgZ(46,"mat-panel-title"),t._uU(47," Articulos "),t.qZA(),t.TgZ(48,"mat-panel-description"),t._uU(49," Detalles de los articulos del prestamo "),t.qZA(),t.qZA(),t.TgZ(50,"h2"),t._uU(51,"Articulos"),t.qZA(),t.YNc(52,G,1,0,"ng-container",17),t.YNc(53,L,3,1,"ng-template",null,18,t.W1O),t.TgZ(55,"div",12),t.TgZ(56,"div",19),t.TgZ(57,"ul",20),t.YNc(58,K,5,2,"li",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"div",22),t.TgZ(60,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().Close()}),t._uU(61," Cerrar "),t.qZA(),t.qZA()}if(2&o){const e=t.MAs(54),n=t.oxw(),a=t.MAs(6),r=t.MAs(8);t.xp6(8),t.Q6J("expanded",0===n.step),t.xp6(13),t.Q6J("formControl",n.inputUsuario),t.xp6(4),t.Q6J("formControl",n.inputMatricula),t.xp6(4),t.Q6J("formControl",n.inputEstatus),t.xp6(4),t.Q6J("formControl",n.inputFechaPrestamo),t.xp6(4),t.Q6J("formControl",n.inputHora),t.xp6(4),t.Q6J("formControl",n.inputFechaLimite),t.xp6(1),t.Q6J("ngIf",""!==n.dataPrestamo.Fecha_devolucion)("ngIfElse",a),t.xp6(1),t.Q6J("ngIf",""!==n.dataPrestamo.Comentarios)("ngIfElse",r),t.xp6(1),t.Q6J("expanded",1===n.step),t.xp6(8),t.Q6J("ngIf",n.articulosArray<1)("ngIfThen",e),t.xp6(6),t.Q6J("ngForOf",n.articulosArray)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",26),t.TgZ(1,"div"),t.TgZ(2,"button",30),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).addArticulo(r)}),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA(),t.qZA(),t.TgZ(5,"button",30),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).removeArticulo(r)}),t.TgZ(6,"mat-icon"),t._uU(7,"remove"),t.qZA(),t.qZA(),t.TgZ(8,"span",27),t._uU(9),t.qZA(),t._uU(10),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(9),t.Oqu(e.cantidad),t.xp6(1),t.hij(" ",e.Articulo.Descripcion," ")}}function V(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"h2",6),t._uU(2,"Detalles de prestamo"),t.qZA(),t.TgZ(3,"button",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().activeModal.dismiss("Cross click")}),t.TgZ(4,"span",8),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",9),t.TgZ(7,"div",12),t.TgZ(8,"div",13),t.TgZ(9,"mat-form-field",14),t.TgZ(10,"mat-label"),t._uU(11,"Usuario"),t.qZA(),t._UZ(12,"input",15),t.qZA(),t.TgZ(13,"mat-form-field",14),t.TgZ(14,"mat-label"),t._uU(15,"Matricula o c\xf3digo"),t.qZA(),t._UZ(16,"input",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",12),t.TgZ(18,"div",19),t.TgZ(19,"h2"),t._uU(20,"Articulos"),t.qZA(),t.TgZ(21,"ul",20),t.YNc(22,X,11,2,"li",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",12),t.TgZ(24,"div",13),t.TgZ(25,"mat-form-field",14),t.TgZ(26,"mat-label"),t._uU(27,"Comentarios"),t.qZA(),t.TgZ(28,"textarea",28),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().dataPrestamo.Comentarios=a}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",22),t.TgZ(30,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().Close()}),t._uU(31," Cancelar "),t.qZA(),t.TgZ(32,"button",29),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeModal()}),t._uU(33," Confirmar "),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(12),t.Q6J("formControl",e.inputUsuario),t.xp6(4),t.Q6J("formControl",e.inputMatricula),t.xp6(6),t.Q6J("ngForOf",e.articulosArray),t.xp6(6),t.Q6J("ngModel",e.dataPrestamo.Comentarios)}}function tt(o,i){1&o&&(t.TgZ(0,"h3"),t.TgZ(1,"span",31),t._uU(2,"A\xfan no se han regresado los articulos"),t.qZA(),t.qZA(),t._UZ(3,"mat-divider",32))}function et(o,i){1&o&&(t.TgZ(0,"h3"),t.TgZ(1,"span",33),t._uU(2,"No se agregaron comentarios"),t.qZA(),t.qZA(),t._UZ(3,"mat-divider",32))}let J=(()=>{class o{constructor(e){this.activeModal=e,this.step=1}ngOnInit(){this.articulosArray=this.dataPrestamo.articulosPrestamo,this.inputUsuario=new l.NI({value:this.dataPrestamo.Nombres,disabled:!0}),this.inputMatricula=new l.NI({value:this.dataPrestamo.MatriculaCodigo,disabled:!0}),this.inputEstatus=new l.NI({value:this.dataPrestamo.Estatus,disabled:!0}),this.inputFechaPrestamo=new l.NI({value:this.dataPrestamo.Fecha_prestamo,disabled:!0}),this.inputHora=new l.NI({value:this.dataPrestamo.Hora,disabled:!0}),this.inputFechaLimite=new l.NI({value:this.dataPrestamo.Fecha_limite,disabled:!0}),this.inputFechaDevolucion=new l.NI({value:this.dataPrestamo.Fecha_devolucion,disabled:!0}),this.inputComentarios=new l.NI({value:this.dataPrestamo.Comentarios,disabled:!0})}setStep(e){this.step=e}addArticulo(e){let n=this.articulosArray_r.find(a=>a.id===e.id);n&&(console.log("+++++++"),e.cantidad<n.cantidad&&(e.cantidad=e.cantidad+1))}removeArticulo(e){e.cantidad>=1&&(e.cantidad=e.cantidad-1)}closeModal(){this.activeModal.close(this.dataPrestamo)}Close(){this.activeModal.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.Kz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modal-details"]],viewQuery:function(e,n){if(1&e&&t.Gf(Z.pp,5),2&e){let a;t.iGM(a=t.CRH())&&(n.accordion=a.first)}},inputs:{dataPrestamo:"dataPrestamo",articulosArray_r:"articulosArray_r",type:"type"},decls:9,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["detailsTemplate",""],["confirmTemplate",""],["noDevuelto",""],["noComentarios",""],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["multi","",1,"example-headers-align"],[3,"expanded","opened"],[1,"row"],[1,"content-form"],[1,"form-fields"],["matInput","","type","text",3,"formControl"],["class","form-fields",4,"ngIf","ngIfElse"],[4,"ngIf","ngIfThen"],["emptyArticulos",""],[1,"col-md-8"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["matInput","",3,"formControl"],[3,"dismissible"],[1,"list-group-item","list-group-item-action"],[1,"badge","badge-primary"],["matInput","",3,"ngModel","ngModelChange"],["type","button","ngbAutofocus","",1,"btn","btn-success",3,"click"],["mat-button","",1,"operation-button",3,"click"],[1,"badge","badge-warning"],[1,"mats"],[1,"badge","badge-info"]],template:function(e,n){if(1&e&&(t.YNc(0,j,1,0,"ng-container",0),t.YNc(1,W,62,15,"ng-template",null,1,t.W1O),t.YNc(3,V,34,4,"ng-template",null,2,t.W1O),t.YNc(5,tt,4,0,"ng-template",null,3,t.W1O),t.YNc(7,et,4,0,"ng-template",null,4,t.W1O)),2&e){const a=t.MAs(2),r=t.MAs(4);t.Q6J("ngIf","showDetails"===n.type)("ngIfThen",a)("ngIfElse",r)}},directives:[u.O5,Z.pp,Z.ib,Z.yz,Z.yK,Z.u4,x.Hw,_.KE,_.hX,T.Nt,l.Fj,l.JJ,l.oH,u.sg,p.xm,l.On,v.lW,A.d],styles:[".content-form[_ngcontent-%COMP%]{justify-content:center;align-items:center;margin:20px;font-size:medium;width:100%}.form-fields[_ngcontent-%COMP%]{width:100%;size:10%}.badge[_ngcontent-%COMP%]{font-size:medium}.mats[_ngcontent-%COMP%]{margin-bottom:15px}"]}),o})();var ot=s(4885);function nt(o,i){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",26),t.TgZ(2,"h1"),t._uU(3,"Cargando registros..."),t.qZA(),t._UZ(4,"mat-divider"),t._UZ(5,"mat-progress-spinner",27),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("mode",e.mode)}}function at(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSearchClear()}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function it(o,i){1&o&&(t.TgZ(0,"th",29),t._uU(1,"ID"),t.qZA())}function rt(o,i){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.id)}}function st(o,i){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Matricula"),t.qZA())}function lt(o,i){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.MatriculaCodigo," ")}}function ct(o,i){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Nombres"),t.qZA())}function mt(o,i){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.Nombres)}}function dt(o,i){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Estatus"),t.qZA())}function ut(o,i){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",33),t._uU(2,"Confirmado"),t.qZA(),t.qZA())}function pt(o,i){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",34),t._uU(2,"Vigente"),t.qZA(),t.qZA())}function gt(o,i){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",35),t._uU(2,"Vencido"),t.qZA(),t.qZA())}function _t(o,i){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",36),t._uU(2," Entregado con retraso "),t.qZA(),t.qZA())}function ft(o,i){if(1&o&&(t.TgZ(0,"td",30),t.TgZ(1,"div",32),t.YNc(2,ut,3,0,"div",0),t.YNc(3,pt,3,0,"div",0),t.YNc(4,gt,3,0,"div",0),t.YNc(5,_t,3,0,"div",0),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Q6J("ngIf","Confirmado"===e.Estatus),t.xp6(1),t.Q6J("ngIf","Vigente"===e.Estatus),t.xp6(1),t.Q6J("ngIf","Vencido"===e.Estatus),t.xp6(1),t.Q6J("ngIf","Entregado con retraso"===e.Estatus)}}function Zt(o,i){1&o&&(t.TgZ(0,"th",29),t._uU(1," Fecha de prestamo "),t.qZA())}function ht(o,i){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.Fecha_prestamo)}}function Ct(o,i){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Fecha limite"),t.qZA())}function At(o,i){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.Fecha_limite)}}function Tt(o,i){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Detalles"),t.qZA())}function vt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",30),t.TgZ(1,"div",37),t.TgZ(2,"button",38),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().showDetailsModal(r)}),t._uU(3," Ver detalles "),t.qZA(),t.qZA(),t.qZA()}}function xt(o,i){1&o&&(t.TgZ(0,"th",31),t._uU(1,"Accion"),t.qZA())}function Pt(o,i){1&o&&t.GkF(0)}const bt=function(){return{title:"Confirmar devoluci\xf3n",text:"\xbfEstas seguro de confirmar la devoluci\xf3n de los articulos?",icon:"warning",confirmButtonText:"Confirmar",showCancelButton:!0,cancelButtonText:"Cancelar",showDenyButton:!0,denyButtonText:"Confirmar manualmente"}},yt=function(){return{title:"Cancelar prestamo",text:"\xbfEst\xe1s seguro de eliminar el prestamo seleccionado?",icon:"warning",confirmButtonText:"Eliminar",showCancelButton:!0,cancelButtonText:"Cancelar"}};function Nt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",37),t.TgZ(1,"button",41),t.NdJ("confirm",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().confirmPrestamo(a)})("deny",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().showConfirmDetails(a)}),t.TgZ(2,"mat-icon"),t._uU(3,"check"),t.qZA(),t.qZA(),t.TgZ(4,"button",42),t.NdJ("confirm",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().deletePrestamo(a)}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA(),t.qZA(),t.qZA()}2&o&&(t.xp6(1),t.Q6J("swal",t.DdM(2,bt)),t.xp6(3),t.Q6J("swal",t.DdM(3,yt)))}function wt(o,i){if(1&o&&(t.TgZ(0,"td",30),t.YNc(1,Pt,1,0,"ng-container",39),t.YNc(2,Nt,7,4,"ng-template",null,40,t.W1O),t.qZA()),2&o){const e=i.$implicit,n=t.MAs(3);t.oxw();const a=t.MAs(41);t.xp6(1),t.Q6J("ngIf","Confirmado"===e.Estatus||"Entregado con retraso"===e.Estatus)("ngIfThen",a)("ngIfElse",n)}}function Ut(o,i){1&o&&t._UZ(0,"tr",43)}function It(o,i){1&o&&t._UZ(0,"tr",44)}function Dt(o,i){if(1&o&&(t.TgZ(0,"tr",45),t.TgZ(1,"td",46),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.hij(' No hay resultados para "',e.searchKey,'" ')}}function Jt(o,i){if(1&o&&(t.TgZ(0,"div",26),t.TgZ(1,"h1"),t._uU(2,"Cargando registros..."),t.qZA(),t._UZ(3,"mat-divider"),t._UZ(4,"mat-progress-spinner",27),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("mode",e.mode)}}function Ot(o,i){1&o&&(t.TgZ(0,"button",47),t._uU(1,"Confirmado"),t.qZA())}const St=function(){return[10,15,25,100]};let Ft=(()=>{class o{constructor(e,n){this.prestamoSvc=e,this.modalService=n,this.isLoading=!0,this.mode="indeterminate",this.color="blue",this.displayedColumns=["id","Matricula","Nombres","Estatus","Fecha de prestamo","Fecha limite","Detalles","Accion"],this.dataSource=new m.by,this.sort=new C.YE}ngOnInit(){(0,z.D)([this.updateEstatus(),this.getAllData()]).subscribe(([e,n])=>{console.log(e),console.log("Exectuded 2 consults"),this.isLoading=!0,n&&(this.dataSource=new m.by(n),this.Sort(),this.isLoading=!1,console.log("Estatus changed"))})}ngAfterViewInit(){}updateEstatus(){return this.prestamoSvc.getEstatus()}getAllData(){return this.prestamoSvc.getAll()}getData(){var e=this;return(0,f.Z)(function*(){e.isLoading=!0,console.log("setted true");let n=yield e.prestamoSvc.getAll().toPromise();n&&(e.dataSource=new m.by(n),e.isLoading=!1,e.Sort(),console.log("Estatus changed"))})()}Sort(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;const e={active:"id",direction:"desc"};this.sort.active=e.active,this.sort.direction=e.direction,this.sort.sortChange.emit(e)}applyFilter(){this.dataSource.filter=this.searchKey.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}onSearchClear(){this.searchKey="",this.applyFilter()}showDetailsModal(e){console.log(e);const n=this.modalService.open(J,{scrollable:!0,size:"lg"});n.componentInstance.dataPrestamo=e,n.componentInstance.type="showDetails",n.result.then(a=>{a&&console.log(a)})}showConfirmDetails(e){var n=this;return(0,f.Z)(function*(){const a=[];e.articulosPrestamo.forEach(c=>a.push(Object.assign({},c)));const r=n.modalService.open(J,{scrollable:!0,size:"lg"});r.componentInstance.dataPrestamo=e,r.componentInstance.type="confirmDetails",r.componentInstance.articulosArray_r=a,r.result.then(function(){var c=(0,f.Z)(function*(d){if(d){let g={articulosId:n.getArticulosIds(d.articulosPrestamo),cantidadArticulos:n.getCantidadArticulos(d.articulosPrestamo),Estatus:n.getEstatus(d.Fecha_limite),Fecha_devolucion:n.getTodayDate(),Comentarios:d.Comentarios};console.log(d);let q=yield n.prestamoSvc.confirmarPrestamo(e.id,g).toPromise();"Prestamo actualizado"===q.message?(n.showConfirmado("Prestamo confirmado correctamente"),console.log(q)):(n.showError("Algo ha salido mal"),console.log(q))}});return function(d){return c.apply(this,arguments)}}())})()}confirmPrestamo(e){var n=this;return(0,f.Z)(function*(){let a={articulosId:n.getArticulosIds(e.articulosPrestamo),cantidadArticulos:n.getCantidadArticulos(e.articulosPrestamo),Estatus:n.getEstatus(e.Fecha_limite),Fecha_devolucion:n.getTodayDate(),Comentarios:e.Comentarios},r=yield n.prestamoSvc.confirmarPrestamo(e.id,a).toPromise();"Prestamo actualizado"===r.message?(n.showConfirmado("Prestamo confirmado correctamente"),console.log(r)):(n.showError("Algo ha salido mal"),console.log(r))})()}showConfirmado(e){h().fire({icon:"success",title:e,didClose:this.reloadPage,showConfirmButton:!0})}reloadPage(){window.location.reload()}showError(e){h().fire({icon:"error",title:"Oops...",text:e})}getArticulosIds(e){let n=[];for(const r of e)n.push(r.Articulo.id);return n.join()}getCantidadArticulos(e){let n=[];for(const r of e)n.push(r.cantidad);return n.join()}getEstatus(e){let n=e.split("/"),r=this.getTodayDate().split("/"),c=new Date(parseInt(n[2]),parseInt(n[1])-1,parseInt(n[0])),d=new Date(parseInt(r[2]),parseInt(r[1])-1,parseInt(r[0])),g="";return d.getTime()<=c.getTime()?(g="Confirmado",console.log("Confirmado")):d.getTime()>c.getTime()&&(g="Entregado con retraso",console.log("Entregado con retraso")),g}getTodayDate(){return(new Date).toLocaleDateString("en-GB")}deletePrestamo(e){var n=this;return(0,f.Z)(function*(){let a=yield n.prestamoSvc.deletePrestamo(e.id).toPromise();a&&(console.log(a),n.showConfirmado(a.message))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(U.K),t.Y36(p.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-prestamos"]],viewQuery:function(e,n){if(1&e&&(t.Gf(b.NW,5),t.Gf(C.YE,5)),2&e){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first),t.iGM(a=t.CRH())&&(n.sort=a.first)}},decls:42,vars:9,consts:[[4,"ngIf"],[3,"ngClass"],["showData",""],[1,"search-div"],[1,"search-form-field"],["matInput","","placeholder","Buscar","autocomplete","off",3,"ngModel","ngModelChange","keyup"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Matricula"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","Nombres"],["matColumnDef","Estatus"],["matColumnDef","Fecha de prestamo"],["matColumnDef","Fecha limite"],["matColumnDef","Detalles"],["matColumnDef","Accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["showLoading",""],["Confirmed",""],[1,"mat-elevation-z8","loading"],[1,"mat-spin",3,"mode"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"alertsMessages"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-info"],["role","alert",1,"alert","alert-danger"],["role","alert",1,"alert","alert-warning"],[1,"table-button-row"],["mat-flat-button","","color","primary",3,"click"],[4,"ngIf","ngIfThen","ngIfElse"],["notConfirmed",""],["mat-mini-fab","","color","primary","aria-label","Example icon button with a delete icon",1,"btn-actions",3,"swal","confirm","deny"],["mat-mini-fab","","color","warn",1,"btn-action",3,"swal","confirm"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","8",1,"mat-cell"],["mat-stroked-button","","color","primary"]],template:function(e,n){1&e&&(t._UZ(0,"br"),t.YNc(1,nt,6,1,"div",0),t.TgZ(2,"div",1,2),t.TgZ(4,"div",3),t.TgZ(5,"mat-form-field",4),t.TgZ(6,"input",5),t.NdJ("ngModelChange",function(r){return n.searchKey=r})("keyup",function(){return n.applyFilter()}),t.qZA(),t.YNc(7,at,3,0,"button",6),t.qZA(),t.qZA(),t.TgZ(8,"div",7),t.TgZ(9,"table",8),t.ynx(10,9),t.YNc(11,it,2,0,"th",10),t.YNc(12,rt,2,1,"td",11),t.BQk(),t.ynx(13,12),t.YNc(14,st,2,0,"th",13),t.YNc(15,lt,2,1,"td",11),t.BQk(),t.ynx(16,14),t.YNc(17,ct,2,0,"th",13),t.YNc(18,mt,2,1,"td",11),t.BQk(),t.ynx(19,15),t.YNc(20,dt,2,0,"th",10),t.YNc(21,ft,6,4,"td",11),t.BQk(),t.ynx(22,16),t.YNc(23,Zt,2,0,"th",10),t.YNc(24,ht,2,1,"td",11),t.BQk(),t.ynx(25,17),t.YNc(26,Ct,2,0,"th",10),t.YNc(27,At,2,1,"td",11),t.BQk(),t.ynx(28,18),t.YNc(29,Tt,2,0,"th",13),t.YNc(30,vt,4,0,"td",11),t.BQk(),t.ynx(31,19),t.YNc(32,xt,2,0,"th",13),t.YNc(33,wt,4,3,"td",11),t.BQk(),t.YNc(34,Ut,1,0,"tr",20),t.YNc(35,It,1,0,"tr",21),t.YNc(36,Dt,3,1,"tr",22),t.qZA(),t._UZ(37,"mat-paginator",23),t.qZA(),t.qZA(),t.YNc(38,Jt,5,1,"ng-template",null,24,t.W1O),t.YNc(40,Ot,2,0,"ng-template",null,25,t.W1O)),2&e&&(t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngClass",n.isLoading?"hidden":"visible"),t.xp6(4),t.Q6J("ngModel",n.searchKey),t.xp6(1),t.Q6J("ngIf",n.searchKey),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(8,St)))},directives:[u.O5,u.mk,_.KE,T.Nt,l.Fj,l.JJ,l.On,m.BZ,C.YE,m.w1,m.fO,m.Dz,m.as,m.nj,m.Ee,b.NW,A.d,ot.Ou,v.lW,_.R9,x.Hw,m.ge,C.nU,m.ev,M.iL,m.XQ,m.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.search-div[_ngcontent-%COMP%]{margin:20px}.search-form-field[_ngcontent-%COMP%]{width:80%;padding:5px 10px;background-color:#f5f5f5;border-radius:5px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%]{display:none}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{border-top:0px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:32px;width:32px}.btn-actions[_ngcontent-%COMP%]{margin:5px}.alertsMessages[_ngcontent-%COMP%]{text-align:center;margin:5px;width:80%}.loading[_ngcontent-%COMP%]{display:grid;place-items:center}"]}),o})();function Et(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().activo=r}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.Q6J("active",n.activo==e),t.xp6(1),t.hij("",e," ")}}function Qt(o,i){1&o&&t._UZ(0,"app-all-prestamos")}function kt(o,i){1&o&&t._UZ(0,"app-nuevo-prestamo")}const Yt=[{path:"",component:(()=>{class o{constructor(){this.links=["Prestamos","Nuevo"],this.activo=this.links[0]}ngOnInit(){}ngAfterViewInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-prestamos"]],decls:8,vars:3,consts:[[1,"container"],["mat-tab-nav-bar","","mat-align-tabs","center"],["style","text-decoration:none","mat-tab-link","",3,"active","click",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-tab-link","",2,"text-decoration","none",3,"active","click"]],template:function(e,n){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Prestamo de articulos"),t.qZA(),t._UZ(2,"mat-divider"),t.TgZ(3,"div",0),t.TgZ(4,"nav",1),t.YNc(5,Et,2,2,"a",2),t.qZA(),t.qZA(),t.YNc(6,Qt,1,0,"app-all-prestamos",3),t.YNc(7,kt,1,0,"app-nuevo-prestamo",3)),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.links),t.xp6(1),t.Q6J("ngIf","Prestamos"==n.activo),t.xp6(1),t.Q6J("ngIf","Nuevo"==n.activo))},directives:[A.d,D.BU,u.sg,u.O5,D.Nj,Ft,I],styles:[".search-div[_ngcontent-%COMP%]{margin:10px}.search-form-field[_ngcontent-%COMP%]{width:60%;margin-left:10px;padding:5px 10px;background-color:#f5f5f5;border-radius:5px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%]{display:none}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{border-top:0px}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:32px;width:32px}"]}),o})()},{path:"nuevo",component:I}];let Bt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[N.Bz.forChild(Yt)],N.Bz]}),o})();var Ht=s(484);let zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,Bt,Ht.q,C.JX,l.UX,l.u5,b.TU,p.IJ,M.ii.forRoot()]]}),o})()}}]);