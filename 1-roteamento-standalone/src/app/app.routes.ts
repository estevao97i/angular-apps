import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';

export const routes: Routes = [
    { path: 'component', component: BaseComponent },
    { path: 'component/primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    { path: 'component/segundo', component: SegundoComponent, pathMatch: 'full' },
    // { path: 'primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    // { path: 'segundo', component: SegundoComponent, pathMatch: 'full' },
];
