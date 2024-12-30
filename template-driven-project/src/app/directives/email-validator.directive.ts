import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
    const isValid = emailRegex.test(control.value);

    return isValid ? null : { emailPattern: true };
  }
}
