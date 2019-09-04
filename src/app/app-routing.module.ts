import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
