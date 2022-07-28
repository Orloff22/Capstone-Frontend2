import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './httpInterceptor.service';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteLiveReportsComponent } from './delete-live-reports/delete-live-reports.component';
import { AddReportComponent } from './add-report/add-report.component';
import { DeactivateReportComponent } from './deactivate-report/deactivate-report.component';

import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    DeleteLiveReportsComponent,
    AddReportComponent,
    DeactivateReportComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
