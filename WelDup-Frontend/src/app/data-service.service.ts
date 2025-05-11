import { Injectable } from '@angular/core';

export interface FormData {
  name: string;
  email: string;
  number: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formDataList: FormData[] = [];

  addFormData(data: FormData) {
    this.formDataList.push(data);
  }

  getFormDataList(): FormData[] {
    return this.formDataList;
  }
}