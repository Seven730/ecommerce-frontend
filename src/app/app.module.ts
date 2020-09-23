import { ListService } from './list/list.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ListService], // IMPORTANT - dependency
  bootstrap: [AppComponent],
})
export class AppModule {}
