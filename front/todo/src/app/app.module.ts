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
//badge: https://material.angular.io/components/badge/api
import {MatBadgeModule} from '@angular/material/badge';
//snackbar: https://material.angular.io/components/snack-bar/api
import {MatSnackBarModule} from '@angular/material/snack-bar';
//FormsModule do angula: 
import { FormsModule } from '@angular/forms';
//inputs: https://material.angular.io/components/input/api
import {MatInputModule} from '@angular/material/input';
//datepicker: https://material.angular.io/components/datepicker/api
import {MatDatepickerModule} from '@angular/material/datepicker';
//api para funcionar o modulo acima
import { MatNativeDateModule } from '@angular/material/core';

import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadAllComponent,
    FinalizadosComponent,
    CreateComponent,
    UpdateComponent,
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
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
