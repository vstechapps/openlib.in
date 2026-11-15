import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import type { ToolItem } from './tool.model';

@Component({
  selector: 'ol-tool-card',
  standalone: true,
  templateUrl: './tool-card.component.html',
  imports: [NgTemplateOutlet],
  styleUrl: './tool-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolCardComponent {
  readonly tool = input.required<ToolItem>();

  toolDomain(tool: ToolItem): string {
    return new URL(tool.url).hostname;
  }
}
