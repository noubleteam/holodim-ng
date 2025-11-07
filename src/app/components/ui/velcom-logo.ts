import { Component, input } from '@angular/core';

@Component({
  selector: 'velcom-logo',
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 75"
      fill="none"
      [class]="class()"
    >
      <path
        d="M60.0509 35.0883L24.9629 0L-0.000104832 24.9632L35.0879 60.0515L60.0509 35.0883Z"
        fill="#FFFF4B"
      />
      <path
        d="M99.8409 24.9632L74.8779 0L39.7506 35.1276L64.7136 60.0908L99.8409 24.9632Z"
        fill="#FFFF00"
      />
      <path
        d="M74.887 49.9229L49.9238 24.9597L24.9606 49.9229L49.9238 74.8861L74.887 49.9229Z"
        fill="#FFDA00"
      />
    </svg>
  `,
})
export class VelcomLogo {
  readonly class = input<string>('');
}
