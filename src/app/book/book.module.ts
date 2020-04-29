import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookRoutingModule
  ],
  declarations: [BookComponent]
})
export class BookModule { }
