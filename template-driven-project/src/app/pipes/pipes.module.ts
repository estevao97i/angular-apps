import { NgModule } from "@angular/core";
import { ProgressBarPipe } from './progress-bar.pipe';

@NgModule({
  declarations: [
    ProgressBarPipe
  ],
  exports: [
    ProgressBarPipe
  ],
})
export class PipeModule {}