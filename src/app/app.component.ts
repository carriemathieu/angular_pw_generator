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
  onChangeLength(event: Event) {
    // workaround for stricter type checking in angular
    const target = event.target as HTMLInputElement;

    // converts string input (length) to int
    const parsedValue = parseInt(target.value);

    // checks if parsedValue is a number
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
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
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    
    let validChars = ''; 
    
    // if includeLetters is true- add to validChars string
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    // loop through length of password, randomly generate character from valid chars
    for (let i = 0; i < this.length; i++) {
      // gets a random number between 0 & password length, and rounds down
      const index = Math.floor(Math.random() * validChars.length);

      // assigns generatedPassword index of index in valid chars
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword
  }
}
