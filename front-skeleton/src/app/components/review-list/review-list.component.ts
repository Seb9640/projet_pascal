import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss'
})
export class ReviewListComponent implements OnInit{

  @Input() currentReviews?: any;
  @Output() closeModal = new EventEmitter<any>();
  @ViewChild('reviewModal') reviewModal?: ElementRef;
  modal?: any


  ngOnInit(): void {
    this.showModal()
  }

  showModal(): void {
    this.modal = new (window as any).bootstrap.Modal(document.getElementById('reviewModal'), {backdrop: 'static'});
    this.modal.show(); // Afficher le modal
  }

  onCancel(): void {
    this.closeModal.emit(null);
    this.modal.hide();
  }
}
