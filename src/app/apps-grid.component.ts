import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { APPS } from './apps.data';
import { AppCardComponent } from './app-card.component';

@Component({
  selector: 'ol-apps-grid',
  standalone: true,
  imports: [AppCardComponent],
  templateUrl: './apps-grid.component.html',
  styleUrl: './apps-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsGridComponent {
  readonly query = input('');
  readonly resetFilters = output<void>();
  readonly filteredApps = computed(() => {
    const query = this.query().trim().toLowerCase();
    return APPS.filter((app) => {
      const searchableText = `${app.name} ${app.subtitle} ${app.shortName} ${app.kind} ${app.description} ${app.tags.join(' ')}`.toLowerCase();
      return !query || searchableText.includes(query);
    });
  });
}
