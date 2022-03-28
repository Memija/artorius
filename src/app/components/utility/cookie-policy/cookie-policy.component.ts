import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/configuration/configuration';
import { language } from 'src/app/localization/language';

/**
 * Cookie policy component.
 */
@Component({
  selector: 'artorius-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: [
    './cookie-policy.component.less'
  ]
})
export class CookiePolicyComponent implements OnInit {
  /**
   * Cookie policy message.
   */
  public cookiePolicyMessage!: string;

  /**
   * Cookie policy items.
   */
  public cookiePolicyItems!: Object[];

  ngOnInit(): void {
    this.cookiePolicyMessage = language.cookiePolicyMessage;
    this.cookiePolicyItems = configuration.cookiePolicy.items;
  }
}
