"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[110],{110:(k,m,i)=>{i.r(m),i.d(m,{TodoListModule:()=>T});var d=i(895),s=i(433),a=i(773),t=i(256);const p=function(e){return{"line-through":e}};function g(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",7)(1,"p",8),t._uU(2),t.qZA(),t.TgZ(3,"button",9),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.markDone(c))}),t._uU(4,"Done"),t.qZA(),t.TgZ(5,"button",10),t.NdJ("click",function(){const c=t.CHM(o).index,l=t.oxw();return t.KtG(l.removeTask(c))}),t._uU(6,"Remove"),t.qZA()()}if(2&e){const o=n.$implicit;t.xp6(1),t.Q6J("ngClass",t.VKq(2,p,o.completed)),t.xp6(1),t.Oqu(o.name)}}const h=[{path:"",component:(()=>{class e{constructor(o){this.formBuilder=o,this.taskList=[],this.completed=!1,this.newTodoForm=this.formBuilder.group({todoItem:""})}ngOnInit(){this.taskList=window.localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]}addTask(){this.taskList.push({id:this.taskList.length,name:this.newTodoForm.value.todoItem}),window.localStorage.setItem("task",JSON.stringify(this.taskList)),this.newTodoForm.reset()}markDone(o){o.completed=!o.completed,!0===o.completed?this.taskList.push(this.taskList.splice(this.taskList.indexOf(o),1)[0]):this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(o),1)[0])}removeTask(o){this.taskList.splice(o,1),window.localStorage.setItem("task",JSON.stringify(this.taskList))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-list"]],decls:9,vars:2,consts:[[1,"p-6","m-4","d-flex","shadow-lg","align-items-center","justify-content-center","border-4","rounded"],[1,"bg-white","rounded"],[1,"mb-4"],[1,"flex","mt-4",3,"formGroup","ngSubmit"],["placeholder","Add Todo","formControlName","todoItem",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","mr-4","text-muted"],["type","submit",1,"rounded","bg-primary","border-0","text-white","p-2"],["class","flex mb-4 items-center",4,"ngFor","ngForOf"],[1,"flex","mb-4","items-center"],[1,"w-full","text-grey-darkest",3,"ngClass"],[1,"p-2","ml-4","mr-2","border-2","rounded","text-white","border-0","bg-success",3,"click"],[1,"p-2","ml-2","border-2","rounded","text-white","border-0","bg-danger",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),t.NdJ("ngSubmit",function(){return r.addTask()}),t._UZ(4,"input",4),t.TgZ(5,"button",5),t._uU(6,"Add"),t.qZA()()(),t.TgZ(7,"div"),t.YNc(8,g,7,4,"div",6),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.newTodoForm),t.xp6(5),t.Q6J("ngForOf",r.taskList))},dependencies:[d.mk,d.sg,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".parent[_ngcontent-%COMP%]{position:relative;height:300px;width:500px;background-color:#0ff}.child[_ngcontent-%COMP%]{position:absolute;background-color:red;height:100px;width:100px;bottom:0;right:-20%}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,f,s.u5,s.UX]}),e})()}}]);