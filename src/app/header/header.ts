import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  fullName = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  date = input.required<string>();
  profile = input.required<string>();
  section = input.required<string>();
}
