import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { ResultComponent } from './pages/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from './reusable-components/nav-bar/nav-bar.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './reusable-components/logo/logo.component';
import { LearnComponent } from './pages/learn/learn.component';
import { TagsComponent } from './reusable-components/tags/tags.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ResultComponent,
    NavBarComponent,
    LogoComponent,
    LearnComponent,
    TagsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
