import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { language } from 'src/app/localization/language';
import { DateUtility } from 'src/app/utils/date.utility';

/**
 * Footer component.
 */
@Component({
  selector: 'artorius-common-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.less'
  ]
})
export class FooterComponent implements OnInit {
  /**
  * Cookie policy route name.
  */
  public cookiePolicyRouteName!: string;

  /**
   * Cookie policy route value.
   */
  public cookiePolicyRouteValue!: string;

  /**
   * Contact email.
   */
  public email!: string;

  /**
   * Application name.
   */
  public name!: string;

  /**
   * Application version.
   */
  public version!: string;

  /**
   * Current year.
   */
  public year!: number;

  ngOnInit(): void {
    this.cookiePolicyRouteName = language.route.name.cookiePolicy;
    this.cookiePolicyRouteValue = configuration.route.value.cookiePolicy;
    this.email = configuration.contact.email;
    this.name = configuration.brand.name;
    this.version = configuration.version;
    this.year = DateUtility.getCurrentYearValue();
  }
}
