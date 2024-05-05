import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { localDb } from 'db/local';
import { MovieService } from 'services/movie.service';
import { PlaceService } from 'services/place.service';
import { ReviewService } from 'services/review.service';
import { UserService } from 'services/user.service';

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

  constructor(
    private movieService: MovieService,
    private placeService: PlaceService,
    private userService: UserService,
    private reviewService: ReviewService,
  ) {

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
    let service: any;

    if (this.entityName === "review") {
      service = this.reviewService
    } else if (this.entityName === "places") {
      service = this.placeService
    } else if (this.entityName === "users") {
      service = this.userService
    } else if (this.entityName === "movies") {
      service = this.movieService
    }

    service.deleteEntity(this.entity.id!).subscribe(
      (deletedData: any)=>{
        console.log({deletedData});

      }
    )
    this.modal.hide();
    this.closeModal.emit(null)
  }

  cancelDeletion() {
    this.modal.hide();
    this.closeModal.emit(null)
  }

}
