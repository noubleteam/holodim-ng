import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, inject, input, signal, Type } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

export type TooltipPosition = 'top' | 'bottom';

@Component({
  selector: 'responsive-text',
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './responsive-text.html',
})
export class ResponsiveText {
  deviceDetector = inject(DeviceDetectorService);
  isMobile = this.deviceDetector.isMobile();

  copiedTimer: NodeJS.Timeout | null = null;

  copiedText = signal<string | null>(null);

  label = input<string>('');
  labelStyle = input<string>('');
  href = input<string>('');
  icon = input.required<Type<any>>();
  iconStyle = input<string>('');

  tooltipPosition = input<TooltipPosition>('top');

  async copyText(phone: string) {
    try {
      await navigator.clipboard.writeText(phone);
      this.copiedText.set('Скопировано!');

      if (this.copiedTimer !== null) clearTimeout(this.copiedTimer);
      this.copiedTimer = setTimeout(() => this.copiedText.set(null), 1000);
    } catch (err) {
      console.error('Ошибка при копировании:', err);
    }
  }
}
