import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularCropperjsModule} from 'angular-cropperjs';
//import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

/*const routes: Routes = [
  { path: " ", component: InicioComponent }
]*/

@NgModule({
  
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    HttpClientModule,
    AngularCropperjsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
