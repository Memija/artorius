import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';

@Component({
  selector: 'artorius-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.less'
  ]
})
export class ProfileComponent implements OnInit {
  /**
   * Call to action.
   */
  public callToAction!: string;

  /**
   * Design header.
   */
  public designHeader!: string;

  /**
   * Desing summary.
   */
  public designSummary!: string;

  /**
   * Development header.
   */
  public developmentHeader!: string;

  /**
   * Development summary.
   */
  public developmentSummary!: string;

  /**
   * Introduction.
   */
  public introduction!: string;

  /**
   * Maintenance header.
   */
  public maintenanceHeader!: string;

  /**
   * Maintenance summary.
   */
  public maintenanceSummary!: string;

  /**
   * Summary.
   */
  public summary!: string;

  ngOnInit() {
    this.callToAction = language.profile.callToAction;
    this.designHeader = language.profile.design.header;
    this.designSummary = language.profile.design.summary;
    this.developmentHeader = language.profile.development.header;
    this.developmentSummary = language.profile.development.summary;
    this.introduction = language.profile.introduction;
    this.maintenanceHeader = language.profile.maintenance.header;
    this.maintenanceSummary = language.profile.maintenance.summary;
    this.summary = language.profile.summary;
  }
}
