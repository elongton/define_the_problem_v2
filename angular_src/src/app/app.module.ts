import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { SignupComponent } from './user/signup/signup.component';


import { reducers } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
