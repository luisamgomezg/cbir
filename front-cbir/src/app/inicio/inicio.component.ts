import { Component, OnInit, ViewChild } from '@angular/core';
import {CropperComponent} from 'angular-cropperjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('angularCropper') angularCropper: CropperComponent;
  imgUrl: string;
  imgResul: string;
  constructor() { }
  selectArchivo(event){
    if(event.target.files && event.target.files[0]){
      const leeArchivo = new FileReader();
      leeArchivo.readAsDataURL(event.target.files[0]);
      leeArchivo.onload=()=>{
        this.imgUrl = leeArchivo.result as string;
      }
    }
  }

  obtenerImg(){
    this.angularCropper.cropper.getCroppedCanvas().toBlob((blob)=>{
      const leer = new FileReader();
      leer.readAsDataURL(blob);
      leer.onload = () => {
        this.imgResul = leer.result as string;
      }
    },'image/jpeg',0.95); 
    console.log('path'+this.imgResul);
  }

  ngOnInit(): void {
  }

}