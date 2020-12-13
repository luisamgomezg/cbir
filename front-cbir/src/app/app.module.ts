import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularCropperjsModule} from 'angular-cropperjs';
//import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

/*const routes: Routes = [
  { path: " ", component: InicioComponent }
]*/

@NgModule({
  
  declarations: [
    AppComponent,
    InicioComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    HttpClientModule,
    AngularCropperjsModule,
    ModalModule.forRoot()
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalComponent
  ]
})
export class AppModule { }
