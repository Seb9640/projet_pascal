import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { localDb } from 'db/local';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent implements OnInit {

  @Input() entity: any;
  @Input() model: any;
  @Input() entityName?: string;
  @Output() closeModal = new EventEmitter<any>();
  @ViewChild('confirmModal') confirmModal?: ElementRef;
  modal?: any
  name: string = ''

  constructor() {

  }

  ngOnInit(): void {
    this.showModal()
    console.log(this.entity);
    if (this.entityName === "users") {
      this.name = this.entity.first_name + " " + this.entity.last_name
    } else {
      this.name = this.entity?.title || this.entity?.name
    }
  }

  showModal(): void {
    this.modal = new (window as any).bootstrap.Modal(document.getElementById('confirmModal'), { backdrop: true });
    this.modal.show(); // Afficher le modal
  }


  confirmDeletion() {
    localDb.deleteData(this.entityName!, this.entity.id!)
    this.modal.hide();
    this.closeModal.emit(null)
  }

  cancelDeletion() {
    this.modal.hide();
    this.closeModal.emit(null)
  }

}
