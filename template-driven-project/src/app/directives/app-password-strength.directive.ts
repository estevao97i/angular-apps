import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';

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

    console.log('score', zxcvbn(control.value).score)

    if (zxcvbn(control.value).score < 4) {
      return { strengthNotProvide: true }
    }

    return null;
  }

}
