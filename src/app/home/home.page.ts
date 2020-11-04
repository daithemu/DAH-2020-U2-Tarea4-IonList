import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];

  constructor() {

    this.places.push({
      image: 'assets/img/Adri.jpg',
      name: 'Adriana',
      about: '.SARANG.',
      message: 'Hey hola Dani'
    });

    this.places.push({
      image: 'assets/img/almejo.jpg',
      name: 'Almejo',
      about: 'Stay Hundry, Stay Foolish',
      message: 'Oki'
    });

    this.places.push({
      image: 'assets/img/Andres.jpg',
      name: 'Andrés',
      about: 'Come and see me for once',
      message: 'tenemos tarea?'
    });

    this.places.push({
      image: 'assets/img/alex.jpg',
      name: 'Alejandro',
      about: 'When I find love again, Ill be much better',
      message: 'jajaja no te llevaría Dani'
    });

    this.places.push({
      image: 'assets/img/edwin.jpg',
      name: 'Edwin',
      about: 'Lo que llamamos amor es solo una reacción química',
      message: 'estuve atareado todo el día'
    });

    this.places.push({
      image: 'assets/img/enrique.jpg',
      name: 'Enrique',
      about: 'Hey! estoy usando la app',
      message: 'ion-slides'
    });

    this.places.push({
      image: 'assets/img/high.jpg',
      name: 'High',
      about: 'Im back and forth, I think Im going crazy',
      message: 'para cuando es?'
    });

    this.places.push({
      image: 'assets/img/jona.jpg',
      name: 'Jonathan',
      about: 'No puedes depender de la motivación',
      message: 'ya hazte una limpia'
    });

    this.places.push({
      image: 'assets/img/martin.jpg',
      name: 'Martin',
      about: '...',
      message: 'nunca falla n.n '
    });

    this.places.push({
      image: 'assets/img/misael.jpg',
      name: 'Misael',
      about: 'Yo las canciones y tu la magia',
      message: 'Do or do not. There is no try...'
    });

    this.places.push({
      image: 'assets/img/oscar.jpg',
      name: 'Oscar',
      about: 'hey! estoy usando la app',
      message: 'You will remove these restraints and leave'
    });
  }

}
