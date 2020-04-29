import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewChapterRoutingModule } from './view-chapter-routing.module';
import { ViewChapterComponent } from './view-chapter.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewChapterRoutingModule
  ],
  declarations: [ViewChapterComponent]
})
export class ViewChapterModule { }
