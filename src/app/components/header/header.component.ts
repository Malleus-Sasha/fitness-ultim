import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() logout = new EventEmitter<any>();
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  logoutUser(): void {
    this.logout.emit();
  }

}
