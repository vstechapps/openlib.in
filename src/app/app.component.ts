import { ChangeDetectionStrategy, Component, HostListener, effect, signal } from '@angular/core';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { ToolsGridComponent } from './tools-grid.component';

@Component({
  selector: 'ol-root',
  standalone: true,
  imports: [HeaderComponent, ToolsGridComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly query = signal('');
  readonly theme = signal<'dark' | 'light'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      if (typeof document !== 'undefined') document.documentElement.dataset['theme'] = this.theme();
      if (typeof localStorage !== 'undefined') localStorage.setItem('openlib-theme', this.theme());
    });
  }

  setQuery(query: string): void {
    this.query.set(query);
  }

  resetFilters(): void {
    this.query.set('');
  }

  toggleTheme(): void {
    this.theme.update((current) => current === 'dark' ? 'light' : 'dark');
  }

  @HostListener('window:keydown', ['$event'])
  onGlobalKeydown(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.querySelector<HTMLInputElement>('#tool-search')?.focus();
    }
    if (event.key === 'Escape' && document.activeElement?.id === 'tool-search') {
      this.query.set('');
      (document.activeElement as HTMLElement).blur();
    }
  }

  private getInitialTheme(): 'dark' | 'light' {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('openlib-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    }
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
