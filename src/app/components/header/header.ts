import { Component, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RoutsConfig } from '../../services/routs-config';
import { RouterLink } from '@angular/router';
import { MailIcon } from '../ui/mail-icon';
import { HomeIcon } from '../ui/home-icon';
import { ContactFormIcon } from '../ui/contact-form-icon';
import { ServicesIcon } from '../ui/services-icon';
import { CatalogIcon } from '../ui/catalog-icon copy';
import { ContactsIcon } from '../ui/contacts-icon';
import { HolodimLogo } from '../ui/holodim-logo';
import { VelcomLogo } from '../ui/velcom-logo';
import { MtsLogo } from '../ui/mts-logo';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MailIcon,
    MtsLogo,
    NgComponentOutlet,
    ContactFormIcon,
    HolodimLogo,
    VelcomLogo,
  ],
  templateUrl: './header.html',
})
export class Header {
  routsConfig = inject(RoutsConfig);
  routes = this.routsConfig.getRoutsAndLabels();

  icons = [HomeIcon, ServicesIcon, CatalogIcon, ContactsIcon];
}
