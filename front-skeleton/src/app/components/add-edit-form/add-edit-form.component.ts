import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localDb } from 'db/local';
import { fileToBlob } from 'helpers/utiles';

@Component({
  selector: 'add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrl: './add-edit-form.component.scss'
})
export class AddEditFormComponent implements OnInit {
  @Input() entityName?: string;
  @Input() title?: string;
  @Input() model?: any;
  @Input() entity?: any;
  @Output() closeModal = new EventEmitter<any>();
  @ViewChild('formModal') formModal?: ElementRef;
  modal?: any
  inputs: string[] = []
  selectedFiles: any = {}
  currentValue: string = "2";

  form?: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.showModal();
    console.log([this.model, this.entity, this.entityName]);
    const notAllowed = ["id", 'created_at', "updated_at", 'entity_id', 'entity_type' ];
    this.inputs = Object.keys(this.model).filter(key => !notAllowed.includes(key));

    const defaultValue: any = {};
    this.inputs.forEach((key) => {
      if (this.inputType(key) === 'file') {
        defaultValue[key] = ['']; // Ne pas initialiser avec une valeur par défaut pour le champ de fichier
      } else {
        defaultValue[key] = [this.entity ? this.entity[key] : '', Validators.required];
      }
    });
    this.form = this.fb.group(defaultValue);
    console.log({entityName:this.entityName, entity:this.entity, model: this.model});
    
  }

  onFileSelected(event: any) {
    const { name } = event.target
    const file: File = event.target.files[0];
    this.selectedFiles = { ...this.selectedFiles, [name]: file }
  }

  inputType(name: string): string {
    const lowerCaseName = name.toLowerCase();

    if (["synopsis", "content", 'opening_hours', 'review' ].includes(lowerCaseName)) {
      return 'text';
    } else if (['image', 'poster_url', 'image_url'].includes(lowerCaseName)) {
      return 'file';
    } else if (lowerCaseName.includes('date')) {
      return 'date';
    } else if (lowerCaseName.includes('email')) {
      return 'email';
    } else if (lowerCaseName.includes('password')) {
      return 'password';
    } else if (lowerCaseName.includes('rating')) {
      return 'range';
    } else {
      return 'input';
    }
  }

  updateValue(value: any) {
    this.currentValue = value.toString();
  }

  getCurrentValue(): number {
    return parseInt(this.currentValue, 10); // Convertit currentValue en nombre avec base 10
  }
  showModal(): void {
    this.modal = new (window as any).bootstrap.Modal(document.getElementById('formModal'), {});
    this.modal.show(); // Afficher le modal
  }

  async onSubmit(): Promise<void> {
    if (this.form?.valid) {
      console.log(this.form.value);
      const data: any = { ...this.form.value, ...this.selectedFiles };

      // Conversion des fichiers en Blob avant de les sauvegarder
      for (const key in data) {
        if (data[key] instanceof File) {
          const file: File = data[key];
          console.log({ file });

          const blob = await fileToBlob(file);
          data[key] = blob;
        }
      }

      console.log({ data });
      if(this.entityName === "review"){
        data.entity_id = this.model.entity_id 
        data.entity_type = this.model.entity_type
      }

      console.log(data);
      

      if (this.entity) {
        // update
        data.id = this.entity.id;
        for (const key in data) {
          if (this.inputType(key) === "file") {
            if (!(data[key]  instanceof Blob)) {
              data[key] = this.entity[key]
            }
          }
        }
        data.updated_at = new Date()
        localDb.updateData(this.entityName!, data);
      } else {
        // add 
        data.created_at = new Date()
        localDb.addData(this.entityName!, data);
      }
      this.closeModal.emit(data);
      this.modal.hide();
    }
  }

  onCancel(): void {
    this.closeModal.emit(null);
    this.modal.hide();
  }
}
