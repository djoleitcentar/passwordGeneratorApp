import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { generate } from 'generate-password-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  passwordStrength = 0;
  characterLength = 0;
  uppercase = false;
  lowercase = true;
  numbers = false;
  symbols = false;

  constructor(private clipboard: Clipboard) {}

  copyPassword() {
    this.clipboard.copy(this.password);
  }

  generatePassword() {
    this.passwordStrength = 0;

    if(this.uppercase === true) {
      this.passwordStrength++
    }
    if(this.lowercase === true) {
      this.passwordStrength++
    }
    if(this.numbers === true) {
      this.passwordStrength++
    }
    if(this.symbols === true) {
      this.passwordStrength++
    }
    if(this.characterLength < 12) {
      this.passwordStrength = 1
    }
    if(this.characterLength < 6) {
      this.passwordStrength = 0
    }

    console.log(this.passwordStrength);

    this.password = generate({
      length: this.characterLength,
      uppercase: this.uppercase,
      lowercase: this.lowercase,
      numbers: this.numbers,
      symbols: this.symbols,
    })
  }
}
