import { Pipe, PipeTransform } from "@angular/core";
import { __importDefault } from "tslib";

@Pipe({
    name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

    transform(value: string) {
        return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`
    }
}