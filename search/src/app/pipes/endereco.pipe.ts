import { Pipe, PipeTransform } from "@angular/core";
import { IAddress } from "../interfaces/adress.interface";

@Pipe({
    name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

    transform(value: IAddress) {
        const INVALID_ADRESS = [
            !value.cidade,
            !value.estado,
            !value.numero,
            !value.pais,
            !value.rua,
        ]

        if (INVALID_ADRESS.includes(true)) {
            return 'endereco invalido'
        }

        return `${value.rua}, ${value.numero}, ${value.cidade}, ${value.estado} - ${value.pais}`
    }
}