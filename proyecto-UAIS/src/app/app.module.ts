import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './schedule/form/form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SearchengineComponent } from './searchengine/searchengine.component';
import { FiltroPipe } from './searchengine/pipes/filtro.pipe';

import { MedicalAppointmentsComponent } from './components/medical-appointments/medical-appointments.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertLayoutComponent } from './components/expert-layout/expert-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CalendarService } from './services/calendar.service';
import { LoadScriptsService } from './schedule/form/load-scripts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    NotfoundComponent,
    LoginComponent,
    PopUpComponent,
    MedicalAppointmentsComponent,
    ExpertLayoutComponent,
    SearchengineComponent,
    FiltroPipe,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CalendarComponent,
    NgbCollapseModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [LoadScriptsService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
