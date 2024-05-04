import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movies from 'datas/movies';
import { places } from 'datas/places';
import { users } from 'datas/users';
import { localDb } from 'db/local';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  entityName?: string;
  entityId?: string;
  entityData: any[] = [];
  tableHeader: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedColumns: { [key: string]: string[] } = {};
  addData: boolean = false ;
  updateData: boolean = false ;
  deleteData: boolean = false ;
  currentData?: any
  // showColumnSelection: boolean = false;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    // Obtenir les paramètres de l'URL
    this.route.params.subscribe(async params => {
      this.entityName = params['entityName'] || 'movies';
      this.entityId = params['entityId'];

      // Charger les données de l'entité à partir de la base de données locale
      await this.getData()

      if (this.entityData?.length) {
        // Charger les colonnes sélectionnées à partir du localStorage ou afficher les 2 premières colonnes par défaut
        const storedColumnsString = localStorage.getItem(this.entityName!);
        const storedColumns = storedColumnsString ? JSON.parse(storedColumnsString) : Object.keys(this.entityData[0]).slice(0, 2);
        this.selectedColumns[this.entityName!] = storedColumns;
        console.log({ storedColumns });

        this.updateTableHeader();
      }
    });
  }
  async getData() {
      // Charger les données de l'entité à partir de la base de données locale
      this.entityData = await localDb.getAllData(this.entityName!);
      if(!this.entityData?.length){
        let datas: any
        if(this.entityName === 'movies') datas = movies
        if(this.entityName === 'places') datas = places
        if(this.entityName === 'users') datas = users

        for (let index = 0; index < datas.length; index++) {
          const element = datas[index];
          await localDb.addData(this.entityName!, element)
          
        }
      }
  }

  updateTableHeader(): void {
    this.tableHeader = this.selectedColumns[this.entityName!];
    localStorage.setItem(this.entityName!, JSON.stringify(this.tableHeader));
  }

  showColumnSelectionCard(event: any, column: any): void {
    const {checked} = event.target
    if(checked){
      if(!this.tableHeader?.includes(column.key)){
        this.tableHeader?.push(column.key)
      }
    }else{
      this.tableHeader = this.tableHeader?.filter(value => column.key !== value)
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

  isChecked(column: any){
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

  async closeModal(){
    console.log('closeModal');
    await this.getData()

    this.addData = false 
    this.updateData = false
    this.deleteData = false
    this.currentData = undefined
  }

}
