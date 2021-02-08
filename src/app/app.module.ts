import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

import { Store } from 'store';
import { HealthModule } from './health/health.module';
import { ScheduleModule } from './health/schedule/schedule.module';
import { WorkoutsModule } from './health/workouts/workouts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule,
    ScheduleModule,
    WorkoutsModule,
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
