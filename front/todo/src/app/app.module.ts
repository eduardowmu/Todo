import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import da API do tema Angular material selecionado (toolbar)
import {MatToolbarModule} from '@angular/material/toolbar';
//import da API do CARD: https://material.angular.io/components/card/api
import {MatCardModule} from '@angular/material/card';
//import da API do button: https://material.angular.io/components/button/api
import {MatButtonModule} from '@angular/material/button';
//import da API do icon: https://material.angular.io/components/icon/api
import {MatIconModule} from '@angular/material/icon';

import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
