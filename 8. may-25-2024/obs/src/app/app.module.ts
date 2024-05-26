import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NumberGeneratorService } from '../service/number-generator.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { Subject } from 'rxjs';

@NgModule({
  declarations: [AppComponent, SubscriberComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Subject, NumberGeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule {}