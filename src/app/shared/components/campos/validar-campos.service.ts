import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasError(control: AbstractControl, errorName: string):boolean{
    return control.hasError(errorName);
  }

  hasErrorValidar(control: AbstractControl, errorName: string){
    if((control.dirty || control.touched) && this.hasError(control, errorName)){
      return true;
    }
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
