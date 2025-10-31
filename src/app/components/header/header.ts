import { Component, inject } from '@angular/core';
import { NgComponentOutlet, NgOptimizedImage } from '@angular/common';
import { RoutsConfig } from '../../services/routs-config';
import { RouterLink } from '@angular/router';
import { MailIcon } from '../ui/mail-icon';
import { CallIcon } from '../ui/call-icon';
import { HomeIcon } from '../ui/home-icon';
import { ContactFormIcon } from '../ui/contact-form-icon';
import { ServicesIcon } from '../ui/services-icon';
import { CatalogIcon } from '../ui/catalog-icon copy';
import { ContactsIcon } from '../ui/contacts-icon';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterLink, MailIcon, CallIcon, NgComponentOutlet, ContactFormIcon],
  templateUrl: './header.html',
})
export class Header {
  routsConfig = inject(RoutsConfig);
  routes = this.routsConfig.getRoutsAndLabels();

  icons = [HomeIcon, ServicesIcon, CatalogIcon, ContactsIcon];
}
