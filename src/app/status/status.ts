import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private timer: any;
  userAgent!: string;
  languages!: string;
  cookieEnabled!: boolean;
  logicalProcessors!: number;
  maxTouchPoints!: number;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    this.userAgent = navigator.userAgent;
    this.languages = navigator.language;
    this.cookieEnabled = navigator.cookieEnabled;
    this.logicalProcessors = navigator.hardwareConcurrency;
    this.maxTouchPoints = navigator.maxTouchPoints;
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
