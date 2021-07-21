import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  // typescript needs type for variable
  onChangeLength(value: string) {
    // converts string input (length) to int
    const parsedValue = parseInt(value)

    // checks if parsedValue is a number
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onChangeUseLetters() {
    // this.includeLetters is equal to the opposite of whatever this.includeLetters currently is
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = "my password!";
  }
}
