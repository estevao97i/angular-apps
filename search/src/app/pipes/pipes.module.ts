import { NgModule } from "@angular/core";
import { AtivoBoolean } from "./ativo-boolean.pipe";
import { TelefonePipe } from "./telefone.pipe";
import { DataPipe } from "./data.pipe";
import { EnderecoPipe } from "./endereco.pipe";
import { EmptyPipe } from "./empty.pipe";

@NgModule({
    declarations: [AtivoBoolean, TelefonePipe, DataPipe, EnderecoPipe, EmptyPipe],
    exports: [AtivoBoolean, TelefonePipe, DataPipe, EnderecoPipe, EmptyPipe]
})
export class PipesModule {}