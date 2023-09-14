import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { GaneshComponent } from './ganesh/ganesh.component';
import { BingingComponent } from './binging/binging.component';
import { DirectComponent } from './direct/direct.component';
import { ManasaDirective } from './manasa.directive';
import { KeysComponent } from './keys/keys.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    GaneshComponent,
    BingingComponent,
    DirectComponent,
    ManasaDirective,
    KeysComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
