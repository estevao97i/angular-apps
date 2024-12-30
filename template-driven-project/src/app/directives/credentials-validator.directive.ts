import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UserPlaceHolderService } from '../services/user-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => CredentialsValidatorDirective),
    multi: true
  }]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propName: 'username' | 'email' = 'username';

  constructor(private readonly service: UserPlaceHolderService) { }

  validate(control: AbstractControl<any, any>):
    Promise<ValidationErrors | null> |
    Observable<ValidationErrors | null> {
    return this.service.getUsersPlaceHolder()
      .pipe(
        map((listUsers) => {
          const hasUser = listUsers.find(
            (user) => user[this.propName].toLowerCase().trim() === control.value.trim().toLowerCase());

          const validator = this.propName === 'username' ? 'invalidUsername' : 'invalidEmail';
          return hasUser ? { [validator]: true } : null;
        })
      );
  }
}
