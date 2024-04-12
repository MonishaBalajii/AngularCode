
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Create/Create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FetchAllCustomersComponent } from './FetchAllCustomers/FetchAllCustomers.component';
import { SuccessMsgComponent } from './SuccessMsg/SuccessMsg.component';
import { ErrorMsgComponent } from './ErrorMsg/ErrorMsg.component';
import { FetchByIdComponent } from './FetchById/FetchById.component';
import { LoginComponent } from './Login/Login.component';
import { FetchProviderDetailsComponent } from './FetchProviderDetails/FetchProviderDetails.component';
import { FetchCrecitCardDetailsComponent } from './FetchCrecitCardDetails/FetchCrecitCardDetails.component';
import { FetchCityDetailsComponent } from './FetchCityDetails/FetchCityDetails.component';
import { CustomerFetchProviderComponent } from './CustomerFetchProvider/CustomerFetchProvider.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { UpdateComponent } from './Update/Update.component';
import { DeleteComponent } from './Delete/Delete.component';

@NgModule({
  declarations: [
    AppComponent,
      CreateComponent,
      FetchAllCustomersComponent,
      SuccessMsgComponent,
      ErrorMsgComponent,
      FetchByIdComponent,
      LoginComponent,
      FetchProviderDetailsComponent,
      FetchCrecitCardDetailsComponent,
      FetchCityDetailsComponent,
      CustomerFetchProviderComponent,
      HeaderComponent,
      HomeComponent,
      UpdateComponent,
      DeleteComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
