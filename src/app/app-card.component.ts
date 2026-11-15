import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import type { AppItem } from './app.model';

@Component({
  selector: 'ol-app-card',
  standalone: true,
  templateUrl: './app-card.component.html',
  imports: [NgTemplateOutlet],
  styleUrl: './app-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCardComponent {
  readonly app = input.required<AppItem>();

  appDomain(app: AppItem): string {
    return new URL(app.url).hostname;
  }
}
