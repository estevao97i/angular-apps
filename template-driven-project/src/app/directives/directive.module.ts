import { NgModule } from "@angular/core";
import { EmailValidatorDirective } from './email-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';

@NgModule({
    declarations: [
    EmailValidatorDirective,
    CredentialsValidatorDirective
  ],
    exports: [
      EmailValidatorDirective,
      CredentialsValidatorDirective
    ]
})
export class DirectiveModule {}