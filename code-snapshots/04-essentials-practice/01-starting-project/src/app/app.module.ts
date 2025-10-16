import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  imports: [FormsModule, CurrencyPipe, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
