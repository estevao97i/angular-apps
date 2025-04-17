import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'app-general-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContactComponent, BasicComponent],
  templateUrl: './general-page.component.html',
  styleUrl: './general-page.component.scss'
})
export class GeneralPageComponent {

}
