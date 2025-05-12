import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cepApiResult } from './models/cepApi.models';


@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  constructor(private httpClient: HttpClient) { };

  getCep(cep: string){
    return this.httpClient.get<cepApiResult>(`https://viacep.com.br/ws/${cep}/json/`);
  };

};
