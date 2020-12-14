import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {CropperComponent} from 'angular-cropperjs';
import { respuesta } from '../modelos/respuesta';
import { CbirService } from '../services/cbir.service';
import { MensajeService } from '../services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('angularCropper') angularCropper: CropperComponent;
  imgUrl: string;
  imgResul: string;
  respuesta : respuesta;

  constructor(private cbirService:CbirService, private menService:MensajeService) {
  }

  ngOnInit(): void {
  }

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
  }

  async ejecutarCbir(){
    this.respuesta = await this.cbirService.postImage(this.imgResul).finally();
  } 

  abrirmodal(){
    this.menService.respuesta(this.respuesta.mensaje,this.respuesta.val).subscribe();
  }

}