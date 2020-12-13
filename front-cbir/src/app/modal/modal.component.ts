import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  titulo:string;
  mensaje:string;

  constructor(public bsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }

}
