import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { TOOLS } from './tools.data';
import { ToolCardComponent } from './tool-card.component';

@Component({
  selector: 'ol-tools-grid',
  standalone: true,
  imports: [ToolCardComponent],
  templateUrl: './tools-grid.component.html',
  styleUrl: './tools-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsGridComponent {
  readonly query = input('');
  readonly resetFilters = output<void>();
  readonly showUpcoming = signal(false);
  readonly filteredTools = computed(() => {
    const query = this.query().trim().toLowerCase();
    return TOOLS.filter((tool) => {
      if (!this.showUpcoming() && tool.status === 'coming-soon') return false;
      const searchableText = `${tool.name} ${tool.subtitle} ${tool.shortName} ${tool.category} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
      return !query || searchableText.includes(query);
    });
  });
  toggleUpcoming(): void {
    this.showUpcoming.update((show) => !show);
  }
}
