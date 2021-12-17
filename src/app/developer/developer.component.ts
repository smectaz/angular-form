import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  public developer = new Developer();

  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer();
    this.developer.lastName = 'Schwachtgen';
    this.developer.firstName = 'Nicolas';
    this.developer.age = 39;
    this.developer.sexe = 'Masculin';
    this.developer.bio = 'Formation de développeur chez DonkeySchool';
    this.developer.skills = [
      {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
        site: 'https://developer.mozilla.org/fr/docs/Web/HTML',
      },
      {
        name: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        site: 'https://developer.mozilla.org/fr/docs/Web/CSS',
      },
      {
        name: 'PHP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png',
        site: 'https://www.php.net/',
      },
      {
        name: 'JavaScript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
        site: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      },
      {
        name: 'Angular',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png',
        site: 'https://angular.io/',
      },
      {
        name: 'Symfony',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Symfony2.svg/320px-Symfony2.svg.png',
        site: 'https://symfony.com/',
      },
    ];
  }
}
