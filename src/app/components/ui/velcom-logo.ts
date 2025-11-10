import { Component, input } from '@angular/core';

@Component({
  selector: 'velcom-logo',
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      [class]="class()"
    >
      <path
        d="M9.62263 7.62267L4 2L-0.000154963 6.00019L5.62247 11.6229L9.62263 7.62267Z"
        fill="#FFFF4B"
      />
      <path
        d="M15.9992 6.00019L11.999 2L6.3701 7.62897L10.3703 11.6292L15.9992 6.00019Z"
        fill="#FFFF00"
      />
      <path
        d="M12.0002 9.99982L8 5.99963L3.99981 9.99982L8 14L12.0002 9.99982Z"
        fill="#FFDA00"
      />
    </svg>
  `,
})
export class VelcomLogo {
  readonly class = input<string>('');
}
