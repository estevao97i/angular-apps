import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';

export const routes: Routes = [
    { path: 'primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    { path: 'segundo', component: SegundoComponent, pathMatch: 'full' },
];
