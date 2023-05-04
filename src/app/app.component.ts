import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeApp';

  ngOnInit() {
    window.addEventListener('scroll', function () {
      navbarScroll();
    });
    function navbarScroll() {
      var y = window.scrollY;
      if (y > 50) {
        var header = document.getElementsByClassName('page__title')[0];
        header.classList.add('small');

      } else if (y < 50) {
        var header = document.getElementsByClassName('page__title')[0];
        header.classList.remove('small');
      }
    }

  }
}
