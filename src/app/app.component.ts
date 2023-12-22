import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counterValue: number = 0;
  fizzbuzzResultValue: string = "0";

  onClick() {
    this.counterValue++

    if (this.isModulo(3) && this.isModulo(5)) {
      this.fizzbuzzResultValue = "FizzBuzz"
    } else if (this.isModulo(3)) {
      this.fizzbuzzResultValue = "Fizz"
    } else if (this.isModulo(5)) {
      this.fizzbuzzResultValue = "Buzz"
    } else {
      this.fizzbuzzResultValue = this.counterValue.toString()
    }
  }

  private isModulo(number: number) {
    return this.counterValue % number == 0;
  }
}
