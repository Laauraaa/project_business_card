export interface FormData {
    name: string;
    age: string;
    phoneNumber: string;
    email: string;
    cep: string;
    streetName: string;
    addressNumber: string;
    neighb: string;
    city: string;
    uf: string;
  }
  
 
  export function getFormData(formGroup: any): FormData {
    return {
      name: formGroup.get('name')?.value,
      age: formGroup.get('age')?.value,
      phoneNumber: formGroup.get('phoneNumber')?.value,
      email: formGroup.get('email')?.value,
      cep: formGroup.get('cep')?.value,
      streetName: formGroup.get('streetName')?.value,
      addressNumber: formGroup.get('addressNumber')?.value,
      neighb: formGroup.get('neighb')?.value,
      city: formGroup.get('city')?.value,
      uf: formGroup.get('uf')?.value,
    };
  }