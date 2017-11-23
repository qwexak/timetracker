import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { DatePipe } from '@angular/common';

import { DashboardComponent } from './components/tracking/dashboard/dashboard.component';
import { ActivityComponent } from './components/tracking/activity/activity.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { BoardsChoiceComponent } from './components/boards-choice/boards-choice.component';

import { DataService } from './services/data.service'
import { TimerService } from './services/timer.service'
import { DatabaseService } from './services/database.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { HttpService } from './services/http.service';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackingComponent,
    DashboardComponent,
    ActivityComponent,
    BoardsChoiceComponent,
    SecondsToTimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [
    ElectronService, 
    DatePipe,
    DataService,
    TimerService,
    DatabaseService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
