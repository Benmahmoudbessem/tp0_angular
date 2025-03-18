import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  imports: [],
  templateUrl: './not-found-component.component.html',
  styleUrl: './not-found-component.component.css'
})
export class NotFoundComponentComponent {

  constructor(private router: Router){}
  goToHome() {
    this.router.navigate(['/']);
  }

}
