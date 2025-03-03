import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, RecommendationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}