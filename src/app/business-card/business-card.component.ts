import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';

import { CepApiService } from '../cep-api.service'; 
import { cepApiResult } from '../models/cepApi.models';  
import { getFormData, FormData } from '../models/createModal.model'

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { from, Observable } from 'rxjs';  

@Component({
  selector: 'app-business-card',
  imports: [FormsModule, ReactiveFormsModule ,NgxMaskDirective, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  providers: [provideNgxMask()],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent implements OnInit{

  //var default
  formField!: FormGroup;
  formData!: FormData;
  
  constructor(private fb: FormBuilder, private cepService: CepApiService){
    
  }

  ngOnInit(): void {
    this.formField = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      cep: [''],
      streetName: ['', [Validators.required, Validators.minLength(2)]],
      addressNumber: ['', Validators.required],
      neighb: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(2)]],
      uf: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //api
  searchCep(){
    const cep = this.formField.get('cep')?.value;
  
    if (cep.length === 8) {
      this.cepService.getCep(cep).subscribe((data: cepApiResult) => {
        if (data) {
          this.formField.patchValue({
            streetName: data.logradouro || '',
            neighb: data.bairro || '',
            city: data.localidade || '',
            uf: data.uf || ''
          });
        }
      });
    }
  }
  
  createCard() {
    if(this.formField.valid){
      this.formData = getFormData(this.formField);
      this.isModalOpen = true;
    } else{
      window.alert('por favor preencha o formulário corretamente')
    }
  }
  
  
  // Modal
  closeModal() {
    this.isModalOpen = false;
  }
  isModalOpen = false;
}
