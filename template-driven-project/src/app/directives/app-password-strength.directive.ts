import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import * as zxcvbn from 'zxcvbn';

@Directive({
  selector: '[AppPasswordStrength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppPasswordStrengthDirective,
    multi: true
  }]
})
export class AppPasswordStrengthDirective implements Validator {
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control || !control.value) {
      return null
    }

    if (zxcvbn(control.value).score < 4) {
      return { strengthNotProvide: true }
    }

    return null;
  }

}
