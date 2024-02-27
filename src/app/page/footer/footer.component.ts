import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output()
  language: EventEmitter<string> = new EventEmitter();

  changeLanguage(newLanguage: string): void{
    this.language.emit(newLanguage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
