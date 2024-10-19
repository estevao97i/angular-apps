import { Pipe } from "@angular/core";

@Pipe({
    name: 'ativoBoolean'
})
export class AtivoBoolean {

    transform(value: boolean | undefined): string {
        return value && value === true ? 'Sim' : 'Não';
      }
}