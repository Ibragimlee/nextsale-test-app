import { DragDropDirective } from './components/common/custom-file-input/drag-drop.directive';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { FileLoaderContainerComponent } from './components/blocks/file-loader-container/file-loader-container.component';
import { FontStylerContainerComponent } from './components/blocks/font-styler-container/font-styler-container.component';
import { CustomFileInputComponent } from './components/common/custom-file-input/custom-file-input.component';

import { FontStylerComponent } from './components/common/font-styler/font-styler.component';
import { CustomSelectComponent } from './components/common/custom-select/custom-select.component';
import { ColorCheckboxComponent } from './components/common/color-checkbox/color-checkbox.component';
import { IconedButtonComponent } from './components/common/iconed-button/iconed-button.component';
import { DisbledDivComponent } from './components/common/disbled-div/disbled-div.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FileLoaderContainerComponent,
    FontStylerContainerComponent,
    CustomFileInputComponent,
    DragDropDirective,
    FontStylerComponent,
    CustomSelectComponent,
    ColorCheckboxComponent,
    IconedButtonComponent,
    DisbledDivComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
