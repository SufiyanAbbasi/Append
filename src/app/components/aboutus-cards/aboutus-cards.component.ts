import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faBuilding,faClipboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-aboutus-cards',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './aboutus-cards.component.html',
  styleUrl: './aboutus-cards.component.scss'
})
export class AboutusCardsComponent {
  arrowRight = faArrowRight; 
  building = faBuilding;
  clip= faClipboard;
}
