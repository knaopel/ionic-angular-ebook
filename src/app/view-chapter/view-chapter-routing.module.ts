import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChapterComponent } from './view-chapter.component';

const routes: Routes = [
  {
    path: '',
    component: ViewChapterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChapterRoutingModule { }
