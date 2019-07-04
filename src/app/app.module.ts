import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

/* Material section */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatCheckboxModule, MatListModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

/* AuthService */
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';

/* NgRx */
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Restaurant App',
      maxAge: 25,
      logOnly: environment.production
    }),

    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCheckboxModule,
    LayoutModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
