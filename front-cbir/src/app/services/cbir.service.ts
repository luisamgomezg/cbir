import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CbirService {

  constructor(private _http: HttpClient) { }

  async postImage(imagen: String | ArrayBuffer){
    return this._http.post<any>("http://localhost:5002/buscarImagen", {
      "base64img": imagen,
    },
    {headers: {'Content-Type': 'application/json',}}
    ).toPromise()
  }
}
