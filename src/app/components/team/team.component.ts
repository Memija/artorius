import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/localization/language';
import { TeamMember } from 'src/app/models/TeamMember';

@Component({
  selector: 'artorius-team',
  templateUrl: './team.component.html',
  styleUrls: [
    './team.component.less'
  ]
})
export class TeamComponent implements OnInit {
  /**
   * Header.
   */
  public header!: string;

  /**
   * Team members.
   */
  public members!: TeamMember[];

  ngOnInit() {
    this.header = language.team.header;
    this.members = language.team.members;
  }
}
