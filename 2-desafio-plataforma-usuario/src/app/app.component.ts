import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2-desafio-plataforma-usuario';
}
