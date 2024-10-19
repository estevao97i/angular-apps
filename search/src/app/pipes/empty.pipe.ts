import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'empty'
})
export class EmptyPipe implements PipeTransform {

    transform(value: any) {
        const IS_EMPTY = [value === null, value === undefined, value === ''];

        if (IS_EMPTY.includes(true)) {
            return ' - '
        }

        return value;
    }
}