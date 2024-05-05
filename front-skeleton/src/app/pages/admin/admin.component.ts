import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movies from 'datas/movies';
import { places } from 'datas/places';
import { users } from 'datas/users';
import { localDb } from 'db/local';
import { Movie } from 'models/movie.model';
import { MovieService } from 'services/movie.service';
import { PlaceService } from 'services/place.service';
import { ReviewService } from 'services/review.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  entityName?: string;
  entityId?: string;
  entityData: any[] = [];
  modelEntities: any[] = [];
  tableHeader: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedColumns: { [key: string]: string[] } = {};
  addData: boolean = false;
  updateData: boolean = false;
  deleteData: boolean = false;
  viewData: boolean = false;
  isLoading: boolean = true;
  currentData?: any
  // showColumnSelection: boolean = false;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private placeService: PlaceService,
    private reviewService: ReviewService,
    private userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    // Obtenir les paramètres de l'URL
    this.route.params.subscribe(async params => {
      this.isLoading = false
      this.entityName = params['entityName'] || 'movies';
      this.entityId = params['entityId'];
      // Charger les données de l'entité à partir de l'api'
      await this.getData()
      this.isLoading = false
    });
  }
  async getData() {
    // Charger les données de l'entité à partir de la base de données locale
    let service: any
    if (this.entityName === 'movies') {
      service = this.movieService
    } else if (this.entityName === 'places') {
      service = this.placeService
    } else if (this.entityName === 'users') {
      service = this.userService
    }

    service.getAllEntities().subscribe(
      (datas: any[]) => {

        this.entityData = datas
        this.modelEntities = Object.keys(this.entityData[0]);

        if (this.entityData?.length) {
          // Charger les colonnes sélectionnées à partir du localStorage ou afficher les 2 premières colonnes par défaut
          const storedColumnsString = localStorage.getItem(this.entityName!);
          const storedColumns = storedColumnsString ? JSON.parse(storedColumnsString) : Object.keys(this.entityData[0]).slice(0, 2);
          this.selectedColumns[this.entityName!] = storedColumns;
          console.log({ storedColumns });

          this.updateTableHeader();
        }

        for (let index = 0; index < datas.length; index++) {
          const element = datas[index];
          if (element) {
            localDb.addData(this.entityName!, element)
          }
        }
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
        // Vous pouvez ajouter d'autres logiques de gestion d'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur.
      }
    );





  }

  updateTableHeader(): void {
    this.tableHeader = this.selectedColumns[this.entityName!];
    localStorage.setItem(this.entityName!, JSON.stringify(this.tableHeader));
  }

  showColumnSelectionCard(event: any, column: any): void {
    const { checked } = event.target;


    if (checked) {
      if (!this.tableHeader?.includes(column)) {
        const index = this.modelEntities.indexOf(column);
        if (index !== -1) {
          this.tableHeader?.splice(index, 0, column);
        }
      }
    } else {
      const index = this.tableHeader?.indexOf(column);
      if (index !== -1) {
        this.tableHeader?.splice(index, 1);
        this.selectedColumns[this.entityName!] = this.tableHeader;
      }
    }
    this.updateTableHeader();
  }


  toggleColumn(column: string): void {
    const index = this.selectedColumns[this.entityName!].indexOf(column);
    if (index === -1) {
      // Ajouter la colonne si elle n'est pas déjà sélectionnée
      this.selectedColumns[this.entityName!].push(column);
    } else {
      // Retirer la colonne si elle est déjà sélectionnée
      this.selectedColumns[this.entityName!].splice(index, 1);
    }
    // Mettre à jour les colonnes sélectionnées dans le localStorage

    this.updateTableHeader();
  }

  isChecked(column: any) {
    return this.tableHeader.includes(column)
  }


  get pagedEntityData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.entityData?.slice(startIndex, endIndex) || [];
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  viewItem(item: any): void {
    // Implémentez ici la logique pour afficher les détails de l'élément
    this.addData = false
    this.updateData = false
    this.deleteData = false
    this.viewData = true
    this.currentData = item
    console.log("Vue de l'élément : ", item);
  }

  addItem(): void {
    this.addData = true
    this.updateData = false
    this.deleteData = false
    this.currentData = undefined
  }
  editItem(item: any): void {
    this.addData = false
    this.updateData = true
    this.deleteData = false
    this.currentData = item
    console.log("Modification de l'élément : ", item);
  }

  deleteItem(item: any): void {
    // Implémentez ici la logique pour supprimer l'élément
    this.addData = false
    this.updateData = false
    this.currentData = item
    this.deleteData = true
    console.log("Suppression de l'élément : ", item);
  }

  async closeModal() {
    console.log('closeModal');
    await this.getData()

    this.addData = false
    this.updateData = false
    this.deleteData = false
    this.currentData = undefined
    this.viewData = false
  }

}
