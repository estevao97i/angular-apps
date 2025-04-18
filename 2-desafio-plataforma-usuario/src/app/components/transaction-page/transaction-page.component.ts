import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.scss'
})
export class TransactionPageComponent {

}
