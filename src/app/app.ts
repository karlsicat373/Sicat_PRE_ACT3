import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Sicat, Erine Karl Gabriel D.';
  email = 'karlsicay373@gmail.com';
  phone = '09931231660';
  section = 'WD - 301';
  date = 'November 17, 2026';

  profile = 'I am a student of WD - 301 with an interest in web development and technology. I enjoy learning new programming languages, improving my technical skills, and creating useful and creative applications. I am motivated to keep learning and grow as a future web developer.';

  skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Responsive Web Design'];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'HTML and CSS', level: 'Intermediate' },
    { tool: 'JavaScript', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Choose a skill to discover my technical interests.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
