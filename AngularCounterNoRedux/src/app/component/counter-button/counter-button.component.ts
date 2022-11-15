import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  @Output() yIncrement = new EventEmitter<void>();
  @Output() yDecrement = new EventEmitter<void>();
  @Output() yReset = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void { }


  increase() {
    this.yIncrement.emit();
  }

  decrease() {
    this.yDecrement.emit();
  }

  revert() {
    this.yReset.emit();
  }

}
