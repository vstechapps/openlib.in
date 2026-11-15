import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ol-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly query = input('');
  readonly theme = input<'dark' | 'light'>('dark');
  readonly searchChange = output<string>();
  readonly themeToggle = output<void>();
}
