import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Button, ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MaterialModule } from './Material.Module';
import { GearIconComponent } from './components/gear-icon/gear-icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './modules/main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { HttpClientModule, withFetch,provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    GearIconComponent,
    MainNavComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    ButtonModule,
    ToastModule,
    MaterialModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    FlexLayoutServerModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [
    MessageService,
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


