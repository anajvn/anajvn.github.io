import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  @Input()
  language: string = 'en';

  ngOnChanges(changes: SimpleChanges): void {
    this.language == "en" ? this.title = "Feel free to reach out to me!" : this.title = "Sinta-se à vontade para entrar em contato comigo!"; 
  }

  title = "Feel free to reach out to me!";

}
