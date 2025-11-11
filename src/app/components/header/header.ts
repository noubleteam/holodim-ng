import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RoutsConfig } from '../../services/routs-config';
import { RouterLink } from '@angular/router';
import { MailIcon } from '../ui/mail-icon';
import { HomeIcon } from '../ui/home-icon';
import { ContactFormIcon } from '../ui/contact-form-icon';
import { ServicesIcon } from '../ui/services-icon';
import { CatalogIcon } from '../ui/catalog-icon';
import { ContactsIcon } from '../ui/contacts-icon';
import { HolodimLogo } from '../ui/holodim-logo';
import { VelcomLogo } from '../ui/velcom-logo';
import { MtsLogo } from '../ui/mts-logo';
import { PhoneIcon } from '../ui/phone-icon';
import { ResponsiveText } from './responsive-text/responsive-text';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgComponentOutlet,
    ContactFormIcon,
    HolodimLogo,
    PhoneIcon,
    ResponsiveText,
  ],
  templateUrl: './header.html',
})
export class Header {
  routsConfig = inject(RoutsConfig);
  document = inject(DOCUMENT);

  routes = this.routsConfig.getRoutsAndLabels();
  icons = [HomeIcon, ServicesIcon, CatalogIcon, ContactsIcon];

  phones = [
    {
      label: '+375 44 788 54 87',
      tel: 'tel:+375447885487',
      icon: VelcomLogo,
    },
    {
      label: '+375 29 862 49 07',
      tel: 'tel:+375298624907',
      icon: MtsLogo,
    },
  ];

  mail = {
    label: 'holodim@tut.by',
    mail: 'mailto:holodim@tut.by',
    icon: MailIcon,
  };

  isContactsModalOpen = signal<boolean>(false);

  openContactsModal() {
    this.isContactsModalOpen.set(true);
    this.document.body.style.overflow = 'hidden';
  }

  closeContactsModal() {
    this.isContactsModalOpen.set(false);
    this.document.body.style.overflow = '';
  }
}
