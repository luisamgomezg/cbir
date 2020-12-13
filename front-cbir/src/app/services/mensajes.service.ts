import {Injectable} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {Observable} from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
    providedIn:'root'
})
export class MensajeService {
    bsModalRef : BsModalRef;

    constructor(private bsModalService: BsModalService) { }

    respuesta(titulo:string, mensaje:string) : Observable<string>{
        const initialState = { titulo, mensaje,};
        this.bsModalRef = this.bsModalService.show(ModalComponent,{initialState});
        return new Observable<string>(this.obtener());
    }

    obtener(){
        return (observer) =>{
            const subscription = this.bsModalService.onHidden.subscribe(()=>{
                observer.complete();
            });
            return {
                unsubscribe(){
                    subscription.unsubscribe();
                }
            };
        };
    }
}