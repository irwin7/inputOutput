import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostInputComponent } from './post-input/post-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
