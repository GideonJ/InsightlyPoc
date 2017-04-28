import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdIconModule, MdInputModule,
  MdMenuModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule, MdSelectModule
} from "@angular/material";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ApiService} from "app/services/api-service";
import { ProjectDetailEditorComponent } from './components/project-detail-editor/project-detail-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailEditorComponent
  ],
  entryComponents: [
    ProjectDetailEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdRippleModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdCheckboxModule,
    MdSelectModule,
    MdInputModule,
    MdRadioModule,
    MdButtonToggleModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    NgxDatatableModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
