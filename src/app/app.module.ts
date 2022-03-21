import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './shared/components/components.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './material.module';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalPrestamosComponent } from './pages/prestamos/modal-prestamos/modal-prestamos.component';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  AppDateAdapter,
  APP_DATE_FORMATS,
} from './shared/components/format-datepicker';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    NgbActiveModal,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalPrestamosComponent],
})
export class AppModule {}
