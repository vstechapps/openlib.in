import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ol-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
