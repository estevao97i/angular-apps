import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'data'
})
export class DataPipe implements PipeTransform {

    transform(value: string) {
        const dataTransformada = value.split('T')[0].split('-');
        const dataFinal = `${dataTransformada[2]}/${dataTransformada[1]}/${dataTransformada[0]}`
        return dataFinal;
    }
}