import { NgModule } from "@angular/core";
import { EmailValidatorDirective } from './email-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { CheckSamePasswordDirective } from './check-same-password.directive';
import { AppPasswordStrengthDirective } from './app-password-strength.directive';

@NgModule({
    declarations: [
    EmailValidatorDirective,
    CredentialsValidatorDirective,
    CheckSamePasswordDirective,
    AppPasswordStrengthDirective
  ],
    exports: [
      EmailValidatorDirective,
      CredentialsValidatorDirective,
      CheckSamePasswordDirective,
      AppPasswordStrengthDirective
    ]
})
export class DirectiveModule {}