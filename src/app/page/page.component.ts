import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  pageLanguage: string = "en";

  changeLanguage(newLanguage: string): void{
    this.pageLanguage = newLanguage;
  }

}
