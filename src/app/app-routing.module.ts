import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 {
  path:'',
  redirectTo:'todo-list',
  pathMatch:'full'
 },
 {
  path:'todo-list',
  loadChildren: () => import('./components/todo-list/todo-list.module').then(m => m.TodoListModule)
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
