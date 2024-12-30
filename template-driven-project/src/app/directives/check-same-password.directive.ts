import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCheckSamePassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckSamePasswordDirective,
    multi: true
  }]
})
export class CheckSamePasswordDirective implements Validator {

  @Input('appCheckSamePassword') passwordBase!: string;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const isValid = control.value === this.passwordBase;

    return isValid ? null : { passwordNotSame: true };
  }

}
