import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AaaComponent } from "./aaa/aaa.component";
import { BbbComponent } from "./bbb/bbb.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [AppComponent, AaaComponent, BbbComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
